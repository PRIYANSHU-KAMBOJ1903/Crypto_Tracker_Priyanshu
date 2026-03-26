import React from 'react'

const Grid = () => {
  return (
    <div className='max-w-[1350px] mx-auto flex flex-col gap-3 justify-center items-center'>
        <div className="w-full data grid grid-cols-5 border-4 p-3 rounded-2xl ">
            <p>Rank</p>
        <p className='text-center'>Coins</p>
        <p className='text-center'>Price</p>
        <p className='text-center'>24H flux</p>
        <p className='text-end'>Market Cap</p>
        </div>
        <div className="w-full data grid grid-cols-5 border-4 p-3 rounded-2xl ">
            <p>Rank</p>
        <p className='text-center'>Coins</p>
        <p className='text-center'>Price</p>
        <p className='text-center'>24H flux</p>
        <p className='text-end'>Market Cap</p>
        </div>
    </div>
  )
}

export default Grid
