import React from 'react'
import newOrdersIcon from '../images/newOrdersIcon.png'
import pendingIcon from '../images/pendingIcon.png'
import inTransitIcon from '../images/inTransitIcon.png'
import deliveredIcon from '../images/deliveredIcon.png'
import cancelledIcon from '../images/cancelledIcon.png'
import issuesIcon from '../images/issuesIcon.png'

const cardData = [
  {
    title: "New orders",
    count: "07",
    icon: newOrdersIcon
  },
  {
    title: "Pending",
    count: "07",
    icon: pendingIcon
  },
  {
    title: "In Transit",
    count: "07",
    icon: inTransitIcon
  },
  {
    title: "Delivered",
    count: "07",
    icon: deliveredIcon
  },
  {
    title: "Cancelled",
    count: "07",
    icon: cancelledIcon
  },
  {
    title: "Issues",
    count: "07",
    icon: issuesIcon
  }
];

const Newcards = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {cardData.map((card, index) => (
        <div key={index} className="w-[296px] h-[88px] p-[15px] bg-white rounded-[15px] border border-[#c1c1c1] justify-center items-center gap-5 inline-flex">
          <img src={card.icon} alt={card.title} className="w-6 h-6" />
          <div className="w-[91px] flex-col justify-start items-start inline-flex">
            <div className="text-center text-[#393939] text-base font-medium font-['Poppins'] leading-[30.71px]">{card.title}</div>
            <div className="self-stretch text-[#3b3f44] text-base font-bold font-['Inter'] leading-[39.09px]">{card.count}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Newcards