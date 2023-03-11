import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {ImWhatsapp} from 'react-icons/im'
import {ImFacebook} from 'react-icons/im'
import {BsInstagram, BsYoutube, BsPinterest, BsTwitter} from 'react-icons/bs'

export default function Audi() {

    const location = useLocation()
    const navigate = useNavigate()

    function matchRoute(route){
        if(route===location.pathname){
            return true
        }
    }
  return (
    <section>
        <img src="https://luxorides.com/assets/images/audi-eyes-lucho-renolfi-.webp" alt="audiimg" 
        className='relative'/>

        <div className='absolute top-[50%] left-[36%]'>
            <h2 className='text-white text-7xl font-semibold'>Rent an Audi</h2>
            <p className='text-white text-2xl text-center mt-10'>Luxury Personified</p>
        </div>

        <div className='text-center mt-20'>
            <h2 className='text-7xl font-semibold'>Convertibles <span className='font-extralight'>from</span> Audi</h2>

            <div className='flex justify-center space-x-11 mt-24'>
                <div>
                    <img src="https://luxorides.com/assets/images/audi-a3-cabriolet-rs-25000-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad-1-1016x572.webp" alt=""
                    className='w-[550px] rounded-3xl shadow-2xl'/>
                    <h2 className='text-3xl font-extralight my-8'>
                        Rent Audi A3 Cabriolet (White)
                    </h2>
                    <p className='text-lg text-slate-500'>
                        The Audi A3 Cabriolet combines elegant lightness with dynamically<br/> acting proportions. The standard, fully-automated fabric top can be<br/> opened up.
                    </p>
                    <div className='flex justify-center space-x-4 mt-10'>
                        <button className='text-green-700 text-lg font-semibold bg-white border-green-700 border-2 rounded-full px-12 py-3 flex items-center hover:bg-green-400 hover:text-white hover:border-green-400 shadow-2xl'>
                            <ImWhatsapp className='mr-1 text-2xl'/>
                            ₹31,000/-
                        </button>
                        <button className='text-black text-lg font-semibold bg-white border-black border-2 rounded-full px-10 py-2 flex items-center hover:black hover:text-white hover:bg-black shadow-2xl'>
                            View car
                        </button>
                    </div>
                </div>
                <div>
                    <img src="https://luxorides.com/assets/images/audi-a3-cabriolet-rs-25000-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad-2-1016x635.webp" alt="" 
                    className='w-[550px] rounded-3xl shadow-2xl'/>
                    <h2 className='text-3xl font-extralight my-8'>
                        Rent Audi A3 Cabriolet (Red)
                    </h2>
                    <p className='text-lg text-slate-500'>
                        The Audi A3 Cabriolet. Its optional acoustic top offers a particularly quiet<br/> driving experience. Experience a different kind of charm, sitting in or<br/> standing up.
                    </p>
                    <div className='flex justify-center space-x-4 mt-10'>
                        <button className='text-green-700 text-lg font-semibold bg-white border-green-700 border-2 rounded-full px-12 py-3 flex items-center hover:bg-green-400 hover:text-white hover:border-green-400 shadow-2xl'>
                            <ImWhatsapp className='mr-1 text-2xl'/>
                            ₹31,000/-
                        </button>
                        <button className='text-black text-lg font-semibold bg-white border-black border-2 rounded-full px-10 py-2 flex items-center hover:black hover:text-white hover:bg-black shadow-2xl'>
                            View car
                        </button>
                    </div>
                </div>
            </div>



            <h2 className='text-7xl font-semibold mt-44'>Sedans <span className='font-extralight'>from</span> Audi</h2>

            <div className='flex justify-center space-x-8 mt-24'>
                <div>
                    <img src="https://luxorides.com/assets/images/audi-a4-rs-15000-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad-2-1016x677.webp" alt="" className='w-[400px] shadow-2xl rounded-3xl'/>
                    <h2 className='text-3xl font-extralight my-8'>
                        Rent Audi A4 Sedan
                    </h2>
                    <p className='text-lg text-slate-500'>
                        Design and technology that lead the way.<br/> Sporty and pioneering. The Audi A4, Progress is<br/> Intense.
                    </p>
                    <h1 className='text-lg text-slate-500 my-7'>Maintain the Class</h1>

                    <button className='text-green-700 m-auto mt-6 text-lg font-semibold bg-white border-green-700 border-2 rounded-full px-12 py-3 flex items-center hover:bg-green-400 hover:text-white hover:border-green-400 shadow-2xl'>
                            <ImWhatsapp className='mr-1 text-2xl'/>
                            ₹15,000/-
                    </button>
                    <button className='text-black m-auto mt-4 text-lg font-semibold bg-white border-black border-2 rounded-full px-10 py-2 flex items-center hover:black hover:text-white hover:bg-black shadow-2xl'>
                            View car
                    </button>
                </div>

                <div>
                    <img src="https://luxorides.com/assets/images/audi-a6-rs-18000-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad-1016x679.webp" alt="" className='w-[400px] shadow-2xl rounded-3xl'/>
                    <h2 className='text-3xl font-extralight my-8'>
                        Rent Audi A6 Sedan
                    </h2>
                    <p className='text-lg text-slate-500'>
                        Fascination comes through in many facets.<br/> Innovative technologies. Progressive design.<br/> And a wide range of equipments. The Audi A6<br/> provides you all with the comfort that you can<br/> hit the road with.
                    </p>

                    <button className='text-green-700 m-auto mt-6 text-lg font-semibold bg-white border-green-700 border-2 rounded-full px-12 py-3 flex hover:bg-green-400 hover:text-white hover:border-green-400 shadow-2xl'>
                            <ImWhatsapp className='mr-1 text-2xl'/>
                            ₹25,000/-
                    </button>
                    <button className='text-black m-auto mt-4 text-lg font-semibold bg-white border-black border-2 rounded-full px-10 py-2 flex items-center hover:black hover:text-white hover:bg-black shadow-2xl'>
                            View car
                    </button>
                </div>

                <div>
                    <img src="https://luxorides.com/assets/images/audi-a8-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad-2-1016x756.webp" alt="" className='w-[400px] shadow-2xl rounded-3xl'/>
                    <h2 className='text-3xl font-extralight my-8'>
                        Rent Audi A8 L Sedan
                    </h2>
                    <p className='text-lg text-slate-500'>
                        A design that takes elegance and dynamics to<br/> new level, with numerous assistance systems,<br/> a new operating concept and above all more<br/> space. Configure your own space in the back,<br/>    more flexible and comfortable Audi A8 L.
                    </p>

                    <button className='text-green-700 m-auto mt-6 text-lg font-semibold bg-white border-green-700 border-2 rounded-full px-12 py-3 flex hover:bg-green-400 hover:text-white hover:border-green-400 shadow-2xl'>
                            <ImWhatsapp className='mr-1 text-2xl'/>
                            ₹85,000/-
                    </button>
                    <button className='text-black m-auto mt-4 text-lg font-semibold bg-white border-black border-2 rounded-full px-10 py-2 flex items-center hover:black hover:text-white hover:bg-black shadow-2xl'>
                            View car
                    </button>
                </div>
            </div>


            <h2 className='text-7xl font-semibold mt-44'>SUVs <span className='font-extralight'>from</span> Audi</h2>
            <div className='flex justify-center space-x-8 mt-24'>
                <div>
                    <img src="https://luxorides.com/assets/images/audi-q3-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad-3-800x716.webp" alt="" className='w-[400px] shadow-2xl rounded-3xl'/>
                    <h2 className='text-3xl font-extralight my-8'>
                        Rent Audi Q3 SUVs
                    </h2>
                    <p className='text-lg text-slate-500'>
                        Think about mobility. Then multiply it by today’s<br/> world. A character that puts self-confidence in<br/> a class of its own. The Audi Q3.
                    </p>

                    <button className='text-green-700 m-auto mt-12 text-lg font-semibold bg-white border-green-700 border-2 rounded-full px-12 py-3 flex items-center hover:bg-green-400 hover:text-white hover:border-green-400 shadow-2xl'>
                            <ImWhatsapp className='mr-1 text-2xl'/>
                            ₹18,000/-
                    </button>
                </div>

                <div>
                    <img src="https://luxorides.com/assets/images/audi-q5-rs20000-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad-1016x832.webp" alt="" className='w-[400px] shadow-2xl rounded-3xl'/>
                    <h2 className='text-3xl font-extralight my-8'>
                        Rent Audi Q5 SUVs
                    </h2>
                    <p className='text-lg text-slate-500'>
                        The SUV for a new generation. Convincing<br/> without being persuasive. Sportive without<br/> being unreasonable. Efficient driving pleasure.
                    </p>

                    <button className='text-green-700 m-auto mt-12 text-lg font-semibold bg-white border-green-700 border-2 rounded-full px-12 py-3 flex items-center hover:bg-green-400 hover:text-white hover:border-green-400 shadow-2xl'>
                            <ImWhatsapp className='mr-1 text-2xl'/>
                            ₹20,000/-
                    </button>
                </div>

                <div>
                    <img src="https://luxorides.com/assets/images/audi-q7-side-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad-874x762.webp" alt="" className='w-[400px] shadow-2xl rounded-3xl'/>
                    <h2 className='text-3xl font-extralight my-8'>
                        Rent Audi Q7 SUVs
                    </h2>
                    <p className='text-lg text-slate-500'>
                        Ultimate control and a record that stands<br/> unbeaten – the legendary quattro and the Audi<br/> Q7 are ready to dominate the elements.
                    </p>

                    <button className='text-green-700 m-auto mt-12 text-lg font-semibold bg-white border-green-700 border-2 rounded-full px-12 py-3 flex items-center hover:bg-green-400 hover:text-white hover:border-green-400 shadow-2xl'>
                            <ImWhatsapp className='mr-1 text-2xl'/>
                            ₹41,000/-
                    </button>
                </div>
            </div>

            <h2 className='text-7xl font-thin mt-44'>About <span className='font-semibold'>Audi</span></h2>
            <p className='text-lg mt-8 font-thin'>
                Audi is a german luxury car manufacturing company, fully owned by the Volkswagen<br/>
                Group. Through the ages, Audi has been the essence of luxury and splendour. Audi is<br/> 
                built to perfection, for the modern urbanite. Nearly every model of this luxury car brand<br/> is a killer combo of technology, impeccable German craftsmanship, and powerful<br/> 
                engine specs. It is best-known for exuding opulence, and yet a sporty look featuring<br/> different exterior colors.
            </p>

            <h2 className='text-7xl font-thin mt-36'>Renting an <span className='font-semibold'>Audi</span></h2>
            <p className='text-2xl font-thin mt-7'>Experience the Audi aura through Luxorides</p>
            <p className='text-lg mt-10 font-thin'>
                Luxorides has delivered the best transit options in The Delhi NCR and North India since<br/> 
                a long time. Being a trusted name in the chauffeur-driven transportation service, we<br/> 
                offer a flawless and hassle-free experience of riding in your very own Audi. Hire your<br/> choice of luxury ride for any event; whether it be a wedding, a corporate, or a personal<br/> need. We are partnered with legitimate and trusted car-owners & vendors for<br/> facilitating your dream car.
            </p>
            <p className='text-lg mt-10 font-thin'>
                Place an appointment with us and rent an Audi of your choice. Come, be a part of our<br/> growing community. Allow Luxorides to give you an experience of a lifetime!
            </p>
        </div>

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
