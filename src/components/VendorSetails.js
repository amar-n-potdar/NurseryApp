import React, { useState } from 'react';
import star from '../images/star.png';
import profile from '../images/profile.png';
import Orders1 from './Orders1';

const VendorSetails = () => {
  const [showOrders, setShowOrders] = useState(false);

  const list1 = [{ Totalproducts: 15, Totalorders: 19 }];
  const shopInfo = [{ Name: "Sherril", Phone: "+194567890223", Address: "Hyderabad" }];
  const vendorInfo = [{ Name: "Sherril", Phone: "+194567890223", email: "Sherril@vendor.com" }];

  if (showOrders) {
    return <Orders1 />;
  }

  return (
    <div className="w-[1512px] h-[981px] relative bg-neutral-100 overflow-hidden">
      <div className="h-[590px] left-[426px] top-[133px] absolute flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch text-black text-xl font-semibold font-['Poppins']">Vendor Details</div>
        <div className="self-stretch h-[536px] flex-col justify-start items-start gap-4 flex">
          <div className="justify-start items-center gap-9 inline-flex">
            <div className="text-[#658e4c] text-base font-semibold font-['Poppins'] underline">Shop Overview</div>
            <div className="text-[#b0b1ae] text-base font-semibold font-['Poppins'] cursor-pointer"onClick={() => setShowOrders(true)}>Order</div>
            <div className="text-[#b0b1ae] text-base font-semibold font-['Poppins'] cursor-pointer" >Product</div>
          </div>
          
          <div className="pl-[39px] pr-[179px] pt-[46px] pb-[206px] bg-white rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] justify-start items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
              <div className="justify-start items-start gap-[30px] inline-flex">
                <div className="w-[70px] h-[70px] p-[9px] bg-white rounded-[70px] border border-[#d3d5d1] justify-center items-center flex">
                  <img className="w-[52px] h-[52px] rounded-full" src={profile} alt="Profile" />
                </div>
                <div className="w-[76px] flex-col justify-start items-start gap-5 inline-flex">
                  <div className="self-stretch text-black text-xs font-normal font-['Inter']">Nature's Nest</div>
                  <div className="justify-start items-center gap-[11px] inline-flex">
                    <img className="w-[18px] h-[18px]" src={star} alt="Star" />
                    <div className="text-black text-xs font-normal font-['Inter']">3.3</div>
                  </div>
                </div>
              </div>

              <div className="justify-start items-start gap-[57px] inline-flex">
                <div className="p-4 rounded-lg border border-[#b5b8b2]/60 h-[165px]">
                  <table>
                    <tbody>
                      {list1.map((item, index) => (
                        <React.Fragment key={index}>
                          <tr>
                            <td className="w-[103px] text-black text-base font-normal font-['Inter']">Total Orders :</td>
                          </tr>
                          <tr>
                            <td className="text-[#377a0d] text-xl font-medium font-['Inter']">{item.Totalorders}</td>
                          </tr>
                          <tr>
                            <td className="w-[103px] text-black text-base font-normal font-['Inter'] pt-4">Total Products :</td>
                          </tr>
                          <tr>
                            <td className="text-[#377a0d] text-xl font-medium font-['Inter']">{item.Totalproducts}</td>
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex-col justify-center items-start gap-2 inline-flex">
                  <div className="text-center text-black text-xl font-medium font-['Poppins']">Shop Information</div>
                  {shopInfo.map((info, index) => (
                    <table key={index} className="w-[275px]">
                      <tbody>
                        <tr>
                          <td className="w-12 text-black text-base font-normal font-['Inter'] pb-4">Name</td>
                          <td className="text-black text-lg font-normal font-['Inter'] pl-7 pb-4">: {info.Name}</td>
                        </tr>
                        <tr>
                          <td className="w-12 text-black text-base font-normal font-['Inter'] pb-4">Phone</td>
                          <td className="text-black text-lg font-normal font-['Inter'] pl-7 pb-4">: {info.Phone}</td>
                        </tr>
                        <tr>
                          <td className="text-black text-base font-normal font-['Inter']">Address</td>
                          <td className="text-black text-lg font-normal font-['Inter'] pl-7">: {info.Address}</td>
                        </tr>
                      </tbody>
                    </table>
                  ))}
                </div>

                <div className="flex-col justify-center items-start gap-2 inline-flex">
                  <div className="text-center text-black text-xl font-medium font-['Poppins']">Vendor Information</div>
                  {vendorInfo.map((info, index) => (
                    <table key={index} className="w-[275px]">
                      <tbody>
                        <tr>
                          <td className="w-12 text-black text-base font-normal font-['Inter'] pb-4">Name</td>
                          <td className="text-black text-lg font-normal font-['Inter'] pl-7 pb-4">: {info.Name}</td>
                        </tr>
                        <tr>
                          <td className="w-12 text-black text-base font-normal font-['Inter'] pb-4">Phone</td>
                          <td className="text-black text-lg font-normal font-['Inter'] pl-7 pb-4">: {info.Phone}</td>
                        </tr>
                        <tr>
                          <td className="text-black text-base font-normal font-['Inter']">Email</td>
                          <td className="text-black text-lg font-normal font-['Inter'] pl-7">: {info.email}</td>
                        </tr>
                      </tbody>
                    </table>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorSetails;