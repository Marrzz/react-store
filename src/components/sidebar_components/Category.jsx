import React from 'react'
import { useDispatch } from 'react-redux'
import {categoryAction} from '../../actions/categoryAction'


function Category(props) {

    const dispatch = useDispatch();

    const handleCategoryChange = (e) =>{

        dispatch(categoryAction(e.target.value))
        
    }

    return (
        <div>  
            <input type='checkbox' name={props.name} value= {props.name}className='space-x-1' onChange={handleCategoryChange}></input>
                {props.name}
        </div>
    )
}

export default Category
