import React from 'react'
import { useSelector } from 'react-redux'
import ChangeCart from './ChangeCart'
import NewStudent from './reducer/NewStudent'

const TestNav = () => {
    const data=useSelector(store=>store.cart)
    return (
        <>

            <div className="text-center text-primary h2">
                The Total number of item in the cart is {data.cartCount}.
            </div>

            <ChangeCart/>
            
                <NewStudent/>
        </>
    )
}

export default TestNav