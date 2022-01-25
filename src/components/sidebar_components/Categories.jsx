import React from 'react'
import Category from './Category'

function Categories(props) {

    let key = 0;

    return (
        <div className='space-x-3'>  
        <div>Cateogories:</div> 
            {
                props.titles.map(
                    (element) =>{
                        key ++;
                        return <Category key = {key} name= {element}/>
                    }
                )
            }
        </div>
    )
}

export default Categories
