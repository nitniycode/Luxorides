import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {ImFacebook} from 'react-icons/im'
import {BsInstagram, BsYoutube, BsPinterest, BsTwitter } from 'react-icons/bs'

export default function Footer() {

    const location = useLocation()
    const navigate = useNavigate()

    function matchRoute(route){
        if(route===location.pathname){
            return true
        }
    }

  return (
    <section>

<div className='bg-[#073b4c] text-center '>
        <div className='flex flex-wrap justify-center space-x-10'>
          <div>
              <button className='text-[#e6d9af] font-bold mt-10 py-5 hover:text-[#b1a374]'>
                  Dive In
              </button><br />
              <button className='text-white hover:text-gray-400'>Safety</button><br />
              <button className='text-white hover:text-gray-400'>Careers</button><br />
              <button className='text-white hover:text-gray-400'>Partners</button><br />
              <button className='text-white hover:text-gray-400'>About Us</button><br />
              <button className='text-white hover:text-gray-400'>Contact Us</button><br />
              <button className='text-white hover:text-gray-400'>Testimonials</button><br />
              <button className='text-white hover:text-gray-400'>List Your Vehicle</button><br />
              <button className='text-white hover:text-gray-400'>Terms And Conditions</button><br />

          </div>
          <div>
              <button className='text-[#e6d9af] font-bold mt-10 py-5 hover:text-[#b1a374]'>
                  Categories
              </button><br />
              <button className='text-white hover:text-gray-400'>Rent Luxury Sedans</button><br />
              <button className='text-white hover:text-gray-400'>Rent Convertibles</button><br />
              <button className='text-white hover:text-gray-400'>Rent Luxury SUVs</button><br />
              <button className='text-white hover:text-gray-400'>Rent Premium SUVs</button><br />
              <button className='text-white hover:text-gray-400'>Rent Muscle Cars</button><br />
              <button className='text-white hover:text-gray-400'>Rent Vintage Cars</button><br />
              <button className='text-white hover:text-gray-400'>Rent Ultra Luxury Cars</button><br />
              <button className='text-white hover:text-gray-400'>Rent Standard Vehicles</button><br />

          </div>

          <div>
              <button className='text-[#e6d9af] font-bold mt-10 py-5 hover:text-[#b1a374]'>
                  Services
              </button><br />
              <button className='text-white hover:text-gray-400'>Wedding Cars</button><br />
              <button className='text-white hover:text-gray-400'>Tour</button><br />
              <button className='text-white hover:text-gray-400'>Corporate</button><br />
              <button className='text-white hover:text-gray-400'>VIP Transport</button><br />
              <button className='text-white hover:text-gray-400'>Personal Travel</button><br />
              <button className='text-white hover:text-gray-400'>Celebrities Travel</button><br />
              <button className='text-white hover:text-gray-400'>Video Shoots</button><br />
              <button className='text-white hover:text-gray-400'>Car Decorations</button><br />

          </div>

          <div>
              <button className='text-[#e6d9af] font-bold mt-10 py-5 hover:text-[#b1a374]'>
                  Brands We Serve
              </button><br />
              <button className='text-white hover:text-gray-400'>Audi</button><br />
              <button className='text-white hover:text-gray-400'>BMW</button><br />
              <button className='text-white hover:text-gray-400'>Jaguar</button><br />
              <button className='text-white hover:text-gray-400'>Range Rover</button><br />
              <button className='text-white hover:text-gray-400'>Mercedes Benz</button><br />
              <button className='text-white hover:text-gray-400'>Rolls Royce</button><br />
              <button className='text-white hover:text-gray-400'>Bentley</button><br />
              <button className='text-white hover:text-gray-400'>Porsche</button><br />

          </div>

          <div>
              <button className='text-[#e6d9af] font-bold mt-10 py-5 hover:text-[#b1a374]'>
                  Top Choices
              </button><br />
              <button className='text-white hover:text-gray-400'>Audi A3 Convertible (Red)</button><br />
              <button className='text-white hover:text-gray-400'>Mercedes Benz GLA</button><br />
              <button className='text-white hover:text-gray-400'>Audi A4 Sedan</button><br />
              <button className='text-white hover:text-gray-400'>Jaguar XF Sedan</button><br />
              <button className='text-white hover:text-gray-400'>Bentley Flying Spur</button><br />
              <button className='text-white hover:text-gray-400'>Chrysler Limousine</button><br />
              <button className='text-white hover:text-gray-400'>Rolls Royce Phantom</button><br />
              <button className='text-white hover:text-gray-400'>Rolls Royce 1939 Vintage</button><br />

          </div>
        </div>

        <div className='space-x-7 mt-5'>
          <button><ImFacebook className='text-gray-400 hover:text-white text-2xl'/></button>
          <button><BsTwitter className='text-gray-400 hover:text-white text-2xl'/></button>
          <button><BsInstagram className='text-gray-400 hover:text-white text-2xl'/></button>
          <button><BsYoutube className='text-gray-400 hover:text-white text-2xl'/></button>
          <button><BsPinterest className='text-gray-400 hover:text-white text-2xl'/></button>
        </div>

        <div className='pb-14'>
            <div className='mt-2 text-white'>
              Services offered by <button className='text-[#b1a374] font-bold'>LUXORIDES</button>
            </div>
            <div className='text-white'>
              Rent Luxury Cars | Chauffeur Driven Rides at Affordable Prices
            </div>
            <div className='text-white mt-8'>
              Your privacy is valuable to us. To know how we handle your data, read our <button className='text-gray-400'>Privacy Policy</button>.
            </div>
        </div>
      </div>
        <div className='bg-black py-14'>
        <div className='flex flex-wrap justify-center space-x-14 mb-5 items-center h-auto'>
            <div>
              <img src="https://luxorides.com/assets/images/luxorides-square-logo-only-solid-whitepng-400ppi-9-500x500.webp" 
                    alt="luxorides logo"
                    className='h-28 mr-72'
             />
            </div>
            <div>
              <h2 className='text-[#82786e] font-medium text-lg'>
                  Locations
              </h2><br/>
              <button className={`text-gray-400 hover:text-gray-600 ${matchRoute('/delhi')}
              `}
              onClick={()=>navigate('/delhi')}
              >
                Delhi
              </button><br />
              <button className={`text-gray-400 hover:text-gray-600 ${matchRoute('/lucknow')}
              `}
              onClick={()=>navigate('/lucknow')}
              >
                Lucknow
              </button><br />
              <button className={`text-gray-400 hover:text-gray-600 ${matchRoute('/agra')}
              `}
              onClick={()=>navigate('/agra')}
              >
                Agra
              </button><br />
              <button className={`text-gray-400 hover:text-gray-600 ${matchRoute('/jaipur')}
              `}
              onClick={()=>navigate('/jaipur')}
              >
                Jaipur
              </button><br />
            </div>
            <div>
              <h2 className='text-[#82786e] font-medium text-lg'>
                  Delhi NCR
              </h2><br/>
              <button className='text-gray-400 hover:text-gray-600'>Gurgaon</button><br />
              <button className='text-gray-400 hover:text-gray-600'>Faridabad</button><br />
              <button className='text-gray-400 hover:text-gray-600'>Ghaziabad</button><br />
              <button className='text-gray-400 hover:text-gray-600'>Noida</button><br />
            </div>
            <div>
              <h2 className='text-[#82786e] font-medium text-lg'>
                  Contacts
              </h2><br/>
              <button className='text-gray-400 hover:text-gray-600'>contact@luxorides.in</button><br />
              <button className='text-gray-400 hover:text-gray-600 py-5 font-extralight'>+91 9119004208</button><br />
            </div>
            
        </div>
        <div className='bg-gray-600 h-[1px] mx-44'></div>

        <div className='flex flex-wrap justify-center md:space-x-48 lg:space-x-96 xl:space-x-96'>
          <div className='sm:text-center lg:text-left xl:text-left mt-5'>
            <h2 className='text-white'>Website developed by <button className='text-gray-400 hover:text-gray-600'>Coding Scholar</button></h2>

            <h2 className='text-white'>A Unit of <button className='text-[#b1a374] hover:text-[#d8ccaa]'>Umbrella Room Ventures India Pvt Ltd.</button> formally starsudt ventures</h2>

            <h2 className='text-white'>@ Copyright 2021 - All Rights Reserved</h2>

            
          </div>
          <div className='space-x-7 mt-5 text-center'>
            <button><ImFacebook className='text-gray-400 hover:text-blue-500 text-2xl'/></button>
            <button><BsTwitter className='text-gray-400 hover:text-blue-500 text-2xl'/></button>
            <button><BsInstagram className='text-gray-400 hover:text-pink-400 text-2xl'/></button>
            <button><BsYoutube className='text-gray-400 hover:text-red-700 text-2xl'/></button>
            <button><BsPinterest className='text-gray-400 hover:text-red-700 text-2xl'/></button>            
          </div>
        </div>
      </div>
    </section>
  )
}
