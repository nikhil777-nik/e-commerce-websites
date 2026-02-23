import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItems = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="group block border-2 border-transparent hover:border-indigo-500/50 hover:shadow-[0_10px_30px_-5px_rgba(99,102,241,0.5)] hover:-translate-y-3 transition-all duration-300 ease-out rounded-2xl bg-white p-3 text-slate-700 cursor-pointer overflow-hidden relative" to={`/product/${id}`} >
      <div className='absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
      <div className='overflow-hidden rounded-xl relative z-10'>
        <img className="group-hover:scale-110 transition-transform duration-500 ease-in-out w-full object-cover rounded-xl" src={image[0]} />
      </div>
      <p className='pt-3 pb-1 text-sm font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-600 transition-all line-clamp-1 relative z-10'>{name}</p>
      <p className='text-sm font-bold text-slate-900 relative z-10'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItems
