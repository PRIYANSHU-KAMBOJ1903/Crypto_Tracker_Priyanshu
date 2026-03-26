import React from 'react'

const Details = () => {
  return (
    <div className="detail max-w-[1350px] mx-auto px-6 py-20 text-center">
      <h1 className="text-6xl md:text-7xl font-bold text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]">
        Crypto
      </h1>

      <h3 className="mt-6 text-4xl md:text-5xl font-semibold text-cyan-300">
        Market Intelligence
      </h3>

      <p className="mt-10 text-lg md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
        Track real-time crypto market metrics with advanced analytics
        <br />
        and{" "}
        <span className="text-cyan-400 font-medium">
          neural network predictions
        </span>
      </p>
    </div>
  )
}

export default Details