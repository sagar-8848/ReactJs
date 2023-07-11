import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
  return (
    <>
    
    <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img src="" alt="" />
        </Link>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <b><li><Link to="/" className="nav-link px-2 text-success">Home</Link></li></b>
          <li><Link to="/products" className="nav-link px-2 text-white">Products</Link></li>
          <li><Link to="#" className="nav-link px-2 text-white">Pricing</Link></li>
          <li><Link to="#" className="nav-link px-2 text-white">FAQs</Link></li>
          <li><Link to="#" className="nav-link px-2 text-white">About</Link></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <Link to='/login' className="btn btn-outline-light me-2">Login</Link>
          <Link to='/signup' className="btn btn-warning">Sign-up</Link>
          <Link to='/register' className="btn btn-warning">Register</Link>
          <Link to='/cart' className='m-3'><FaCartPlus/></Link>
          
        </div>
      </div>
    </div>
  </header>


    </>
  )
}

export default Header