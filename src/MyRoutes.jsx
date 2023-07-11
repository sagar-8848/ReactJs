import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'


import Layout from './Components/Layout'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import IncrementDecrement from './Hooks/IncrementDecrement'
import Effects from './Hooks/Effects'
import DataFetch from './Hooks/DataFetch'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import Register from './Pages/Register'
import Show from './context/Show'
import TestNav from './Redux/TestNav'

const MyRoutes = () => {
  return (
    <>
    
    <Router>
        <Routes>
           <Route path='/' element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='productdetails/:productId' element={<ProductDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/register' element={<Register/>}/>

           </Route>
            <Route path='/change' element={<IncrementDecrement/>}/>
            <Route path='/effect' element={<Effects/>}/>
            <Route path='/fetchdata' element={<DataFetch/>}/>
            <Route path='/show' element={<Show/>}/>
            <Route path='/redux/cart' element={<TestNav/>}/>
           
        </Routes>
    </Router>

    
    </>
  )
}

export default MyRoutes