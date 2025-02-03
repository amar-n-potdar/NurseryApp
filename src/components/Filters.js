import React from 'react'

const Filters = () => {
  return (
    <div className="w-[162px] h-[351px] flex-col justify-start items-end gap-2 inline-flex">
    <div className="w-[35px] h-[38px] p-2.5 bg-[#7aa262] rounded-lg flex-col justify-center items-center gap-2.5 flex" />
    <div className="self-stretch h-[305px] bg-[#7aa262] rounded-[17px] flex-col justify-center items-center gap-[3px] flex">
        <div className="self-stretch p-2.5 bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-black text-sm font-normal font-['Poppins']">All</div>
        </div>
        <div className="p-2.5 justify-center items-center gap-2.5 inline-flex">
            <div className="text-black text-sm font-normal font-['Poppins']">Bonsai and Bamboo</div>
        </div>
        <div className="self-stretch p-2.5 justify-center items-center gap-2.5 inline-flex">
            <div className="text-black text-sm font-normal font-['Poppins']">House Plants</div>
        </div>
        <div className="self-stretch p-2.5 justify-center items-center gap-2.5 inline-flex">
            <div className="text-black text-sm font-normal font-['Poppins']">Floor Plants</div>
        </div>
        <div className="self-stretch p-2.5 justify-center items-center gap-2.5 inline-flex">
            <div className="text-black text-sm font-normal font-['Poppins']">Sympathy Gift Plants</div>
        </div>
        <div className="self-stretch p-2.5 justify-center items-center gap-2.5 inline-flex">
            <div className="text-black text-sm font-normal font-['Poppins']">Decorative</div>
        </div>
        <div className="self-stretch p-2.5 justify-center items-center gap-2.5 inline-flex">
            <div className="text-black text-sm font-normal font-['Poppins']">Succulents</div>
        </div>
    </div>
</div>
  )
}

export default Filters