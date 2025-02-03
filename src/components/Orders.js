import React from "react";
import image1 from "../images/image1.png";
import status from "../images/status.svg";
import clock from "../images/clock.svg";
import bloomscape from "../images/bloomscape.png";
import truck from "../images/truck.svg"
import plusicon from "../images/plusicon.svg"
import dabba from "../images/dabba.svg"
import danger from '../images/danger.svg'
import pending from '../images/pending.svg'
import up from '../images/up.svg'
import down from '../images/down.svg'

const Orders = () => {
  const List = [
    { name: "New orders", img: plusicon, number: 7 },
    { name: "In transit ", img: truck, number: 5 },
    { name: "Delivered ", img: dabba, number: 15 },
    { name: "Cancelled ", img: danger, number: 3 },
    { name: "Pending", img: pending, number: 2 },
  ];

  const filters = ["potsize", "category", "quantity", "location"];
  const newList = [
    {
      img: bloomscape,
      name: "Monstera Deliciosa",
      Description: "Growing 50 feet tall",
      OrderId: "0001",
      Quantity: "20",
      actions: "Actions",
      status: status,
      clock: clock,
    },
    {
      img: bloomscape,
      name: "Monstera Deliciosa",
      Description: "Growing 50 feet tall",
      OrderId: "0001",
      Quantity: "20",
      actions: "Actions",
      status: status,
      clock: clock,
    },
    {
      img: bloomscape,
      name: "Monstera Deliciosa",
      Description: "Growing 50 feet tall",
      OrderId: "0001",
      Quantity: "20",
      actions: "Actions",
      status: status,
      clock: clock,
    },
    {
      img: bloomscape,
      name: "Monstera Deliciosa",
      Description: "Growing 50 feet tall",
      OrderId: "0001",
      Quantity: "20",
      actions: "Actions",
      status: status,
      clock: clock,
    },
    {
      img: bloomscape,
      name: "Monstera Deliciosa",
      Description: "Growing 50 feet tall",
      OrderId: "0001",
      Quantity: "20",
      actions: "Actions",
      status: status,
      clock: clock,
    },
  ];

  return (
    <div className="w-[1114px] h-[1703px] relative bg-neutral-100 flex-col justify-start items-start inline-flex overflow-hidden">
      <div className="w-[1061px]" />
      <div className="w-[1019px] flex flex-col gap-6">
        {/* Main List */}
        <div className="flex flex-wrap gap-4">
  {List.map((item, index) => (
    <div
      key={index}
      className="w-[163px] h-[88px] p-[15px] bg-white rounded-[15px] border border-[#c1c1c1] justify-start items-center gap-5 flex"
    >
      <div className="w-6 h-6 relative bg-white overflow-hidden flex-shrink-0">
        <img alt="" src={item.img} className="w-full h-full object-contain" />
      </div>
      <div className="w-[83px] flex-col justify-start items-start inline-flex">
        <div className="self-stretch text-[#393939] text-base font-medium font-['Poppins'] leading-7">
          {item.name}
        </div>
        <div className="self-stretch text-[#3b3f44] text-base font-bold font-['Inter'] leading-[39.09px]">
          {item.number}
        </div>
      </div>
    </div>
  ))}
</div>

        
        <div className="text-black text-2xl font-medium font-['Poppins']">List Of Orders</div>


        {/* Filters Section */}
        <div className="flex flex-wrap gap-4">
          {filters.map((filter, index) => (
            <div
              key={index}
              className="h-11 rounded-[11px] border border-[#c1c1c1] justify-start items-center gap-0.5 flex"
            >
              <div className="h-11 p-2.5 justify-center items-center gap-2.5 flex">
                <div className="text-black text-base font-normal font-['Poppins']">
                  {filter}
                </div>
              </div>
             
              <div className="w-[73px] h-[22px] pl-[58px] pr-[3px] pt-[3px] pb-[2.50px] rounded border border-black flex-col justify-center items-start gap-1.5 inline-flex overflow-hidden">
  <div className="w-3 h-[5.25px] flex justify-center items-center">
    <span className="text-black text-sm"><img src={up}/></span>
  </div>
  <div className="w-3 h-[5.25px] flex justify-center items-center">
    <span className="text-black text-sm"><img src={down}/></span>
  </div>
</div>



            </div>
          ))}
          <div className="p-2.5 bg-[#7aa262] rounded-[9px] justify-center items-center gap-2.5 flex">
            <div className="text-white text-sm font-normal font-['Poppins']">
              Filter
            </div>
          </div>
        </div>
        <div className="h-6 justify-between items-center inline-flex">
          <input
            type="text"
            className="text-[#a6a6a6] text-xs font-normal font-['Poppins']"
            placeholder="Search by vendor/customer or more..."
          />
          <div className="w-6 h-6 relative overflow-hidden" />
        </div>

        <div className="flex flex-col gap-6">
          {newList.map((item, index) => (
            <div
              key={index}
              className="h-[168px] px-[29px] py-[21px] bg-white rounded-[20px] flex-col justify-start items-start gap-2.5 inline-flex"
            >
              <div className="w-[972px] h-[126px] px-[17px] py-[41px] flex-col justify-start items-start gap-2.5 flex">
                <div className="w-[972px] justify-start items-center gap-[82px] inline-flex">
                  <div className="h-[126px] justify-start items-center gap-[39px] flex">
                    <img
                      className="w-[146px] h-[126px] rounded-[15px]"
                      src={item.img}
                      alt={item.name}
                    />
                    <div className="w-[162px] flex-col justify-start items-start inline-flex">
                      <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
                        <div className="text-black text-sm font-medium font-['Poppins']">
                          {item.name}
                        </div>
                      </div>
                      <div className="self-stretch h-[38px] flex-col justify-start items-start gap-[15px] flex">
                        <div className="self-stretch p-2.5 justify-center items-center gap-2.5 inline-flex">
                          <div className="w-[141px] text-[#929292] text-xs font-light font-['Poppins'] tracking-tight">
                            Category : Pot plant
                          </div>
                        </div>
                      </div>
                      <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
                        <div className="text-[#929292] text-xs font-light font-['Poppins'] tracking-tight">
                          Pot Size : Medium
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[271px] p-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch justify-start items-center gap-3.5 inline-flex">
                      <div className="text-black text-sm font-medium font-['Inter']">
                        Description :
                      </div>
                      <div className="text-[#323c47] text-[13px] font-normal font-['Poppins'] tracking-tight">
                        {item.Description}
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-3.5 inline-flex">
                      <div className="text-black text-sm font-medium font-['Inter']">
                        Order Id :
                      </div>
                      <div className="text-[#323c47] text-[13px] font-normal font-['Poppins'] tracking-tight">
                        {item.OrderId}
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-3.5 inline-flex">
                      <div className="text-black text-sm font-medium font-['Inter']">
                        Quantity :
                      </div>
                      <div className="text-[#323c47] text-[13px] font-normal font-['Poppins'] tracking-tight">
                        {item.Quantity}
                      </div>
                    </div>


                  </div>

                  <div className="justify-start items-center gap-3.5 inline-flex">
                  <div className="h-11 p-2.5 bg-[#7aa262] rounded-lg justify-center items-center gap-2.5 inline-flex">
                    <button className="text-white text-xs font-medium font-['Poppins']">
                      {item.actions}
                    </button>
                  </div>
                  <div className="h-11 p-2.5 bg-white rounded-lg border border-[#7aa262] justify-center items-center gap-2.5 inline-flex">
                    <img className="w-7 h-7" src={item.status} alt="Status" />
                  </div>
                  <div className="w-6 h-6 relative overflow-hidden">
                    <img className="w-6 h-6" src={item.clock} alt="Clock" />
                  </div>
                </div>
                </div>
               



              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
