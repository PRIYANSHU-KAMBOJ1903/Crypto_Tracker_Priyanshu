import React, { useContext } from 'react'
import { UserContextCreater } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';

const Grid = () => {
  const navigate=useNavigate();
  const {data,setData,currency}=useContext(UserContextCreater);
  const handleClickRoute=async(id)=>{
    navigate(`/crypto/${id}`)
  }
  
  return (
    <div className='max-w-[1350px] mx-auto flex flex-col gap-3 justify-center items-center px-6 pb-10'>

      {/* Header Row */}
      <div className="w-full grid grid-cols-5 border border-cyan-500/20 bg-cyan-500/5 p-3 rounded-2xl px-6">
        <p className='text-cyan-400 text-sm font-semibold uppercase tracking-widest'>Rank</p>
        <p className='text-cyan-400 text-sm font-semibold uppercase tracking-widest text-left ml-7'>Coins</p>
        <p className='text-cyan-400 text-sm font-semibold uppercase tracking-widest text-center'>Price ($) ↓</p>
        <p className='text-cyan-400 text-sm font-semibold uppercase tracking-widest text-center'>24H Flux</p>
        <p className='text-cyan-400 text-sm font-semibold uppercase tracking-widest text-end'>Market Cap</p>
      </div>

      {/* Data Row */}
      {data.slice(0,10).map((e,i)=>(
        <div key={e.id} className="w-full grid grid-cols-5 border border-white/10 bg-white/[0.025] hover:bg-cyan-500/5 hover:border-cyan-500/20 transition-all duration-200 p-3 rounded-2xl px-6 cursor-pointer" onClick={()=>handleClickRoute(e.id)}>
        <p className='text-slate-500 font-mono'>#{e.market_cap_rank}</p>
        <p className='text-right text-slate-200 font-semibold flex justify-right items-center gap-3 '><img src={e.image} alt="" className='w-[50px] h-[50px] rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 p-0.5'/> {e.id}</p>
        <p className='text-center text-slate-200 font-mono font-semibold'>${e.high_24h}</p>
        <p className='text-center'>
          <span className='bg-red-900/60 border border-red-500/30 text-red-300 text-sm font-semibold px-4 py-1.5 rounded-lg'>▼ {e.market_cap.toLocaleString()}</span>
        </p>
        <p className='text-end text-slate-200 font-semibold text-sm'>${e.total_volume.toLocaleString()}</p>
      </div>
      ))}

    </div>
  )
}

export default Grid