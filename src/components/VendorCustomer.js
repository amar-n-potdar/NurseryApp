import React, { useState } from "react";
import eye from "../images/eye.svg";
import circle from "../images/circle.svg"
import circle1 from "../images/circle1.svg"
import star1 from "../images/Star1.svg"


const Gandu = () => {
  const [activeTab, setActiveTab] = useState("Customer"); // Default to "Customer" tab
  const [searchTerm, setSearchTerm] = useState("");

  const customerList = [
    { Vendorname: "mitchell", Product: "458pcs", Revenue: "$589.99", Contact: "(219)555-0114", Status: "Deactive", Rating: 4.6, Action: eye },
    { Vendorname: "cameron", Product: "458pcs", Revenue: "$782.01", Contact: "(307)555-0133", Status: "Active", Rating: 4.6, Action: eye },
    { Vendorname: "esther", Product: "458pcs", Revenue: "$406.27", Contact: "(302)555-0107", Status: "Deactive", Rating: 4.6, Action: eye },
    { Vendorname: "shane", Product: "458pcs", Revenue: "$275.43", Contact: "(480)555-0103", Status: "Active", Rating: 4.6, Action: eye },
    { Vendorname: "diana", Product: "458pcs", Revenue: "$219.78", Contact: "(205)555-0100", Status: "Active", Rating: 4.6, Action: eye },
    { Vendorname: "arlin", Product: "458pcs", Revenue: "$948.55", Contact: "(704)555-0127", Status: "Active", Rating: 4.6, Action: eye },
    { Vendorname: "shawn", Product: "458pcs", Revenue: "$351.02", Contact: "(201)555-0124", Status: "Deactive", Rating: 4.6, Action: eye },
  ];

  // Filter customers based on the search term
  const filteredCustomers = customerList.filter((customer) =>
    customer.Vendorname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Tabs Container */}
      <div className="w-full flex flex-col  mb-6 bg-[#e6e5fe]">
        <div className="flex gap-5">
          {/* Vendor Tab */}
          <div
            className="w-[234px] h-[98px] p-[15px] bg-[#9fdd79] rounded-[15px] border border-[#c1c1c1] justify-center items-center gap-5 inline-flex cursor-pointer"
            onClick={() => setActiveTab("Vendor")}
          >
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-[18px] h-[18px] left-[3px] top-[3px] absolute"></div>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="self-stretch text-[#3b3f44] text-2xl font-bold font-['Inter'] leading-[39.09px]">
                <div className="flex">
                      <img alt="" src={circle1}/><h1>Vendor</h1>
                </div>
             </div>
            </div>
          </div>

          {/* Customer Tab */}
          <div
            className="w-[234px] h-[98px] p-[15px] bg-white rounded-[15px] border border-[#c1c1c1] justify-center items-center gap-5 inline-flex cursor-pointer"
            onClick={() => setActiveTab("Customer")}
          >
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-[18px] h-[18px] left-[3px] top-[3px] absolute"></div>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="self-stretch text-[#3b3f44] text-2xl font-bold font-['Inter'] leading-[39.09px]">
                <div className="flex"><img alt="" src={circle}/> <h1>Customer</h1></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      {activeTab === "Vendor" ? (
        <h1 className="text-center text-2xl font-bold text-gray-600">
          Vendor is not available
        </h1>
      ) : (
        <>
          {/* Search Bar */}
          <div className="w-[390px] h-11 rounded-[11px] border border-[#c1c1c1] justify-start items-center gap-[82px] inline-flex mb-4 mx-auto">
            <div className="h-11 p-2.5 justify-center items-center gap-2.5 flex">
              <input
                type="text"
                placeholder="Search by vendor name"
                className="text-black text-base font-normal font-['Poppins'] focus:outline-none w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-[95px] pl-[23px] pr-[19px] pt-3 pb-[11px] bg-[#7aa262] rounded-tr-[11px] rounded-br-[11px] justify-end items-center flex overflow-hidden cursor-pointer">
              <div className="w-[53px] text-white text-sm font-normal font-['Poppins']">
                Search
              </div>
            </div>
          </div>

          {/* Customer Table */}
          <div className="w-full p-4">
            <div className="grid grid-cols-7 gap-4 bg-gray-100 p-4 rounded-lg">
              {/* Headings */}
              <div className="font-bold">Vendor Name</div>
              <div className="font-bold">Product</div>
              <div className="font-bold">Revenue</div>
              <div className="font-bold">Contact</div>
              <div className="font-bold">Status</div>
              <div className="font-bold">Rating</div>
              <div className="font-bold -ml-5">Action</div>
            </div>

            {/* Rows */}
            {filteredCustomers.map((customer, index) => (
              <div
                key={index}
                className="grid grid-cols-7 gap-4 bg-white p-4 border-b border-gray-200 items-center"
              >
                <div className="text-sm text-black">{customer.Vendorname}</div>
                <div className="text-sm text-black">{customer.Product}</div>
                <div className="text-sm text-black">{customer.Revenue}</div>
                <div className="text-sm text-black">{customer.Contact}</div>
                <div
                  className={`text-sm font-semibold px-[0.625rem] gap-[0.5 rem] py-[0.3125rem ] rounded-[1.25rem] mr-28 flex items-center justify-center ${
                    customer.Status === "Active"
                      ? "bg-[#E6E5FE] text-[#686691]"
                      : "bg-[#FEB0B0] text-[#CF3C3C]"
                  }`}
                >
                  {customer.Status}
                </div>
                <div className="text-sm text-black flex"> <img src={star1}/> {customer.Rating}</div>
                <div>
                  <button className="text-green-500">
                    <img src={customer.Action} alt="Action" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Gandu;
