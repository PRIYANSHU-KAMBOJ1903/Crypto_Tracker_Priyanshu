import React from 'react'
import { useParams } from 'react-router-dom'

const DetailCrypto = () => {
    const {id}=useParams();
  return (
    <div className='min-h-screen  bg-amber-600'>
        <div className="container max-w-[1350px] bg-blue-600 mx-auto">
            hello {id}
        </div>
      
    </div>
  )
}

export default DetailCrypto
