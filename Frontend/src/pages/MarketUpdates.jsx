import { useState } from 'react';
import Sidebar from '../components/Sidebar';
function MarketUpdates() {
  const [updates] = useState([
    {
      id: 1,
      product: 'Tomatoes',
      currentPrice: '2.50',
      priceChange: '+0.20',
      trend: 'up',
      region: 'North',
      lastUpdated: '1 hour ago'
    },
    {
      id: 2,
      product: 'Potatoes',
      currentPrice: '1.80',
      priceChange: '-0.10',
      trend: 'down',
      region: 'South',
      lastUpdated: '2 hours ago'
    },
    {
      id: 3,
      product: 'Onions',
      currentPrice: '1.20',
      priceChange: '+0.05',
      trend: 'up',
      region: 'Central',
      lastUpdated: '30 minutes ago'
    }
  ]);

  return (
    <div className='flex'>
      <Sidebar className='h-full'/>
    
    <div className="max-w-4xl mx-auto my-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Market Updates</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="grid grid-cols-6 bg-gray-50 p-4 border-b font-medium text-gray-700">
          <div>Product</div>
          <div>Current Price</div>
          <div>Change</div>
          <div>Trend</div>
          <div>Region</div>
          <div>Last Updated</div>
        </div>
          
        <div className="divide-y">
          {updates.map((update) => (
            <div key={update.id} className="grid grid-cols-6 p-4 items-center">
              <div className="font-medium">{update.product}</div>
              <div>${update.currentPrice}</div>
              <div className={update.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                {update.priceChange}
              </div>
              <div>
                {update.trend === 'up' ? '📈' : '📉'}
              </div>
              <div>{update.region}</div>
              <div className="text-gray-500">{update.lastUpdated}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">Market Insights</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            Today's market shows strong demand for organic produce. Tomato prices are trending upward due to increased consumer interest in locally grown vegetables.
          </p>
          <p className="text-gray-600">
            Farmers are advised to plan their next harvest considering the current market trends and consumer preferences.
          </p>
        </div>
      </div>
      </div>
      </div>
  );
}

export default MarketUpdates;