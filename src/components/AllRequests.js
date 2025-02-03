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
import phonepe from "../images/Phonepe.svg";
import jj from "../images/jj.svg";
import FilterMenu from "./FilterMenu";
import RequestItem from "./RequestItem";
import RejectionMessage from "./RejectionMessage";
import AcceptMessage from "./AcceptMessage";
import { Link } from "react-router-dom";

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
      status:"pending",
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
      status:"pending",
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
      status:"reject",
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
      status:"pending",
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
      status:"reject",
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
      status:"pending",
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
      status:"pending",
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
      status:"reject",
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
      status:"pending",
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
      status:"pending",
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
       status:"pending",
    },
  ]);

  const [showFilters, setShowFilters] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupComponent, setPopupComponent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [acceptedRejectedList, setAcceptedRejectedList] = useState([]);

  const handleAccept = (index) => {
    setPopupComponent(
      <AcceptMessage
        handleshowdata={closePopup}
        itemName={list[index].name}
        onConfirm={() => showSuccessMessage(index)}
      />
    );
    setShowPopup(true);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterClick = () => {
    setPopupComponent(
      <FilterMenu
        onSelectCategory={(category) => {
          setSelectedCategory(category);
          closePopup();
        }}
      />
    );
    setShowPopup(true);
  };

  const handleRejectClick = (index) => {
    setPopupComponent(
      <RejectionMessage
        handleshowdata={closePopup}
        itemName={list[index].name}
        onConfirm={() => showRejectMessage(index)}
      />
    );
    setShowPopup(true);
  };

  const handleDelete = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const removeItem = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
    closePopup();
  };

  const showSuccessMessage = (index) => {
    const acceptedItem = list[index];
    setAcceptedRejectedList([...acceptedRejectedList, { ...acceptedItem, status: "accepted" }]);
    removeItem(index);
    setPopupComponent(
      <div className="items-center w-[525px] h-[261px] pl-[68px] pr-[66px] pt-[50px] pb-[49px] bg-[#f5f5dc] rounded-[20px] justify-center inline-flex overflow-hidden">
        <div className="w-[391px] self-stretch flex-col justify-start items-center inline-flex">
          <p className="self-stretch h-[95px] text-black text-2xl font-medium font-['Poppins']">
            The Product has been Successfully listed for Sale.
          </p>
          <img src={phonepe} alt="success" />
        </div>
      </div>
    );
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };

  const showRejectMessage = (index) => {
    const rejectedItem = list[index];
    setAcceptedRejectedList([...acceptedRejectedList, { ...rejectedItem, status: "rejected" }]);
    removeItem(index);
    setPopupComponent(
      <div className="items-center w-[525px] h-[261px] pl-[68px] pr-[66px] pt-[50px] pb-[49px] bg-[#f5f5dc] rounded-[20px] justify-center inline-flex overflow-hidden">
        <div className="w-[391px] self-stretch flex-col justify-start items-center inline-flex">
          <p className="self-stretch h-[95px] text-black text-2xl font-medium font-['Poppins']">
            The Product has been Rejected and vendor Notified.
          </p>
          <img src={phonepe} alt="rejected" />
        </div>
      </div>
    );
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };

  const filteredList = list.filter((item) => {
    const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="w-[1094px] h-[1357px] pl-[46px] pr-[47px] pt-1.5 pb-[51px] bg-neutral-100 flex-col justify-start items-center inline-flex overflow-hidden">
      <div className="self-stretch h-[1300px] bg-neutral-100 flex-col justify-center items-center gap-4 inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-[#5c5c5c] text-lg font-semibold font-['Poppins']">
              All Requests
            </div>
          </div>
          <div className="h-[30px] p-2.5 bg-[#ddf2d0] rounded-[5px] flex-col justify-center items-center gap-2.5 inline-flex w-80">
            <div className="self-stretch justify-start items-center gap-[30px] inline-flex">
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
          <Link to="/accepted-rejected" state={{ acceptedRejectedList }}>
            <button
              className="w-[150px] h-[41.5px] bg-[#7aa262] rounded-[9px] flex justify-between items-center text-white text-sm font-normal font-['Poppins'] text-right"
            >
              Accepted/Rejected
            </button>
          </Link>
          <button
            onClick={handleFilterClick}
            className="w-[93px] h-[41.5px] bg-[#7aa262] rounded-[9px] flex justify-between items-center text-white text-sm font-normal font-['Poppins']"
          >
            <img alt="" className="ml-2" src={jj} />
            <span className="mr-5">Filters</span>
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
          <div className="space-y-4">
            {filteredList.map((item, index) => (
              <RequestItem
                key={index}
                item={item}
                handleAccept={() => handleAccept(index)}
                handleRejectClick={() => handleRejectClick(index)}
                handleDelete={() => handleDelete(index)}
              />
            ))}
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg">
            {popupComponent}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllRequests;
