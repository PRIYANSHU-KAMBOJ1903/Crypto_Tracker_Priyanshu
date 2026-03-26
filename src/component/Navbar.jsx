import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faClock} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <div className='Navbar max-w-[1350px] flex justify-between mx-auto py-5 bg-amber-600 items-center text-white'>
      <div className="log flex gap-1 justify-center items-center cursor-progress text-white">
        <FontAwesomeIcon icon={faClock} />
        Real Time Market Tracker
      </div>
      <div className="form w-[500px] px-4 py-3 flex bg-white rounded-full text-xl text-black">
        <form action="" className='flex items-center justify-between w-full'>
          <input
            type="text"
            placeholder='Search Crypto'
            className='w-full outline-none bg-transparent'
          />
          <button type="submit" className='ml-3 cursor-pointer'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Navbar
