import React, { useState } from 'react';
import ordershipped1 from "../images/ordershipped1.png";
import vendorapplication from "../images/vendorapplication.png";
import paymentrecieved from '../images/paymentrecieved.png';
import customerticket from '../images/customerticket.png';
import Inventry from './Inventry';
import NotificationVendor from './NotificationVendor';
import NotificationCustomer from './NotificationCustomer';

const HEADER_TABS = [
  { id: 'all', label: 'All' },
  { id: 'orders', label: 'Orders' },
  { id: 'inventory', label: 'Inventory' },
  { id: 'vendor', label: 'Vendor' },
  { id: 'customer', label: 'Customer' }
];

const NOTIFICATION_TYPES = {
  ORDER_SHIPPED: 'orderShipped',
  VENDOR_APPLICATION: 'vendorApplication',
  PAYMENT_RECEIVED: 'paymentReceived',
  CUSTOMER_TICKET: 'customerTicket',
  LOW_STOCK: 'lowStock'
};

const getNotificationImage = (type) => {
  switch (type) {
    case NOTIFICATION_TYPES.ORDER_SHIPPED:
      return ordershipped1;
    case NOTIFICATION_TYPES.VENDOR_APPLICATION:
      return vendorapplication;
    case NOTIFICATION_TYPES.PAYMENT_RECEIVED:
      return paymentrecieved;
    case NOTIFICATION_TYPES.CUSTOMER_TICKET:
    case NOTIFICATION_TYPES.LOW_STOCK:
      return customerticket;
    default:
      return customerticket;
  }
};

const NOTIFICATIONS_ORDERS = [
  {
    id: 1,
    type: NOTIFICATION_TYPES.ORDER_SHIPPED,
    title: 'New order placed by customer',
    description: 'Set order for bidding by orders.',
    actions: [
      { label: 'View Details', variant: 'secondary', width: 'narrow' },
      { label: 'Place for Bid', variant: 'primary', width: 'narrow' }
    ]
  },
  {
    id: 2,
    type: NOTIFICATION_TYPES.ORDER_SHIPPED,
    title: 'Payment Received for order #1265',
    description: 'Please prepare orders to be shipped.',
    actions: [
      { label: 'View Details', variant: 'secondary', width: 'narrow' },
      { label: 'Process Order', variant: 'primary', width: 'narrow' }
    ]
  },
  {
    id: 3,
    type: NOTIFICATION_TYPES.ORDER_SHIPPED,
    title: 'Order #12345 Shipped',
    description: 'Your order has been shipped.',
    actions: [
      { label: 'View Details', variant: 'secondary', width: 'narrow' },
      { label: 'Track Order', variant: 'primary', width: 'narrow' }
    ]
  },
  {
    id: 4,
    type: NOTIFICATION_TYPES.ORDER_SHIPPED,
    title: 'Order #12348 Shipped',
    description: 'Set order for bidding by orders.',
    actions: [
      { label: 'View Details', variant: 'secondary', width: 'narrow' },
      { label: 'Track Order', variant: 'primary', width: 'narrow' }
    ]
  },
  {
    id: 4,
    type: NOTIFICATION_TYPES.ORDER_SHIPPED,
    title: 'New order placed by customer',
    description: 'Your order has been shipped.',
    actions: [
      { label: 'View Details', variant: 'secondary', width: 'narrow' },
      { label: 'Place for Bid', variant: 'primary', width: 'narrow' }
    ]
  }
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

const NotificationCard = ({ notification }) => {
  const { type, title, description, actions, showProfile } = notification;
  const [imageError, setImageError] = React.useState(false);
  const image = getNotificationImage(type);

  const handleImageError = () => {
    setImageError(true);
  };

  const ImageContainer = showProfile ? (
    <div className="flex flex-col items-center gap-2">
      <img 
        src={imageError ? customerticket : image} 
        alt="Profile" 
        onError={handleImageError}
        className="w-16 h-16 rounded-full border-2 border-white object-cover"
      />
      <button className="w-full px-2 py-1.5 bg-gray-100 rounded text-[#7AA262] text-xs font-medium text-center">
        View<br />Profile
      </button>
    </div>
  ) : (
    <img 
      src={imageError ? customerticket : image}
      alt="Notification" 
      onError={handleImageError}
      className={`object-cover rounded-lg ${
        type === NOTIFICATION_TYPES.LOW_STOCK ? 'w-[85px] h-[103px]' : 'w-16 h-16'
      }`}
    />
  );

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <div className="flex gap-6">
        {ImageContainer}
        <div className="flex-1">
          <h3 className="text-[#183138] text-sm mb-1">{title}</h3>
          <p className="text-[#7E898C] text-sm mb-4">{description}</p>
          <div className={`flex ${showProfile ? 'justify-center gap-4' : 'gap-2'}`}>
            {actions.map((action, index) => (
              <Button key={index} {...action} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const NotificationsOrders = () => {
  return (
    <div className="p-4 space-y-4">
      {NOTIFICATIONS_ORDERS.map(notification => (
        <NotificationCard 
          key={notification.id} 
          notification={notification} 
        />
      ))}
    </div>
  );
};

export default NotificationsOrders;