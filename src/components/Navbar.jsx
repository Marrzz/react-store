import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';




function Navbar() {

    const lenght = useSelector(state => state.cart.length)

    return (
       
        <div>
            <div className="flex flex-row justify-start h-24 space-x-5 shadow-md space-y-7">
                
                <div></div>
                <div className='underline underline-offset-4 font-semibold'>Item Shop</div>
                <Link to="/">Home</Link>
                <Link to="/store">Store</Link>
                <Link to="/cart">Cart <span className={lenght > 0 ? "border rounded-full text-center bg-lime-300 ": ""}>{lenght > 0 ? lenght : ''}</span></Link> 

            </div>
            <div></div>
        </div>  
    )
}

export default Navbar
