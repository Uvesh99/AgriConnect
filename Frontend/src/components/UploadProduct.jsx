import { useState } from "react";
import { Leaf, MapPin, Package, Coins, Image as ImageIcon } from "lucide-react";
import { addProduct } from "../apis/Product_apis/Product";
import { useNavigate } from "react-router-dom";

const UploadProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Vegetables",
    price: 0,
    quantityAvailable: 1,
    location: "",
    isOrganic: false,
    image: ""
  });
  const [imagePreview, setImagePreview] = useState(null);

  const categories = [
    "Vegetables",
    "Fruits",
    "Grains",
    "Dairy",
    "Meat",
    "Eggs",
    "Herbs",
    "Other"
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try {
      const result = await addProduct(formData); 
      console.log(result); 
      setFormData({
        name: "",
        description: "",
        category: "Vegetables",
        price: 0,
        quantityAvailable: 1,
        location: "",
        isOrganic: false,
        image: ""
      });
      setImagePreview(null); 
    } catch (error) {
      alert('Failed to add product. Please try again.');
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-green-800 flex items-center gap-2">
              <Leaf className="h-6 w-6" />
              Add Farm Product
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter product name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                rows="4"
                placeholder="Describe your product"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Price</label>
                <div className="relative">
                  <Coins className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full pl-9 p-2 border rounded-md"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Quantity Available</label>
                <div className="relative">
                  <Package className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
                  <input
                    type="number"
                    name="quantityAvailable"
                    value={formData.quantityAvailable}
                    onChange={handleInputChange}
                    className="w-full pl-9 p-2 border rounded-md"
                    min="1"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full pl-9 p-2 border rounded-md"
                    placeholder="Enter location"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 p-4 border rounded-md">
              <input
                type="checkbox"
                name="isOrganic"
                checked={formData.isOrganic}
                onChange={handleInputChange}
                className="h-4 w-4 text-green-600"
              />
              <label className="text-sm font-medium">
                This is an organic product
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Product Image</label>
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => document.getElementById('image-upload').click()}
                  className="w-full flex items-center justify-center gap-2 p-2 border rounded-md hover:bg-gray-50"
                >
                  <ImageIcon className="h-5 w-5" />
                  Upload Image
                </button>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                {imagePreview && (
                  <div className="relative aspect-video w-full">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadProduct;
