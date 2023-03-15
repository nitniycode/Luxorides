import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {ImFacebook} from 'react-icons/im'
import {BsInstagram, BsYoutube, BsPinterest, BsTwitter, BsChevronLeft, BsChevronRight } from 'react-icons/bs'



export default function Home() {

  const location = useLocation()
    const navigate = useNavigate()

    function matchRoute(route){
        if(route===location.pathname){
            return true
        }
    }

    const slides=[
      {url:'./home.jpg'},
      {url:'./merc.jpg'},
      {url:'./cargirl.jpg'},
      {url:'./sign3.jpg'},
      {url:'./wedcar.jpg'},
    ]
    const [Currentstate, setCurrentState]= useState(0)

    const prevslide=()=>{
      const isfirstdlide = Currentstate===0;
      const newindex = isfirstdlide ? slides.length-1: Currentstate-1;
      setCurrentState(newindex);
      
    };
      const nextslide=()=>{
        const isfirstdlide = Currentstate=== slides.length-1;
        const newindex= isfirstdlide ? 0: Currentstate+1;
        setCurrentState(newindex)
      };


  return (
    <section>
      <div className='w-full h-[700px] relative'>
        <div style={{backgroundImage: `url(${slides[Currentstate].url})`}}
        className='w-full h-full bg-center bg-cover duration-100'></div>
      </div>

      <div className='absolute top-[50%] translate-y-[-50%] left-5 p-4 text-white bg-transparents cursor-pointer'>
        <BsChevronLeft onClick={prevslide} size={40}/>
      </div>

      <div className='absolute top-[50%] translate-y-[-50%] right-5 p-4 text-white bg-transparent cursor-pointer'>
        <BsChevronRight onClick={nextslide} size={40}/>
      </div>

      <div>
        <img src="https://www.luxorides.com/assets/images/1970468.webp" 
              alt="clrimg" 
              className='relative'
        />
        <div className='absolute top-[140%] left-72 text-center'>
          <h2 className='text-7xl text-black font-semibold'>Luxury<span className='font-thin'> Car on Rent</span></h2>
          <h2 className='text-6xl text-black font-thin mt-3'>Luxury is Contagious! Choose <span className='font-semibold'>Wisely</span></h2>

          <div className='flex space-x-7 justify-center mt-8'>
            <button className={`m-4 py-3 px-14 text-lg flex items-center text-white bg-[#b1a374] rounded-full hover:bg-[#6c613c] hover:shadow-2xl ${matchRoute('/ecategories')}
            `}
            onClick={()=>navigate('/ecategories')}
            >
              Explore Cars by Category
            </button>
            <button className={`m-4 py-3 px-14 text-lg flex items-center text-white bg-[#b1a374] rounded-full hover:bg-[#6c613c] hover:shadow-2xl ${matchRoute('/ebrands')}
            `}
            onClick={()=>navigate('/ebrands')}
            >
              Explore cars by Brands
            </button>
          </div>

          <div className='flex justify-between'>
            <button className={`m-4 py-3 px-14 text-lg flex items-center border-2 border-[#b1a374] text-[#b1a374] bg-white rounded-full hover:bg-[#b1a374] hover:text-white hover:shadow-2xl ${matchRoute('/oneview')}
            `}
            onClick={()=>navigate('/oneview')}
            >
              Oneview of the Fleet
            </button>
            <button className={`m-4 py-3 px-14 text-lg flex items-center border-2 border-[#b1a374] text-[#b1a374] bg-white rounded-full hover:bg-[#b1a374] hover:text-white hover:shadow-2xl ${matchRoute('/esevices')}
            `}
            onClick={()=>navigate('/eservices')}
            >
              Explore by Services
            </button>

          </div>
        </div>
      </div>


      <div className='bg-[#ccf5f4] pb-24'>
        <h2 className='text-5xl font-light text-center pt-24'>We're <span className='font-semibold'>Covid-19 Ready</span></h2>
        <p className='text-2xl font-thin mt-10 text-center'>
          In an attempt to serve you even better through this pandemic,<br/>
          We are taking frequent precautionary actions to keep you <span className='font-semibold'>Safe and Sanitised</span>.<br/>
          Luxorides is a Covid-19 ready car rental service in Delhi NCR.
        </p>

        <div className='flex justify-center space-x-6 mt-24'>
          <div className='text-center shadow-2xl'>
            <img src="https://www.luxorides.com/assets/images/luxorides-covid-precautions-9.webp"
            alt='covid' className={`w-[350px] cursor-pointer ${matchRoute('/covid')}`} onClick={()=>navigate('/covid')}/>
            <h2 className='text-lg font-semibold mt-5 '>Regularly Cleaned and Sanitised</h2>
            <p className='text-lg text-gray-600 mt-3 pb-8'>All our vehicles are regularly cleaned<br/> and sanitised for your safer and<br/> hygienic ride.</p>
          </div>
          <div className='text-center shadow-2xl'>
            <img src="https://www.luxorides.com/assets/images/luxorides-covid-precautions-10.webp"
            alt='covid' className={`w-[350px] cursor-pointer ${matchRoute('/covid')}`} onClick={()=>navigate('/covid')}/>
            <h2 className='text-lg font-semibold mt-5'>Minimal / No Touch Policy</h2>
            <p className='text-lg text-gray-600 mt-3 pb-8'>We follow a minimum / no touch<br/> policy to ensure that you are safe<br/> throughout your rental.</p>
          </div>
          <div className='text-center shadow-2xl'>
            <img src="https://www.luxorides.com/assets/images/6vh99bihqa-1.webp"
            alt='covid' className={`w-[350px] cursor-pointer ${matchRoute('/covid')}`} onClick={()=>navigate('/covid')}/>
            <h2 className='text-lg font-semibold mt-5'>Precautionary Tests</h2>
            <p className='text-lg text-gray-600 mt-3 pb-8'>Our staff undergoes a regular<br/> precautionary thermal screening for<br/> better safety.</p>
          </div>
        </div>
      </div>

      <div className=''>
        <h2 className='text-6xl font-thin text-center mt-14'>What we Offer</h2>
        <p className='text-2xl font-light mt-5 text-center'>
          We cater to all your luxury car rental needs, Be it for any Service or Brand.<br/>
          Explore what best suits you.
        </p>

        <div className='flex justify-center space-x-4 mt-16 text-center'>
          <div className='shadow-2xl px-4 py-4 rounded-3xl'>
            <div className='hover:shadow-2xl rounded-2xl pb-2'>
              <Link to="/weddingcar">
              <img src="https://luxorides.com/assets/images/iqfm79m4en.webp" 
              alt="wedpic" className='w-[260px] rounded-3xl cursor-pointer'/>
              </Link>
              <h2 className='font-light text-lg py-8'>Cars for <span className='font-semibold'>Wedding</span></h2>
            </div>
          </div>
          
          <div className='shadow-2xl px-4 py-4 rounded-3xl'>
            <div className='hover:shadow-2xl rounded-2xl pb-2'>
              <Link to="/corporate">
              <img src="https://luxorides.com/assets/images/siqkynexsm-copy-1.webp" 
              alt="corporatepic" className='w-[260px] rounded-3xl'/>
              </Link>
              <h2 className='font-light text-lg py-8'>Cars for <span className='font-semibold'>Corporate</span></h2>
            </div>
          </div>
          
          <div className='shadow-2xl px-4 py-4 rounded-3xl'>
            <div className='hover:shadow-2xl rounded-2xl pb-2'>
              <Link to="/travelclass">
              <img src="https://luxorides.com/assets/images/6c7tmrpzwd.webp" 
              alt="personalpic" className='w-[260px] rounded-3xl'/>
              </Link>
              <h2 className='font-light text-lg py-8'><span className='font-semibold'>Personal</span> travel</h2>
            </div>
          </div>
          
          <div className='shadow-2xl px-4 py-4 rounded-3xl'>
            <button className={`hover:shadow-2xl rounded-2xl pb-2 ${matchRoute('/esevices')}
            `}
            onClick={()=>navigate('/eservices')}
            >
              <img src="https://luxorides.com/assets/images/dqtratkvyb.webp" 
              alt="explorepic" className='w-[260px] rounded-3xl'/>
              <h2 className='font-semibold text-lg py-8'>Explore all Services</h2>
            </button>
          </div>
        </div>

        <div className='flex justify-center mt-28 text-center space-x-7'>
          <button className={`shadow-2xl  ${matchRoute('/audi')}`} onClick={()=>navigate('/audi')}>
            <img src="https://luxorides.com/assets/images/audi-logo-for-luxorides-1x1.webp" 
            alt="audiimg" className='w-[250px]'/>
            <h2 className='font-light my-3'>Rent an <span className='font-semibold'>Audi</span></h2>
          </button>

          <button className='shadow-2xl'>
            <img src="https://luxorides.com/assets/images/bmw-logo-for-luxorides-512px-1x1.webp" 
            alt="bmwimg" className='w-[250px]'/>
            <h2 className='font-light my-3'>Rent an <span className='font-semibold'>BMW</span></h2>
          </button>

          <button className={`shadow-2xl  ${matchRoute('/mercedes')}`} onClick={()=>navigate('/mercedes')}>
            <img src="https://luxorides.com/assets/images/mercedes-logo-for-luxorides-512px-1x1.webp" 
            alt="benzimg" className='w-[250px]'/>
            <h2 className='font-light my-3'>Rent an <span className='font-semibold'>Mercedes</span></h2>
          </button>

          <button className={`shadow-2xl ${matchRoute('/ebrands')}
          `}
          onClick={()=>navigate('/ebrands')}
          >
            <img src="https://luxorides.com/assets/images/luxorides-square-logo-only-solid-whitepng-400ppi-6-500x500.webp" 
            alt="luxologo" className='w-[250px]'/>
            <h2 className='font-semibold my-3'>Explore all Brands</h2>
          </button>
        </div>

        <h2 className='text-6xl font-extralight text-center mt-44'>Why Choose Us</h2>
        <p className='text-2xl mt-7 text-center text-gray-500'>We know making a choice is tough but We will give you enough reasons to keep choosing us!</p>


        <div className='flex justify-center text-center mt-10 space-x-10'>
          <div>
            <h2 className='text-6xl text-gray-400'>01.</h2>
            <h2 className='text-lg mt-3'>We are <span className='font-semibold'>trustworthy</span></h2>
            <p className='text-lg text-gray-500 font-light mt-2'>Luxorides is trusted by countless corporates<br/> and Individuals across the NCR as their<br/> preferred luxury ride partner.</p>
          </div>

          <div>
            <h2 className='text-6xl text-gray-400'>02.</h2>
            <h2 className='text-lg mt-3'>We are <span className='font-semibold'>Always Improving</span></h2>
            <p className='text-lg text-gray-500 font-light mt-2'>We take our customers seriously, We<br/> understand the your concerns and that's why<br/> we leave no room for any negative surprise.</p>
          </div>

          <div>
            <h2 className='text-6xl text-gray-400'>03.</h2>
            <h2 className='text-lg mt-3'>We are <span className='font-semibold'>Passionate</span></h2>
            <p className='text-lg text-gray-500 font-light mt-2'>We love what we do and that encourages us<br/> to keep things loving. </p>
          </div>
        </div>
      </div>

      <div className=' mt-16  text-center'>
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

      <div className='bg-[#ccf5f4]'>
        <div className='flex justify-center pt-32 space-x-16'>
          <div>
            <img src="./cargirl1.jpg" alt="windowgirl" 
            className={`w-[750px] cursor-pointer rounded-3xl ${matchRoute('/travelclass')}
            `}
            onClick={()=>navigate('/travelclass')}
            />
          </div>
          <div className='text-center'>
            <h2 className='text-6xl'>RIDE</h2>
            <h2 className='text-7xl font-semibold'>ELITE</h2>
            <p className='text-3xl font-light mt-5'>Luxorides is the finest<br/> luxury car rental service in<br/> Delhi NCR, Jaipur, Agra<br/> and Lucknow.<br/>
            We offer you a seamless<br/> chauffeur driven ride<br/> experience to light up<br/> your event. </p>
          </div>
        </div>
        <p className={`text-2xl text-center mt-12 pb-16 font-semibold text-gray-400 cursor-pointer underline underline-offset-8 hover:text-black ${matchRoute('/travelclass')}
        `}
        onClick={()=>navigate('/travelclass')}
        >
          Luxorides Luxury Car Rentals for Corporate Delhi Noida Gurgaon Ghaziabad
        </p>
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
