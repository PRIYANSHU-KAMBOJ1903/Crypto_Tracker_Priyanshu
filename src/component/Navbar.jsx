import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faClock } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { UserContextCreater } from '../context/UserContext'

const Navbar = () => {
  const [input,setInput]=useState();
   const {data,setData}=useContext(UserContextCreater);
  const [crdata,setCryData]=useState(data);
 
    const navigate=useNavigate()
    const handleClick=(e)=>{
        navigate("/home")
    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const filter=data.filter((e,i)=>e.name.toLowerCase().includes(input.toLowerCase()));
      setData(filter);
    }

    const handleChange=async(e)=>{
      setInput(e.target.value);
      if(e.target.value.trim()===""){
        setData(crdata);
      }
    }
  return (
    <div className='Navbar max-w-[1350px] flex justify-between mx-auto py-4 px-6 items-center text-white'>

      
      <div onClick={handleClick} className="log flex gap-2 justify-center items-center cursor-pointer text-cyan-400 font-semibold text-lg tracking-wide">
        <FontAwesomeIcon icon={faClock} className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
        Real Time Market Tracker
      </div>

      
      <div className="form w-[420px] px-5 py-2.5 flex bg-white/5 border border-cyan-500/20 hover:border-cyan-500/50 rounded-full text-base text-white transition-all duration-300 focus-within:border-cyan-400/60 focus-within:shadow-[0_0_20px_rgba(34,211,238,0.12)]">
        <form action="" className='flex items-center justify-between w-full'>
          <input
            type="text"
            placeholder='Search Crypto ...'
            className='w-full outline-none bg-transparent text-slate-300 placeholder:text-slate-500 text-sm'
            list='coinList'
            onChange={handleChange}
          />
          <datalist id='coinList' >
              {data.map((e,i)=>(<option value={e.name}></option>))}
          </datalist>
          <button type="submit" className='ml-3 cursor-pointer bg-cyan-400 text-[#0b0f1a] w-8 h-8 rounded-full flex items-center justify-center hover:bg-cyan-300 transition-colors duration-200' onClick={handleSubmit}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-sm" />
          </button>
        </form>
      </div>

      
      <div className="flex items-center gap-3">
        <button className="px-5 py-2 rounded-full border border-cyan-500/35 text-cyan-400 text-sm font-medium hover:bg-cyan-500/10 hover:border-cyan-400/60 transition-all duration-200">
          Log In
        </button>
        <button className="px-5 py-2 rounded-full bg-cyan-400 text-[#0b0f1a] text-sm font-bold hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-200">
          Sign Up
        </button>
      </div>

    </div>
  )
}

export default Navbar