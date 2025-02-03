import React from "react";

const NewOrder = () => {
  return (
    <div className="w-full max-w-[1114px] mx-auto bg-neutral-100">
      {/* Header */}
      <div className="p-6">
        {/* Order Details Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-black">Order Details</h2>
          <button className="p-2.5 bg-[#7aa262] text-white text-sm font-medium rounded-lg">
            Chat Section
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-[3fr_1fr] gap-6">
          {/* Main Order Details Section (75%) */}
          <div className="bg-white rounded-lg shadow p-6 space-y-6 relative">
            {/* Combined Order Information */}
            <div className="grid grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Order ID #123409</h3>
                  <p className="text-sm text-gray-500">14 Jan 2025</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Cancelled By:</span>
                    <span className="text-red-500">Vendor</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Reason:</span>
                    <span>-----</span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-2">
                <div className="flex space-x-4 mb-4">
                  <button className="px-4 py-2 bg-[#7aa262] text-white text-sm font-medium rounded-lg">
                    Delivery Status
                  </button>
                  <button className="px-4 py-2 bg-[#7aa262] text-white text-sm font-medium rounded-lg">
                    Print Invoice
                  </button>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Status:</span>
                  <span className="text-red-500">Cancelled at 1st Jan 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Placed By:</span>
                  <span>Mr. David Goggins AT 11.05 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Bid Closed At:</span>
                  <span>Dec 10, 2024</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Payment Method:</span>
                  <span>Cash On Delivery</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Payment Status:</span>
                  <span className="text-green-600">Paid</span>
                </div>
              </div>
            </div>

            {/* Item Details Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-medium">Item Details</h3>
              <table className="w-full mt-4">
                <thead className="bg-[#9fdd79]">
                  <tr>
                    <th className="p-2 text-left">Item Details</th>
                    <th className="p-2 text-left">Size</th>
                    <th className="p-2 text-left">Age</th>
                    <th className="p-2 text-left">Bid Confirmation Date</th>
                    <th className="p-2 text-left">Total Prize</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 flex items-center space-x-4">
                      <img
                        src="https://via.placeholder.com/50"
                        alt="Product"
                        className="w-12 h-12 rounded"
                      />
                      <div>
                        <p className="text-sm font-medium">Monstera Deliciosa</p>
                        <p className="text-sm text-gray-500">Category: Trees</p>
                        <p className="text-sm text-gray-500">Qty: 20</p>
                      </div>
                    </td>
                    <td className="p-2 text-sm">Pot Size</td>
                    <td className="p-2 text-sm">2 months</td>
                    <td className="p-2 text-sm">01-12-2024</td>
                    <td className="p-2 text-sm">$20</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pricing Info Section in Bottom-Right */}
            <div className="absolute bottom-6 right-6 bg-white rounded-lg shadow p-4">
              <div className="flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch">
                  <span className="text-[#181818] text-sm font-normal font-['Poppins'] leading-tight">
                    Item price
                  </span>
                  <span className="text-[#181818] text-sm font-normal font-['Poppins'] leading-tight">
                    {" "}
                    -{" "}
                  </span>
                  <span className="text-[#181818] text-sm font-medium font-['Poppins'] leading-tight">
                    $500.00
                  </span>
                </div>
                <div className="self-stretch">
                  <span className="text-[#181818] text-sm font-normal font-['Poppins'] leading-tight">
                    Item discount -{" "}
                  </span>
                  <span className="text-[#181818] text-sm font-medium font-['Poppins'] leading-tight">
                    $50.00
                  </span>
                </div>
                <div className="self-stretch">
                  <span className="text-[#181818] text-sm font-normal font-['Poppins'] leading-tight">
                    Coupon discount -{" "}
                  </span>
                  <span className="text-[#181818] text-sm font-medium font-['Poppins'] leading-tight">
                    $0.00
                  </span>
                </div>
                <div className="self-stretch">
                  <span className="text-[#181818] text-sm font-normal font-['Poppins'] leading-tight">
                    Delivery fee -{" "}
                  </span>
                  <span className="text-[#181818] text-sm font-medium font-['Poppins'] leading-tight">
                    $10.00
                  </span>
                </div>
                <div className="self-stretch">
                  <span className="text-[#181818] text-sm font-normal font-['Poppins'] leading-tight">
                    Total -{" "}
                  </span>
                  <span className="text-[#181818] text-sm font-medium font-['Poppins'] leading-tight">
                    $485.00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Side Section (25%) */}
          <div className="space-y-6">
            {/* Order & Shipping Info */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-medium mb-4">Order & Shipping Info</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm">Change Order Status</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Confirmed</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm">Payment Status</label>
                  <div className="flex items-center justify-between p-2 border rounded-lg">
                    <span>Paid</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
                <div>
                  <label className="text-sm">Delivery Type</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Type A</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm">Expected Delivery Date</label>
                  <input type="date" className="w-full p-2 border rounded-lg" />
                </div>
              </div>
            </div>

            {/* Customer Info */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-medium mb-4">Customer Info</h3>
              <div className="flex space-x-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">Jerome Bell</p>
                  <p className="text-sm text-gray-500">12 Orders</p>
                  <p className="text-sm text-gray-500">1234******</p>
                  <p className="text-sm text-gray-500">jeromebe***@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;
