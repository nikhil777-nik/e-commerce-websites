import React from 'react'

const NewsLetterBox = () => {

  const onSubmitHandler = (e) => {
    e.preventDefault();
  }


  return (
    <div className='text-center animate-fade-in my-16'>
      <p className='text-3xl font-bold text-slate-800 tracking-tight'>Subscribe now & get 20% off</p>
      <p className='text-slate-500 mt-3 max-w-xl mx-auto'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border-2 border-slate-200 rounded-full overflow-hidden pl-5 bg-white focus-within:border-indigo-400 focus-within:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-lg transition-all duration-300'>
        <input className="w-full sm:flex-1 outline-none text-slate-700 bg-transparent py-4 font-medium" type='email' placeholder='Enter your email' required />
        <button type='submit' className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 active:scale-95 text-white text-sm px-12 py-5 transition-transform duration-300 h-full font-bold tracking-widest shadow-[0_0_15px_rgba(236,72,153,0.5)] animate-gradient bg-[length:200%_auto]'>
          SUBSCRIBE
        </button>
      </form>
    </div>
  )
}

export default NewsLetterBox
