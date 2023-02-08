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
    <div className='border-b-2 shadow-sm sticky top-0 z-50 bg-cyan-900 '>
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
                    <li className={`cursor-pointer py-3 text-[#e4d295] text-md font-semibold border-b-border-b-transparent ${matchRoute('/') && 'text-[#ecc84f]'}
                      `} 
                      onClick={()=>navigate('/')}
                      >
                        Home
                    </li>

                    <li className={`cursor-pointer py-3 text-[#e4d295] text-md font-semibold  border-b-transparent ${matchRoute('/explore') && 'text-[#ecc84f]'}
                      `} 
                      onClick={()=>navigate('/explore')}
                      >
                        Explore
                    </li>

                    <li className={`cursor-pointer py-3 text-[#e4d295] text-md font-semibold  border-b-transparent ${matchRoute('/locations') &&'text-[#ecc84f]'}
                      `} 
                      onClick={()=>navigate('/locations')}
                      >
                        Locations
                    </li>

                    <li className={`cursor-pointer py-3 text-[#e4d295] text-md font-semibold  border-b-transparent ${matchRoute('/support') && 'text-[#ecc84f]'}
                      `} 
                      onClick={()=>navigate('/support')}
                      >
                        Support
                    </li>

                    <li className={`cursor-pointer py-3 text-[#e4d295] text-sm font-semibold  border-b-transparent ${matchRoute('/more') && 'text-[#ecc84f]'}
                      `} 
                      onClick={()=>navigate('/more')}
                      >
                        More
                    </li>
                </ul>
            </div>
            <div className='flex space-x-6 '>
                <div>
                    <button className='text-white font-semibold bg-green-500 rounded-full px-8 py-2 flex items-center'>
                        <TbBulb className='mr-2' />
                        BuzZ
                    </button>
                </div>
                <div >
                    <button className='text-white font-semibold bg-green-500 rounded-full px-8 py-2 flex items-center'>
                        <ImWhatsapp className='mr-2'/>
                        WhatsApp Us
                    </button>
                </div>
                <div>
                    <button className='text-white font-semibold bg-green-500 rounded-full px-8 py-2 flex items-center'>
                        <FiPhone className='mr-2' />
                        Call Us
                    </button>
                </div>
            </div>
        </header>

    </div>
  )
}
