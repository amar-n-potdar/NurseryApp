import React, { useState } from 'react'
import excel from '../images/excel.png'
import see from '../images/see.png'
import download from '../images/download.png'
import VendorSetails from './VendorSetails'

const olist = [{SL:1, OrderId:123489, date: "10 Jan, 23  9:30AM", customer:"Sherril", orderstatus:"Delivered", totalpay:"$397", action:"hu,bi"},
    {SL:1, OrderId:123489, date: "10 Jan, 23  9:30AM", customer:"Sherril", orderstatus:"Delivered", totalpay:"$397", action:"hi,bi"},
    {SL:1, OrderId:123489, date: "10 Jan, 23  9:30AM", customer:"Sherril", orderstatus:"Delivered", totalpay:"$397", action:"hi,bi"},
    {SL:1, OrderId:123489, date: "10 Jan, 23  9:30AM", customer:"Sherril", orderstatus:"Delivered", totalpay:"$397", action:"hi,bi"},
]  
console.log(olist.length);


const Orders1 = () => {
  const [showOrders, setShowOrders] = useState(false);
  if (showOrders) {
    return <VendorSetails />;
  }
  return (
    <div className="w-[1512px] min-h-screen bg-neutral-100 p-8 relative">
      <div className="absolute left-0 top-0 h-full w-16 bg-[#ddf2d0] rounded-br-[40px]" />
      
      <div className="ml-[426px] space-y-6">
        <h1 className="text-xl font-semibold font-['Poppins']">Vendor Details</h1>
        
        <div className="space-y-4">
          <nav className="flex gap-9 items-center font-['Poppins'] font-semibold text-base">
            <span className="text-[#b0b1af] cursor-pointer" onClick={()=>setShowOrders(true)}>Shop Overview</span>
            <span className="text-[#658e4c] underline">Order</span>
            <span className="text-[#b0b1ae]">Product</span>
          </nav>

          <div className="w-[1037px] bg-[#fdfffc] rounded-lg shadow-md p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold">Orders</span>
                <span className="px-2 py-0.5 bg-[#d5d8d3] rounded-full text-xs">{olist.length}</span>
              </div>
              
              <button className="flex items-center gap-2 px-3.5 py-2 bg-[#7aa262]/20 border border-[#7aa262] rounded">
                <img className="w-[17px] h-[16px]" src={excel} alt="excel" />
                <span className="text-[#1d211b] text-lg font-semibold">Export</span>
              </button>
            </div>

            <table className="w-full">
              <thead>
                <tr className="bg-[#ddf2d0] text-black font-['Poppins']">
                  {['SL', 'Order Id', 'Date', 'Customer', 'Order Status', 'Total Pay', 'Action'].map((header) => (
                    <th key={header} className="px-[21px] py-3 text-left text-sm font-medium">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {olist.map((order, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    {Object.entries(order).slice(0, -1).map(([key, value]) => (
                      <td key={key} className="px-[21px] py-3">
                        <span className="text-black/80 font-normal">{value}</span>
                      </td>
                    ))}
                    <td className="px-[21px] py-3">
                      <div className="flex gap-2">
                        <img src={see} alt="see" className="w-5 h-5" />
                        <img src={download} alt="download" className="w-5 h-5" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders1