import React from 'react'

const Grid = () => {
  return (
    <div className='max-w-[1350px] mx-auto flex flex-col gap-3 justify-center items-center px-6 pb-10'>

      {/* Header Row */}
      <div className="w-full grid grid-cols-5 border border-cyan-500/20 bg-cyan-500/5 p-3 rounded-2xl px-6">
        <p className='text-cyan-400 text-sm font-semibold uppercase tracking-widest'>Rank</p>
        <p className='text-cyan-400 text-sm font-semibold uppercase tracking-widest text-center'>Coins</p>
        <p className='text-cyan-400 text-sm font-semibold uppercase tracking-widest text-center'>Price ($) ↓</p>
        <p className='text-cyan-400 text-sm font-semibold uppercase tracking-widest text-center'>24H Flux</p>
        <p className='text-cyan-400 text-sm font-semibold uppercase tracking-widest text-end'>Market Cap</p>
      </div>

      {/* Data Row */}
      <div className="w-full grid grid-cols-5 border border-white/10 bg-white/[0.025] hover:bg-cyan-500/5 hover:border-cyan-500/20 transition-all duration-200 p-3 rounded-2xl px-6 cursor-pointer">
        <p className='text-slate-500 font-mono'>#1</p>
        <p className='text-center text-slate-200 font-semibold'>Bitcoin</p>
        <p className='text-center text-slate-200 font-mono font-semibold'>$69,675</p>
        <p className='text-center'>
          <span className='bg-red-900/60 border border-red-500/30 text-red-300 text-sm font-semibold px-4 py-1.5 rounded-lg'>▼ 2.72%</span>
        </p>
        <p className='text-end text-slate-200 font-semibold text-sm'>$1,393,401,207,459</p>
      </div>

    </div>
  )
}

export default Grid