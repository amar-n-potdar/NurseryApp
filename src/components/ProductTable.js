import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { RiEditBoxFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import image1 from "../images/image1.png"
import image2 from "../images/image2.png"
import image3 from "../images/image3.png"
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'



const ProductList = () => {
  const initialData = [
    { id: 1, name: "Fiery Philo Trio", category: "Bonsai & Bamboo", price: 36.85, description: "Monstera Deliciosa is a popular houseplant.", image: image1 },
    { id: 2, name: "Monstera Deliciosa", category: "House Plants", price: 115, description: "Monstera Deliciosa is a popular houseplant.", image: image2 },
    { id: 3, name: "Succulents", category: "Decorative", price: 55, description: "Monstera Deliciosa is a popular houseplant.", image:image3 },
    { id: 4, name: "Whale Fin Sansevieria", category: "Sympathy Gift Plants", price: 265, description: "Monstera Deliciosa is a popular houseplant.", image: image4 },
    { id: 5, name: "Philodendron Sun Red", category: "Indoor Plants", price: 85, description: "Monstera Deliciosa is a popular houseplant.", image:image5 },
    { id: 6, name: "Item Name", category: "Succulents", price: 36.85, description: "Monstera Deliciosa is a popular houseplant.", image: image6 },
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const handleDeleteRow = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    setData([]);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Product List</h1>
      <div className="flex justify-center items-center mb-4">
      <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 p-2 rounded-md w-1/3"
        />
      </div>
      <div className="flex justify-end gap-2 mb-4">
        <button className="bg-[#7aa262] text-white px-4 py-2 rounded-md">Add</button>
        <button className="bg-[#7aa262] text-white px-4 py-2 rounded-md">Filter</button>
        <button onClick={handleClearAll} className="bg-[#ff3c5f] text-white px-4 py-2 rounded-md">Delete</button>

      </div>
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">
            <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
            </th>
            <th className="p-2 text-left">Item Name</th>
            <th className="p-2 text-left">Category</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Description</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <>
              <tr key={item.id} className="border-t border-gray-300 bg-gray-300 text-black">
                <td className="p-4 text-center">
                  <input type="checkbox" checked={selectAll} readOnly />
                </td>
                <td className="p-4 flex items-center gap-2">
                  <img src={item.image} alt={item.name} className="w-10 h-10" />
                  {item.name}
                </td>
                <td className="p-4">{item.category}</td>
                <td className="p-4">{item.price}</td>
                <td className="p-4">{item.description}</td>
                <td className="p-4 flex gap-2">
                  <button className="text-sky-500 px-2 py-1 rounded-md"><IoMdEye /></button>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded-md"><RiEditBoxFill />
                  </button>
                  <button
                    onClick={() => handleDeleteRow(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    <MdDelete />

                  </button>
                </td>
              </tr>
              <tr key={`empty-${index}`} className="h-6 bg-white"></tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
