import React from 'react'
import customerticket from '../images/customerticket.png'
import Products1 from './Products1';

const vendors = [
  { name: 'Jacob Jones', country: 'Brazil', revenue: '$546k' },
  { name: 'Robert Fox', country: 'Tajikistan', revenue: '$546k' },
  { name: 'Albert Flores', country: 'Poland', revenue: '$546k' },
  { name: 'Cody Fisher', country: 'Haiti', revenue: '$546k' },
  { name: 'Jane Cooper', country: 'Guinea', revenue: '$546k' },
  { name: 'Guy Hawkins', country: 'Georgia', revenue: '$546k' },
];

const Topvendor = () => {
  return (
    <div className="w-[303px] bg-white rounded-[10px] shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4">
        <h1 className="text-black text-base font-medium font-['Poppins']">Top vendor</h1>
      </div>
      
      <div className="flex flex-col">
        {vendors.map((vendor, index) => (
          <div 
            key={index} 
            className="px-4 py-3 flex justify-between items-center border-t border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src={customerticket} alt={vendor.name} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-black text-sm font-medium font-['Poppins']">{vendor.name}</h1>
                <h1 className="text-gray-400 text-xs font-medium font-['Poppins']">{vendor.country}</h1>
              </div>
            </div>
            <div className="text-gray-700 text-sm font-medium font-['Poppins']">{vendor.revenue}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Parent component that renders Topvendor three times in a grid
const TopvendorGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <Topvendor />
      <Topvendor />
      <Products1/>
      
    </div>
  )
}

export default TopvendorGrid