import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RequestItem from './RequestItem';

const AcceptedRejected = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { acceptedRejectedList } = location.state || { acceptedRejectedList: [] };

  return (
    <div className="w-[1094px] h-[1357px] pl-[46px] pr-[47px] pt-1.5 pb-[51px] bg-neutral-100 flex-col justify-start items-center inline-flex overflow-auto">
      <div className="self-stretch h-[1300px] bg-neutral-100 flex-col justify-center items-center gap-4 inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-[#5c5c5c] text-lg font-semibold font-['Poppins']">
              Accepted/Rejected Requests
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="p-2 bg-[#7aa262] text-white rounded"
          >
            Back
          </button>
        </div>
        <div className="h-[1237px] bg-neutral-100 rounded border border-[#5b5b5b] flex-col justify-start items-start gap-5 flex overflow-hidden">
          <div className="w-[1001px] bg-white/0 justify-start items-start inline-flex overflow-hidden">
            <div className="w-[120px] self-stretch bg-[#ececec] flex-col justify-center items-center inline-flex">
              <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex overflow-hidden">
                <div className="text-black text-base font-medium font-['Poppins'] tracking-tight">
                  Product
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 self-stretch bg-[#ececec] flex-col justify-center items-center inline-flex">
              <div className="w-[120px] px-3 py-2.5 justify-start items-start inline-flex overflow-hidden">
                <div className="grow shrink basis-0 text-black text-base font-medium font-['Poppins'] tracking-tight">
                  Product Name
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 self-stretch bg-[#ececec] flex-col justify-center items-center inline-flex">
              <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex overflow-hidden">
                <div className="text-black text-base font-medium font-['Poppins'] tracking-tight">
                  category
                </div>
              </div>
            </div>
            <div className="w-[70px] self-stretch bg-[#ececec] flex-col justify-center items-center inline-flex">
              <div className="w-[120px] px-3 py-2.5 justify-center items-center inline-flex overflow-hidden">
                <div className="text-black text-base font-medium font-['Poppins'] tracking-tight">
                  Price
                </div>
              </div>
            </div>
            <div className="w-[109px] self-stretch bg-[#ececec] flex-col justify-center items-center inline-flex">
              <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex overflow-hidden">
                <div className="text-black text-base font-medium font-['Poppins'] tracking-tight">
                  Vendor
                </div>
              </div>
            </div>
            <div className="w-[136px] self-stretch bg-[#ececec] flex-col justify-center items-center inline-flex">
              <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex overflow-hidden">
                <div className="text-black text-base font-medium font-['Poppins'] tracking-tight">
                  Status
                </div>
              </div>
            </div>
            <div className="w-[136px] self-stretch bg-[#ececec] flex-col justify-center items-center inline-flex">
              <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex overflow-hidden">
                <div className="text-black text-base font-medium font-['Poppins'] tracking-tight">
                  Action
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {acceptedRejectedList.map((item, index) => (
              <div className="w-[1001px] bg-white/0 justify-start items-start inline-flex overflow-hidden" key={index}>
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
                    <div className="text-[#323c47] text-sm font-normal font-['Poppins'] tracking-tight">
                      {item.vendor}
                    </div>
                  </div>
                </div>
                <div className="w-[136px] self-stretch bg-white flex-col justify-center items-center inline-flex">
                  <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex overflow-hidden">
                    <div className={`p-2.5 rounded-[3px] justify-center items-center gap-2 flex text-white text-xs font-normal font-['Poppins'] ${item.status === 'accepted' ? 'bg-[#7aa262]' : 'bg-[#ff5d5d]'}`}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
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
                    <button>
                      <img src={item.Action3} alt="action3" className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptedRejected;
