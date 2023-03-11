import React from 'react'
import {SlMagicWand} from 'react-icons/sl'
import {GiClick} from 'react-icons/gi'
import {TbBulb} from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import {ImFacebook} from 'react-icons/im'
import {BsInstagram, BsYoutube, BsPinterest, BsTwitter} from 'react-icons/bs'


export default function Weddingcar() {

    
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
            <img src="./wedcar.jpg" alt="" 
            className='relative'/>

            <div className='absolute top-[40%] right-[5%] text-right'>
                <h2 className='text-7xl font-semibold text-gray-300'>Wedding Cars</h2>
                <h2 className='text-5xl font-thin text-gray-300 mt-9'>
                    Beautiful, Stylish,<br/>
                    and Classy options<br/>
                    for your Wedding entrance.
                </h2>
            </div>
        </div>

        <div className='flex justify-center space-x-14 mt-20 text-center'>
            <div>
                <SlMagicWand className='text-8xl text-[#149dcc] mx-auto'/>
                <h2 className='text-3xl my-6'>
                    HIGHLY MAINTAINED CARS
                </h2>
                <p className='text-md text-gray-500'>
                    Luxorides offers you the best luxury wedding<br/> 
                    transportation service in Delhi. Our Vehicles<br/> 
                    are highly maintained through a thorough<br/> 
                    inspection after every ride, We assure the<br/> 
                    quality for the next ride being a step ahead.
                </p>
            </div>
            <div>
                <GiClick className='text-8xl text-[#149dcc] mx-auto'/>
                <h2 className='text-3xl my-6'>
                    MORE CHOICES
                </h2>
                <p className='text-md text-gray-500'>
                    Luxorides helps you choose the best<br/> 
                    available chauffeur driven luxury car for your<br/> 
                    wedding day.<br/>
                    Make your wedding day grand and amaze<br/> 
                    everyone with a WOW!
                </p>
            </div>
            <div>
                <TbBulb className='text-8xl text-[#149dcc] mx-auto'/>
                <h2 className='text-3xl my-6'>
                    CLASSY DECORATION
                </h2>
                <p className='text-md text-gray-500'>
                We decorate your car with a touch of love.<br/>
                <br/>

                The decor thats classy as you and is<br/> 
                personally inspected for quality and<br/> aesthetics that steal every heart.
                </p>
            </div>
        </div>

        <div className='flex justify-center space-x-9 mt-32'>
            <Link to="/ecategories">
                <button className='py-3 px-14 text-lg flex items-center text-black bg-white border-2 border-black rounded-full hover:bg-black hover:text-white hover:shadow-2xl'>Explore Cars</button>
            </Link>
            <Link to="">
                <button className='py-3 px-14 text-lg flex items-center text-[#7a6e45] bg-white border-2 border-[#7a6e45] rounded-full hover:bg-[#7a6e45] hover:text-white hover:shadow-2xl'>Vintage Collection</button>
            </Link>
            <Link to="/ebrands">
                <button className='py-3 px-14 text-lg flex items-center text-black bg-white border-2 border-black rounded-full hover:bg-black hover:text-white hover:shadow-2xl'>Explore Brands</button>
            </Link>
        </div>

        <div className='flex justify-center space-x-9 mt-5 mb-32'>
            <Link to="">
                <button className='py-3 px-14 text-lg flex items-center text-black bg-white border-2 border-black rounded-full hover:bg-black hover:text-white hover:shadow-2xl'>Contact Us</button>
            </Link>
            <Link to="/more">
                <button className='py-3 px-14 text-lg flex items-center text-black bg-white border-2 border-black rounded-full hover:bg-black hover:text-white hover:shadow-2xl'>About Us</button>
            </Link>
        </div>

        <div>
            <img src="./weddec.jpg" alt="" 
            className='relative'/>

            <div className='absolute top-[230%] right-[2%] text-right'>
                <h2 className='text-7xl font-semibold text-white'>Car Decoration Ideas</h2>
                <Link to="/decoration">
                    <button className='py-3 px-14 text-lg flex mt-10 text-white bg-transparent border-2 border-white rounded-full hover:bg-black hover:text-white hover:border-black hover:shadow-2xl'>Go to Decorations</button>
                </Link>
            </div>
        </div>

        <div className='text-center mt-12'>
            <h2 className='text-6xl font-extralight '>
                Renting a luxury car for your<br/> wedding
            </h2>
            <p className='text-md mt-6 '>
                Weddings in India are celebrated with much fervour and opulence to create an event that is not<br/> only memorable for the couple getting married but all of their loved ones. If you are looking for a<br/> luxury transportation company in delhi NCR that can help you make a lasting impression through<br/> your bridal or groom's entry, then your search can end right here.
            </p>
            <p className='text-md mt-6'>
                <span className='font-semibold'>We got you covered.</span><br/>
                Luxorides offers luxury car renting services and vintage vehicles for hire for your wedding<br/> transportation needs. Luxorides assures the quality with highly maintained and aesthtically<br/> decorated vehicles. Each car is thoroughly inspected so that you dont get any unpleasant last<br/> minute surprises. Explore our wide range of vehicles, We also offer custom options if you wish to<br/> raise the bar of luxury. 
            </p>

            <h2 className='text-6xl mt-32 font-extralight'>For the<br/> <span className='font-semibold'>Big Fat Indian Weddings</span></h2>
            <p className='text-2xl font-extralight text-gray-500 mt-5'>
                Luxury and Vintage cars can add a unique value to your big fat<br/> 
                Indian wedding. Weddings in india are not only celebrated as the<br/> 
                bonding of two souls but also as a once in a lifetime festival.<br/>
                Lets make that celebration more memorable.
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
