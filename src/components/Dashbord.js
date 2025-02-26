import React from 'react'
import Graph from '../images/Graph.png'
import moving from '../images/moving.png'
import activeorders from '../images/activeorders.png'
import visibility from '../images/visibility.png'
import stockalerts from '../images/stockalerts.png'
import restock from '../images/restock.png'
import Newcards from './Newcards'
import Topvendor from './Topvendor'

const Dashboard = () => {
  // Data for cards
  const dashboardCards = [
    {
      type: "primary",
      title: "Total Sales",
      value: "$ 3200",
      bgColor: "#7aa262",
      titleColor: "#f9ff8c",
      valueColor: "white",
      icon: Graph,
      indicator: {
        text: "+6% increase",
        icon: moving,
        color: "white"
      }
    },
    {
      type: "secondary",
      title: "Active Orders",
      titleIcon: activeorders,
      value: "15",
      unit: "Products",
      valueColor: "#4f6527",
      items: [
        {
          color: "#ffe046",
          borderColor: "#c18820",
          text: "Pending Orders: ",
          count: "7"
        }
      ],
      action: {
        text: "View all",
        icon: visibility
      }
    },
    {
      type: "secondary",
      title: "Stock Alerts",
      titleIcon: stockalerts,
      items: [
        {
          color: "#ffa846",
          borderColor: "#c18820",
          count: "4",
          text: "items Low in stock"
        },
        {
          color: "#ee4e49",
          borderColor: "#9f1a1a",
          count: "2",
          text: "items Low in stock"
        }
      ],
      action: {
        text: "Restock",
        icon: restock
      }
    }
  ];

  // Render a card based on its type
  const renderCard = (card, index) => {
    if (card.type === "primary") {
      return (
        <div key={index} className="w-[311px] h-[148px] p-4 bg-[#7aa262] rounded-[15px] flex flex-col justify-between items-start overflow-hidden" style={{ backgroundColor: card.bgColor }}>
          <h1 className="text-sm font-medium font-['Poppins']" style={{ color: card.titleColor }}>{card.title}</h1>
          <h1 className={`text-2xl font-bold font-['Poppins']`} style={{ color: card.valueColor }}>{card.value}</h1>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 absolute bg-[#d9d9d9]" />
              <img className="absolute left-[2px] top-[6px]" src={card.indicator.icon} alt="indicator-icon" />
            </div>
            <h3 className={`text-sm font-normal font-['Poppins']`} style={{ color: card.indicator.color }}>{card.indicator.text}</h3>
            <img className="w-[74px] h-[74px] mt-2 ml-16" src={card.icon} alt="card-icon" />
          </div>
        </div>
      );
    } else {
      return (
        <div key={index} className="w-[311px] h-[148px] p-4 bg-white rounded-[15px] border border-[#c1c1c1] flex flex-col justify-between items-start overflow-hidden">
          <div className="flex items-center gap-2">
            <div className="w-[19px] h-[19px] relative">
              <div className="w-[19px] h-[19px] absolute bg-[#e6e6e6] rounded-full" />
              <img className="absolute left-[3px] top-[3px]" src={card.titleIcon} alt={`${card.title}-icon`} />
            </div>
            <h1 className="text-[#1c1c1c] text-sm font-medium font-['Poppins']">{card.title}</h1>
          </div>
          
          {card.value && (
            <div className={`text-2xl font-bold font-['Poppins']`} style={{ color: card.valueColor }}>
              {card.value} {card.unit && <span className="text-[#767676] text-xs font-normal font-['Poppins']">{card.unit}</span>}
            </div>
          )}
          
          <div className="flex flex-col gap-2">
            {card.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color, borderColor: item.borderColor, borderWidth: '1px' }} />
                <h1 className="text-[#1c1c1c] text-sm font-['Poppins']">
                  {item.text && (
                    <>{item.text}<span className="font-semibold">{item.count}</span></>
                  )}
                  {!item.text && (
                    <><span className="font-semibold">{item.count} </span><span className="text-xs font-normal">{item.text}</span></>
                  )}
                </h1>
              </div>
            ))}
          </div>
          
          <div className="self-stretch px-1.5 py-0.5 bg-[#e2e2e2] rounded-lg flex items-center gap-1">
            <div className="w-3 h-3 relative">
              <div className="w-3 h-3 absolute bg-[#d9d9d9]" />
              <img className="absolute left-[1px] top-[1px]" src={card.action.icon} alt="action-icon" />
            </div>
            <h1 className="text-black text-[10px] font-normal font-['Poppins']">{card.action.text}</h1>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-[1094px] h-auto relative bg-white overflow-hidden p-4">
      <div className="text-black text-[32px] font-medium font-['Poppins'] mb-4">Overview</div> 

      <div className=" grid grid-cols-3 gap-4">
        {dashboardCards.map((card, index) => renderCard(card, index))}
      </div>

      <div className="mt-8">
        <Newcards />
      </div>

      <div className="mt-8">
        <Topvendor />
      </div>
    </div>
  );
}

export default Dashboard