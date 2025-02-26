import React, { useState } from 'react';
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import search from "../images/search.svg";
import up from "../images/up.svg";
import jj from "../images/jj.svg"
import down from "../images/down.svg";

const LowStockProducts = () => {
  const products = [
    { id: 1, image: image1, name: "Fiery Philo Trio", category: "Bonsai & Bamboo", price: "36.5$", vendor: "A Nursery", quantity: 2 },
    { id: 2, image: image2, name: "Monstera Deliciosa", category: "House Plants", price: "11$", vendor: "B Nursery", quantity: 2 },
    { id: 3, image: image3, name: "Succulents", category: "Decorative", price: "5$", vendor: "C Nursery", quantity: 2 },
    { id: 4, image: image4, name: "Whale Fin Sansaveria", category: "Sympathy Gift Plants", price: "25$", vendor: "D Nursery", quantity: 2 },
    { id: 5, image: image5, name: "Philodendron Sun Red", category: "Indoor Plants", price: "16.5$", vendor: "E Nursery", quantity: 2 },
    { id: 6, image: image6, name: "Succulents", category: "Sympathy Gift Plants", price: "5$", vendor: "J Nursery", quantity: 2 },
    { id: 7, image: image1, name: "Monstera Deliciosa", category: "Succulents", price: "20.5$", vendor: "F Nursery", quantity: 2 },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [quantities, setQuantities] = useState(products.map(p => p.quantity));

  const handleIncrement = (index) => {
    setQuantities(prevQuantities => prevQuantities.map((q, i) => (i === index ? q + 1 : q)));
  };

  const handleDecrement = (index) => {
    setQuantities(prevQuantities => prevQuantities.map((q, i) => (i === index && q > 2 ? q - 1 : q)));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = products.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="w-[1078px] h-[1344px] pl-[39px] pr-[38px] pt-2 pb-9 bg-neutral-100 flex-col justify-start items-center inline-flex overflow-hidden">
      <div className="self-stretch h-[1300px] bg-neutral-100 flex-col justify-center items-center gap-4 inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="p-2.5 justify-center items-center gap-2.5 flex">
            <div className="text-[#5c5c5c] text-lg font-semibold font-['Poppins']">Low Stock Products</div>
          </div>
          <div className="h-[30px] p-2.5 bg-[#ddf2d0] rounded-[5px] flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden">
            <div className="self-stretch justify-start items-center gap-[30px] inline-flex">
              <input
                value={searchTerm}
                onChange={handleSearch}
                type="text"
                className="text-[#a6a6a6] w-full text-xs font-normal font-['Poppins']"
                placeholder="Search Product name or serial No..."
              />
              <img alt="" src={search} />
            </div>
          </div>
          <div className="justify-start items-center gap-3 flex">
            <div className="w-[93px] h-[50px] bg-[#7aa262] rounded-[9px] inline-flex justify-start items-center gap-2 ">
              <div className="w-[35px] h-[38px] p-2.5 bg-[#7aa262] rounded-lg  justify-center items-center gap-2.5 flex" />
              <div className="text-white text-sm items-center font-normal font-['Poppins'] flex mr-10"><img src={jj}/>Filters</div>
            </div>
          </div>
        </div>
        <div className="h-[1237px] bg-neutral-100 rounded border border-[#5b5b5b] flex-col justify-start items-start gap-5 flex overflow-hidden">
          <table className="w-[1001px] bg-white">
            <thead>
              <tr className="bg-[#ececec]">
                <th className="px-3 py-2.5 text-black text-base font-medium font-['Poppins'] tracking-tight">Product</th>
                <th className="px-3 py-2.5 text-black text-base font-medium font-['Poppins'] tracking-tight">Product Name</th>
                <th className="px-3 py-2.5 text-black text-base font-medium font-['Poppins'] tracking-tight">Category</th>
                <th className="px-3 py-2.5 text-black text-base font-medium font-['Poppins'] tracking-tight">Price</th>
                <th className="px-3 py-2.5 text-black text-base font-medium font-['Poppins'] tracking-tight">Vendor</th>
                <th className="px-3 py-2.5 text-black text-base font-medium font-['Poppins'] tracking-tight">Quantity</th>
                <th className="px-3 py-2.5 text-black text-base font-medium font-['Poppins'] tracking-tight">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((product, index) => (
                <tr key={product.id} className="bg-white">
                  <td className="py-2.5 flex justify-center items-center">
                    <img className="w-[55px] h-[65px] px-[2.65px] py-[5.30px] rounded-[3px] shadow-[0px_1.0607415437698364px_1.0607415437698364px_0px_rgba(0,0,0,0.25)]" src={product.image} alt={product.name} />
                  </td>
                  <td className="px-3 py-2.5 text-black text-base font-normal font-['Poppins'] leading-normal tracking-wide">{product.name}</td>
                  <td className="px-3 py-2.5 text-black text-base font-normal font-['Poppins'] leading-tight">{product.category}</td>
                  <td className="px-3 py-2.5 text-[#323c47] text-sm font-normal font-['Poppins'] tracking-tight">{product.price}</td>
                  <td className="px-3 py-2.5 text-black text-base font-normal font-['Poppins'] leading-tight">{product.vendor}</td>
                  <td className="px-3 py-2.5 flex justify-center items-center">
                    <div className="w-[104px] h-[50px] rounded-md border border-[#7aa262] flex justify-start items-center gap-px">
                      <div className="h-[20px] p-[5.05px] flex justify-center items-center gap-[5.05px]">
                        <div className="text-black text-[10px] font-light font-['Poppins']">Quantity</div>
                      </div>
                      <div className="pt-[0.2] pl-1 pr-[4.95px] pb-[2.69px] rounded-sm border h-[32px] border-black flex justify-center items-center">
                        <div className="flex justify-center items-center gap-[5px]">
                          <div className="w-5 h-1.5 text-black text-[10px] font-light font-['Poppins']">{quantities[index]}</div>
                          <div className="w-[6.07px] flex flex-col justify-start items-start gap-[3px]">
                            <button onClick={() => handleIncrement(index)}>
                              <img src={up} alt="up" className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleDecrement(index)}>
                              <img src={down} alt="down" className="w-4 h-4" />
                            </button>
                            
                          </div>
                        </div>
                      </div>
                      <td className="px-3 py-2.5 flex justify-center items-center ml-12">
                    <button className="px-2.5 py-1 bg-[#7aa262] rounded-[5px] flex justify-center items-center gap-2">
                      <div className="text-white text-xs font-normal font-['Poppins']">Update</div>
                    </button>
                  </td>
                    </div>
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LowStockProducts;