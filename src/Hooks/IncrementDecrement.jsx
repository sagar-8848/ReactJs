import React ,{useState}from 'react'


const IncrementDecrement = () => {

    

    const[num,setNum]=useState(1)
  return (
    <>
    <h1 className='text-success'>{num}</h1>

    {num<20 &&
    
    
    <button className='btn btn-primary' onClick={()=>setNum(num+1)}>Increase</button>
    }

    {num>0 &&
    
    <button className='btn btn-danger'onClick={()=>setNum(num-1)}>Decrease</button>
    }

    
    
    </>
  )
}

export default IncrementDecrement