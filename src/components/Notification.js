import React, { useState } from 'react';
import ordershipped1 from "../images/ordershipped1.png";
import vendorapplication from "../images/vendorapplication.png";
import paymentrecieved from '../images/paymentrecieved.png';
import customerticket from '../images/customerticket.png';
import NotificationsOrders from './NotificationsOrders';
import Inventry from './Inventry';
import NotificationVendor from './NotificationVendor';
import NotificationCustomer from './NotificationCustomer';
import HeaderTabs from './HeaderTabs';

const AcceptIcon = () => (
  <svg 
    width="18" 
    height="19" 
    viewBox="0 0 18 19" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M15 4.92969L6.75 13.1797L3 9.42969" 
      stroke="white" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const RejectIcon = () => (
  <svg 
    width="18" 
    height="19" 
    viewBox="0 0 18 19" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M15 15.4297L3 3.42971M15 3.42969L3.00002 15.4297" 
      stroke="white" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
);

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

const NOTIFICATIONS = [
  {
    id: 1,
    type: NOTIFICATION_TYPES.ORDER_SHIPPED,
    title: 'Order #12345 Shipped',
    description: 'Your order has been shipped.',
    actions: [
      { label: 'View Details', variant: 'secondary', width: 'narrow' },
      { label: 'Track Order', variant: 'primary', width: 'narrow' }
    ]
  },
  {
    id: 2,
    type: NOTIFICATION_TYPES.VENDOR_APPLICATION,
    title: 'New Vendor Application from XYZ Nursery received',
    description: 'A, B and C documents provided',
    actions: [
      { 
        label: 'Accept', 
        variant: 'primary',
        width: 'wide',
        icon: <AcceptIcon />
      },
      { 
        label: 'Reject', 
        variant: 'danger',
        width: 'wide',
        icon: <RejectIcon />
      }
    ],
    showProfile: true
  },
  {
    id: 3,
    type: NOTIFICATION_TYPES.PAYMENT_RECEIVED,
    title: 'Payment Received for Order #1265',
    description: 'Please prepare order to be shipped',
    actions: [
      { label: 'View Details', variant: 'secondary', width: 'narrow' },
      { label: 'Create Label', variant: 'primary', width: 'narrow' }
    ]
  },
  {
    id: 4,
    type: NOTIFICATION_TYPES.CUSTOMER_TICKET,
    title: 'Customer has raised the Ticket for the Delivery issue',
    description: 'Photos received as attachment.',
    actions: [
      { label: 'Reply', variant: 'primary', width: 'wide' },
      { label: 'View Ticket', variant: 'secondary', width: 'wide' }
    ],
    showProfile: true
  },
  {
    id: 5,
    type: NOTIFICATION_TYPES.CUSTOMER_TICKET,
    title: 'Customer has raised the Ticket for the Delivery issue',
    description: 'Photos received as attachment.',
    actions: [
      { label: 'Reply', variant: 'primary', width: 'wide' },
      { label: 'View Ticket', variant: 'secondary', width: 'wide' }
    ],
    showProfile: true
  },
  {
    id: 6,
    type: NOTIFICATION_TYPES.LOW_STOCK,
    title: 'Low Stock Alert: Widget A',
    description: 'Widget A is running low on stock.',
    actions: [
      { label: 'View Details', variant: 'secondary', width: 'narrow' },
      { label: 'Restock', variant: 'primary', width: 'narrow' }
    ]
  }
];

const Button = ({ variant = 'primary', width = 'narrow', icon, label }) => {
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
      {icon}
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

const Notification = () => {
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
        return (
          <div className="p-4 space-y-4">
            {NOTIFICATIONS.map(notification => (
              <NotificationCard 
                key={notification.id} 
                notification={notification} 
              />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="w-full max-w-md bg-white">
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  );
};

export default Notification;