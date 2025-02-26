import React, { useState } from 'react';
import frame2 from '../images/frame2.png';
import NotificationsOrders from './NotificationsOrders';
import NotificationVendor from './NotificationVendor';
import NotificationCustomer from './NotificationCustomer';

const INVENTORY_ITEMS = [
  {
    id: 1,
    title: 'Low Stock Alert: Widget A',
    description: 'Widget A is running low on stock.',
    image: frame2,
    actions: [
      { label: 'View Details', variant: 'secondary', width: 'narrow' },
      { label: 'Restock', variant: 'primary', width: 'narrow' }
    ]
  },
  {
    id: 2,
    title: 'Low Stock Alert: Widget B',
    description: 'Widget B is running low on stock.',
    image: frame2,
    actions: [
      { label: 'View Details', variant: 'secondary', width: 'narrow' },
      { label: 'Restock', variant: 'primary', width: 'narrow' }
    ]
  },
  {
    id: 3,
    title: 'Low Stock Alert: Widget C',
    description: 'Widget C is running low on stock.',
    image: frame2,
    actions: [
      { label: 'View Details', variant: 'secondary', width: 'narrow' },
      { label: 'Restock', variant: 'primary', width: 'narrow' }
    ]
  },
  {
    id: 4,
    title: 'Low Stock Alert: Widget D',
    description: 'Widget D is running low on stock.',
    image: frame2,
    actions: [
      { label: 'View Details', variant: 'secondary', width: 'narrow' },
      { label: 'Restock', variant: 'primary', width: 'narrow' }
    ]
  }
];

const HEADER_TABS = [
  { id: 'all', label: 'All' },
  { id: 'orders', label: 'Orders' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'vendor', label: 'Vendor' },
  { id: 'customer', label: 'Customer' }
];

const Button = ({ variant = 'primary', width = 'narrow', label }) => {
  const baseStyles = "py-1.5 rounded text-xs font-medium flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-[#7AA262] text-white",
    secondary: "bg-gray-100 text-[#7AA262]",
    danger: "bg-[#FF5D5D] text-white"
  };
  const widths = {
    narrow: "w-[127.06px] px-[18.95px]",
    wide: "w-[120px] px-6"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${widths[width]}`}>
      {label}
    </button>
  );
};

const InventoryItem = ({ item }) => (
  <div className="self-stretch h-[123.43px] p-2.5 bg-white flex-col justify-start items-start gap-2.5 flex overflow-hidden">
    <div className="w-[382.43px] justify-start items-center gap-[25px] inline-flex">
      <img className="w-[84.90px] h-[103.43px] rounded-[8.97px]" src={item.image} alt={item.title} />
      <div className="w-[264px] flex-col justify-start items-start gap-[25px] inline-flex">
        <div className="flex-col justify-start items-start flex">
          <div className="w-60 text-[#183138] text-sm font-normal font-['Poppins'] leading-normal">{item.title}</div>
          <div className="w-60 text-[#7e898c] text-sm font-normal font-['Poppins'] leading-snug">{item.description}</div>
        </div>
        <div className="justify-start items-center gap-2.5 inline-flex">
          {item.actions.map((action, index) => (
            <Button key={index} {...action} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Inventry = () => {
  return (
    <div className="w-[414px] h-[697.16px] px-2.5 pb-2.5 flex-col justify-start items-start gap-[15px] flex">
      {INVENTORY_ITEMS.map(item => (
        <InventoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Inventry;