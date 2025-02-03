import React from "react";

const AcceptMessage = ({ handleshowdata, itemName, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[525px] h-[261px] pl-[68px] pr-[66px] pt-[43.50px] pb-[42.50px] bg-[#f5f5dc] rounded-[20px] justify-center items-center inline-flex overflow-hidden">
        <div className="w-[391px] self-stretch flex-col justify-start items-center gap-[30px] inline-flex">
          <div className="self-stretch h-[95px] text-black text-2xl font-medium font-['Poppins']">
            Are you sure you want to Accept item “{itemName}”?{" "}
          </div>
          <div className="justify-start items-center gap-[30px] inline-flex">
            <div className="justify-start items-start gap-3 flex">
              <button
                onClick={onConfirm}
                className="p-2.5 bg-[#7aa262] rounded-lg justify-center items-center gap-2.5 flex text-white text-xl font-normal font-['Poppins']"
              >
                Accept
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

export default AcceptMessage;