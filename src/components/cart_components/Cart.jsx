import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar'
import CartItem from './CartItem'

function Cart() {

    const shoppingCart = useSelector(state => state.cart.cart)
    const totalCost = useSelector(state => state.cart.totalPrice)
    
    

    

    return shoppingCart.length >= 1?(
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col'>
            {shoppingCart.map(item => <CartItem key= {item["id"]} id={item["id"]} name={item["name"]} price={item["price"]} quantity={item["quantity"]}/>)}
            </div>



            <div className='grid grid-cols-4 justify-between space-y-4'>
                <span></span>
                <div className='col-span-2 h-20 space-x-3 underline text-center font-bold text-3xl'>Total: ${totalCost}</div>
            </div>
        </div>
    
    ) : (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-4 pt-40'>
                <div></div>
                <div className='col-span-2 space-x-3 text-center text-4xl font-medium'>
                    Cart is empty!
                 </div>
            </div>
        </div>
    )
}

export default Cart
