import React, { useState } from "react";

const FilterMenu = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    "Bonsai and Bamboo",
    "House Plants",
    "Floor Plants",
    "Sympathy Gift Plants",
    "Decorative",
    "Succulents",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="h-[305px] w-full bg-[#7aa262] rounded-[17px] flex flex-col items-center gap-3 p-2 md:h-auto md:flex-row md:flex-wrap md:justify-center">
      {categories.map((category) => (
        <div
          key={category}
          className={`w-full p-2.5 bg-white rounded-[15px] text-center cursor-pointer ${
            selectedCategory === category ? "bg-[#5a7a42]" : ""
          }`}
          onClick={() => handleCategoryClick(category)}
        >
          <div className="text-black text-sm font-normal font-['Poppins']">
            {category}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterMenu;
