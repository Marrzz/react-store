import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {priceAction} from '../../actions/priceAction'

function Price() {

    const dispatch = useDispatch()
    const price = useSelector(state => state.filters.price)

    const handleChangeMin = (e) =>{

        dispatch(priceAction(parseInt(e.target.value), price.max))
        
    }

    const handleChangeMax = (e) =>{

        dispatch(priceAction(price.min,parseInt(e.target.value)))

    }


    return (
        <div className='space-y-1 space-x-3'>
             <div >Price:</div>
                <input type="number" name="" id=""placeholder='Min'  onChange={handleChangeMin} className='border-2 rounded-md border-slate-200 '/>
                <input type="number" name="" id="" placeholder='Max' onChange={handleChangeMax} className='border-2 rounded-md border-slate-200'/>
        </div>
    )
}

export default Price
