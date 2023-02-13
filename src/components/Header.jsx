import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {ImWhatsapp} from 'react-icons/im'
import {FiPhone} from 'react-icons/fi'
import {TbBulb} from 'react-icons/tb'


export default function Header() {

    const location = useLocation()
    const navigate = useNavigate()

    function matchRoute(route){
        if(route===location.pathname){
            return true
        }
    }

    
  return (
    <div className='border-b-2 shadow-sm sticky top-0 z-50 bg-[#073b4c] '>
        <header className='flex items-center space-x-4'>
            <div>
                <img src="https://luxorides.com/assets/images/luxorides-square-logo-only-solid-whitepng-400ppi-13-500x500.webp" 
                     alt="Luxorides"
                     className='h-16 cursor-pointer mx-16'
                     onClick={()=>navigate('/')}
                />
            </div>
            <div>
                <ul className='flex space-x-6 ml-80'>
                    <li className={`cursor-pointer py-3 text-[#e6d9af] text-md font-semibold ${matchRoute('/') && 'hover:text-[#b1a374]'}
                      `} 
                      onClick={()=>navigate('/')}
                      >
                        Home
                    </li>

                    <li className={`cursor-pointer py-3 text-[#e6d9af] text-md font-semibold ${matchRoute('/explore') && 'hover:text-[#b1a374]'}
                      `} 
                      onClick={()=>navigate('/explore')}
                      >
                        Explore
                    </li>

                    <li className={`cursor-pointer py-3 text-[#e6d9af] text-md font-semibold ${matchRoute('/locations') &&'hover:text-[#b1a374]'}
                      `} 
                      onClick={()=>navigate('/locations')}
                      >
                        Locations
                    </li>

                    <li className={`cursor-pointer py-3 text-[#e6d9af] text-md font-semibold ${matchRoute('/support') && 'hover:text-[#b1a374]'}
                      `} 
                      onClick={()=>navigate('/support')}
                      >
                        Support
                    </li>

                    <li className={`cursor-pointer py-3 text-[#e6d9af] text-sm font-semibold ${matchRoute('/more') && 'hover:text-[#b1a374]'}
                      `} 
                      onClick={()=>navigate('/more')}
                      >
                        More
                    </li>
                </ul>
            </div>
            <div className='flex space-x-6 '>
                <div>
                    <button className='text-gray-400 font-semibold bg-white rounded-full px-8 py-2 flex items-center hover:bg-gray-300'>
                        <TbBulb className='mr-2' />
                        BuzZ
                    </button>
                </div>
                <div >
                    <button className='text-white font-semibold bg-green-500 rounded-full px-8 py-2 flex items-center hover:bg-green-700'>
                        <ImWhatsapp className='mr-2'/>
                        WhatsApp Us
                    </button>
                </div>
                <div>
                    <button className='text-white border-white border-2 font-semibold bg-[#073b4c] rounded-full px-8 py-2 flex items-center hover:bg-white hover:text-black'>
                        <FiPhone className='mr-2' />
                        Call Us
                    </button>
                </div>
            </div>
        </header>

    </div>
  )
}
