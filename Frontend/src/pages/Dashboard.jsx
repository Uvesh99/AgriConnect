
export default function Dashboard() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Farmer Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Farm Status</h2>
            <div className="space-y-3">
              <p className="text-gray-600">Certification Status: <span className="text-primary-600 font-medium">Verified</span></p>
              <p className="text-gray-600">Last Update: <span className="text-gray-800">March 15, 2024</span></p>
              <button className="btn-primary mt-4">Update Farm Photos</button>
            </div>
          </div>
  
          {/* Listings Card */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Active Listings</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Organic Tomatoes</span>
                <span className="text-primary-600 font-medium">₹40/kg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Natural Rice</span>
                <span className="text-primary-600 font-medium">₹60/kg</span>
              </div>
              <button className="btn-primary mt-4">Add New Listing</button>
            </div>
          </div>
  
          {/* Analytics Card */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Analytics</h2>
            <div className="space-y-3">
              <p className="text-gray-600">Total Sales: <span className="text-gray-800">₹25,000</span></p>
              <p className="text-gray-600">Active Orders: <span className="text-gray-800">12</span></p>
              <p className="text-gray-600">Customer Rating: <span className="text-primary-600">4.8/5</span></p>
            </div>
          </div>
        </div>
  
        {/* Recent Activity Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent Activity</h2>
          <div className="card">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <p className="text-gray-800 font-medium">New Order Received</p>
                  <p className="text-gray-600 text-sm">Order #123 - Organic Tomatoes (5kg)</p>
                </div>
                <span className="text-gray-500 text-sm">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <p className="text-gray-800 font-medium">Certification Updated</p>
                  <p className="text-gray-600 text-sm">Natural Farming Certificate Renewed</p>
                </div>
                <span className="text-gray-500 text-sm">1 day ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-800 font-medium">Price Update</p>
                  <p className="text-gray-600 text-sm">Updated prices for 3 items</p>
                </div>
                <span className="text-gray-500 text-sm">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }