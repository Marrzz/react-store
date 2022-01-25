import React from 'react'
import Price from './Price'
import Search from './Search'
import Sort from './Sort'

function Sidebar() { 


    return (
        <div className='grid grid-cols-3 border-2 border-black space-x-3'>
            
            <div className='border-r-2 border-black '>
                <Search/>
            </div>

            <div className='border-r-2 border-black'>
                <Sort categories={['Price: Ascending','Price: Descending', 'Alphabethically: Ascending', 'Alphabetically: Desceding']}/>
            </div>
            
            <div>
               <Price/>
            </div>

        
        </div>
    )
}

export default Sidebar
