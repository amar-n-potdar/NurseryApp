import React, { useState } from "react";
import eye from "../images/eye.svg";
import circle from "../images/circle.svg";
import circle1 from "../images/circle1.svg";

const CustomerVendor = () => {
  const [activeTab, setActiveTab] = useState("Customer"); // Default to "Customer" tab
  const [searchTerm, setSearchTerm] = useState("");

  const customerList = [
    { Order: 21544, date: "21 Jan 24 6:58 PM", CustomerInfo: "David Heven 956584665", Status: "Delivered", Total: "$565", Action: eye },
    { Order: 21544, date: "21 Jan 24 6:58 PM", CustomerInfo: "David Heven 956584665", Status: "Delivered", Total: "$565", Action: eye },
    { Order: 21544, date: "21 Jan 24 6:58 PM", CustomerInfo: "David Heven 956584665", Status: "Delivered", Total: "$565", Action: eye },
    { Order: 21544, date: "21 Jan 24 6:58 PM", CustomerInfo: "David Heven 956584665", Status: "Delivered", Total: "$565", Action: eye },
    { Order: 21544, date: "21 Jan 24 6:58 PM", CustomerInfo: "David Heven 956584665", Status: "Delivered", Total: "$565", Action: eye },
    { Order: 21544, date: "21 Jan 24 6:58 PM", CustomerInfo: "David Heven 956584665", Status: "Delivered", Total: "$565", Action: eye },
  ];

  // Filter customers based on the search term
  const filteredCustomers = customerList.filter((customer) =>
    customer.CustomerInfo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Tabs Container */}
      <div className="w-full flex flex-col mb-6 bg-[#e6e5fe]">
        <div className="flex gap-5">
          {/* Vendor Tab */}
          <div
            className="w-[234px] h-[98px] p-[15px] bg-[#9fdd79] rounded-[15px] border border-[#c1c1c1] justify-center items-center gap-5 inline-flex cursor-pointer"
            onClick={() => setActiveTab("Customer")}
          >
            <div className="flex">
              <img alt="" src={circle1} />
              <h1>Customer</h1>
            </div>
          </div>

          {/* Customer Tab */}
          <div
            className="w-[234px] h-[98px] p-[15px] bg-white rounded-[15px] border border-[#c1c1c1] justify-center items-center gap-5 inline-flex cursor-pointer"
            onClick={() => setActiveTab("Vendor")}
          >
            <div className="flex">
              <img alt="" src={circle} />
              <h1>Vendor</h1>
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
              <div className="font-bold">Order</div>
              <div className="font-bold">Date</div>
              <div className="font-bold">Customer Info</div>
              <div className="font-bold">Status</div>
              <div className="font-bold">Total</div>
              <div className="font-bold -ml-5">Action</div>
            </div>

            {/* Rows */}
            {filteredCustomers.map((customer, index) => (
              <div
                key={index}
                className="grid grid-cols-7 gap-4 bg-white p-4 border-b border-gray-200 items-center"
              >
                <div className="text-sm text-black">{customer.Order}</div>
                <div className="text-sm text-black">{customer.date}</div>
                <div className="text-sm text-black">{customer.CustomerInfo}</div>
                <div className="text-sm text-black">{customer.Status}</div>
                <div className="text-sm text-black flex">{customer.Total}</div>
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

export default CustomerVendor;
