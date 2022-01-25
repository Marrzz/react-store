import React from 'react'
import { useState } from 'react'
import {cartRemoveAction} from '../../actions/cartRemoveAction'
import { cartAddAction } from '../../actions/cartAddAction'
import {cartReduceAction} from '../../actions/cartRecuceAction'
import { useSelector, useDispatch } from 'react-redux'

function CartItem(props) {

    let [quantity, setQuantity] = useState(parseInt(props.quantity))

    /*
    <span>{props.name}</span>
                    <span className=''>
                        <span className=''> 
                                <button value={props.id} className='w-7 h-7 text-center bg-green-400 rounded' onClick={handleIncrement}>+ </button>
                                    <input className='w-7 h-7 text-center' type="text" name="" id="" value={quantity} disabled/>
                                <button value={props.id} className='w-7 h-7 text-center bg-red-400 rounded' onClick={handleDecrement}>-</button>
                            <button value={props.id} className='w-20 h-7 text-white text-center bg-red-400 rounded' onClick={removeFromCart}>Remove</button>
                        </span>
                    </span>
    <div className=''>${props.price}</div>
    */


    let cart =  useSelector(state => state.cart.cart)
    const dispatch = useDispatch()

    const removeFromCart = (cartItem) => {

        dispatch(cartRemoveAction(cartItem.target.value))

    }



    const handleIncrement = (cartItem) => {
        setQuantity(quantity += 1)

        dispatch(cartAddAction(null,  null, cartItem.target.value))

    }

    const handleDecrement = (cartItem) => {
        if(quantity > 1){
            setQuantity(quantity -= 1)

            dispatch(cartReduceAction(null,  null, cartItem.target.value))
            console.log(cart)
        }
    }

    return (
        <div>
        <div className='grid grid-cols-6 justify-between mt-4'>

                

                <div className='col-start-3 col-span-2 border border-2 border-black h-20 grid grid-cols-3'>
                    <div className='mt-3 ml-4'>
                        <div>{props.name}</div>
                        <div className='underline'>{props.price}</div>
                    </div>

                    <div className='col-start-3 mt-2'>
                        <div>
                            <button value={props.id} className='w-6 h-6 text-center bg-green-400 rounded' onClick={handleIncrement}>+ </button>
                                <input className='w-8 h-7 rounded text-center' type="text" name="" id="" value={quantity} disabled/>
                            <button value={props.id} className='w-6 h-6 text-center bg-red-400 rounded' onClick={handleDecrement}>-</button>
                        </div>
                        <div>
                        <button value={props.id} className='w-20 h-7 text-white text-center bg-red-400 rounded' onClick={removeFromCart}>Remove</button>
                        </div>
                    </div>
                    
                    
                </div>
            
        </div>
        </div>
    )
}

export default CartItem
