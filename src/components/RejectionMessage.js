import React, { useState } from "react";

const RejectionMessage = ({ handleshowdata, itemName, onConfirm }) => {
  const [reason, setReason] = useState("");

  const handleReject = () => {
    onConfirm();
    // Additional logic for handling the rejection reason can be added here
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[614px] h-[359px] pl-28 pr-[111px] pt-[52.50px] pb-[51.50px] bg-[#f5f5dc] rounded-[20px] justify-center items-center inline-flex overflow-hidden">
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-center gap-[30px] inline-flex">
          <div className="self-stretch h-[62px] text-black text-2xl font-medium font-['Poppins']">
            Are you sure you want to Reject item “{itemName}”?
          </div>
          <div className="px-[21px] py-2.5 bg-[#ececec] rounded-[10px] flex-col justify-start items-start gap-2.5 flex overflow-hidden">
            <textarea
              className="w-[350px] h-[60px] text-[#85898f] text-lg font-light font-['Poppins']"
              placeholder="Please state your reason for Rejecting..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
          <div className="justify-start items-center gap-[30px] inline-flex">
            <div className="justify-start items-start gap-3 flex">
              <button
                onClick={handleReject}
                className="p-2.5 bg-[#ff5d5d] rounded-lg justify-center items-center gap-2.5 flex text-white text-xl font-normal font-['Poppins']"
              >
                Reject
              </button>
            </div>
            <div className="justify-start items-start gap-3 flex">
              <button
                onClick={handleshowdata}
                className="p-2.5 bg-[#666b70] rounded-lg justify-center items-center gap-2.5 flex text-white text-xl font-normal font-['Poppins']"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectionMessage;