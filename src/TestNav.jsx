import React from 'react'
import { Link } from 'react-router-dom'

const TestNav = () => {
  return (
    <>

    <Link to='/'>Home</Link>
    <Link to='second'>About</Link>
    <Link to='content'>Contact</Link>
    <Link to='test'>AnotherOne</Link>
    
    </>
  )
}

export default TestNav