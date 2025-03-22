import Product from "../models/Product.js";
import User from "../models/User.js";

// @desc    Create a new product (Farmer Only)
// @route   POST /api/products
// @access  Private (Farmer)
export const createProduct = async (req, res) => {
  try {
    const { name, description, category, price, quantityAvailable, location, isOrganic, image } = req.body;
    const farmerId = req.user._id; // Extracted from JWT

    // Check if user is a farmer
    const farmer = await User.findById(farmerId);
    if (!farmer || farmer.role !== "farmer") {
      return res.status(403).json({ message: "Access denied. Only farmers can add products." });
    }

    const newProduct = new Product({
      farmer: farmerId,
      name,
      description,
      category,
      price,
      quantityAvailable,
      location,
      isOrganic,
      image,
    });

    await newProduct.save();
    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error: error.message });
  }
};

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("farmer", "name location");
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("farmer", "name location");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error: error.message });
  }
};

// @desc    Update product (Farmer Only)
// @route   PUT /api/products/:id
// @access  Private (Farmer)
export const updateProduct = async (req, res) => {
  try {
    const { name, description, category, price, quantityAvailable, location, isOrganic, image } = req.body;
    const farmerId = req.user.id; // Extracted from JWT

    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Check if the product belongs to the logged-in farmer
    if (product.farmer.toString() !== farmerId) {
      return res.status(403).json({ message: "You can only update your own products" });
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.category = category || product.category;
    product.price = price || product.price;
    product.quantityAvailable = quantityAvailable || product.quantityAvailable;
    product.location = location || product.location;
    product.isOrganic = isOrganic ?? product.isOrganic;
    product.image = image || product.image;

    await product.save();
    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
};

// @desc    Delete product (Farmer Only)
// @route   DELETE /api/products/:id
// @access  Private (Farmer)
export const deleteProduct = async (req, res) => {
  try {
    const farmerId = req.user.id; // Extracted from JWT
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Check if the product belongs to the logged-in farmer
    if (product.farmer.toString() !== farmerId) {
      return res.status(403).json({ message: "You can only delete your own products" });
    }

    await product.deleteOne();
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
};
