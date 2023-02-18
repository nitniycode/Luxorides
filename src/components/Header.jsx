import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {ImWhatsapp} from 'react-icons/im'
import {FiPhone} from 'react-icons/fi'
import {TbBulb} from 'react-icons/tb'
import {RiArrowDownSFill} from 'react-icons/ri'


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
                <ul className='flex space-x-6 ml-72'>
                    <li className={`cursor-pointer py-3 text-[#e6d9af] text-md font-semibold border-b-transparent hover:text-[#b1a374] ${matchRoute('/')}
                      `} 
                      onClick={()=>navigate('/')}
                      >
                        Home
                    </li>

                    <li className={`group relative cursor-pointer py-3 flex text-[#e6d9af] text-md font-semibold border-b-transparent hover:text-[#b1a374]
                      `} 
                     
                      >
                        Explore<RiArrowDownSFill className=' text-2xl'/>

                        <div className='hidden group-hover:block w-[230px] h-[190px] top-[100%] absolute bg-[#073b4c] text-center'>
                            <li className={`mt-4 text-[#e6d9af] border-b-transparent hover:text-[#b1a374] ${matchRoute('/ecategoires')}
                            `}
                            onClick={()=>navigate('/ecategories')}
                            >
                                Explore by Categories
                            </li>
                            <li className={`mt-4 text-[#e6d9af] border-b-transparent hover:text-[#b1a374] ${matchRoute('/esevices')}
                            `}
                            onClick={()=>navigate('/eservices')}
                            >
                                Explore by Services
                            </li>
                            <li className={`mt-4 text-[#e6d9af] border-b-transparent hover:text-[#b1a374] ${matchRoute('/ebrands')}
                            `}
                            onClick={()=>navigate('/ebrands')}
                            >
                                Explore by Brands
                            </li>
                            <li className={`mt-4 text-[#e6d9af] border-b-transparent hover:text-[#b1a374] ${matchRoute('/oneview')}
                            `}
                            onClick={()=>navigate('/oneview')}
                            >
                                Explore in One View
                            </li>
                        </div>
                        
                    </li>

                    <li className={`cursor-pointer py-3 flex text-[#e6d9af] text-md font-semibold border-b-transparent hover:text-[#b1a374] ${matchRoute('/locations')}
                      `} 
                      onClick={()=>navigate('/locations')}
                      >
                        Locations<RiArrowDownSFill className=' text-2xl'/>
                    </li>

                    <li className={`cursor-pointer py-3 text-[#e6d9af] text-md font-semibold border-b-transparent hover:text-[#b1a374] ${matchRoute('/support')}
                      `} 
                      onClick={()=>navigate('/support')}
                      >
                        Support
                    </li>

                    <li className={`cursor-pointer py-3 flex text-[#e6d9af] text-md font-semibold border-b-transparent hover:text-[#b1a374] ${matchRoute('/more')}
                      `} 
                      onClick={()=>navigate('/more')}
                      >
                        More<RiArrowDownSFill className=' text-2xl'/>
                    </li>
                </ul>
            </div>
            <div className='flex space-x-5'>
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
