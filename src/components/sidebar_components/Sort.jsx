import React from 'react'
import {useDispatch} from 'react-redux'
import {sortAction} from '../../actions/sortAction'

function Sort(props) {

    const dispatch = useDispatch()

    let key = 0;

    const toggleSort = (e) =>{

        dispatch(sortAction(e.target.value))

    }

    return (
        <div className='space-y-1 space-x-3'>
            <div >Sort by:</div>
            <select className='border-2 rounded-md border-slate-100' onChange={toggleSort}>
                { props.categories.map((category) => {
                    key ++;
                    return <option key= {key} value={category}>{category}</option>
                    }
                )}
            </select>
            <div className='space-y-2'> </div>
        </div>
        
    )
}

export default Sort
