import React, { useState } from 'react';
import HeaderTabs from './HeaderTabs';
import NotificationsOrders from './NotificationsOrders';
import Inventry from './Inventry';
import NotificationVendor from './NotificationVendor';
import NotificationCustomer from './NotificationCustomer';
import Notification from './Notification';

const MainComponent = () => {
  const [activeTab, setActiveTab] = useState('all');

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return <NotificationsOrders />;
      case 'inventory':
        return <Inventry />;
      case 'vendor':
        return <NotificationVendor />;
      case 'customer':
        return <NotificationCustomer />;
      default:
        return <Notification />;
    }
  };

  return (
    <div className="w-full max-w-md bg-white">
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  );
};

export default MainComponent;
