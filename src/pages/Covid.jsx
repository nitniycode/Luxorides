import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {ImFacebook} from 'react-icons/im'
import {BsInstagram, BsYoutube, BsPinterest, BsTwitter} from 'react-icons/bs'

export default function Covid() {

    const location = useLocation()
    const navigate = useNavigate()

    function matchRoute(route){
        if(route===location.pathname){
            return true
        }
    }
  return (
    <section>
        <div>
            <img src="./covidgirl.jpg" alt="covidimg" 
            className='relative'/>

            <div className='absolute top-[320px] left-[80px]'>
                <h2 className='text-7xl font-semibold text-white'>COVID-19</h2>
                <h2 className='text-6xl text-white'>ready car Rental</h2>
            </div>
        </div>
        <div>
            <h2 className='text-5xl text-center mt-36'>
                Rent <span className='font-semibold'>Luxury Cars</span> staying safe from<br/> <span className='font-semibold'>COVID-19</span>
            </h2>
            <p className='text-3xl text-center font-thin py-8'>
                Stay safe from Coronavirus by riding with luxorides.<br/>
                We ensure your safety by taking multiple precautionary actions regularly.
            </p>
            <div className='flex justify-center'>
                <button className={`m-4 py-3 px-12 text-lg flex items-center border-2 border-black text-black bg-white rounded-full hover:bg-black hover:text-white hover:shadow-2xl ${matchRoute('/ebrands')}
                `}
                onClick={()=>navigate('/ebrands')}
                >
                    Browse Brands
                </button>
                <button className={`m-4 py-3 px-12 text-lg flex items-center border-2 border-black text-black bg-white rounded-full hover:bg-black hover:text-white hover:shadow-2xl ${matchRoute('/ecategories')}
                `}
                onClick={()=>navigate('/ecategories')}
                >
                    Browse Cars
                </button>
                <button className={`m-4 py-3 px-12 text-lg flex items-center border-2 border-black text-black bg-white rounded-full hover:bg-black hover:text-white hover:shadow-2xl ${matchRoute('/eservice')}
                `}
                onClick={()=>navigate('/eservice')}
                >
                    Browse Services
                </button>
            </div>
            <div className='ml-[42%] w-[20%] '>
                <button className={` m-4 py-3 px-12 text-lg flex items-center border-2 border-black text-white bg-black rounded-full hover:bg-white hover:text-black hover:shadow-2xl ${matchRoute('/oneview')}
                `}
                onClick={()=>navigate('/oneview')}
                >
                    One-View Cars
                </button>
            </div>

            <div className='flex space-x-4 text-center py-10'>
                <div className='shadow-2xl'>
                    <img src="https://luxorides.com/assets/images/luxorides-covid-precautions-23.webp" alt="" 
                    className='w-[500px]'/>
                    <h2 className='text-3xl'>Regularly Sanitised Cars</h2>
                </div>
                <div className='shadow-2xl'>
                    <img src="https://luxorides.com/assets/images/luxorides-covid-precautions-25.webp" alt="" 
                    className='w-[500px]'/>
                    <h2 className='text-3xl'>Safe and fit Chauffeurs</h2>
                </div>
                <div className='shadow-2xl'>
                    <img src="https://luxorides.com/assets/images/luxorides-covid-precautions-20.webp" alt="" 
                    className='w-[500px]'/>
                    <h2 className='text-3xl'>No/Minimum Contact<br/> Policy</h2>
                </div>
            </div>

            <h2 className='text-5xl text-center font-extralight mt-16'>Renting a Car in the <span className='font-semibold'>COVID-19</span> Pandemic</h2>
            <p className='text-2xl text-center mt-10 font-thin'>COVID-19 has posed a serious challenge to the world. Be it<br/> anyone, the exposure to the threat is highly sensitive. In such a<br/> time of risk exposure, the rental services are meeting a quite but<br/> tough challenge. However, car rentals in the coronavirus<br/> pandemic can be made risk free, but only if approached at the<br/> right place.</p>
            <p className='text-2xl text-center mt-7 font-thin'>Luxorides offers you high range of clean, safe and sanitised cars<br/> to fit your requirements. All our services are regularly monitored<br/> for hygienic processes including washing, sanitisations, PPE<br/> equipment.</p>

            <h2 className='text-3xl text-center my-16'>Visit us now at <button className={`text-green-500 ${matchRoute('/')}`} onClick={()=>navigate('/')}>Rent a Luxury Car</button></h2>
        </div>

        <div className='bg-[#b2ccd2] h-auto py-24 '>
        <div className='justify-center flex  text-5xl'>
          <h2 className='text-left font-bold mx-20'>
            Not finding what You were<br/> looking for!
          </h2>
          <button className={`m-5 py-3 px-14 text-lg text-white border-2 border-black bg-black rounded-full hover:shadow-2xl ${matchRoute('/support')}
          `}
          onClick={()=>navigate('/support')}
          >
            Go to Support
          </button>
        </div>
      </div>

      <div className='bg-[#073b4c] text-center '>
        <div className='flex justify-center space-x-10 '>
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

      <div className='bg-black h-96 text-center'>
        <div className='flex justify-center space-x-48 py-14'>
            <div>
              <img src="https://luxorides.com/assets/images/luxorides-square-logo-only-solid-whitepng-400ppi-9-500x500.webp" 
                    alt="luxorides logo"
                    className='h-28'
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

        <div className='flex justify-center space-x-96'>
          <div className='text-left mt-5'>
            <h2 className='text-white'>Website developed by <button className='text-gray-400 hover:text-gray-600'>Coding Scholar</button></h2>

            <h2 className='text-white'>A Unit of <button className='text-[#b1a374] hover:text-[#d8ccaa]'>Umbrella Room Ventures India Pvt Ltd.</button> formally starsudt ventures</h2>

            <h2 className='text-white'>@ Copyright 2021 - All Rights Reserved</h2>

            
          </div>
          <div className='space-x-7 mt-5'>
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
