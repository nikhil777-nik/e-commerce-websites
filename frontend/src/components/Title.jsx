import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3 group/title'>
      <p className='text-slate-500 '>{text1} <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 font-bold group-hover/title:from-pink-500 group-hover/title:to-indigo-500 transition-all duration-500'>{text2}</span></p>
      <p className='w-8 sm:w-16 h-[3px] bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full group-hover/title:w-24 transition-all duration-500 animate-pulse'></p>
    </div>
  )
}

export default Title
