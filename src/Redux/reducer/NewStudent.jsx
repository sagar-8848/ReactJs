import React,{useState} from 'react'
import { useSelector } from 'react-redux'

const NewStudent = () => {
    const name=useSelector(store=>store.student)
  return (
    <>
    <p className='h2'>
The name of the Student is {name.studentName}
    </p>
    </>
  )
}

export default NewStudent