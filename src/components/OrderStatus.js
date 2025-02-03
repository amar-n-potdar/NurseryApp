import React from 'react';
import frame1 from "../images/frame1.png";

const OrderStatus = () => {
  const List = [
    {
      ItemName: "Monstera Deliciosa",
      Category: "Trees",
      OrderId: "0001",
      TrackingId: "0001",
      Describtion:
        "Growing to 50 feet tall and 40 feet wide, the most prominent feature of this red maple is likely its reliable brilliant orange to red fall color which occurs earlier than most other varieties. Somewhat showy red flowers emerge in early spring prior to glossy green lobed foliage. Makes for an excellent shade tree in periodically wet sites. Samaras or helicopters appear in early summer. Frost crack is not uncommon in 'Red Sunset' so avoid heavy pruning and late season fertilizer applications to reduce risk of cracking.",
      Age: "2 months",
      Closedat: "Dec 10, 2024",
      Location: "Mumbai",
      Qty: 20,
      Size: "Pot Size",
      img: frame1,
      placedBy: "Mr David Goggins",
    },
  ];

  return (
    <>
      <div className="w-[1114px] h-[2000px] relative bg-neutral-100 flex-col justify-start items-start inline-flex overflow-hidden p-5">
        <div className="text-[#5c5c5c] text-lg font-semibold font-['Poppins']">
          Order Status
        </div>
        <div className="w-[137px] h-[18px] text-[#ff3c5f] text-xs font-medium font-['Inter']">
          Pending
        </div>

        {List.map((item, index) => (
          <div
            key={index}
            className="relative w-[1020px] h-auto rounded-[20px] border border-[#d2d2d2] flex justify-between items-start gap-5 p-5 mt-5"
          >
            {/* Left Column */}
            <div className="w-[60%] flex-col gap-4 flex">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <div className="w-[90px] text-[#6c6c6c] text-sm font-normal font-['Inter']">
                    Item Name:
                  </div>
                  <div className="text-[#222222] text-sm font-medium font-['Inter']">
                    {item.ItemName}
                  </div>
                </div>
                {/* Added Height Below Item Name */}
                <div className="h-[35px] p-2.5 justify-center items-center gap-2.5 inline-flex"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <div className="w-[90px] text-[#6c6c6c] text-sm font-normal font-['Inter']">
                    Category:
                  </div>
                  <div className="text-[#222222] text-sm font-medium font-['Inter']">
                    {item.Category}
                  </div>
                </div>
                {/* Added Height Below Category */}
                <div className="h-[35px] p-2.5 justify-center items-center gap-2.5 inline-flex"></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[90px] text-[#6c6c6c] text-sm font-normal font-['Inter']">
                  Order Id:
                </div>
                <div className="text-[#222222] text-sm font-medium font-['Inter']">
                  {item.OrderId}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[90px] text-[#6c6c6c] text-sm font-normal font-['Inter']">
                  Tracking Id:
                </div>
                <div className="text-[#222222] text-sm font-medium font-['Inter']">
                  {item.TrackingId}
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-[90px] text-[#6c6c6c] text-sm font-normal font-['Poppins']">
                  Description:
                </div>
                <div className="text-[#222222] text-sm font-medium font-['Poppins'] w-full">
                  {item.Describtion}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[90px] text-[#6c6c6c] text-sm font-normal font-['Inter']">
                  Age:
                </div>
                <div className="text-[#222222] text-sm font-medium font-['Inter']">
                  {item.Age}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[90px] text-[#ff5d5d] text-sm font-normal font-['Inter']">
                  Closed at:
                </div>
                <div className="text-[#222222] text-sm font-medium font-['Inter']">
                  {item.Closedat}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[90px] text-[#6c6c6c] text-sm font-normal font-['Inter']">
                  Location:
                </div>
                <div className="text-[#222222] text-sm font-medium font-['Inter']">
                  {item.Location}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[90px] text-[#6c6c6c] text-sm font-normal font-['Inter']">
                  Qty:
                </div>
                <div className="text-[#222222] text-sm font-medium font-['Inter']">
                  {item.Qty}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[90px] text-[#6c6c6c] text-sm font-normal font-['Inter']">
                  Size:
                </div>
                <div className="text-[#222222] text-sm font-medium font-['Inter']">
                  {item.Size}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-[35%] flex-col items-center gap-4 flex">
              <img
                className="w-[308px] h-[366px] rounded-[20px] border border-[#d2d2d2]"
                src={item.img}
                alt="Product"
              />

              {/* New JSX Below the Image */}
              <div className="w-[308px] h-[55px] rounded-[11px] border border-[#c1c1c1] justify-start items-center gap-[85px] inline-flex">
                <div className="p-2.5 justify-center items-center gap-2.5 flex">
                  <div className="w-[87px] text-black text-sm font-normal font-['Poppins']">
                  <span> Lowest</span> <p>Placed Bid</p>
                  </div>
                  


                
                </div>


                <div className="w-[107px] h-8 pr-[27px] rounded border border-black justify-start items-center gap-[21px] inline-flex overflow-hidden">
    <div className="w-[41px] self-stretch pl-[7px] pr-2.5 pt-[5px] pb-1.5 bg-[#ddf2d0] border border-black justify-center items-center inline-flex overflow-hidden">
        <div><span class="text-black text-sm font-normal font-['Poppins']">$</span><span class="text-[#5188ff] text-xs font-normal font-['Poppins']">US</span></div>
    </div>
    <div className="text-[#222222] text-sm font-medium font-['Inter']">20</div>
</div>
              </div>

              <div className="text-center mr-24">
                <span className="text-[#7aa262] text-sm font-normal font-['Poppins']  ">
                  Placed by
                </span>
                <span className="text-black text-sm font-normal font-['Poppins']">
                  {" "}
                  {item.placedBy} AT 11.05PM
                </span>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-2">
                  <div className="w-[90px] text-[#ff3c5f] text-sm font-normal font-['Poppins']">
                    Issue raised by:
                  </div>
                  <div className="text-[#222222] text-sm font-medium font-['Poppins']">
                    Vendor
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-[90px] text-[#6c6c6c] text-sm font-normal font-['Poppins']">
                    Reason:
                  </div>
                  <div className="text-[#222222] text-sm font-medium font-['Poppins']">
                  -----
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons outside the border */}
            <div className="absolute top-full right-0 mt-4 flex gap-4">
              <div className="p-2.5 rounded-[5px] border border-[#7aa262] justify-center items-center flex">
                <button className="text-[#7aa262] text-xs font-medium font-['Inter']">
                  Issue Refund
                </button>
              </div>
              <div className="p-2.5 bg-[#7aa262] rounded-[5px] justify-center items-center flex">
                <button className="text-white text-xs font-medium font-['Inter']">
                  Chat Section
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderStatus;
