import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div className='h-screen flex-wrap flex-1 justify-center items-center bg-cover bg-no-repeat pt-2'
    style={{backgroundImage: `url(https://images.pexels.com/photos/17792639/pexels-photo-17792639/free-photo-of-car-on-street-seen-from-dark-gate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
    <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 size-64 pb-3'>
    <div className='items-center w-full h-0.5 justify-center px-12 '>
                <NavLink to="/temp">
                  <button
                    type='link'
                    className='bg-gradient-to-r from-green-400 to-purple-400 text-gray-600 py-6 px-24 rounded-lg items-center justify-center text-lg font-serif font-extrabold'
                  >
                    Temperature Converter
                  </button>

                  </NavLink>
                </div>
                <div className='pt-28 items-center h-0.5 justify-center px-12'>
                <NavLink to="/curr">
                  <button
                    type='link'
                    className='bg-gradient-to-l from-red-400 to-sky-400 text-white py-6 px-24 rounded-lg items-center justify-center text-lg font-serif font-bold'
                  >
                    Currency Converter
                  </button>
                  </NavLink>
                </div>
                </div>
            <div className='pt-48'>
            <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 size-28'>
              <h1 className='text-biru font-serif font-bold text-center text-xl'> OPREC EXERCISE 2024</h1>
              <p className="text-cream font-serif font-bold text-center text-lg">Deandro Najwan Ahmad Syahbanna <br/> Teknik Komputer - 2023</p>
      
            </div>
            </div>
    </div>
  )
}

export default Home