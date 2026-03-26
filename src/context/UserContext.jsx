import React, { createContext, useState } from 'react'
export const UserContextCreater=createContext();
const UserContext = ({children}) => {
    const [data,setData]=useState("Priyanshu");
  return (
   < UserContextCreater.Provider value={data}>
   {children}
   </UserContextCreater.Provider>
  )
}

export default UserContext
