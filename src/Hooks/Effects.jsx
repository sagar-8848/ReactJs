import React, { useState,useEffect } from 'react'

const Effects = () => {
    const[num,setNum]=useState(1)
    const[data,setData]=useState(10)

    useEffect(()=>{
        alert('this is a alert pop msg')
    },[])
  return (
    <>
    
    <h1>{num}</h1>
    <button className='btn btn-success' onClick={()=>setNum(num+2)}>Click to Change</button>

    <h1>{data}</h1>
    <button className='btn btn-primary' onClick={()=>setData(data+5)}>Click here</button>

    
    </>
  )
}

export default Effects