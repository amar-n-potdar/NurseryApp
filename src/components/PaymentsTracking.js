import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import search from "../images/search.svg";

const List = [
  { Orderid: 100001, Name: "Vendor: A nursery", TransactionDate: "1 Nov 2024", PaymentStatus: "Paid Vendor", Amount: "$34" },
  { Orderid: 100001, Name: "Vendor: A nursery", TransactionDate: "1 Nov 2024", PaymentStatus: "Paid Vendor", Amount: "$34" },
  { Orderid: 100001, Name: "Prem singh", TransactionDate: "1 Nov 2024", PaymentStatus: "Pending", Amount: "$34" },
  { Orderid: 100001, Name: "Vendor: L nursery", TransactionDate: "1 Nov 2024", PaymentStatus: "Declined", Amount: "$34" },
  { Orderid: 100001, Name: "Max Croix", TransactionDate: "1 Nov 2024", PaymentStatus: "Recieved Amount", Amount: "$34" },
  { Orderid: 100001, Name: "Vendor: A nursery", TransactionDate: "1 Nov 2024", PaymentStatus: "Refunded", Amount: "$34" },
  { Orderid: 100001, Name: "Vendor: A nursery", TransactionDate: "1 Nov 2024", PaymentStatus: "Recieved Amount", Amount: "$34" },
  { Orderid: 100001, Name: "Prem singh", TransactionDate: "1 Nov 2024", PaymentStatus: "Declined", Amount: "$34" },
  { Orderid: 100001, Name: "Vendor: L nursery", TransactionDate: "1 Nov 2024", PaymentStatus: "Recieved Amount", Amount: "$34" },
  { Orderid: 100001, Name: "Max Croix", TransactionDate: "1 Nov 2024", PaymentStatus: "Pending", Amount: "$34" },
  { Orderid: 100001, Name: "Vendor: A nursery", TransactionDate: "1 Nov 2024", PaymentStatus: "Pending", Amount: "$34" },
  { Orderid: 100001, Name: "Vendor: A nursery", TransactionDate: "1 Nov 2024", PaymentStatus: "Refunded", Amount: "$34" },
  { Orderid: 100001, Name: "Prem singh", TransactionDate: "1 Nov 2024", PaymentStatus: "Recieved Amount", Amount: "$34" },
  { Orderid: 100001, Name: "Vendor: L nursery", TransactionDate: "1 Nov 2024", PaymentStatus: "Cancelled", Amount: "$34" },
  { Orderid: 100001, Name: "Max Croix", TransactionDate: "1 Nov 2024", PaymentStatus: "Paid Vendor", Amount: "$34" },
  { Orderid: 100001, Name: "Vendor: A nursery", TransactionDate: "1 Nov 2024", PaymentStatus: "Recieved Amount", Amount: "$34" },
  { Orderid: 100001, Name: "Vendor: A nursery", TransactionDate: "1 Nov 2024", PaymentStatus: "On Hold", Amount: "$34" },
  { Orderid: 100001, Name: "Prem singh", TransactionDate: "1 Nov 2024", PaymentStatus: "On Hold", Amount: "$34" },
  { Orderid: 100001, Name: "Vendor: L nursery", TransactionDate: "1 Nov 2024", PaymentStatus: "Paid Vendor", Amount: "$34" },
  { Orderid: 100001, Name: "Max Croix", TransactionDate: "1 Nov 2024", PaymentStatus: "Declined", Amount: "$34" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Paid Vendor":
      return "#e07900";
    case "Pending":
      return "#ffc702";
    case "Declined":
    case "Refunded":
      return "#ff5d5d";
    case "Recieved Amount":
      return "#47911b";
    case "On Hold":
      return "#ffc702";
    default:
      return "#000000";
  }
};

const PaymentsTracking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');

  const filteredList = List.filter(item =>
    item.Orderid.toString().includes(searchTerm) || item.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-5xl mx-auto bg-neutral-100 p-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg flex items-center ">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 0.5H6V5H4.5V0.5Z" fill="#7AA262"/>
              <path d="M16.5 0.5H18V5H16.5V0.5Z" fill="#7AA262"/>
              <path d="M1.25 21.5V21.75H1.5H9.74687C9.94147 22.1239 10.1428 22.4454 10.3886 22.75H0.25V12.5V2.25H2.75V6.5V6.75H3H7.5H7.75V6.5V2.25H14.75V6.5V6.75H15H19.5H19.75V6.5V2.25H22.25V10.8886C21.9454 10.6428 21.6239 10.4415 21.25 10.2469V9.5V9.25H21H1.5H1.25V9.5V12.5V15.5V21.5Z" fill="#7AA262" stroke="#7AA262" strokeWidth="0.5"/>
            </svg>
            <span className="text-[#7aa262] text-base font-medium">Timeframe :</span>
          </div>
          <div className="p-2 bg-white rounded-lg shadow border border-[#b8e59b] flex items-center gap-2 w-64">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className="text-[#393939] text-base font-medium w-20"
            />
            <span className="text-[#393939] text-base font-medium">-</span>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              className="text-[#393939] text-base font-medium w-20"
            />
            <svg width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4198 2.95199L18.4798 4.01299L12.7028 9.79199L11.2898 9.79199L5.50977 4.01299L6.56977 2.95299L11.9948 8.37699L17.4198 2.95199Z" fill="black"/>
            </svg>
          </div>
        </div>
        
        <div className="relative w-full md:w-auto flex">
          <input 
            type="text" 
            placeholder="Search Order ID or Tracking ID...."
            className="w-full md:w-64 p-2 bg-[#ddf2d0] rounded text-sm text-gray-500 pl-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}  
          />
          <img src={search} className="absolute right-3 top-1/2 transform -translate-y-1/2" alt="search icon"/>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">Orders Payment Table</h2>
          <a href="#" className="text-sm underline">View all</a>
        </div>

        <div className="border border-[#d9d9d9] rounded">
          <table className="w-full">
            <thead>
              <tr className="bg-[#ececec]">
                <th className="px-3 py-4 text-left text-xl font-medium border-l border-t border-[#d9d9d9]">Order ID</th>
                <th className="px-3 py-4 text-left text-xl font-medium border-l border-t border-[#d9d9d9]">Name</th>
                <th className="px-3 py-4 text-left text-xl font-medium border-l border-t border-[#d9d9d9]">Transaction Date</th>
                <th className="px-3 py-4 text-left text-xl font-medium border-l border-t border-[#d9d9d9]">Payment Status</th>
                <th className="px-3 py-4 text-left text-xl font-medium border-l border-t border-[#d9d9d9]">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredList.map((item, index) => (
                <tr key={index}>
                  <td className="px-3 py-4 text-base border-l border-t border-[#d9d9d9]">#{item.Orderid}</td>
                  <td className="px-3 py-4 text-lg border-l border-t border-[#d9d9d9]">{item.Name}</td>
                  <td className="px-3 py-4 text-base border-l border-t border-[#d9d9d9]">{item.TransactionDate}</td>
                  <td className="px-3 py-4 text-base text-[#e07900] border-l border-t border-[#d9d9d9]" style={{ color: getStatusColor(item.PaymentStatus) }}>{item.PaymentStatus}</td>
                  <td className="px-3 py-4 text-xl font-medium border-l border-t border-[#d9d9d9]">{item.Amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentsTracking;