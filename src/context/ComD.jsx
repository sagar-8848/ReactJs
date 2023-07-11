import React,{useContext} from 'react'
import { GlobalContext } from './GlobalContext'

const ComD = () => {
    const js=useContext(GlobalContext)
  return (
    <>
    <h2 className='text-center text-muted'>
        The Name of the Student is {js.name}
    </h2>

    <h2 className='text-center text-warning'>The age of the Student is {js.age}</h2>

    <h2 className='text-center text-danger'>The Address of the Student is {js.address}</h2>
    </>
  )
}

export default ComD