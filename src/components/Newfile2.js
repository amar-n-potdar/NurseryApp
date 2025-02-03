import React, { useState } from "react";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import eye from "../images/eye.svg";
import edit from "../images/edit.svg";
import delete1 from "../images/delete1.svg";
import addSym from "../images/addSym.svg";
import jj from "../images/jj.svg";
import gd from "../images/gd.svg";
import search from "../images/search.svg";
import vv from "../images/vv.svg";

const initialData =  [
  {
    id: 1,
    name: "Fiery Philo Trio",
    category: "Bonsai & Bamboo",
    price: 36.85,
    description: "Monstera Deliciosa is a popular houseplant.",
    image: image1,
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    category: "House Plants",
    price: 115,
    description: "Monstera Deliciosa is a popular houseplant.",
    image: image2,
  },
  {
    id: 3,
    name: "Succulents",
    category: "Decorative",
    price: 55,
    description: "Monstera Deliciosa is a popular houseplant.",
    image: image3,
  },
  {
    id: 4,
    name: "Whale Fin Sansevieria",
    category: "Sympathy Gift Plants",
    price: 265,
    description: "Monstera Deliciosa is a popular houseplant.",
    image: image4,
  },
  {
    id: 5,
    name: "Philodendron Sun Red",
    category: "Indoor Plants",
    price: 85,
    description: "Monstera Deliciosa is a popular houseplant.",
    image: image5,
  },
  {
    id: 6,
    name: "Item Name",
    category: "Succulents",
    price: 36.85,
    description: "Monstera Deliciosa is a popular houseplant.",
    image: image6,
  },
];

const Newfile2 = () => {
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
    <div className="w-[1094px] bg-neutral-100 flex flex-col p-4">
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-60">
          <h2 className="text-lg font-semibold flex items-center space-x-2">
            <span>All Items</span>
            <div className="flex space-x-1 border border-gray-400 rounded">
              <img className=""alt="" src={vv} />
              <img alt="" src={jj} />
            </div>
          </h2>
          <div className="flex items-center p-1 rounded-lg space-x-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="rounded-lg px-4 py-2 text-sm focus:outline-none w-[300px]"
            />
            <img alt="Search Icon" src={search} className="w-4 h-4" />
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="bg-[#7aa262] text-white px-4 py-2 rounded-lg flex items-center">
            <img src={addSym} alt="Add" className="mr-2" /> Add
          </button>
          <button className="bg-[#7aa262] text-white px-4 py-2 rounded-lg flex items-center">
            <img src={jj} alt="Filters" className="mr-2" /> Filters
          </button>
          <button
            className="bg-[#ff3c5f] text-white px-4 py-2 rounded-lg flex items-center"
            onClick={handleClearAll}
          >
            <img src={gd} alt="Delete" className="mr-2" /> Delete
          </button>
        </div>
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-7 bg-gray-200 text-center font-semibold py-2 rounded-t-lg">
          <div>
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
              className="m-auto"
            />
          </div>
          <div>Item Image</div>
          <div>Item Name</div>
          <div>Category</div>
          <div>Price</div>
          <div>Description</div>
          <div>Action</div>
        </div>

        {/* Blank row with height of 20px added here */}
        <div className="grid grid-cols-7 h-[20px] bg-white border-b">
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>

        {filteredData.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-7 items-center text-center py-4 mb-4 bg-[#ffffff] border-b"
          >
            <div>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </div>
            <div>
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded shadow-md mx-auto"
              />
            </div>
            <div>{item.name}</div>
            <div>{item.category}</div>
            <div>{item.price}$</div>
            <div>{item.description}</div>
            <div className="flex justify-center space-x-2">
              <img
                src={eye}
                alt="View"
                className="cursor-pointer"
                onClick={() => alert(`Viewing details of ${item.name}: Category - ${item.category}, Price - $${item.price}`)}
              />
              <img
                src={edit}
                alt="Edit"
                className="cursor-pointer"
                onClick={() => alert(`Editing ${item.name}`)}
              />
              <img
                src={delete1}
                alt="Delete"
                className="cursor-pointer"
                onClick={() => handleDeleteRow(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newfile2;
