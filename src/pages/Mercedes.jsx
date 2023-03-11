import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {ImWhatsapp} from 'react-icons/im'
import {ImFacebook} from 'react-icons/im'
import {BsInstagram, BsYoutube, BsPinterest, BsTwitter} from 'react-icons/bs'

export default function Mercedes() {

  const location = useLocation()
  const navigate = useNavigate()

  function matchRoute(route){
      if(route===location.pathname){
          return true
      }
  }
  return (
    <section>
        <img src="/benzlogo.jpg" alt="" 
        className='relative'/>

        <div className='absolute top-[45%] text-center left-[8%]'>
          <h2 className='text-6xl font-semibold text-white'>Rent a Mercedes</h2>
          <h2 className='text-2xl text-white mt-20'>A Class Distinct</h2>
        </div>

        <div>
          <h2 className='text-7xl font-semibold text-center mt-16'>Sedans <span className='font-light'>from</span> Mercedes Benz</h2>


          <div className='flex justify-center space-x-16 my-16'>
            <img src="https://luxorides.com/assets/images/mercedes-cla-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad-1016x1016.webp" alt="" className='w-[550px] shadow-2xl'/>

            <div className='text-center'>
              <h2 className='text-3xl font-semibold my-8'>
                Rent Mercedes Benz CLA (Red) Sedan
              </h2>
              <p className='text-lg text-slate-500'>
                The extraordinary is born out of the<br/> determination to keep adapting and get better<br/> every time.<br/>
                Mercedes Benz CLA personifies this very<br/> unrelenting spirit in the form of its superlative<br/> design and incredible comfort. Its dynamic<br/> aura makes every journey better and injects a<br/> sense of forward momentum.
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
                Rent Mercedes Benz E-Class Sedan
              </h2>
              <p className='text-lg text-slate-500'>
                The E-Class is the embodiment of modern<br/> style and refined sportiness – and carries this <br/>off with an astounding lightness of touch.<br/>
                <br/>
                The new E-Class sets benchmarks (enhanced<br/> systems for connectivity, safety and comfort)<br/> as well as its trendsetting interior design and<br/> efficient new engine technologies.
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

            <img src="https://luxorides.com/assets/images/mercedes-e-class-2019-luxorides-2-thumb.webp" alt="" className='w-[500px] shadow-2xl'/>
          </div>


          <div className='flex justify-center space-x-16 my-16'>
            <img src="https://luxorides.com/assets/images/mercedes-s-class-rs-50000-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad-745x500.webp" alt="" className='w-[550px] shadow-2xl'/>

            <div className='text-center'>
              <h2 className='text-3xl font-semibold my-8'>
                Rent Mercedes Benz S-Class Sedan
              </h2>
              <p className='text-lg text-slate-500'>
                Enter the cockpit and exit reality.<br/>
                <br/>
                The Mercedes-Benz S-Class introduces you to<br/> a world of luxury unlike anything you’ve ever<br/> seen before with Rear seat comfort package,<br/> THERMOTRONIC automatic climate control in<br/> the rear and Burmester® surround sound<br/> system.
              </p>

              <div className='flex mt-8'>
              <button className='text-green-700 text-lg font-semibold bg-white border-green-700 border-2 rounded-full px-12 py-3 flex items-center hover:bg-green-400 hover:text-white hover:border-green-400 shadow-2xl'>
                    <ImWhatsapp className='mr-1 text-2xl'/>
                    ₹51,000/-
              </button>
              <button className='text-black text-lg m-auto font-semibold bg-white border-black border-2 rounded-full px-10 py-2 flex items-center hover:black hover:text-white hover:bg-black shadow-2xl'>
                    View car
              </button>
              </div>
              
            </div>
          </div>
        </div>

        <div className='bg-[#efefef] py-16'>
          <h2 className='text-7xl font-semibold text-center'>SUVs from Mercedes</h2>
          
          <div className='mt-20'> 
            <img src="https://luxorides.com/assets/images/mercedes-g-wagen-1.5-lacs-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad.webp" alt="" className='w-[550px] mx-auto'/>

            <h2 className='text-3xl font-semibold text-center my-8'>Rent Mercedes Benz G-Wagen</h2>
            <p className='text-lg font-extralight text-center'>
              As Mercedes says,<br/>
              "Immerse yourself in the fascinating history of the G-Class and find out<br/> more about the exciting interplay of tradition and innovation."
            </p>
            <button className='text-green-700 text-lg mx-auto mt-12 font-semibold bg-white border-green-700 border-2 rounded-full px-12 py-3 flex items-center hover:bg-green-400 hover:text-white hover:border-green-400 hover:shadow-2xl'>
                    <ImWhatsapp className='mr-1 text-2xl'/>
                    ₹ 1,50,000/-
            </button>
          </div>
        </div>

        <h2 className='text-7xl font-semibold text-center mt-20'>
          About Mercedes Benz
        </h2>
        <p className='text-gray-500 text-lg font-thin text-center mt-10'>
          Mercedes Benz is a German luxury automotive manufacturing company.<br/>
          Mercedes Benz, a dignified product of German engineers, has all such traits that<br/> 
          compel you to call it a perfect luxury car. The precision and finesse of this car are sure<br/> 
          to hold you spellbound. Stylish design, luxurious comfort, and performance are its<br/> 
          other noticeable features. Also, the skilled engineers have worked over years to intact<br/> Mercedes-Benz with the best of technology.
        </p>

        <h2 className='text-6xl text-center mt-20 font-semibold'>Renting a Mercedes Benz</h2>
        <p className=' text-lg font-thin text-center mt-10'>
          Experience the Lavishness of Mercedes Benz with Luxorides<br/>
          <br/>
          Over the years, Luxorides has successfully catered to the needs of luxury<br/> 
          transportation and thus it is now one of the most promising chauffeur-driven<br/> 
          transportation service providers in New Delhi and North India. We resolve to make your<br/> 
          events a grand one by offering you a lavish ride in your preferred Mercedes-Benz. Our<br/> 
          easy booking and payment methods allow you to hire a perfect chauffeur driven<br/> 
          Mercedes Benz car and experience your thrilling ride smoothly. Get your favorite<br/> 
          Mercedes-Benz and experience the velocity and luxury like never before.<br/>
          <br/>
          We know the expectations for your occasions and that is how we keenly provide our<br/> 
          services to your satisfaction!<br/>
          <br/>
          Place an appointment with us and rent a Mercedes Benz of your choice. Come, be a<br/> 
          part of our growing community. Allow Luxorides to give you an experience of a<br/> 
          lifetime!

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
