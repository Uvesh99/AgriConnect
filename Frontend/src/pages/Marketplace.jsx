// import { useState } from 'react';
// import QRCodeSVG from 'react-qr-code';
// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Grid,
//   Box,
//   Chip,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   CircularProgress,
//   Fade,
//   Paper,
//   Divider
// } from '@mui/material';
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
//   Truck,
//   Check,
//   Thermometer,
//   ArrowRight
// } from 'lucide-react';


// const products = [
//   {
//     id: 1,
//     name: 'Organic Tomatoes',
//     farmer: 'Ramesh Kumar',
//     location: 'Karnataka',
//     price: '40',
//     unit: 'kg',
//     certification: 'Verified Natural',
//     image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=300',
//     description: 'Fresh, pesticide-free tomatoes grown using natural farming methods. Rich in vitamins and antioxidants.',
//     harvested: '2024-03-15',
//     availableQuantity: 100,
//     farmingMethod: 'Natural Composting',
//     season: 'Year-round',
//     benefits: ['High in Lycopene', 'No Chemical Pesticides', 'Naturally Ripened'],
//     deliveryInfo: {
//       time: '2-3 days',
//       method: 'Cold Storage Transport',
//       freshness: 'Guaranteed Fresh on Delivery'
//     },
//     rating: 4.8,
//     reviews: 128,
//     certifications: ['Organic Certified', 'Pesticide Free'],
//     preservation: {
//       method: 'Natural Cooling',
//       duration: '7-10 days',
//       temperature: '10-15°C',
//       tips: [
//         'Store in a cool, dry place',
//         'Keep away from direct sunlight',
//         'Don\'t refrigerate unless cut',
//         'Remove from plastic bags'
//       ]
//     },
//     nutritionalInfo: {
//       highlights: [
//         'Rich in Vitamin C',
//         'High Antioxidant Content',
//         'Good source of Potassium',
//         'Low Calorie'
//       ],
//       organic: true,
//       verified: 'NPOP Certified'
//     },
//     usage: [
//       'Ideal for salads and fresh consumption',
//       'Perfect for cooking and sauce making',
//       'Can be used in juice preparation',
//       'Suitable for canning and preserving'
//     ]
//   },
//   {
//     id: 2,
//     name: 'Natural Rice',
//     farmer: 'Lakshmi Devi',
//     location: 'Tamil Nadu',
//     price: '60',
//     unit: 'kg',
//     certification: 'Verified Natural',
//     image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=300',
//     description: 'Traditional variety rice grown without chemicals. High in nutrients and natural aroma.',
//     harvested: '2024-02-20',
//     availableQuantity: 500,
//     farmingMethod: 'Traditional Irrigation',
//     season: 'monsoon',
//     benefits: ['High Fiber Content', 'Naturally Processed', 'Ancient Variety'],
//     deliveryInfo: {
//       time: '3-4 days',
//       method: 'Standard Transport',
//       freshness: 'Long Shelf Life'
//     },
//     rating: 4.9,
//     reviews: 256,
//     certifications: ['Heritage Variety', 'Chemical Free'],
//     preservation: {
//       method: 'Cool, Dry Place',
//       duration: '6 Months',
//       temperature: 'Room Temperature',
//       tips: [
//         'Store in an airtight container',
//         'Keep away from moisture and strong odors',
//         'Check for insects regularly'
//       ]
//     },
//     nutritionalInfo: {
//       highlights: [
//         'Good source of Carbohydrates',
//         'Contains essential minerals',
//         'Gluten-Free',
//         'Rich in fiber'
//       ],
//       organic: false,
//       verified: 'No specific verification'
//     },
//     usage: [
//       'Versatile for various dishes',
//       'Suitable for rice porridges',
//       'Use for making rice noodles',
//       'Perfect as a side dish'
//     ]
//   },
//   {
//     id: 3,
//     name: 'Fresh Spinach',
//     farmer: 'Anand Patil',
//     location: 'Maharashtra',
//     price: '30',
//     unit: 'bundle',
//     certification: 'Verified Natural',
//     image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=300',
//     description: 'Nutrient-rich spinach grown using organic methods. Perfect for healthy meals.',
//     harvested: '2024-03-18',
//     availableQuantity: 50,
//     farmingMethod: 'Drip Irrigation',
//     season: 'Winter',
//     benefits: ['Iron-rich', 'Zero Pesticides', 'Locally Grown'],
//     deliveryInfo: {
//       time: '1-2 days',
//       method: 'Express Delivery',
//       freshness: 'Same Day Harvest'
//     },
//     rating: 4.7,
//     reviews: 89,
//     certifications: ['Local Certified', 'Zero Chemical'],
//     preservation: {
//       method: 'Refrigeration',
//       duration: '3-5 days',
//       temperature: '0-5°C',
//       tips: [
//         'Wash and store in airtight container',
//         'Store in the crisper drawer',
//         'Do not store washed and unwashed together'
//       ]
//     },
//     nutritionalInfo: {
//       highlights: [
//         'Excellent source of Iron',
//         'High in Vitamin K',
//         'Rich in Vitamin A',
//         'Good source of folate'
//       ],
//       organic: true,
//       verified: 'Organic Certified'
//     },
//     usage: [
//       'Great for salads and side dishes',
//       'Perfect for smoothies and juice',
//       'Use in soups and stews',
//       'Can be added to omelets and frittatas'
//     ]
//   }
// ];
// import { fetchProducts } from '../apis/Product_apis/Product';

// export default function Marketplace() {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showPayment, setShowPayment] = useState(false);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [quantity, setQuantity] = useState(1);

//   const handleCardClick = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleClose = () => {
//     setSelectedProduct(null);
//   };

//   const handlePayment = () => {
//     setShowPayment(true);
//   };

//   const handlePaymentClose = () => {
//     setShowPayment(false);
//     setIsProcessing(false);
//     setQuantity(1);
//   };

//   const handleProcessPayment = async () => {
//     setIsProcessing(true);
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     setIsProcessing(false);
//     handlePaymentClose();
//     handleClose();
//   };

//   return (
//     <div className="min-h-screen bg-[#F8F9FA] px-4 py-8 relative">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold text-[#2C3E50] font-inter">
//             Natural Farming Marketplace
//           </h1>
//           <div className="flex gap-4">
//             <Button
//               variant="contained"
//               sx={{
//                 color: 'white',
//                 '&:hover': { borderColor: '#2980B9' }
//               }}
//             >
//               Filter
//             </Button>
//             <Button
//               variant="contained"
//               sx={{
//                 color: 'white',
//                 '&:hover': { borderColor: '#2980B9' }
//               }}
//             >
//               Sort by Price
//             </Button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <Card
//               key={product.id}
//               className="hover:shadow-lg transition-shadow cursor-pointer"
//               onClick={() => handleCardClick(product)}
//               sx={{ backgroundColor: 'white', borderRadius: '12px' }}
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
//                     <Typography variant="h5" sx={{ color: '#2C3E50', fontWeight: '600', mb: 1 }}>
//                       {product.name}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
//                       by {product.farmer}
//                     </Typography>
//                     <div className="flex items-center gap-1">
//                       <MapPin size={16} className="text-[#3498DB]" />
//                       <Typography variant="body2" sx={{ color: '#666' }}>
//                         {product.location}
//                       </Typography>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <Typography variant="h4" sx={{ color: 'green', fontWeight: 'bold' }}>
//                       ₹{product.price}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#666' }}>
//                       per {product.unit}
//                     </Typography>
//                     <div style={{display: 'flex', justifyContent: 'right', width: 'auto', transform: 'transLateY(2rem)'}}>
//                 <QRCodeSVG
//                     value={`https://naturalfarm.com/verify/${product.id}`}
//                     size={48}
//                     className="opacity-80"
//                   />
//                   </div>
//                   </div>
//                 </div>
              
//                 <div className="flex items-center gap-2 mb-4" style={{transform: 'transLateY(-2rem)'}}>
//                   <Star className="h-5 w-5 text-green" />
//                   <Typography variant="body2" sx={{ color: '#666' }}>
//                     {product.rating} ({product.reviews} reviews)
//                   </Typography>
//                 </div>
//                 <div className="flex items-center space-x-2" style={{transform: 'transLateY(-2rem)'}}>
//                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 mb-2">
//                      {product.certification}
//                    </span>
//                  </div>
               
//                 <div className="grid grid-cols-2 gap-2">
//                   <Button
//                     variant="contained"
//                     startIcon={<ShoppingCart />}
//                     fullWidth
//                     sx={{
//                       backgroundColor: 'green',
//                       '&:hover': { backgroundColor: 'black', color: 'white' }
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
//                       color: 'white',
//                       '&:hover': { borderColor: '#2980B9' }
//                     }}
//                   >
//                     Contact
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <Dialog
//           open={Boolean(selectedProduct)}
//           onClose={handleClose}
//           maxWidth="lg"
//           fullWidth
//           TransitionComponent={Fade}
//           transitionDuration={300}
//         >
//           {selectedProduct && (
//             <>
//               <DialogTitle
//                 sx={{
//                   borderBottom: '1px solid rgba(0,0,0,0.1)',
//                   padding: '32px',
//                   background: 'linear-gradient(to right, #f8f9fa, #ffffff)'
//                 }}
//               >
//                 <Typography
//                   variant="h4"
//                   sx={{
//                     color: '#2C3E50',
//                     fontWeight: '700',
//                     mb: 2,
//                     fontFamily: 'Inter, system-ui'
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
//                         color: '#666',
//                         fontFamily: 'Inter, system-ui'
//                       }}
//                     >
//                       {selectedProduct.rating} ({selectedProduct.reviews} reviews)
//                     </Typography>
//                   </div>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       color: '#666',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 1,
//                       fontFamily: 'Inter, system-ui'
//                     }}
//                   >
//                     <MapPin className="h-5 w-5 text-[#3498DB]" />
//                     {selectedProduct.farmer} • {selectedProduct.location}
//                   </Typography>
//                 </div>
//               </DialogTitle>
//               <DialogContent sx={{ padding: '32px' }}>
//                 <Grid container spacing={6}>
//                   <Grid item xs={12} md={6}>
//                     <Paper
//                       elevation={3}
//                       sx={{
//                         borderRadius: '16px',
//                         overflow: 'hidden',
//                         transition: 'transform 0.3s ease',
//                         '&:hover': {
//                           transform: 'scale(1.02)'
//                         }
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
//                                 bgcolor: 'rgba(52, 152, 219, 0.1)',
//                                 borderRadius: '12px',
//                                 height: '100%'
//                               }}
//                             >
//                               <div className="flex items-center gap-2">
//                                 <Shield className="h-5 w-5 text-[#3498DB]" />
//                                 <Typography
//                                   sx={{
//                                     color: '#2C3E50',
//                                     fontWeight: '500',
//                                     fontSize: '0.9rem'
//                                   }}
//                                 >
//                                   {cert}
//                                 </Typography>
//                               </div>
//                             </Paper>
//                           </Grid>
//                         ))}
//                         <Box>
//                       <div className="flex flex-wrap gap-2 mx-4 my-4">
//                         {selectedProduct.benefits.map((benefit, index) => (
//                           <Chip
//                             key={index}
//                             icon={<Check className="h-4 w-4" />}
//                             label={benefit}
//                             sx={{
//                               backgroundColor: '#3498DB',
//                               color: 'white',
//                               fontWeight: '500',
//                               '& .MuiChip-icon': {
//                                 color: 'white'
//                               }
//                             }}
//                           />
//                         ))}
//                       </div>
//                         </Box>
//                         <Box className='flex gap-4'>
//                         <Paper sx={{ p: 3, borderRadius: '12px', mb: 4, bgcolor: '#f8f9fa', width: '25rem' }}>
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           color: '#2C3E50',
//                           mb: 2,
//                           fontWeight: '600',
//                         }}
//                       >
//                         Nutritional Information
//                       </Typography>
//                       <div className="grid gap-4">
//                         {selectedProduct.nutritionalInfo.highlights.map((highlight, index) => (
//                           <div key={index} className="flex items-center gap-3">
//                             <Star className="h-5 w-5 text-[#E67E22]" />
//                             <Typography>
//                               {highlight}
//                             </Typography>
//                           </div>
//                         ))}
//                         <Divider />
//                         <div className="flex items-center gap-3">
//                           <Shield className="h-5 w-5 text-[#2ECC71]" />
//                           <Typography>
//                             {selectedProduct.nutritionalInfo.organic ? 'Organic Product' : 'Conventional Product'}
//                           </Typography>
//                         </div>
//                         <div className="flex items-center gap-3">
//                           <Check className="h-5 w-5 text-[#2ECC71]" />
//                           <Typography>
//                             {selectedProduct.nutritionalInfo.verified}
//                           </Typography>
//                         </div>
//                       </div>
//                         </Paper>
//                             <Paper sx={{ p: 3, borderRadius: '12px', mb: 4, bgcolor: '#f8f9fa'}}>
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           color: '#2C3E50',
//                           mb: 2,
//                           fontWeight: '600'
//                         }}
//                       >
//                         Usage Suggestions
//                       </Typography>
//                       <div className="grid gap-3">
//                         {selectedProduct.usage.map((use, index) => (
//                           <div key={index} className="flex items-start gap-2">
//                             <ArrowRight className="h-5 w-5 mt-1 text-[#3498DB]" />
//                             <Typography>
//                               {use}
//                             </Typography>
//                           </div>
//                         ))}
//                       </div>
//                         </Paper>
//                         </Box>
//                       </Grid>
//                     </Box>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <Box sx={{ mb: 4 }}>
//                       <Typography
//                         variant="h3"
//                         sx={{
//                           color: 'green',
//                           fontWeight: '700',
//                           mb: 3,
//                           fontFamily: 'Inter, system-ui'
//                         }}
//                       >
//                         ₹{selectedProduct.price}
//                         <Typography
//                           component="span"
//                           sx={{
//                             fontSize: '1.5rem',
//                             color: 'green',
//                             ml: 1
//                           }}
//                         >
//                           per {selectedProduct.unit}
//                         </Typography>
//                       </Typography>
//                       <Typography
//                         sx={{
//                           color: '#333',
//                           fontSize: '1.1rem',
//                           lineHeight: 1.8,
//                           mb: 4
//                         }}
//                       >
//                         {selectedProduct.description}
//                       </Typography>
//                     </Box>

//                     <Paper sx={{ p: 3, borderRadius: '12px', mb: 4, bgcolor: '#f8f9fa' }}>
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           color: '#2C3E50',
//                           mb: 2,
//                           fontWeight: '600'
//                         }}
//                       >
//                         Product Details
//                       </Typography>
//                       <div className="grid gap-4">
//                         <div className="flex items-center gap-3">
//                           <Calendar className="h-5 w-5 text-[#3498DB]" />
//                           <Typography>
//                             Harvested: {new Date(selectedProduct.harvested).toLocaleDateString()}
//                           </Typography>
//                         </div>
//                         <Divider />
//                         <div className="flex items-center gap-3">
//                           <Package className="h-5 w-5 text-[#3498DB]" />
//                           <Typography>
//                             Available: {selectedProduct.availableQuantity} {selectedProduct.unit}
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

//                     <Paper sx={{ p: 3, borderRadius: '12px', mb: 4, bgcolor: '#f8f9fa' }}>
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           color: '#2C3E50',
//                           mb: 2,
//                           fontWeight: '600'
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
//                             Ideal Temperature: {selectedProduct.preservation.temperature}
//                           </Typography>
//                         </div>
//                       </div>
//                       <Box sx={{ mt: 3 }}>
//                         <Typography variant="subtitle2" sx={{ color: '#2C3E50', mb: 1 }}>
//                           Storage Tips:
//                         </Typography>
//                         <div className="grid gap-2">
//                           {selectedProduct.preservation.tips.map((tip, index) => (
//                             <div key={index} className="flex items-start gap-2">
//                               <Check className="h-4 w-4 mt-1 text-[#2ECC71]" />
//                               <Typography variant="body2">
//                                 {tip}
//                               </Typography>
//                             </div>
//                           ))}
//                         </div>
//                       </Box>
//                     </Paper>

                   

                
//                   </Grid>
//                 </Grid>
//               </DialogContent>
//               <DialogActions
//                 sx={{
//                   padding: '24px',
//                   borderTop: '1px solid rgba(0,0,0,0.1)',
//                   bgcolor: '#f8f9fa'
//                 }}
//               >
                
//                 <Button
//                   onClick={handlePayment}
//                   variant="contained"
//                   startIcon={<ShoppingCart />}
//                   sx={{
//                     bgcolor: 'green',
//                     color: 'white',
//                     '&:hover': {
//                       bgcolor: '#D35400'
//                     }
//                   }}
//                 >
//                   Buy Now
//                 </Button>
//                 <Button
//                   variant="contained"
//                   startIcon={<Phone />}
//                   sx={{
//                     color: 'white',
//                     ml: 1,
//                     '&:hover': {
//                       borderColor: 'black',
//                       bgcolor: 'black',
//                       color: 'white'
//                     }
//                   }}
//                 >
//                   Contact Farmer
//                 </Button>
//                 <Button
//                   onClick={handleClose}
//                   variant="contained"
//                   startIcon={<Info />}
//                   sx={{
//                     color: 'white',
//                     mr: 1,
//                     '&:hover': {
//                       borderColor: 'black',
//                       bgcolor: 'black',
//                       color: 'white'
//                     }
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
//               borderBottom: '1px solid rgba(0,0,0,0.1)',
//               padding: '32px',
//               background: 'linear-gradient(to right, #f8f9fa, #ffffff)'
//             }}
//           >
//             <Typography
//               variant="h5"
//               sx={{
//                 color: '#2C3E50',
//                 fontWeight: '600',
//                 fontFamily: 'Inter, system-ui'
//               }}
//             >
//               Payment Details
//             </Typography>
//           </DialogTitle>
//           <DialogContent sx={{ padding: '32px' }}>
//             <Box sx={{ mt: 1 }}>
//               {selectedProduct && (
//                 <Paper
//                   sx={{
//                     p: 3,
//                     mb: 4,
//                     borderRadius: '12px',
//                     bgcolor: '#f8f9fa'
//                   }}
//                 >
//                   <Typography variant="subtitle1" sx={{ mb: 2, color: '#666' }}>
//                     Order Summary
//                   </Typography>
//                   <div className="flex justify-between items-center mb-2">
//                     <Typography variant="body1">{selectedProduct.name}</Typography>
//                     <Typography variant="body1">₹{selectedProduct.price}/{selectedProduct.unit}</Typography>
//                   </div>
//                   <Divider sx={{ my: 2 }} />
//                   <div className="flex justify-between items-center">
//                     <Typography variant="h6">Total Amount</Typography>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         color: '#E67E22',
//                         fontWeight: '600'
//                       }}
//                     >
//                       ₹{parseInt(selectedProduct.price) * quantity}
//                     </Typography>
//                   </div>
//                 </Paper>
//               )}

//               <div className="space-y-4">
//                 <TextField
//                   label="Quantity"
//                   type="number"
//                   fullWidth
//                   value={quantity}
//                   onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
//                   InputProps={{
//                     inputProps: { min: 1 },
//                     sx: { borderRadius: '8px' }
//                   }}
//                 />
//                 <TextField
//                   label="Card Number"
//                   fullWidth
//                   placeholder="1234 5678 9012 3456"
//                   InputProps={{
//                     sx: { borderRadius: '8px' }
//                   }}
//                 />
//                 <div className="grid grid-cols-2 gap-4">
//                   <TextField
//                     label="Expiry Date"
//                     placeholder="MM/YY"
//                     InputProps={{
//                       sx: { borderRadius: '8px' }
//                     }}
//                   />
//                   <TextField
//                     label="CVV"
//                     type="password"
//                     placeholder="123"
//                     InputProps={{
//                       sx: { borderRadius: '8px' }
//                     }}
//                   />
//                 </div>
//               </div>
//             </Box>
//           </DialogContent>
//           <DialogActions
//             sx={{
//               padding: '24px',
//               borderTop: '1px solid rgba(0,0,0,0.1)',
//               bgcolor: '#f8f9fa'
//             }}
//           >
//             <Button
//               onClick={handlePaymentClose}
//               variant="outlined"
//               sx={{
//                 borderColor: '#E67E22',
//                 color: '#E67E22',
//                 mr: 1,
//                 '&:hover': {
//                   borderColor: '#D35400',
//                   bgcolor: 'rgba(230, 126, 34, 0.1)'
//                 }
//               }}
//             >
//               Cancel
//             </Button>
//             <Button
//               onClick={handleProcessPayment}
//               variant="contained"
//               startIcon={isProcessing ? <CircularProgress size={20} color="inherit" /> : <CreditCard />}
//               disabled={isProcessing}
//               sx={{
//                 bgcolor: '#3498DB',
//                 '&:hover': {
//                   bgcolor: '#2980B9'
//                 }
//               }}
//             >
//               {isProcessing ? 'Processing...' : 'Pay Now'}
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import QRCodeSVG from 'react-qr-code';
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
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
} from '@mui/material';
import { fetchProducts, fetchProductById } from '../apis/Product_apis/Product.js'; // Adjust the import path for fetching products
import {
  ShoppingCart,
  MapPin,
  Calendar,
  Package,
  Leaf,
  Info,
  CreditCard,
  Phone,
  Star,
  Shield,
  Pencil,
  Check,
  Thermometer,
  ArrowRight
} from 'lucide-react';
import { updateProduct, deleteProduct } from '../apis/Product_apis/Product.js';

export default function Marketplace() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Fetching all products
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productData = await fetchProducts();
        console.log(productData);
        
        setProducts(productData);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    loadProducts();
  }, []);

  // Open dialog to show product details
  const handleCardClick = async (productId) => {
    setIsLoading(true);
    try {
      const productData = await fetchProductById(productId);
      const dummyProduct = {
        id: productData._id, 
        name: productData.name,
        farmer: productData.farmer.name,
        location: productData.location,
        price: productData.price,
        unit: 'KG',
        certification: 'Verified Natural',
        image: productData.image,
        description: productData.description,
        harvested: '2024-03-18',
        availableQuantity: productData.quantityAvailable,
        farmingMethod: 'Drip Irrigation',
        benefits: ['Iron-rich', 'Zero Pesticides', 'Locally Grown'],
        deliveryInfo: {
          time: '1-2 days',
          method: 'Express Delivery',
          freshness: 'Same Day Harvest'
        },
        rating: 4.7,
        reviews: 89,
        certifications: ['Local Certified', 'Zero Chemical'],
        preservation: {
          method: 'Refrigeration',
          duration: '3-5 days',
          temperature: '0-5°C',
          tips: [
            'Wash and store in airtight container',
            'Store in the crisper drawer',
            'Do not store washed and unwashed together'
          ]
        },
        nutritionalInfo: {
          highlights: [
            'Excellent source of Iron',
            'High in Vitamin K',
            'Rich in Vitamin A',
            'Good source of folate'
          ],
          organic: productData.isOrganic,
          verified: 'Organic Certified'
        },
        usage: [
          'Great for salads and side dishes',
          'Perfect for smoothies and juice',
          'Use in soups and stews',
          'Can be added to omelets and frittatas'
        ]
      };
      setSelectedProduct(dummyProduct);
      setDialogOpen(true);
    } catch (error) {
      console.error('Failed to fetch product details:', error);
    }
    setIsLoading(false);
  };

  const handleDeleteProduct = async (e) => {
    e.stopPropagation();
    console.log("Deleting product:", selectedProduct);
    if (selectedProduct) {
      try {
        await deleteProduct(selectedProduct._id);
        setProducts(prevProducts => 
          prevProducts.filter(product => product._id !== selectedProduct._id)
        );
        handleCloseDialog(); 
        console.log("Product deleted");
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  // Close dialog
  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedProduct(null); 
  };

    const handlePayment = () => {
    setShowPayment(true);
  };

  const handlePaymentClose = () => {
    setShowPayment(false);
    setIsProcessing(false);
    setQuantity(1);
  };

  const handleProcessPayment = async () => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    handlePaymentClose();
    handleClose();
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] px-4 py-8 relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#2C3E50] font-inter">Natural Farming Marketplace</h1>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {products.map((product) => (
             <Card
               key={product._id}
               className="hover:shadow-lg transition-shadow cursor-pointer"
               onClick={() => handleCardClick(product._id)}
              sx={{ backgroundColor: 'white', borderRadius: '12px' }}
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
                     <Typography variant="h5" sx={{ color: '#2C3E50', fontWeight: '600', mb: 1 }}>
                       {product?.name}
                     </Typography>
                     <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                       by {product.farmer?.name || 'Unknown Farmer'}
                     </Typography>
                     <div className="flex items-center gap-1">
                       <MapPin size={16} className="text-[#3498DB]" />
                       <Typography variant="body2" sx={{ color: '#666' }}>
                         {product.location}
                       </Typography>
                     </div>
                   </div>
                   <div className="text-right">
                    <Typography variant="h4" sx={{ color: 'green', fontWeight: 'bold' }}>
                       ₹{product.price}
                     </Typography>
                     <Typography variant="body2" sx={{ color: '#666' }}>
                       per kg
                     </Typography>
                     <div style={{display: 'flex', justifyContent: 'right', width: 'auto', transform: 'transLateY(2rem)'}}>
                 <QRCodeSVG
                     value='https://www.figma.com/design/wf4NzyEfubZmSuCGv23lt1/job?node-id=0-1&t=uRdsOdmQSxeWWcjw-0'
                     size={48}
                     className="opacity-80"
                   />
                   </div>
                   </div>
                 </div>
              
                 <div className="flex items-center gap-2 mb-4" style={{transform: 'transLateY(-2rem)'}}>
                   <Star className="h-5 w-5 text-green" />
                   {/* <Typography variant="body2" sx={{ color: '#666' }}>
                     {product.rating} ({product.reviews} reviews)
                   </Typography> */}
                 </div>
                 <div className="flex items-center space-x-2" style={{transform: 'transLateY(-2rem)'}}>
                    {/* <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 mb-2">
                      {product.certification}
                    </span> */}
                  </div>
               
                 <div className="grid grid-cols-2 gap-2">
                   <Button
                     variant="contained"
                     startIcon={<ShoppingCart />}
                     fullWidth
                     sx={{
                       backgroundColor: 'green',
                       '&:hover': { backgroundColor: 'black', color: 'white' }
                     }}
                     onClick={(e) => {
                       e.stopPropagation();
                       handlePayment();
                     }}
                   >
                     Buy Now
                   </Button>
                   <Button
                     variant="contained"
                     startIcon={<Phone />}
                     fullWidth
                     sx={{
                       color: 'white',
                       '&:hover': { borderColor: '#2980B9' }
                     }}
                  >
                     Contact
                   </Button>
                   <Button variant="contained" color="error" onClick={handleDeleteProduct}>
          Delete Product
                   </Button>
                   <Button
                     variant="contained"
                     startIcon={<Pencil />}
                     fullWidth
                     sx={{
                       color: 'white',
                       '&:hover': { borderColor: '#2980B9' }
                     }}
                  >
                     Edit
                   </Button>
                 </div>
               </CardContent>
             </Card>
           ))}
        </div>
        
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length === 0 ? (
            <CircularProgress />
          ) : (
            products.map((product) => (
              <Card
                key={product._id}
                onClick={() => handleCardClick(product._id)} 
                sx={{ backgroundColor: 'white', borderRadius: '12px', cursor: 'pointer' }} // Change cursor to pointer for UX
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                </div>
                <CardContent className="p-6">
                  <Typography variant="h5" sx={{ color: '#2C3E50', fontWeight: '600', mb: 1 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                    by {product.farmer?.name || 'Unknown Farmer'}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    Price: ₹{product.price}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    Description: {product.description}
                  </Typography>
                </CardContent>
              </Card>
            ))
          )}
        </div> */}
        
        {/* Product Details Dialog */}
      

        {/* <Dialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          maxWidth="lg"
          fullWidth
          
          transitionDuration={300}
        >
          {selectedProduct && (
            <>
              <DialogTitle
                sx={{
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                  padding: '32px',
                  background: 'linear-gradient(to right, #f8f9fa, #ffffff)',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#2C3E50',
                    fontWeight: '700',
                    mb: 2,
                    fontFamily: 'Inter, system-ui',
                  }}
                >
                  {selectedProduct.name}
                </Typography>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-[#E67E22]" />
                    <Typography
                      variant="h6"
                      sx={{ color: '#666', fontFamily: 'Inter, system-ui' }}
                    >
                      {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                    </Typography>
                  </div>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#666',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontFamily: 'Inter, system-ui',
                    }}
                  >
                    <MapPin className="h-5 w-5 text-[#3498DB]" />
                    {selectedProduct.farmer} • {selectedProduct.location}
                  </Typography>
                </div>
              </DialogTitle>

              <DialogContent sx={{ padding: '32px' }}>
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <Paper
                      elevation={3}
                      sx={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.02)',
                        },
                      }}
                    >
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-[400px] object-cover"
                      />
                    </Paper>
                    <Box sx={{ mt: 4 }}>
                      <Grid container spacing={2}>
                        {selectedProduct.certifications.map((cert, index) => (
                          <Grid item xs={6} key={index}>
                            <Paper
                              sx={{
                                p: 2,
                                bgcolor: 'rgba(52, 152, 219, 0.1)',
                                borderRadius: '12px',
                                height: '100%',
                              }}
                            >
                              <div className="flex items-center gap-2">
                                <Shield className="h-5 w-5 text-[#3498DB]" />
                                <Typography
                                  sx={{
                                    color: '#2C3E50',
                                    fontWeight: '500',
                                    fontSize: '0.9rem',
                                  }}
                                >
                                  {cert}
                                </Typography>
                              </div>
                            </Paper>
                          </Grid>
                        ))}
                        <Box>
                          <div className="flex flex-wrap gap-2 mx-4 my-4">
                            {selectedProduct.benefits.map((benefit, index) => (
                              <Chip
                                key={index}
                                icon={<Check className="h-4 w-4" />}
                                label={benefit}
                                sx={{
                                  backgroundColor: '#3498DB',
                                  color: 'white',
                                  fontWeight: '500',
                                  '& .MuiChip-icon': {
                                    color: 'white',
                                  },
                                }}
                              />
                            ))}
                          </div>
                        </Box>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          color: 'green',
                          fontWeight: '700',
                          mb: 3,
                          fontFamily: 'Inter, system-ui',
                        }}
                      >
                        ₹{selectedProduct.price}
                        <Typography
                          component="span"
                          sx={{
                            fontSize: '1.5rem',
                            color: 'green',
                            ml: 1,
                          }}
                        >
                          per {selectedProduct.unit}
                        </Typography>
                      </Typography>
                      <Typography
                        sx={{
                          color: '#333',
                          fontSize: '1.1rem',
                          lineHeight: 1.8,
                          mb: 4,
                        }}
                      >
                        {selectedProduct.description}
                      </Typography>
                    </Box>

                    <Paper sx={{ p: 3, borderRadius: '12px', mb: 4, bgcolor: '#f8f9fa' }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#2C3E50',
                          mb: 2,
                          fontWeight: '600',
                        }}
                      >
                        Nutritional Information
                      </Typography>
                      <div className="grid gap-4">
                        {selectedProduct.nutritionalInfo.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Star className="h-5 w-5 text-[#E67E22]" />
                            <Typography>{highlight}</Typography>
                          </div>
                        ))}
                        <Divider />
                        <div className="flex items-center gap-3">
                          <Shield className="h-5 w-5 text-[#2ECC71]" />
                          <Typography>
                            {selectedProduct.nutritionalInfo.organic ? 'Organic Product' : 'Conventional Product'}
                          </Typography>
                        </div>
                      </div>
                    </Paper>

                    <Paper sx={{ p: 3, borderRadius: '12px', mb: 4, bgcolor: '#f8f9fa' }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#2C3E50',
                          mb: 2,
                          fontWeight: '600',
                        }}
                      >
                        Usage Suggestions
                      </Typography>
                      <div className="grid gap-3">
                        {selectedProduct.usage.map((use, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <ArrowRight className="h-5 w-5 mt-1 text-[#3498DB]" />
                            <Typography>{use}</Typography>
                          </div>
                        ))}
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions
                sx={{
                  padding: '24px',
                  borderTop: '1px solid rgba(0,0,0,0.1)',
                  bgcolor: '#f8f9fa',
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: 'green',
                    color: 'white',
                    '&:hover': {
                      bgcolor: '#D35400',
                    },
                  }}
                >
                  Buy Now
                </Button>
                <Button variant="contained" sx={{ color: 'white', ml: 1 }}>
                  Contact Farmer
                </Button>
                <Button variant="contained" sx={{ color: 'white', mr: 1 }} onClick={handleCloseDialog}>
                  Close
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog> */}

        <Dialog
          open={Boolean(selectedProduct)}
          onClose={handleCloseDialog}
          maxWidth="lg"
          fullWidth
          TransitionComponent={Fade}
          transitionDuration={300}
        >
          {selectedProduct && (
            <>
              <DialogTitle
                sx={{
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                  padding: '32px',
                  background: 'linear-gradient(to right, #f8f9fa, #ffffff)'
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#2C3E50',
                    fontWeight: '700',
                    mb: 2,
                    fontFamily: 'Inter, system-ui'
                  }}
                >
                  {selectedProduct.name}
                </Typography>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-[#E67E22]" />
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#666',
                        fontFamily: 'Inter, system-ui'
                      }}
                    >
                      {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                    </Typography>
                  </div>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#666',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontFamily: 'Inter, system-ui'
                    }}
                  >
                    <MapPin className="h-5 w-5 text-[#3498DB]" />
                    {selectedProduct.farmer} • {selectedProduct.location}
                  </Typography>
                </div>
              </DialogTitle>
              <DialogContent sx={{ padding: '32px' }}>
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <Paper
                      elevation={3}
                      sx={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.02)'
                        }
                      }}
                    >
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-[400px] object-cover"
                      />
                    </Paper>
                    <Box sx={{ mt: 4 }}>
                      <Grid container spacing={2}>
                        {selectedProduct.certifications.map((cert, index) => (
                          <Grid item xs={6} key={index}>
                            <Paper
                              sx={{
                                p: 2,
                                bgcolor: 'rgba(52, 152, 219, 0.1)',
                                borderRadius: '12px',
                                height: '100%'
                              }}
                            >
                              <div className="flex items-center gap-2">
                                <Shield className="h-5 w-5 text-[#3498DB]" />
                                <Typography
                                  sx={{
                                    color: '#2C3E50',
                                    fontWeight: '500',
                                    fontSize: '0.9rem'
                                  }}
                                >
                                  {cert}
                                </Typography>
                              </div>
                            </Paper>
                          </Grid>
                        ))}
                        <Box>
                      <div className="flex flex-wrap gap-2 mx-4 my-4">
                        {selectedProduct.benefits.map((benefit, index) => (
                          <Chip
                            key={index}
                            icon={<Check className="h-4 w-4" />}
                            label={benefit}
                            sx={{
                              backgroundColor: '#3498DB',
                              color: 'white',
                              fontWeight: '500',
                              '& .MuiChip-icon': {
                                color: 'white'
                              }
                            }}
                          />
                        ))}
                      </div>
                        </Box>
                        <Box className='flex gap-4'>
                        <Paper sx={{ p: 3, borderRadius: '12px', mb: 4, bgcolor: '#f8f9fa', width: '25rem' }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#2C3E50',
                          mb: 2,
                          fontWeight: '600',
                        }}
                      >
                        Nutritional Information
                      </Typography>
                      <div className="grid gap-4">
                        {selectedProduct.nutritionalInfo.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Star className="h-5 w-5 text-[#E67E22]" />
                            <Typography>
                              {highlight}
                            </Typography>
                          </div>
                        ))}
                        <Divider />
                        <div className="flex items-center gap-3">
                          <Shield className="h-5 w-5 text-[#2ECC71]" />
                          <Typography>
                            {selectedProduct.nutritionalInfo.organic ? 'Organic Product' : 'Conventional Product'}
                          </Typography>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-[#2ECC71]" />
                          <Typography>
                            {selectedProduct.nutritionalInfo.verified}
                          </Typography>
                        </div>
                      </div>
                        </Paper>
                            <Paper sx={{ p: 3, borderRadius: '12px', mb: 4, bgcolor: '#f8f9fa'}}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#2C3E50',
                          mb: 2,
                          fontWeight: '600'
                        }}
                      >
                        Usage Suggestions
                      </Typography>
                      <div className="grid gap-3">
                        {selectedProduct.usage.map((use, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <ArrowRight className="h-5 w-5 mt-1 text-[#3498DB]" />
                            <Typography>
                              {use}
                            </Typography>
                          </div>
                        ))}
                      </div>
                        </Paper>
                        </Box>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          color: 'green',
                          fontWeight: '700',
                          mb: 3,
                          fontFamily: 'Inter, system-ui'
                        }}
                      >
                        ₹{selectedProduct.price}
                        <Typography
                          component="span"
                          sx={{
                            fontSize: '1.5rem',
                            color: 'green',
                             ml: 1
                           }}
                         >
                           per {selectedProduct.unit}
                         </Typography>
                       </Typography>
                       <Typography
                         sx={{
                           color: '#333',
                           fontSize: '1.1rem',
                           lineHeight: 1.8,
                           mb: 4
                         }}
                       >
                         {selectedProduct.description}
                       </Typography>
                     </Box>

                     <Paper sx={{ p: 3, borderRadius: '12px', mb: 4, bgcolor: '#f8f9fa' }}>
                       <Typography
                         variant="h6"
                         sx={{
                           color: '#2C3E50',
                           mb: 2,
                           fontWeight: '600'
                         }}
                       >
                         Product Details
                       </Typography>
                       <div className="grid gap-4">
                         <div className="flex items-center gap-3">
                           <Calendar className="h-5 w-5 text-[#3498DB]" />
                          <Typography>
                            Harvested: {new Date(selectedProduct.harvested).toLocaleDateString()}
                           </Typography>
                         </div>
                         <Divider />
                         <div className="flex items-center gap-3">
                          <Package className="h-5 w-5 text-[#3498DB]" />
                           <Typography>
                             Available: {selectedProduct.availableQuantity} {selectedProduct.unit}
                           </Typography>
                         </div>
                         <Divider />
                         <div className="flex items-center gap-3">
                           <Leaf className="h-5 w-5 text-[#3498DB]" />
                           <Typography>
                             Method: {selectedProduct.farmingMethod}
                           </Typography>
                         </div>
                       </div>
                     </Paper>

                     <Paper sx={{ p: 3, borderRadius: '12px', mb: 4, bgcolor: '#f8f9fa' }}>
                       <Typography
                         variant="h6"
                         sx={{
                           color: '#2C3E50',
                           mb: 2,
                           fontWeight: '600'
                         }}
                      >
                         Preservation Information
                       </Typography>
                       <div className="grid gap-4">
                         <div className="flex items-center gap-3">
                           <Shield className="h-5 w-5 text-[#3498DB]" />
                           <Typography>
                            Method: {selectedProduct.preservation.method}
                           </Typography>
                         </div>
                         <Divider />
                         <div className="flex items-center gap-3">
                           <Calendar className="h-5 w-5 text-[#3498DB]" />
                           <Typography>
                             Duration: {selectedProduct.preservation.duration}
                           </Typography>
                         </div>
                         <Divider />
                         <div className="flex items-center gap-3">
                           <Thermometer className="h-5 w-5 text-[#3498DB]" />
                           <Typography>
                             Ideal Temperature: {selectedProduct.preservation.temperature}
                           </Typography>
                         </div>
                       </div>
                       <Box sx={{ mt: 3 }}>
                         <Typography variant="subtitle2" sx={{ color: '#2C3E50', mb: 1 }}>
                           Storage Tips:
                         </Typography>
                         <div className="grid gap-2">
                           {selectedProduct.preservation.tips.map((tip, index) => (
                            <div key={index} className="flex items-start gap-2">
                               <Check className="h-4 w-4 mt-1 text-[#2ECC71]" />
                               <Typography variant="body2">
                                 {tip}
                               </Typography>
                             </div>
                           ))}
                        </div>
                      </Box>
                     </Paper>
                   </Grid>
                 </Grid>
               </DialogContent>
               <DialogActions
                 sx={{
                   padding: '24px',
                  borderTop: '1px solid rgba(0,0,0,0.1)',
                   bgcolor: '#f8f9fa'
                 }}
               >
                
                 <Button
                   variant="contained"
                  startIcon={<ShoppingCart />}
                  onClick={handlePayment}
                   sx={{
                     bgcolor: 'green',
                     color: 'white',
                     '&:hover': {
                       bgcolor: '#D35400'
                     }
                  }}
                 >
                   Buy Now
                 </Button>
                 <Button
                   variant="contained"
                   startIcon={<Phone />}
                   sx={{
                     color: 'white',
                     ml: 1,
                     '&:hover': {
                       borderColor: 'black',
                       bgcolor: 'black',
                       color: 'white'
                     }
                   }}
                 >
                   Contact Farmer
                 </Button>
                 <Button
                   onClick={handleCloseDialog}
                   variant="contained"
                   startIcon={<Info />}
                   sx={{
                     color: 'white',
                     mr: 1,
                     '&:hover': {
                       borderColor: 'black',
                       bgcolor: 'black',
                       color: 'white'
                     }
                   }}
                 >
                   Close
                 </Button>
               </DialogActions>
             </>
           )}
        </Dialog>
        
                 <Dialog
          open={showPayment}
          onClose={handlePaymentClose}
          maxWidth="sm"
          fullWidth
          TransitionComponent={Fade}
          transitionDuration={300}
        >
          <DialogTitle
            sx={{
              borderBottom: '1px solid rgba(0,0,0,0.1)',
              padding: '32px',
              background: 'linear-gradient(to right, #f8f9fa, #ffffff)'
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#2C3E50',
                fontWeight: '600',
                fontFamily: 'Inter, system-ui'
              }}
            >
              Payment Details
            </Typography>
          </DialogTitle>
          <DialogContent sx={{ padding: '32px' }}>
            <Box sx={{ mt: 1 }}>
              {selectedProduct && (
                <Paper
                  sx={{
                    p: 3,
                    mb: 4,
                    borderRadius: '12px',
                    bgcolor: '#f8f9fa'
                  }}
                >
                  <Typography variant="subtitle1" sx={{ mb: 2, color: '#666' }}>
                    Order Summary
                  </Typography>
                  <div className="flex justify-between items-center mb-2">
                    <Typography variant="body1">{selectedProduct.name}</Typography>
                    <Typography variant="body1">₹{selectedProduct.price}/{selectedProduct.unit}</Typography>
                  </div>
                  <Divider sx={{ my: 2 }} />
                  <div className="flex justify-between items-center">
                    <Typography variant="h6">Total Amount</Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#E67E22',
                        fontWeight: '600'
                      }}
                    >
                      ₹{parseInt(selectedProduct.price) * quantity}
                    </Typography>
                  </div>
                </Paper>
              )}

              <div className="space-y-4">
                <TextField
                  label="Quantity"
                  type="number"
                  fullWidth
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  InputProps={{
                    inputProps: { min: 1 },
                    sx: { borderRadius: '8px' }
                  }}
                />
                <TextField
                  label="Card Number"
                  fullWidth
                  placeholder="1234 5678 9012 3456"
                  InputProps={{
                    sx: { borderRadius: '8px' }
                  }}
                />
                <div className="grid grid-cols-2 gap-4">
                  <TextField
                    label="Expiry Date"
                    placeholder="MM/YY"
                    InputProps={{
                      sx: { borderRadius: '8px' }
                    }}
                  />
                  <TextField
                    label="CVV"
                    type="password"
                    placeholder="123"
                    InputProps={{
                      sx: { borderRadius: '8px' }
                    }}
                  />
                </div>
              </div>
            </Box>
          </DialogContent>
          <DialogActions
            sx={{
              padding: '24px',
              borderTop: '1px solid rgba(0,0,0,0.1)',
              bgcolor: '#f8f9fa'
            }}
          >
            <Button
              onClick={handlePaymentClose}
              variant="outlined"
              sx={{
                borderColor: '#E67E22',
                color: '#E67E22',
                mr: 1,
                '&:hover': {
                  borderColor: '#D35400',
                  bgcolor: 'rgba(230, 126, 34, 0.1)'
                }
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleProcessPayment}
              variant="contained"
              startIcon={isProcessing ? <CircularProgress size={20} color="inherit" /> : <CreditCard />}
              disabled={isProcessing}
              sx={{
                bgcolor: '#3498DB',
                '&:hover': {
                  bgcolor: '#2980B9'
                }
              }}
            >
              {isProcessing ? 'Processing...' : 'Pay Now'}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}