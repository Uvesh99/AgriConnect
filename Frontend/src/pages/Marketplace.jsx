// import { useEffect, useState } from "react";
// import QRCodeSVG from "react-qr-code";
// import {
//   Card,
//   CardContent,
//   Typography,
//   CircularProgress,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   Grid,
//   Paper,
//   Box,
//   Divider,
//   Chip,
//   TextField,
//   Fade,
// } from "@mui/material";
// import {
//   fetchProducts,
//   fetchProductById,
// } from "../apis/Product_apis/Product.js"; // Adjust the import path for fetching products
// import {
//   ShoppingCart,
//   MapPin,
//   Calendar,
//   Package,
//   Leaf,
//   Info,
//   CreditCard,
//   Phone,
//   Star,
//   Shield,
//   Pencil,
//   Check,
//   Thermometer,
//   ArrowRight,
// } from "lucide-react";
// import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
// import { updateProduct, deleteProduct } from "../apis/Product_apis/Product.js";
// import { createOrder } from "../apis/Product_apis/Product.js";
// import { useNavigate } from "react-router-dom";
// import { submitReview, getAllReviews } from "../apis/Product_apis/Product.js";

// export default function Marketplace() {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPayment, setShowPayment] = useState(false);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [productIdToBuy, setProductIdToBuy] = useState(null);
//   const [unit, setUnit] = useState("kg");
//   const [newReview, setNewReview] = useState("");
//   const [newRating, setNewRating] = useState(1);
//   const [reviews, setReviews] = useState([]);

//   const navigate = useNavigate();

//   // Fetching all products
//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const productData = await fetchProducts();
//         console.log(productData);

//         setProducts(productData);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     };
//     loadProducts();
//   }, []);

//   // Open dialog to show product details
//   const handleCardClick = async (productId) => {
//     setIsLoading(true);
//     try {
//       const productData = await fetchProductById(productId);
//       const dummyProduct = {
//         id: productData._id,
//         name: productData.name,
//         farmer: productData.farmer.name,
//         location: productData.location,
//         price: productData.price,
//         unit: "KG",
//         certification: "Verified Natural",
//         image: productData.image,
//         description: productData.description,
//         harvested: "2024-03-18",
//         availableQuantity: productData.quantityAvailable,
//         farmingMethod: "Drip Irrigation",
//         benefits: ["Iron-rich", "Zero Pesticides", "Locally Grown"],
//         deliveryInfo: {
//           time: "1-2 days",
//           method: "Express Delivery",
//           freshness: "Same Day Harvest",
//         },
//         rating: 4.7,
//         reviews: 89,
//         certifications: ["Local Certified", "Zero Chemical"],
//         preservation: {
//           method: "Refrigeration",
//           duration: "3-5 days",
//           temperature: "0-5°C",
//           tips: [
//             "Wash and store in airtight container",
//             "Store in the crisper drawer",
//             "Do not store washed and unwashed together",
//           ],
//         },
//         nutritionalInfo: {
//           highlights: [
//             "Excellent source of Iron",
//             "High in Vitamin K",
//             "Rich in Vitamin A",
//             "Good source of folate",
//           ],
//           organic: productData.isOrganic,
//           verified: "Organic Certified",
//         },
//         usage: [
//           "Great for salads and side dishes",
//           "Perfect for smoothies and juice",
//           "Use in soups and stews",
//           "Can be added to omelets and frittatas",
//         ],
//       };
//       setSelectedProduct(dummyProduct);
//       setDialogOpen(true);
//     } catch (error) {
//       console.error("Failed to fetch product details:", error);
//     }
//     setIsLoading(false);
//   };

//   const handleDeleteProduct = async (e) => {
//     e.stopPropagation();
//     console.log("Deleting product:", selectedProduct);
//     if (selectedProduct) {
//       try {
//         await deleteProduct(selectedProduct._id);
//         setProducts((prevProducts) =>
//           prevProducts.filter((product) => product._id !== selectedProduct._id)
//         );
//         handleCloseDialog();
//         console.log("Product deleted");
//       } catch (error) {
//         console.error("Error deleting product:", error);
//       }
//     }
//   };

//   // Close dialog
//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//     setSelectedProduct(null);
//   };

//   const handlePayment = (productId) => {
//     console.log(productId);
//     setShowPayment(true);
//     setProductIdToBuy(productId);
//   };

//   const handlePaymentClose = () => {
//     setShowPayment(false);
//     setIsProcessing(false);
//     setQuantity(1);
//   };

//   const handleClose = () => {
//     setShowPayment(false);
//   };

//   const handleProcessPayment = async () => {
//     setIsProcessing(true);

//     try {
//       if (!productIdToBuy) {
//         throw new Error("No product selected for purchase.");
//       }
//       const result = await createOrder(productIdToBuy, quantity);

//       console.log("Order created successfully!", result);
//     } catch (error) {
//       console.error("Failed to process payment:", error);
//     } finally {
//       setIsProcessing(false);
//       handlePaymentClose();
//       handleClose();
//     }
//   };

//   // const handleNavigate = (productId) => {

//   //   navigate(`/bid/${productId}`);
//   // };

//   const handleNavigate = (productId) => {
//     if (window.confirm("Are you sure you want to place a bulk order?")) {
//       navigate(`/bid/${productId}`);
//     }
//   };

//   const handleSubmitReview = async (e) => {
//     e.preventDefault();
//     if (!selectedProduct) return;
//     try {
//       await submitReview(selectedProduct.id, newRating, newReview);
//       alert("Review submitted successfully!");
//       setNewReview("");
//       setNewRating(1);
//     } catch (error) {
//       console.error("Failed to submit review:", error);
//       alert("Failed to submit review. Please try again later.");
//     }
//   };

//   const fetchReviews = async (productId) => {
//     try {
//       const fetchedReviews = await getAllReviews(productId);
//       setReviews(fetchedReviews);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const userRole = localStorage.getItem("role");
//   const userId = localStorage.getItem("userId");

//   return (
//     <div
//       className="min-h-screen bg-[#F8F9FA] px-4 py-8 relative"
//       style={{ transform: "transLateY(3rem" }}
//     >
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold text-[#2C3E50] font-inter">
//           Natural Farming Marketplace
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <Card
//               key={product._id}
//               className="hover:shadow-lg transition-shadow cursor-pointer"
//               onClick={() => handleCardClick(product._id)}
//               sx={{ backgroundColor: "white", borderRadius: "12px" }}
//             >
//               <div className="aspect-w-16 aspect-h-9">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-48 object-cover"
//                 />
//               </div>
//               <CardContent className="p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <Typography
//                       variant="h5"
//                       sx={{ color: "#2C3E50", fontWeight: "600", mb: 1 }}
//                     >
//                       {product?.name}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: "#666", mb: 0.5 }}>
//                       by {product.farmer?.name || "Unknown Farmer"}
//                     </Typography>
//                     <div className="flex items-center gap-1">
//                       <MapPin size={16} className="text-[#3498DB]" />
//                       <Typography variant="body2" sx={{ color: "#666" }}>
//                         {product.location}
//                       </Typography>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <Typography
//                       variant="h4"
//                       sx={{ color: "green", fontWeight: "bold" }}
//                     >
//                       ₹{product.price}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: "#666" }}>
//                       per kg
//                     </Typography>
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "right",
//                         width: "auto",
//                         transform: "transLateY(2rem)",
//                       }}
//                     >
//                       <QRCodeSVG
//                         value="https://www.figma.com/design/wf4NzyEfubZmSuCGv23lt1/job?node-id=0-1&t=uRdsOdmQSxeWWcjw-0"
//                         size={48}
//                         className="opacity-80"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div
//                   className="flex items-center gap-2 mb-4"
//                   style={{ transform: "transLateY(-2rem)" }}
//                 >
//                   <Star className="h-5 w-5 text-green" />
//                   {/* <Typography variant="body2" sx={{ color: '#666' }}>
//                      {product.rating} ({product.reviews} reviews)
//                    </Typography> */}
//                 </div>
//                 <div
//                   className="flex items-center space-x-2"
//                   style={{ transform: "transLateY(-2rem)" }}
//                 >
//                   {/* <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 mb-2">
//                       {product.certification}
//                     </span> */}
//                 </div>

//                 <div className="grid grid-cols-2 gap-2">
//                   <Button
//                     variant="contained"
//                     startIcon={<ShoppingCart />}
//                     fullWidth
//                     sx={{
//                       backgroundColor: "green",
//                       "&:hover": { backgroundColor: "black", color: "white" },
//                     }}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handlePayment();
//                     }}
//                   >
//                     Buy Now
//                   </Button>

//                   <Button
//                     variant="contained"
//                     startIcon={<Phone />}
//                     fullWidth
//                     sx={{
//                       color: "white",
//                       "&:hover": { borderColor: "#2980B9" },
//                     }}
//                   >
//                     Contact
//                   </Button>

//                   {userRole != "consumer" && (
//                     <>
//                       <Button
//                         variant="contained"
//                         color="error"
//                         onClick={handleDeleteProduct}
//                       >
//                         Delete Product
//                       </Button>
//                     </>
//                   )}

//                   {userRole != "consumer" && (
//                     <>
//                       <Button
//                         variant="contained"
//                         startIcon={<Pencil />}
//                         fullWidth
//                         sx={{
//                           color: "white",
//                           "&:hover": { borderColor: "#2980B9" },
//                         }}
//                       >
//                         Edit
//                       </Button>
//                     </>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <Dialog
//           open={dialogOpen}
//           onClose={handleCloseDialog}
//           maxWidth="lg"
//           fullWidth
//           TransitionComponent={Fade}
//           transitionDuration={300}
//         >
//           {selectedProduct && (
//             <>
//               <DialogTitle
//                 sx={{
//                   borderBottom: "1px solid rgba(0,0,0,0.1)",
//                   padding: "32px",
//                   background: "linear-gradient(to right, #f8f9fa, #ffffff)",
//                 }}
//               >
//                 <Typography
//                   variant="h4"
//                   sx={{
//                     color: "#2C3E50",
//                     fontWeight: "700",
//                     mb: 2,
//                     fontFamily: "Inter, system-ui",
//                   }}
//                 >
//                   {selectedProduct.name}
//                 </Typography>
//                 <div className="flex items-center gap-6">
//                   <div className="flex items-center gap-2">
//                     <Star className="h-5 w-5 text-[#E67E22]" />
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         color: "#666",
//                         fontFamily: "Inter, system-ui",
//                       }}
//                     >
//                       {selectedProduct.rating} ({selectedProduct.reviews}{" "}
//                       reviews)
//                     </Typography>
//                   </div>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       color: "#666",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 1,
//                       fontFamily: "Inter, system-ui",
//                     }}
//                   >
//                     <MapPin className="h-5 w-5 text-[#3498DB]" />
//                     {selectedProduct.farmer} • {selectedProduct.location}
//                   </Typography>
//                 </div>
//               </DialogTitle>
//               <DialogContent sx={{ padding: "32px" }}>
//                 <Grid container spacing={6}>
//                   <Grid item xs={12} md={6}>
//                     <Paper
//                       elevation={3}
//                       sx={{
//                         borderRadius: "16px",
//                         overflow: "hidden",
//                         transition: "transform 0.3s ease",
//                         "&:hover": {
//                           transform: "scale(1.02)",
//                         },
//                       }}
//                     >
//                       <img
//                         src={selectedProduct.image}
//                         alt={selectedProduct.name}
//                         className="w-full h-[400px] object-cover"
//                       />
//                     </Paper>
//                     <Box sx={{ mt: 4 }}>
//                       <Grid container spacing={2}>
//                         {selectedProduct.certifications.map((cert, index) => (
//                           <Grid item xs={6} key={index}>
//                             <Paper
//                               sx={{
//                                 p: 2,
//                                 bgcolor: "rgba(52, 152, 219, 0.1)",
//                                 borderRadius: "12px",
//                                 height: "100%",
//                               }}
//                             >
//                               <div className="flex items-center gap-2">
//                                 <Shield className="h-5 w-5 text-[#3498DB]" />
//                                 <Typography
//                                   sx={{
//                                     color: "#2C3E50",
//                                     fontWeight: "500",
//                                     fontSize: "0.9rem",
//                                   }}
//                                 >
//                                   {cert}
//                                 </Typography>
//                               </div>
//                             </Paper>
//                           </Grid>
//                         ))}
//                         <Box>
//                           <div className="flex flex-wrap gap-2 mx-4 my-4">
//                             {selectedProduct.benefits.map((benefit, index) => (
//                               <Chip
//                                 key={index}
//                                 icon={<Check className="h-4 w-4" />}
//                                 label={benefit}
//                                 sx={{
//                                   backgroundColor: "#3498DB",
//                                   color: "white",
//                                   fontWeight: "500",
//                                   "& .MuiChip-icon": {
//                                     color: "white",
//                                   },
//                                 }}
//                               />
//                             ))}
//                           </div>
//                         </Box>
//                         <Box className="flex gap-4">
//                           <Paper
//                             sx={{
//                               p: 3,
//                               borderRadius: "12px",
//                               mb: 4,
//                               bgcolor: "#f8f9fa",
//                               width: "25rem",
//                             }}
//                           >
//                             <Typography
//                               variant="h6"
//                               sx={{
//                                 color: "#2C3E50",
//                                 mb: 2,
//                                 fontWeight: "600",
//                               }}
//                             >
//                               Nutritional Information
//                             </Typography>
//                             <div className="grid gap-4">
//                               {selectedProduct.nutritionalInfo.highlights.map(
//                                 (highlight, index) => (
//                                   <div
//                                     key={index}
//                                     className="flex items-center gap-3"
//                                   >
//                                     <Star className="h-5 w-5 text-[#E67E22]" />
//                                     <Typography>{highlight}</Typography>
//                                   </div>
//                                 )
//                               )}
//                               <Divider />
//                               <div className="flex items-center gap-3">
//                                 <Shield className="h-5 w-5 text-[#2ECC71]" />
//                                 <Typography>
//                                   {selectedProduct.nutritionalInfo.organic
//                                     ? "Organic Product"
//                                     : "Conventional Product"}
//                                 </Typography>
//                               </div>
//                               <div className="flex items-center gap-3">
//                                 <Check className="h-5 w-5 text-[#2ECC71]" />
//                                 <Typography>
//                                   {selectedProduct.nutritionalInfo.verified}
//                                 </Typography>
//                               </div>
//                             </div>
//                           </Paper>
//                           <Paper
//                             sx={{
//                               p: 3,
//                               borderRadius: "12px",
//                               mb: 4,
//                               bgcolor: "#f8f9fa",
//                             }}
//                           >
//                             <Typography
//                               variant="h6"
//                               sx={{
//                                 color: "#2C3E50",
//                                 mb: 2,
//                                 fontWeight: "600",
//                               }}
//                             >
//                               Usage Suggestions
//                             </Typography>
//                             <div className="grid gap-3">
//                               {selectedProduct.usage.map((use, index) => (
//                                 <div
//                                   key={index}
//                                   className="flex items-start gap-2"
//                                 >
//                                   <ArrowRight className="h-5 w-5 mt-1 text-[#3498DB]" />
//                                   <Typography>{use}</Typography>
//                                 </div>
//                               ))}
//                             </div>
//                           </Paper>
//                         </Box>
//                       </Grid>
//                     </Box>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <Box sx={{ mb: 4 }}>
//                       <Typography
//                         variant="h3"
//                         sx={{
//                           color: "green",
//                           fontWeight: "700",
//                           mb: 3,
//                           fontFamily: "Inter, system-ui",
//                         }}
//                       >
//                         ₹{selectedProduct.price}
//                         <Typography
//                           component="span"
//                           sx={{
//                             fontSize: "1.5rem",
//                             color: "green",
//                             ml: 1,
//                           }}
//                         >
//                           per {selectedProduct.unit}
//                         </Typography>
//                       </Typography>
//                       <Typography
//                         sx={{
//                           color: "#333",
//                           fontSize: "1.1rem",
//                           lineHeight: 1.8,
//                           mb: 4,
//                         }}
//                       >
//                         {selectedProduct.description}
//                       </Typography>
//                     </Box>

//                     <Paper
//                       sx={{
//                         p: 3,
//                         borderRadius: "12px",
//                         mb: 4,
//                         bgcolor: "#f8f9fa",
//                       }}
//                     >
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           color: "#2C3E50",
//                           mb: 2,
//                           fontWeight: "600",
//                         }}
//                       >
//                         Product Details
//                       </Typography>
//                       <div className="grid gap-4">
//                         <div className="flex items-center gap-3">
//                           <Calendar className="h-5 w-5 text-[#3498DB]" />
//                           <Typography>
//                             Harvested:{" "}
//                             {new Date(
//                               selectedProduct.harvested
//                             ).toLocaleDateString()}
//                           </Typography>
//                         </div>
//                         <Divider />
//                         <div className="flex items-center gap-3">
//                           <Package className="h-5 w-5 text-[#3498DB]" />
//                           <Typography>
//                             Available: {selectedProduct.availableQuantity}{" "}
//                             {selectedProduct.unit}
//                           </Typography>
//                         </div>
//                         <Divider />
//                         <div className="flex items-center gap-3">
//                           <Leaf className="h-5 w-5 text-[#3498DB]" />
//                           <Typography>
//                             Method: {selectedProduct.farmingMethod}
//                           </Typography>
//                         </div>
//                       </div>
//                     </Paper>

//                     <Paper
//                       sx={{
//                         p: 3,
//                         borderRadius: "12px",
//                         mb: 4,
//                         bgcolor: "#f8f9fa",
//                       }}
//                     >
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           color: "#2C3E50",
//                           mb: 2,
//                           fontWeight: "600",
//                         }}
//                       >
//                         Preservation Information
//                       </Typography>
//                       <div className="grid gap-4">
//                         <div className="flex items-center gap-3">
//                           <Shield className="h-5 w-5 text-[#3498DB]" />
//                           <Typography>
//                             Method: {selectedProduct.preservation.method}
//                           </Typography>
//                         </div>
//                         <Divider />
//                         <div className="flex items-center gap-3">
//                           <Calendar className="h-5 w-5 text-[#3498DB]" />
//                           <Typography>
//                             Duration: {selectedProduct.preservation.duration}
//                           </Typography>
//                         </div>
//                         <Divider />
//                         <div className="flex items-center gap-3">
//                           <Thermometer className="h-5 w-5 text-[#3498DB]" />
//                           <Typography>
//                             Ideal Temperature:{" "}
//                             {selectedProduct.preservation.temperature}
//                           </Typography>
//                         </div>
//                       </div>
//                       <Box sx={{ mt: 3 }}>
//                         <Typography
//                           variant="subtitle2"
//                           sx={{ color: "#2C3E50", mb: 1 }}
//                         >
//                           Storage Tips:
//                         </Typography>
//                         <div className="grid gap-2">
//                           {selectedProduct.preservation.tips.map(
//                             (tip, index) => (
//                               <div
//                                 key={index}
//                                 className="flex items-start gap-2"
//                               >
//                                 <Check className="h-4 w-4 mt-1 text-[#2ECC71]" />
//                                 <Typography variant="body2">{tip}</Typography>
//                               </div>
//                             )
//                           )}
//                         </div>
//                       </Box>
//                     </Paper>
//                   </Grid>
//                 </Grid>
//                 <div open={dialogOpen} onClose={handleCloseDialog}>
//                   {selectedProduct && (
//                     <>
//                       {/* Existing dialog content */}

//                       <DialogContent>
//                         {/* Existing product details */}

//                         {/* Review Section */}
//                         <div style={{ marginTop: "20px" }}>
//                           <Typography variant="h6">Add a Review</Typography>
//                           <TextField
//                             fullWidth
//                             label="Your Review"
//                             multiline
//                             rows={4}
//                             value={newReview}
//                             onChange={(e) => setNewReview(e.target.value)}
//                             variant="outlined"
//                           />
//                           <TextField
//                             fullWidth
//                             label="Your Rating"
//                             type="number"
//                             inputProps={{ min: 1, max: 5 }} // Limit range to 1-5
//                             value={newRating}
//                             onChange={(e) => setNewRating(e.target.value)}
//                             variant="outlined"
//                             style={{ marginTop: "10px" }}
//                           />
//                           <Button
//                             onClick={handleSubmitReview}
//                             variant="contained"
//                             color="primary"
//                             style={{ marginTop: "10px" }}
//                           >
//                             Submit Review
//                           </Button>
//                         </div>
//                         <div>
//                           <h2 className="font-semibold text-lg mb-2">
//                             Reviews
//                           </h2>
//                           {reviews.length > 0 ? (
//                             <ul>
//                               {reviews.map((review) => (
//                                 <li key={review.id} className="border-b py-2">
//                                   <div>
//                                     <strong>{review.userName}:</strong>
//                                     <span className="ml-2">{review.text}</span>
//                                   </div>
//                                   <div>
//                                     <span>Rating: {review.rating}</span>
//                                   </div>
//                                 </li>
//                               ))}
//                             </ul>
//                           ) : (
//                             <p>No reviews available for this product.</p>
//                           )}
//                         </div>
//                       </DialogContent>

//                       <DialogActions>
//                         <Button onClick={handleCloseDialog}>Close</Button>
//                       </DialogActions>
//                     </>
//                   )}
//                 </div>
//               </DialogContent>

//               <DialogActions
//                 sx={{
//                   padding: "24px",
//                   borderTop: "1px solid rgba(0,0,0,0.1)",
//                   bgcolor: "#f8f9fa",
//                 }}
//               >
//                 <Button
//                   variant="contained"
//                   startIcon={<ShoppingCart />}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handlePayment(selectedProduct.id);
//                   }}
//                   sx={{
//                     bgcolor: "green",
//                     color: "white",
//                     "&:hover": {
//                       bgcolor: "#D35400",
//                     },
//                   }}
//                 >
//                   Buy Now
//                 </Button>

//                 {/* <Button
//                      variant="contained"
//                      startIcon={<ShoppingCart />}
//                      sx={{
//                        backgroundColor: 'green',
//                        '&:hover': { backgroundColor: 'black', color: 'white' }
//                      }}

//                    >
//                      Order in bulk
//                 </Button> */}

//                 <Button
//                   variant="contained"
//                   startIcon={<ShoppingCart />}
//                   sx={{
//                     backgroundColor: "green",
//                     "&:hover": { backgroundColor: "black", color: "white" },
//                   }}
//                   onClick={() => handleNavigate(selectedProduct?.id)}
//                   disabled={!selectedProduct} // Prevents errors if selectedProduct is undefined
//                 >
//                   Order in bulk
//                 </Button>

//                 <Button
//                   variant="contained"
//                   startIcon={<Phone />}
//                   sx={{
//                     color: "white",
//                     ml: 1,
//                     "&:hover": {
//                       borderColor: "black",
//                       bgcolor: "black",
//                       color: "white",
//                     },
//                   }}
//                 >
//                   Contact Farmer
//                 </Button>
//                 <Button
//                   onClick={handleCloseDialog}
//                   variant="contained"
//                   startIcon={<Info />}
//                   sx={{
//                     color: "white",
//                     mr: 1,
//                     "&:hover": {
//                       borderColor: "black",
//                       bgcolor: "black",
//                       color: "white",
//                     },
//                   }}
//                 >
//                   Close
//                 </Button>
//               </DialogActions>
//             </>
//           )}
//         </Dialog>

//         <Dialog
//           open={showPayment}
//           onClose={handlePaymentClose}
//           maxWidth="sm"
//           fullWidth
//           TransitionComponent={Fade}
//           transitionDuration={300}
//         >
//           <DialogTitle
//             sx={{
//               borderBottom: "1px solid rgba(0,0,0,0.1)",
//               padding: "32px",
//               background: "linear-gradient(to right, #f8f9fa, #ffffff)",
//             }}
//           >
//             <Typography
//               variant="h5"
//               sx={{
//                 color: "#2C3E50",
//                 fontWeight: "600",
//                 fontFamily: "Inter, system-ui",
//               }}
//             >
//               Payment Details
//             </Typography>
//           </DialogTitle>
//           <DialogContent sx={{ padding: "32px" }}>
//             <Box sx={{ mt: 1 }}>
//               {selectedProduct && (
//                 <Paper
//                   sx={{
//                     p: 3,
//                     mb: 4,
//                     borderRadius: "12px",
//                     bgcolor: "#f8f9fa",
//                   }}
//                 >
//                   <Typography variant="subtitle1" sx={{ mb: 2, color: "#666" }}>
//                     Order Summary
//                   </Typography>
//                   <div className="flex justify-between items-center mb-2">
//                     <Typography variant="body1">
//                       {selectedProduct.name}
//                     </Typography>
//                     <Typography variant="body1">
//                       ₹{selectedProduct.price}/{selectedProduct.unit}
//                     </Typography>
//                   </div>
//                   <Divider sx={{ my: 2 }} />
//                   <div className="flex justify-between items-center">
//                     <Typography variant="h6">Total Amount</Typography>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         color: "#E67E22",
//                         fontWeight: "600",
//                       }}
//                     >
//                       ₹{parseInt(selectedProduct.price) * quantity}
//                     </Typography>
//                   </div>
//                 </Paper>
//               )}

//               <FormControl
//                 fullWidth
//                 variant="outlined"
//                 sx={{ marginBottom: 2 }}
//               >
//                 <InputLabel id="unit-select-label">Select Unit</InputLabel>
//                 <Select
//                   labelId="unit-select-label"
//                   id="unit-select"
//                   value={unit}
//                   onChange={(e) => setUnit(e.target.value)} // Add state for unit selection
//                   label="Select Unit"
//                 >
//                   <MenuItem value="kg">Kilograms</MenuItem>
//                   <MenuItem value="tons">Tons</MenuItem>
//                 </Select>
//               </FormControl>

//               {/* Conditionally render quantity input based on the selected unit */}
//               <TextField
//                 label={`Quantity (${unit === "kg" ? "kg" : "tons"})`}
//                 type="number"
//                 fullWidth
//                 value={quantity}
//                 onChange={(e) =>
//                   setQuantity(Math.max(1, parseInt(e.target.value) || 1))
//                 }
//                 InputProps={{
//                   inputProps: { min: 1 },
//                   sx: { borderRadius: "8px" },
//                 }}
//               />

//               <TextField
//                 label="Card Number"
//                 fullWidth
//                 placeholder="1234 5678 9012 3456"
//                 InputProps={{
//                   sx: { borderRadius: "8px" },
//                 }}
//               />
//               <div className="grid grid-cols-2 gap-4">
//                 <TextField
//                   label="Expiry Date"
//                   placeholder="MM/YY"
//                   InputProps={{
//                     sx: { borderRadius: "8px" },
//                   }}
//                 />
//                 <TextField
//                   label="CVV"
//                   type="password"
//                   placeholder="123"
//                   InputProps={{
//                     sx: { borderRadius: "8px" },
//                   }}
//                 />
//               </div>
//             </Box>
//           </DialogContent>
//           <DialogActions
//             sx={{
//               padding: "24px",
//               borderTop: "1px solid rgba(0,0,0,0.1)",
//               bgcolor: "#f8f9fa",
//             }}
//           >
//             <Button
//               onClick={handlePaymentClose}
//               variant="outlined"
//               sx={{
//                 borderColor: "#E67E22",
//                 color: "#E67E22",
//                 mr: 1,
//                 "&:hover": {
//                   borderColor: "#D35400",
//                   bgcolor: "rgba(230, 126, 34, 0.1)",
//                 },
//               }}
//             >
//               Cancel
//             </Button>
//             <Button
//               onClick={handleProcessPayment}
//               variant="contained"
//               startIcon={
//                 isProcessing ? (
//                   <CircularProgress size={20} color="inherit" />
//                 ) : (
//                   <CreditCard />
//                 )
//               }
//               disabled={isProcessing}
//               sx={{
//                 bgcolor: "#3498DB",
//                 "&:hover": {
//                   bgcolor: "#2980B9",
//                 },
//               }}
//             >
//               {isProcessing ? "Processing..." : "Pay Now"}
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import QRCodeSVG from "react-qr-code";
import {
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Paper,
  Box,
  Divider,
  Chip,
  TextField,
  Fade,
} from "@mui/material";
import {
  fetchProducts,
  fetchProductById,
  updateProduct,
  deleteProduct,
  createOrder,
  submitReview,
  getAllReviews,
} from "../apis/Product_apis/Product.js";
import {
  ShoppingCart,
  MapPin,
  Calendar,
  Package,
  Leaf,
  Info,
  Phone,
  Star,
  Shield,
  Pencil,
  Check,
  Thermometer,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import PaymentSection from "../components/PaymentSection.jsx";
import getStripe from  "../utils/stripe.js";

export default function Marketplace() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("kg");
  const [productIdToBuy, setProductIdToBuy] = useState(null);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(1);
  const [reviews, setReviews] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productData = await fetchProducts();
        setProducts(productData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    loadProducts();
  }, []);

  const handleCardClick = async (productId) => {
    try {
      const productData = await fetchProductById(productId);
      const dummyProduct = {
        id: productData._id,
        name: productData.name,
        farmer: productData.farmer.name,
        location: productData.location,
        price: productData.price,
        unit: "KG",
        certification: "Verified Natural",
        image: productData.image,
        description: productData.description,
        harvested: "2024-03-18",
        availableQuantity: productData.quantityAvailable,
        farmingMethod: "Drip Irrigation",
        benefits: ["Iron-rich", "Zero Pesticides", "Locally Grown"],
        deliveryInfo: {
          time: "1-2 days",
          method: "Express Delivery",
          freshness: "Same Day Harvest",
        },
        rating: 4.7,
        reviews: 89,
        certifications: ["Local Certified", "Zero Chemical"],
        preservation: {
          method: "Refrigeration",
          duration: "3-5 days",
          temperature: "0-5°C",
          tips: [
            "Wash and store in airtight container",
            "Store in the crisper drawer",
            "Do not store washed and unwashed together",
          ],
        },
        nutritionalInfo: {
          highlights: [
            "Excellent source of Iron",
            "High in Vitamin K",
            "Rich in Vitamin A",
            "Good source of folate",
          ],
          organic: productData.isOrganic,
          verified: "Organic Certified",
        },
        usage: [
          "Great for salads and side dishes",
          "Perfect for smoothies and juice",
          "Use in soups and stews",
          "Can be added to omelets and frittatas",
        ],
      };
      setSelectedProduct(dummyProduct);
      setDialogOpen(true);
      fetchReviews(dummyProduct.id);
    } catch (error) {
      console.error("Failed to fetch product details:", error);
    }
  };

  const handleDeleteProduct = async (e) => {
    e.stopPropagation();
    if (selectedProduct) {
      try {
        await deleteProduct(selectedProduct.id);
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== selectedProduct.id)
        );
        handleCloseDialog();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedProduct(null);
  };

const handlePayment = (productId) => {
  const product = products.find(p => p._id === productId);
  setSelectedProduct(product); // <-- Set the product for payment
  setShowPayment(true);
  setProductIdToBuy(productId);
};

  const handlePaymentClose = () => {
    setShowPayment(false);
    setIsProcessing(false);
    setQuantity(1);
  };

  
  const handleStripeCheckout = async () => {
    console.log("Handling Stripe Checkout for product:", selectedProduct);
  if (!selectedProduct || quantity < 1) return;
  setIsProcessing(true);

  try {
    // Call your backend to create a Stripe Checkout session
    const response = await fetch("http://localhost:5000/api/payment/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cartItems: [
          {
            name: selectedProduct.name,
            description: selectedProduct.description,
            price: selectedProduct.price,
            quantity,
          },
        ],
      }),
    });

    const data = await response.json();

    if (data.url) {
      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } else {
      alert("Stripe session failed.");
    }
  } catch (error) {
    console.error("Stripe checkout error:", error);
    alert("Checkout failed.");
  } finally {
    setIsProcessing(false);
  }
};


  const handleNavigate = (productId) => {
    if (window.confirm("Are you sure you want to place a bulk order?")) {
      navigate(`/bid/${productId}`);
    }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!selectedProduct) return;
    try {
      await submitReview(selectedProduct.id, newRating, newReview);
      alert("Review submitted successfully!");
      setNewReview("");
      setNewRating(1);
      fetchReviews(selectedProduct.id);
    } catch (error) {
      alert("Failed to submit review. Please try again later.");
    }
  };

  const fetchReviews = async (productId) => {
    try {
      const fetchedReviews = await getAllReviews(productId);
      setReviews(fetchedReviews);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedProduct) fetchReviews(selectedProduct.id);
  }, [selectedProduct]);

  const userRole = localStorage.getItem("role");

  return (
    <div className="min-h-screen bg-[#F8F9FA] px-4 py-8 relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#2C3E50] font-inter">
          Natural Farming Marketplace
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product._id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleCardClick(product._id)}
              sx={{ backgroundColor: "white", borderRadius: "12px" }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <Typography
                      variant="h5"
                      sx={{ color: "#2C3E50", fontWeight: "600", mb: 1 }}
                    >
                      {product?.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666", mb: 0.5 }}>
                      by {product.farmer?.name || "Unknown Farmer"}
                    </Typography>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} className="text-[#3498DB]" />
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        {product.location}
                      </Typography>
                    </div>
                  </div>
                  <div className="text-right">
                    <Typography
                      variant="h4"
                      sx={{ color: "green", fontWeight: "bold" }}
                    >
                      ₹{product.price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666" }}>
                      per kg
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "right",
                        width: "auto",
                      }}
                    >
                      <QRCodeSVG
                        value={product._id}
                        size={48}
                        className="opacity-80"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="contained"
                    startIcon={<ShoppingCart />}
                    fullWidth
                    sx={{
                      backgroundColor: "green",
                      "&:hover": { backgroundColor: "black", color: "white" },
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePayment(product._id);
                    }}
                  >
                    Buy Now
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<Phone />}
                    fullWidth
                    sx={{
                      color: "white",
                      "&:hover": { borderColor: "#2980B9" },
                    }}
                  >
                    Contact
                  </Button>
                  {userRole !== "consumer" && (
                    <>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={handleDeleteProduct}
                      >
                        Delete Product
                      </Button>
                      <Button
                        variant="contained"
                        startIcon={<Pencil />}
                        fullWidth
                        sx={{
                          color: "white",
                          "&:hover": { borderColor: "#2980B9" },
                        }}
                      >
                        Edit
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Product Details Dialog */}
        <Dialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          maxWidth="lg"
          fullWidth
          TransitionComponent={Fade}
          transitionDuration={300}
        >
          {selectedProduct && (
            <>
              <DialogTitle>
                <Typography variant="h4">{selectedProduct.name}</Typography>
              </DialogTitle>
              <DialogContent>
                {/* ...Product details and review section... */}
                {/* For brevity, keep your existing details code here */}
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  startIcon={<ShoppingCart />}
                  onClick={() => handlePayment(selectedProduct.id)}
                >
                  Buy Now
                </Button>
                <Button
                  variant="contained"
                  startIcon={<ShoppingCart />}
                  onClick={() => handleNavigate(selectedProduct.id)}
                >
                  Order in bulk
                </Button>
                <Button variant="contained" startIcon={<Phone />}>
                  Contact Farmer
                </Button>
                <Button
                  onClick={handleCloseDialog}
                  variant="contained"
                  startIcon={<Info />}
                >
                  Close
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>

        {/* Modular Payment Section */}
        <PaymentSection
          open={showPayment}
          onClose={handlePaymentClose}
          product={selectedProduct}
          quantity={quantity}
          setQuantity={setQuantity}
          unit={unit}
          setUnit={setUnit}
          isProcessing={isProcessing}
          setIsProcessing={setIsProcessing}
          handleStripeCheckout={handleStripeCheckout}
        />
      </div>
    </div>
  );
}
