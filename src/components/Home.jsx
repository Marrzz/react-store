import React from 'react'
import Navbar from './Navbar'

function Home() {


    return (
        <div>
            <Navbar></Navbar>

            <div className='grid grid-cols-4 pt-40'>
                <div className='col-start-2 col-span-2 text-center text-3xl font-bold'>Welcome to Teemo's wares!</div>
            </div>
           
           <div className='bg-cover w-full h-full' style={{backgroundImage: `url("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg")`}}></div>
           



            
        </div>
    )
}

export default Home
