import React from 'react'
import {useDispatch} from 'react-redux'
import {searchAction} from '../../actions/searchAction'


function Search() {

    const dispatch = useDispatch()

    const handleChange = (e) =>{      

        dispatch(searchAction(e.target.value))
        
    
    }
    
    return (
        <div>
            Search by name:
            <div>
                <input type='text' placeholder='Search' className='w-30 border-2 rounded-md border-slate-200' onChange={handleChange}></input>
            </div>
        </div>
        
    )
}

export default Search
