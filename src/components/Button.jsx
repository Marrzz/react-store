import React from 'react'
import { useDispatch } from 'react-redux'
import { cartAddAction } from '../actions/cartAddAction'

function Button(props) {

    
    const dispatch = useDispatch()

    const addToCart = () => {

        dispatch(cartAddAction(props.name, props.price, props.id))
    }


    return (
            <button href="#" className="w-32 h-10 text-white hover:bg-emerald-600 font-bold py-2 px-4 rounded bg-emerald-500 text-center" 
                onClick={addToCart}>
                {props.text}
            </button>
    )
}

export default Button
