import React from "react";
import right from "../images/right.svg";
import wrong from "../images/wrong.svg";

const RequestItem = ({ item, handleAccept, handleRejectClick, handleDelete }) => {
  return (
    <div className="w-[1001px] bg-white/0 justify-start items-start inline-flex overflow-hidden">
      <div className="w-[120px] self-stretch py-2.5 bg-white flex-col justify-center items-center inline-flex">
        <img
          className="w-[55px] h-[65px] px-[2.65px] py-[5.30px] rounded-[3px] shadow-[0px_1.0607415437698364px_1.0607415437698364px_0px_rgba(0,0,0,0.25)]"
          src={item.img}
          alt={item.name}
        />
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white flex-col justify-center items-center inline-flex">
        <div className="w-[120px] px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Poppins'] leading-normal tracking-wide">
            {item.name}
          </div>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch bg-white flex-col justify-center items-center inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Poppins'] leading-tight">
            {item.category}
          </div>
        </div>
      </div>
      <div className="w-[70px] self-stretch bg-white flex-col justify-center items-center inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
          <div className="text-[#323c47] text-sm font-normal font-['Poppins'] tracking-tight">
            {item.price}
          </div>
        </div>
      </div>
      <div className="w-[109px] self-stretch bg-white flex-col justify-center items-center inline-flex">
        <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex overflow-hidden">
          <div className="text-black text-base font-normal font-['Poppins'] leading-tight">
            {item.vendor}
          </div>
        </div>
      </div>
      <div className="w-[228px] self-stretch bg-white flex-col justify-center items-center inline-flex">
        <div className="self-stretch px-5 justify-center items-center gap-[15px] inline-flex">
          <div className="justify-start items-start gap-2.5 flex">
            <div className="p-2.5 bg-[#7aa262] rounded-[3px] justify-center items-center gap-2 flex">
              <div className="w-[18px] h-[18px] relative flex-col justify-start items-start inline-flex overflow-hidden" />
              <img alt="" src={right} />
              <button
                onClick={handleAccept}
                className="text-white text-xs font-normal font-['Poppins']"
              >
                {item.A1}
              </button>
            </div>
          </div>
          <div className="justify-start items-start gap-3 flex">
            <div className="p-2.5 bg-[#ff5d5d] rounded-[3px] justify-center items-center gap-2.5 flex">
              <div className="w-[18px] h-[18px] relative flex-col justify-start items-start inline-flex overflow-hidden" />
              <img alt="" src={wrong} />
              <button
                onClick={handleRejectClick}
                className="text-white text-xs font-normal font-['Poppins']"
              >
                {item.A2}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[136px] self-stretch bg-white flex-col justify-center items-center inline-flex">
        <div className="justify-end items-center gap-[15px] inline-flex">
          <button>
            <img src={item.Action1} alt="action1" className="w-6 h-6" />
          </button>
          <button>
            <img src={item.Action2} alt="action2" className="w-6 h-6" />
          </button>
          <button onClick={handleDelete}>
            <img src={item.Action3} alt="action3" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestItem;
