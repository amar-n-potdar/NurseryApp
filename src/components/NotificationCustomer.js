import React, { useState } from 'react';
import customerticket from '../images/customerticket.png';
import right from "../images/right.svg";
import wrong from "../images/wrong.svg";
import NotificationsOrders from './NotificationsOrders';
import Inventry from './Inventry';
import NotificationVendor from './NotificationVendor';

const notifications = [
  {
    id: 1,
    img: customerticket,
    type: 'review',
    title: 'Customer has posted a new review for Item ABC.',
    subtitle: 'The review has 4 Stars Rating',
    viewText: 'View Details'
  },
  {
    id: 2,
    img: customerticket,
    type: 'ticket',
    title: 'Customer has raised the Ticket for the Delivery issue',
    subtitle: 'Photos received as attachment.',
    viewText: 'View Profile'
  },
  {
    id: 3,
    img: customerticket,
    type: 'review',
    title: 'Customer has posted a new review for Item ABC.',
    subtitle: 'The review has 4 Stars Rating',
    viewText: 'View Details'
  },
  {
    id: 4,
    img: customerticket,
    type: 'ticket',
    title: 'Customer has raised the Ticket for the Delivery issue',
    subtitle: 'Photos received as attachment.',
    viewText: 'View Profile'
  }
];

const NotificationCustomer = () => {
  const [activeTab, setActiveTab] = useState('all');

  const renderButtons = (type) => {
    if (type === 'review') {
      return (
        <>
          <button className="w-[120px] h-[26px] p-2.5 bg-[#7aa262] rounded-[3px] flex items-center justify-center gap-2.5">
            <span className="text-white text-lg"><img src={right}/></span>
            <span className="text-white text-xs font-normal font-['Poppins']">Publish</span>
          </button>
          <button className="w-[120px] h-[26px] p-2.5 bg-[#ff5d5d] rounded-[3px] flex items-center justify-center gap-2.5">
            <span className="text-white text-lg"><img src={wrong}/></span>
            <span className="text-white text-xs font-normal font-['Poppins']">Dismiss</span>
          </button>
        </>
      );
    }
    return (
      <>
        <button className="w-[120px] h-[26px] p-2.5 bg-[#7aa262] rounded-[3px] flex items-center justify-center">
          <span className="text-white text-xs font-normal font-['Poppins']">Reply</span>
        </button>
        <button className="w-[120px] h-[26px] p-2.5 bg-[#e7e7e7] rounded-[3px] flex items-center justify-center">
          <span className="text-[#7aa262] text-[11px] font-medium font-['Poppins']">View Ticket</span>
        </button>
      </>
    );
  };

  return (
    <div className="p-4 space-y-4">
      {notifications.map((notification) => (
        <div key={notification.id} className="w-[389px] h-36 p-2.5 bg-white flex gap-2.5">
          <div className="w-[94px] flex flex-col items-center gap-2.5">
            <img 
              className="w-16 h-16 rounded-full border border-white object-cover" 
              src={notification.img}
              alt="Customer profile" 
            />
            <button className="w-full h-[50px] px-[18.95px] py-[3.29px] bg-[#e7e7e7] rounded-[5px] flex items-center justify-center">
              <span className="text-[#7aa262] text-xs font-medium font-['Poppins']">
                {notification.viewText.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    <br />
                  </React.Fragment>
                ))}
              </span>
            </button>
          </div>
          
          <div className="w-[265px] flex flex-col gap-5">
            <div className="h-[70px] flex flex-col">
              <p className="text-[#183138] text-sm font-normal font-['Poppins']">
                {notification.title}
              </p>
              <p className="text-[#7e898c] text-[13px] font-normal font-['Poppins']">
                {notification.subtitle}
              </p>
            </div>
            
            <div className="px-5 flex justify-center gap-[15px]">
              {renderButtons(notification.type)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationCustomer;