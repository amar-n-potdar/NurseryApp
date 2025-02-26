import React from 'react';
import customerticket from '../images/customerticket.png';

const vendors = [
  {
    id: 1,
    img: customerticket,
    name: "XYZ Nursery",
    documents: "A, B and C documents provided"
  },
  {
    id: 2,
    img: customerticket,
    name: "XYZ Nursery",
    documents: "A, B and C documents provided"
  },
  {
    id: 3,
    img: customerticket,
    name: "XYZ Nursery",
    documents: "A, B and C documents provided"
  },
  {
    id: 4,
    img: customerticket,
    name: "XYZ Nursery",
    documents: "A, B and C documents provided"
  }
];

const NotificationVendor = () => {
  return (
    <div className="p-4 space-y-4">
      {vendors.map((vendor) => (
        <div key={vendor.id} className="p-2.5 mb-4 bg-white flex gap-2.5">
          <div className="flex flex-col items-center gap-2.5">
            <img 
              src={vendor.img}
              alt="Vendor application"
            />
            <button className="px-4 py-1 bg-[#e7e7e7] rounded text-[#7aa262] text-xs font-medium">
              View<br/>Profile
            </button>
          </div>
          
          <div className="flex-1 flex flex-col gap-5">
            <div>
              <p className="text-[#183138] text-sm mb-1">
                New Vendor Application from {vendor.name} received
              </p>
              <p className="text-[#7e898c] text-[13px]">{vendor.documents}</p>
            </div>
            
            <div className="flex justify-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#7aa262] rounded text-white text-xs">
                <span className="font-bold text-sm">✓</span>
                Accept
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#ff5d5d] rounded text-white text-xs">
                <span className="font-bold text-sm">✕</span>
                Reject
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationVendor;