import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {ImWhatsapp} from 'react-icons/im'
import {ImFacebook} from 'react-icons/im'
import {BsInstagram, BsYoutube, BsPinterest, BsTwitter} from 'react-icons/bs'

export default function Bmw() {

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
            <img src="./bmw.jpg" alt="" className='relative'/>

            <div className='absolute top-[40%] right-[5%]'>
                <h2 className='text-7xl font-semibold text-white'>Rent a BMW</h2>
                <p className='text-2xl text-white text-center mt-20'>Luxury beyonds Beliefs</p>
            </div>
        </div>

        <div>
          <h2 className='text-7xl font-semibold text-center mt-16'>Sedans <span className='font-light'>from</span> BMW</h2>


          <div className='flex justify-center space-x-16 my-16'>
            <img src="https://luxorides.com/assets/images/bmw-3-series-rs20000-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad-3-1016x572.webp" alt="" className='w-[550px] shadow-2xl'/>

            <div className='text-center'>
              <h2 className='text-3xl font-semibold my-8'>
                Rent BMW 3 Series Sedans
              </h2>
              <p className='text-lg text-slate-500'>
                Barely on the road and the all-new BMW 3 Series is already leaving<br/> everything behind it, including conventions and expectations. It stands<br/> for the dawning of a new era. Propelling the ultimate sports sedan are<br/> even more powerful and efficient engines.
              </p>

              <div className='flex mt-8'>
              <button className='text-green-700 text-lg font-semibold bg-white border-green-700 border-2 rounded-full px-12 py-3 flex items-center hover:bg-green-400 hover:text-white hover:border-green-400 shadow-2xl'>
                    <ImWhatsapp className='mr-1 text-2xl'/>
                    ₹20,000/-
              </button>
              <button className='text-black text-lg m-auto font-semibold bg-white border-black border-2 rounded-full px-10 py-2 flex items-center hover:black hover:text-white hover:bg-black shadow-2xl'>
                    View car
              </button>
              </div>
              
            </div>
          </div>

        

          <div className='flex justify-center space-x-16 py-16'>
            <div className='text-center'>
              <h2 className='text-3xl font-semibold my-8'>
                Rent BMW 5 Series Sedans
              </h2>
              <p className='text-lg text-slate-500'>
                The BMW 5 Series is the embodiment of the modern business sedan.<br/> Due to its dynamic and elegant appearance, it convincingly meets the<br/> expectations placed today on a vehicle of its class: aesthetic athleticism<br/> and driving pleasure with state-of-the-art technology.
              </p>

              <div className='flex mt-8'>
              <button className='text-green-700 text-lg font-semibold bg-white border-green-700 border-2 rounded-full px-12 py-3 flex items-center hover:bg-green-400 hover:text-white hover:border-green-400 shadow-2xl'>
                    <ImWhatsapp className='mr-1 text-2xl'/>
                    ₹31,000/-
              </button>
              <button className='text-black text-lg m-auto font-semibold bg-white border-black border-2 rounded-full px-10 py-2 flex items-center hover:black hover:text-white hover:bg-black shadow-2xl'>
                    View car
              </button>
              </div>
              
            </div>

            <img src="https://luxorides.com/assets/images/bmw-5-series-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad.webp" alt="" className='w-[500px] shadow-2xl'/>
          </div>
        </div>

        <div className='bg-gradient-to-r from-cyan-700 to-blue-300 py-16'>
          <div className='mt-12'> 
            <img src="https://luxorides.com/assets/images/bmw-7-series-rs35000-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad.webp" alt="" className='w-[550px] mx-auto shadow-2xl'/>

            <h2 className='text-3xl font-semibold text-center my-8'>Rent BMW 7 Series Sedans</h2>
            <p className='text-lg font-extralight text-center'>
                With new exquisite design details, the finest materials and powerful<br/> innovations, the new BMW 7 Series, delivers a new echelon of pleasure.<br/> Imagined, designed and crafted for individuals who value every moment,<br/> discover an experience inspired to drive the world.
            </p>
            <button className='text-green-700 text-lg mx-auto mt-12 font-semibold bg-white border-green-700 border-2 rounded-full px-12 py-3 flex items-center hover:bg-green-400 hover:text-white hover:border-green-400 hover:shadow-2xl'>
                    <ImWhatsapp className='mr-1 text-2xl'/>
                    ₹ 51,000/-
            </button>
          </div>
        </div>

        <h2 className='text-7xl font-semibold text-center mt-20'>
            About BMW
        </h2>
        <p className='text-gray-500 text-2xl font-thin text-center mt-10'>
            BMW is a german Luxury car manufacturing company. It was actually founded as a<br/> 
            manufacturer of aircraft engines. A BMW is a perfect blend of elegance, performance,<br/> 
            and technology. Besides being the best-known German car manufacturers, it is more<br/> 
            of a status symbol for the elite class. The “Ultimate Driving Machine”, BMW is one such<br/> 
            luxury car that stands out because of its sporty look. Along with incredible power and,<br/> performance, it gives you an amazing travel experience.
        </p>

        <h2 className='text-6xl text-center mt-20 font-semibold'>Renting a BMW</h2>
        <p className=' text-2xl font-thin text-center mt-10'>
            Believe in Luxorides for “Haute Monde” Experience<br/>
          <br/>
            Luxorides, being one of the finest transportation companies in New Delhi for years,<br/> 
            vows to cater to you with the best and seamless transfer experience in your very own<br/> 
            luxurious BMW. Be it a wedding, corporate or personal need, we let you hire the<br/> 
            foremost luxury ride. Being backed up with multiple car owners and vendors, you can<br/> 
            hire the BMW in different variants of your choice. So, if you want to light up your<br/> 
            occasion, we have a stupendous fleet of BMW Sedans. Let Luxorides be your prime<br/> 
            partner and be in the safest hands for all your transfer needs.<br/>
          <br/>
            We know it's tough to make a decision, but there are enough reasons to continue<br/> choosing Luxorides!<br/>
          <br/>
          Place an appointment with us and rent a BMW of your choice. Come, be a part of our<br/> growing community. Allow Luxorides to give you an experience of a lifetime!

        </p>

        <div className='bg-[#efefef] mt-16  text-center'>
              <p className='text-center  pt-20 text-5xl font-light'>
                  How it Works
              </p>
              <p className='mt-6 text-2xl text-gray-500 font-extralight'>
                  You are Important to us.
              </p>
              <p className='text-2xl text-gray-500 font-extralight'>
                  We believe in a personalised experience for your ride.
              </p>
              <p className='text-2xl text-gray-500 font-extralight'>
                  You can always <button className='text-green-500'>Contact Us</button> if you need any help.
              </p>

          <div className='flex items-center justify-center mt-14'>
              <div className='rounded-[50%] border-[2px] border-black h-[75px] w-[75px] text-center pt-1 text-[40px]  '>

                  1
                
              </div>
              <div className='bg-black w-[320px] h-[2px] ml-3 mr-3'></div>
              <div className='rounded-[50%] border-[2px] border-black h-[75px] w-[75px] text-center pt-1 text-[40px]  '>

                  2
                
              </div>
              <div className='bg-black w-[320px] h-[2px] ml-3 mr-3'></div>
              <div className='rounded-[50%] border-[2px] border-black h-[75px] w-[75px] text-center pt-1 text-[40px]  '>

                  3
                
              </div>

          </div>

          <div className='flex justify-center'>
              <div className=' mt-3 mr-20 mb-24'>
                <h1 className=' text-2xl'>
                    Choose your Ride
                </h1>
                <p className='mt-4 text-gray-900 font-extralight text-lg'>
                    We offer a wide range of Vehicles that can fit all<br/>
                    your requirements.<br/>
                    All our vehicles are Chauffeur driven.<br/>
                    Explore <button className='font-medium text-black'>Cars</button> /
                    <button className='font-medium text-black'>Brands</button> /
                    <button className='font-medium text-black'>Services</button>
                </p>
              </div>
              <div className='mt-3 mr-24'>
                  <h1 className='text-2xl'>
                      Initiate Booking Request
                  </h1>
                  <p className='mt-4 text-gray-900 font-extralight text-lg'>
                      Initiate Booking Request by Filling out the<br/>
                      Booking Form.<br/>
                      <button className='font-medium'>Booking Form</button> 
                  </p>
              </div>
              <div className='mt-3  '>
                  <h1 className='text-2xl'>
                      Get Confirmation
                  </h1>
                  <p className='mt-4 text-gray-900 font-extralight text-lg'>
                      You shall receive your Booking Confirmation<br/>
                      within next few hours (Upto 4 hours).<br/>
                      <button className='font-medium'>Contact Us</button> 
                  </p>
              </div>
          </div>
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
