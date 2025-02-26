import React from 'react'
import jacobjones from '../images/jacobjones.png'
import star1 from '../images/star1.png'

const products = [
  { name: 'Jacob Jones', rating: '4.6', image: jacobjones },
  { name: 'Aloe Vera', rating: '4.6', image: jacobjones },
  { name: 'ZZ Plant', rating: '4.6', image: jacobjones },
  { name: 'Geranium', rating: '4.6', image: jacobjones },
  { name: 'Coleus', rating: '4.6', image: jacobjones },
  { name: 'Maranta', rating: '4.6', image: jacobjones },
  { name: 'Jacob Jones', rating: '4.6', image: jacobjones },
];

const Products1 = () => {
  return (
    <div className="w-[281px] bg-white rounded-[10px] p-4">
      <h1 className="text-black text-base font-medium font-['Poppins'] mb-4">Popular products</h1>
      <div className="flex flex-col gap-4">
        {products.map((product, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img className="w-9 h-9 rounded-full" src={product.image} alt={product.name} />
              <div className="flex flex-col">
                <h1 className="text-black text-sm font-medium font-['Poppins']">{product.name}</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={star1} alt="star" />
              <div className="text-black text-sm font-normal font-['Poppins']">{product.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products1