import React from 'react'
import ordershipped1 from "../images/ordershipped1.png";
import vendorapplication from "../images/vendorapplication.png";
import paymentrecieved from '../images/paymentrecieved.png';
import customerticket from '../images/customerticket.png';

const HEADER_TABS = [
  { id: 'all', label: 'All', isActive: true },
  { id: 'orders', label: 'Orders', isActive: false },
  { id: 'inventory', label: 'Inventory', isActive: false },
  { id: 'vendor', label: 'Vendor', isActive: false },
  { id: 'customer', label: 'Customer', isActive: false }
]

const NOTIFICATION_TYPES = {
  ORDER_SHIPPED: 'orderShipped',
  VENDOR_APPLICATION: 'vendorApplication',
  PAYMENT_RECEIVED: 'paymentReceived',
  CUSTOMER_TICKET: 'customerTicket',
  LOW_STOCK: 'lowStock'
}

// Function to get icon image based on notification type
const getIconImage = (type) => {
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
}

const NOTIFICATIONS = [
  {
    id: 1,
    type: NOTIFICATION_TYPES.ORDER_SHIPPED,
    title: 'Order #12345 Shipped',
    description: 'Your order has been shipped.',
    actions: [
      { label: 'View Details', variant: 'secondary', width: 'narrow', icon: ordershipped1 },
      { label: 'Track Order', variant: 'primary', width: 'narrow', icon: ordershipped1 }
    ],
    showProfile: true
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
        icon: vendorapplication
      },
      { 
        label: 'Reject', 
        variant: 'danger',
        width: 'wide',
        icon: vendorapplication
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
      { label: 'View Details', variant: 'secondary', width: 'narrow', icon: paymentrecieved },
      { label: 'Create Label', variant: 'primary', width: 'narrow', icon: paymentrecieved }
    ],
    showProfile: true
  },
  {
    id: 4,
    type: NOTIFICATION_TYPES.CUSTOMER_TICKET,
    title: 'Customer has raised the Ticket for the Delivery issue',
    description: 'Photos received as attachment.',
    actions: [
      { label: 'Reply', variant: 'primary', width: 'wide', icon: customerticket },
      { label: 'View Ticket', variant: 'secondary', width: 'wide', icon: customerticket }
    ],
    showProfile: true
  },
  {
    id: 5,
    type: NOTIFICATION_TYPES.CUSTOMER_TICKET,
    title: 'Customer has raised the Ticket for the Delivery issue',
    description: 'Photos received as attachment.',
    actions: [
      { label: 'Reply', variant: 'primary', width: 'wide', icon: customerticket },
      { label: 'View Ticket', variant: 'secondary', width: 'wide', icon: customerticket }
    ],
    showProfile: true
  },
  {
    id: 6,
    type: NOTIFICATION_TYPES.LOW_STOCK,
    title: 'Low Stock Alert: Widget A',
    description: 'Widget A is running low on stock.',
    actions: [
      { label: 'View Details', variant: 'secondary', width: 'narrow', icon: customerticket },
      { label: 'Restock', variant: 'primary', width: 'narrow', icon: customerticket }
    ],
    showProfile: true
  }
]

const Button = ({ variant = 'primary', width = 'narrow', icon, label }) => {
  const baseStyles = "py-1.5 rounded text-xs font-medium flex items-center justify-center gap-2"
  const variants = {
    primary: "bg-[#7AA262] text-white",
    secondary: "bg-gray-100 text-[#7AA262]",
    danger: "bg-[#FF5D5D] text-white"
  }
  const widths = {
    narrow: "w-[127.06px] px-[18.95px]",
    wide: "w-[120px] px-6"
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${widths[width]}`}>
      {icon && <img src={icon} alt="" className="w-4 h-4 object-cover" />}
      {label}
    </button>
  )
}

const NotificationCard = ({ notification }) => {
  const { type, title, description, actions, showProfile } = notification
  const [imageError, setImageError] = React.useState(false)
  const image = getIconImage(type)

  const handleImageError = () => {
    setImageError(true)
  }

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
  )

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
  )
}

const Notification = () => {
  return (
    <div className="w-full max-w-md bg-white">
      {/* Header Tabs */}
      <div className="w-full h-16 bg-neutral-100 flex items-center justify-start px-4 gap-2">
        {HEADER_TABS.map(tab => (
          <div 
            key={tab.id}
            className={`px-4 py-2 rounded-lg ${tab.isActive ? 'bg-[#DDF2D0]' : 'bg-white'}`}
          >
            <span className="text-sm font-medium">{tab.label}</span>
          </div>
        ))}
      </div>

      {/* Notification List */}
      <div className="p-4 space-y-4">
        {NOTIFICATIONS.map(notification => (
          <NotificationCard 
            key={notification.id} 
            notification={notification} 
          />
        ))}
      </div>
    </div>
  )
}

export default Notification