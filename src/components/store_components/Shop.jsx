import React from 'react'
import Sidebar from '../sidebar_components/Sidebar'
import Navbar from '../Navbar'
import { useSelector } from 'react-redux'
import { sortItems, applyFilters} from '../../util/helpers' 

function Shop(props) {

    let listOfItems = props.items;

    const sortingPrefrence = useSelector(state => state.filters.sort)

    const search = useSelector(state => state.filters.search)

    const priceRange = useSelector(state => state.filters.price)

    listOfItems = sortItems(listOfItems, sortingPrefrence)

    listOfItems = applyFilters(listOfItems, search, priceRange)

    return (

        <div>
            <Navbar></Navbar>
            <div>
            <Sidebar></Sidebar>
                    
            
                    <div className='grid grid-cols-1 place-items-center lg:grid-cols-5 mt-2 md:grid-cols-3 sm:grid-cols-2'>
                    
                        {listOfItems.map(item => item)}
                    </div>
   
            </div>
        </div>
    
    )
}

export default Shop
