import React, { useState } from "react";
import edit from "../images/edit.svg";
import delete1 from "../images/delete1.svg";
import editsolid from "../images/editsolid.svg";
import search from "../images/search.svg";
import frame1 from "../images/frame1.png";
import frame2 from "../images/frame2.png";
import Frame3 from "../images/Frame3.png";
import frame4 from "../images/Frame4.png";
import frame5 from "../images/Frame5.png";
import frame6 from "../images/Frame6.png";
import frame7 from "../images/Frame7.png";
import frame8 from "../images/Frame8.png";
import frame9 from "../images/Frame9.png";
import frame10 from "../images/Frame10.png";
import frame11 from "../images/Frame11.png";
import right from "../images/right.svg";
import wrong from "../images/wrong.svg";
import jj from "../images/jj.svg";

const AllRequests = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState([
    {
      img: frame1,
      name: "Fiery philo trio",
      category: "House plants",
      price: "36.5$",
      vendor: "A Nursery",
      A1: "Approve",
      A2: "Reject",
      Action1: edit,
      Action2: editsolid,
      Action3: delete1,
      rejected: false,
    },
    {
      img: frame2,
      name: "Monstera Deliciosa",
      category: "Bonsai And Bamboo",
      price: "11$",
      vendor: "B Nursery",
      A1: "Approve",
      A2: "Reject",
      Action1: edit,
      Action2: editsolid,
      Action3: delete1,
      rejected: false,
    },
    {
      img: Frame3,
      name: "Succelents",
      category: "Decorative",
      price: "5$",
      vendor: "C Nursery",
      A1: "Approve",
      A2: "Reject",
      Action1: edit,
      Action2: editsolid,
      Action3: delete1,
      rejected: false,
    },
    {
      img: frame4,
      name: "Whale Fin Sansaveria",
      category: "Sympathy Gift Plants",
      price: "25$",
      vendor: "D Nursery",
      A1: "Approve",
      A2: "Reject",
      Action1: edit,
      Action2: editsolid,
      Action3: delete1,
      rejected: false,
    },
    {
      img: frame5,
      name: "Philodendron Sun Red",
      category: "Indoor Plants",
      price: "16.5$",
      vendor: "E Nursery",
      A1: "Approve",
      A2: "Reject",
      Action1: edit,
      Action2: editsolid,
      Action3: delete1,
      rejected: false,
    },
    {
      img: frame6,
      name: "Succelents",
      category: "Sympathy Gift Plants",
      price: "5$",
      vendor: "J Nursery",
      A1: "Approve",
      A2: "Reject",
      Action1: edit,
      Action2: editsolid,
      Action3: delete1,
      rejected: false,
    },
    {
      img: frame7,
      name: "Monstera Deliciosa",
      category: "Succelents",
      price: "20$",
      vendor: "F Nursery",
      A1: "Approve",
      A2: "Reject",
      Action1: edit,
      Action2: editsolid,
      Action3: delete1,
      rejected: false,
    },
    {
      img: frame8,
      name: "Philodendron Sun Red",
      category: "House plants",
      price: "$36.5",
      vendor: "G Nursery",
      A1: "Approve",
      A2: "Reject",
      Action1: edit,
      Action2: editsolid,
      Action3: delete1,
      rejected: false,
    },
    {
      img: frame9,
      name: "Bonsai And Bamboo",
      category: "Decorative",
      price: "11$",
      vendor: "H Nursery",
      A1: "Approve",
      A2: "Reject",
      Action1: edit,
      Action2: editsolid,
      Action3: delete1,
      rejected: false,
    },
    {
      img: frame10,
      name: "Whale Fin Sansaveria",
      category: "Succelents",
      price: "20.5$",
      vendor: "K Nursery",
      A1: "Approve",
      A2: "Reject",
      Action1: edit,
      Action2: editsolid,
      Action3: delete1,
      rejected: false,
    },
    {
      img: frame11,
      name: "Fiery philo trio",
      category: "Out Door plants",
      price: "$16.5",
      vendor: "L Nursery",
      A1: "Approve",
      A2: "Reject",
      Action1: edit,
      Action2: editsolid,
      Action3: delete1,
      rejected: false,
    },
  ]);

  const [showFilters, setShowFilters] = useState(false);
  const [showdata, Setshowdata] = useState(true);
  const [acc, setAcc] = useState(false);

  const handleAccept = () => {
    setAcc(!acc);
    Setshowdata(!showdata);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  const handleFilterClick = () => {
    setShowFilters(!showFilters);
  };

  const handleRejectClick = (index) => {
    const updatedList = list.map((item, i) =>
      i === index ? { ...item, rejected: !item.rejected } : item
    );
    setList(updatedList);
    Setshowdata(!showdata);
  };
  const handleshowdata=()=>{
    Setshowdata(true)
  }

  const hasRejectedItems = list.some((item) => item.rejected);

  return (
    <div className="w-[1094px] h-[1357px] pl-[46px] pr-[47px] pt-1.5 pb-[51px] bg-neutral-100 flex-col justify-start items-center inline-flex overflow-hidden">
      {showdata && (
        <div>
          <div className="self-stretch h-[1300px] bg-neutral-100 flex-col justify-center items-center gap-4 inline-flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="p-2.5 justify-center items-center gap-2.5 flex">
                <div className="text-[#5c5c5c] text-lg font-semibold font-['Poppins']">
                  All Requests
                </div>
              </div>

              <div className="h-[30px] p-2.5 bg-[#ddf2d0] rounded-[5px] flex-col justify-center items-center gap-2.5 inline-flex w-80">
                <div className="self-stretch justify-start items-center gap-[30px] inline-flex">
                  <div className="text-[#a6a6a6] text-xs font-normal font-['Poppins']">
                    {" "}
                  </div>
                  <div className="w-5 h-5 relative  " />
                  <input
                    value={searchTerm}
                    onChange={handleSearchChange}
                    type="text"
                    className="text-[#a6a6a6] w-full text-xs font-normal font-['Poppins']"
                    placeholder="Search Order ID or Tracking ID...."
                  />
                  <img alt="" src={search} />
                </div>
              </div>
              <div className=" items-center  gap-3 flex justify-end">
                <div
                  onClick={handleFilterClick}
                  className="w-[93px] h-[41.5px] bg-[#7aa262]  rounded-[9px] flex-col  items-center  gap-2 flex justify-end"
                >
                  <button className="text-white text-sm font-normal  font-['Poppins'] flex justify-end">
                    <img alt="" className="ml-2 mt-2" src={jj} />
                    Filters
                  </button>
                </div>
              </div>
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
                <div className="w-[228px] self-stretch bg-[#ececec] flex-col justify-center items-center inline-flex">
                  <div className="self-stretch px-3 py-2.5 justify-center items-center inline-flex overflow-hidden">
                    <div className="text-black text-base font-medium font-['Poppins'] tracking-tight">
                      Approve/Reject
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

              <div>
                {filteredList.map((item, index) => (
                  <div
                    key={index}
                    className="w-[1001px] bg-white/0 justify-start items-start inline-flex overflow-hidden"
                  >
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
                              onClick={() => handleRejectClick(index)}
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
                          {" "}
                          <img
                            src={item.Action1}
                            alt="action1"
                            className="w-6 h-6"
                          />
                        </button>
                        <button>
                          {" "}
                          <img
                            src={item.Action2}
                            alt="action2"
                            className="w-6 h-6"
                          />
                        </button>
                        <button>
                          {" "}
                          <img
                            src={item.Action3}
                            onClick={() => handleDelete(index)}
                            alt="action3"
                            className="w-6 h-6"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Filters Pop-up */}
      {showFilters && (
        <div className="absolute top-0 right-0 mt-5 mr-5 w-[162px] h-[351px] flex-col justify-start items-end gap-2 inline-flex">
          <div className="w-[35px] h-[38px] p-2.5 bg-[#7aa262] rounded-lg flex-col justify-center items-center gap-2.5 flex" />
          <div className="self-stretch h-[305px] bg-[#7aa262] rounded-[17px] flex-col justify-center items-center gap-[3px] flex">
            <div className="self-stretch p-2.5 bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex">
              <div className="text-black text-sm font-normal font-['Poppins']">
                All
              </div>
            </div>
            <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
              <div className="text-black text-sm font-normal font-['Poppins']">
                Bonsai and Bamboo
              </div>
            </div>
            <div className="self-stretch p-2.5 justify-center items-center gap-2.5 inline-flex">
              <div className="text-black text-sm font-normal font-['Poppins']">
                House Plants
              </div>
            </div>
            <div className="self-stretch p-2.5 justify-center items-center gap-2.5 inline-flex">
              <div className="text-black text-sm font-normal font-['Poppins']">
                Floor Plants
              </div>
            </div>
            <div className="self-stretch p-2.5 justify-center items-center gap-2.5 inline-flex">
              <div className="text-black text-sm font-normal font-['Poppins']">
                Sympathy Gift Plants
              </div>
            </div>
            <div className="self-stretch p-2.5 justify-center items-center gap-2.5 inline-flex">
              <div className="text-black text-sm font-normal font-['Poppins']">
                Decorative
              </div>
            </div>
            <div className="self-stretch p-2.5 justify-center items-center gap-2.5 inline-flex">
              <div className="text-black text-sm font-normal font-['Poppins']">
                Succulents
              </div>
            </div>
          </div>
        </div>
      )}
     
      {/* Rejection Message */}

      { hasRejectedItems && (
        <div className="w-[614px] h-[261px] pl-28 pr-[111px] pt-[50px] pb-[49px] bg-[#f5f5dc] rounded-[20px] justify-center items-center inline-flex overflow-hidden">
          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-center inline-flex">
            <div className="self-stretch h-[95px] text-black text-2xl font-medium font-['Poppins']">
              The Product has been has been Rejected and vendor Notified.
              <button onClick={handleshowdata}>back</button>
            </div>
            <div className="w-[67px] h-[67px] relative  overflow-hidden" />
          </div>
        </div>
      )
}
      {/**Accept message */}
      {acc && (
        <div className="w-[525px] h-[261px] pl-[68px] pr-[66px] pt-[43.50px] pb-[42.50px] bg-[#f5f5dc] rounded-[20px] justify-center items-center inline-flex overflow-hidden">
          <div className="w-[391px] self-stretch flex-col justify-start items-center gap-[30px] inline-flex">
            <div className="self-stretch h-[95px] text-black text-2xl font-medium font-['Poppins']">
              Are you sure you want to Accept item “Calamondin”?{" "}
            </div>
            <button onClick={handleshowdata}>back</button>

            <div className="justify-start items-center gap-[30px] inline-flex">
              <div className="justify-start items-start gap-3 flex">
                <div className="p-2.5 bg-[#7aa262] rounded-lg justify-center items-center gap-2.5 flex">
                  <div className="text-white text-xl font-normal font-['Poppins']">
                    Accept
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-3 flex">
                <div className="p-2.5 bg-[#666b70] rounded-lg justify-center items-center gap-2.5 flex">
                  <div className="text-white text-xl font-normal font-['Poppins']">
                    Cancel
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllRequests;
