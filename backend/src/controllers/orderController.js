import Order from "../models/Order.js";
import Product from "../models/Product.js";
import User from "../models/User.js";

// @desc    Place a new order (Consumer Only)
// @route   POST /api/orders
// @access  Private (Consumer)
export const placeOrder = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const consumerId = req.user.id; // Extracted from JWT

    // Check if the user is a consumer
    const consumer = await User.findById(consumerId);
    if (!consumer || consumer.role !== "consumer") {
      return res.status(403).json({ message: "Only consumers can place orders." });
    }

    // Check if product exists
    const product = await Product.findById(productId).populate("farmer");
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }
    console.log(product)
    // Check if quantity is available
    if (quantity > product.quantityAvailable) {
      return res.status(400).json({ message: "Insufficient stock available." });
    }

    // Calculate total price
    const totalPrice = quantity * product.price;

    // Create the order
    const order = new Order({
      consumer: consumerId,
      farmer: product.farmer._id,
      product: productId,
      quantity,
      totalPrice,
    });

    // Deduct stock from product
    product.quantityAvailable -= quantity;

    await order.save();
    await product.save();

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Error placing order", error: error.message });
  }
};

// @desc    Get all orders for a consumer
// @route   GET /api/orders
// @access  Private (Consumer)
export const getConsumerOrders = async (req, res) => {
  try {
    const consumerId = req.user.id;
    const orders = await Order.find({ consumer: consumerId })
      .populate("product", "name price")
      .populate("farmer", "name location");

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error: error.message });
  }
};

// @desc    Get all orders for a farmer
// @route   GET /api/orders/farmer
// @access  Private (Farmer)
export const getFarmerOrders = async (req, res) => {
  try {
    const farmerId = req.user.id;
    console.log(farmerId)
    const orders = await Order.find({ farmer: farmerId })
      .populate("product", "name price")
      .populate("consumer", "name location");

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error: error.message });
  }
};

// @desc    Update order status (Farmer Only)
// @route   PUT /api/orders/:id
// @access  Private (Farmer)
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const farmerId = req.user.id;
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({ message: "Order not found" });

    // Only the assigned farmer can update the order
    if (order.farmer.toString() !== farmerId) {
      return res.status(403).json({ message: "You can only update your own orders" });
    }

    order.status = status;
    await order.save();
    res.status(200).json({ message: "Order status updated successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Error updating order status", error: error.message });
  }
};

// @desc    Cancel order (Consumer Only)
// @route   DELETE /api/orders/:id
// @access  Private (Consumer)
export const cancelOrder = async (req, res) => {
  try {
    const consumerId = req.user.id;
    const order = await Order.findById(req.params.id).populate("product");

    if (!order) return res.status(404).json({ message: "Order not found" });

    // Only the consumer who placed the order can cancel it
    if (order.consumer.toString() !== consumerId) {
      return res.status(403).json({ message: "You can only cancel your own orders" });
    }

    // Restore product quantity
    const product = await Product.findById(order.product._id);
    product.quantityAvailable += order.quantity;

    await product.save();
    await order.deleteOne();
    
    res.status(200).json({ message: "Order cancelled successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error cancelling order", error: error.message });
  }
};
