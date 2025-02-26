import React from 'react';

const HEADER_TABS = [
  { id: 'all', label: 'All' },
  { id: 'orders', label: 'Orders' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'vendor', label: 'Vendor' },
  { id: 'customer', label: 'Customer' }
];

const HeaderTabs = ({ activeTab, setActiveTab }) => (
  <div className="w-full h-16 bg-neutral-100 flex items-center justify-start px-4 gap-2">
    {HEADER_TABS.map(tab => (
      <div 
        key={tab.id}
        className={`px-4 py-2 rounded-lg ${activeTab === tab.id ? 'bg-[#DDF2D0]' : 'bg-white'} cursor-pointer`}
        onClick={() => setActiveTab(tab.id)}
      >
        <span className="text-sm font-medium">{tab.label}</span>
      </div>
    ))}
  </div>
);

export default HeaderTabs;
