import React, { createContext, useEffect, useState } from 'react'
export const UserContextCreater=createContext();
const UserContext = ({children}) => {
    const [data,setData]=useState([]);
    const [currency,setCurrency]=useState("usd");
    const fetchData=async()=>{
    const options = {method: 'GET', headers: {'x-cg-demo-api-key': import.meta.env.VITE_API_KEY}};

    const response=await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h`, options);
    const result=await response.json();
    console.log(result);
    setData(result);
    
    }
    useEffect(()=>{
      fetchData();
    },[currency]);
  return (
   < UserContextCreater.Provider value={{data,setData,currency,setCurrency}}>
   {children}
   </UserContextCreater.Provider>
  )
}

export default UserContext
