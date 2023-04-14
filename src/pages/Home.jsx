import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'



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
        className='w-full h-full bg-center bg-cover duration-300'></div>
      </div>

      <div className='absolute top-[50%] translate-y-[-50%] left-5 p-4 text-white bg-transparents cursor-pointer'>
        <BsChevronLeft onClick={prevslide} size={40}/>
      </div>

      <div className='absolute top-[50%] translate-y-[-50%] right-5 p-4 text-white bg-transparent cursor-pointer'>
        <BsChevronRight onClick={nextslide} size={40}/>
      </div>

      <div className='my-28'>
        <div className='top-[140%] left-[20%] text-center'>
          <h2 className='text-7xl text-black font-semibold'>Luxury<span className='font-thin'> Car on Rent</span></h2>
          <h2 className='text-6xl text-black font-thin mt-3'>Luxury is Contagious! Choose <span className='font-semibold'>Wisely</span></h2>

          <div className='lg:flex justify-center mt-7'>
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
          <button className={`m-4 mx-auto py-3 px-14 text-lg flex items-center border-2 border-[#b1a374] text-[#b1a374] bg-white rounded-full hover:bg-[#b1a374] hover:text-white hover:shadow-2xl ${matchRoute('/oneview')}
            `}
            onClick={()=>navigate('/oneview')}
            >
              Oneview of the Fleet
            </button>
        </div>
      </div>


      <div className='bg-[#ccf5f4] pb-24'>
        <h2 className='text-5xl font-light text-center pt-24'>We're <span className='font-semibold'>Covid-19 Ready</span></h2>
        <p className='text-2xl font-thin mt-10 text-center'>
          In an attempt to serve you even better through this pandemic,<br/>
          We are taking frequent precautionary actions to keep you <span className='font-semibold'>Safe and Sanitised</span>.<br/>
          Luxorides is a Covid-19 ready car rental service in Delhi NCR.
        </p>

        <div className='md:flex justify-center space-x-6 mt-24'>
          <div className='text-center md:shadow-2xl'>
            <img src="https://www.luxorides.com/assets/images/luxorides-covid-precautions-9.webp"
            alt='covid' className={`m-auto w-[350px] cursor-pointer ${matchRoute('/covid')}`} onClick={()=>navigate('/covid')}/>
            <h2 className='text-lg font-semibold mt-5 '>Regularly Cleaned and Sanitised</h2>
            <p className='text-lg text-gray-600 mt-3 pb-8'>All our vehicles are regularly cleaned<br/> and sanitised for your safer and<br/> hygienic ride.</p>
          </div>
          <div className='text-center md:shadow-2xl'>
            <img src="https://www.luxorides.com/assets/images/luxorides-covid-precautions-10.webp"
            alt='covid' className={`m-auto w-[350px] cursor-pointer ${matchRoute('/covid')}`} onClick={()=>navigate('/covid')}/>
            <h2 className='text-lg font-semibold mt-5'>Minimal / No Touch Policy</h2>
            <p className='text-lg text-gray-600 mt-3 pb-8'>We follow a minimum / no touch<br/> policy to ensure that you are safe<br/> throughout your rental.</p>
          </div>
          <div className='text-center md:shadow-2xl'>
            <img src="https://www.luxorides.com/assets/images/6vh99bihqa-1.webp"
            alt='covid' className={`m-auto w-[350px] cursor-pointer ${matchRoute('/covid')}`} onClick={()=>navigate('/covid')}/>
            <h2 className='text-lg font-semibold mt-5'>Precautionary Tests</h2>
            <p className='text-lg text-gray-600 mt-3 pb-8'>Our staff undergoes a regular<br/> precautionary thermal screening for<br/> better safety.</p>
          </div>
        </div>
      </div>

      <div className='pb-20'>
        <h2 className='text-6xl font-thin text-center mt-14'>What we Offer</h2>
        <p className='text-2xl font-light mt-5 text-center'>
          We cater to all your luxury car rental needs, Be it for any Service or Brand.<br/>
          Explore what best suits you.
        </p>

        <div className='md:flex justify-center space-x-4 mt-16 text-center'>
          <div className='md:shadow-2xl px-4 py-4 rounded-3xl'>
            <div className='hover:shadow-2xl rounded-2xl pb-2'>
              <Link to="/weddingcar">
              <img src="https://luxorides.com/assets/images/iqfm79m4en.webp" 
              alt="wedpic" className='m-auto w-[260px] rounded-3xl cursor-pointer'/>
              </Link>
              <h2 className='font-light text-lg py-8'>Cars for <span className='font-semibold'>Wedding</span></h2>
            </div>
          </div>
          
          <div className='md:shadow-2xl px-4 py-4 rounded-3xl'>
            <div className='hover:shadow-2xl rounded-2xl pb-2'>
              <Link to="/corporate">
              <img src="https://luxorides.com/assets/images/siqkynexsm-copy-1.webp" 
              alt="corporatepic" className='m-auto w-[260px] rounded-3xl'/>
              </Link>
              <h2 className='font-light text-lg py-8'>Cars for <span className='font-semibold'>Corporate</span></h2>
            </div>
          </div>
          
          <div className='md:shadow-2xl px-4 py-4 rounded-3xl'>
            <div className='hover:shadow-2xl rounded-2xl pb-2'>
              <Link to="/travelclass">
              <img src="https://luxorides.com/assets/images/6c7tmrpzwd.webp" 
              alt="personalpic" className='m-auto w-[260px] rounded-3xl'/>
              </Link>
              <h2 className='font-light text-lg py-8'><span className='font-semibold'>Personal</span> travel</h2>
            </div>
          </div>
          
          <div className='md:shadow-2xl px-4 py-4 rounded-3xl'>
            <button className={`hover:shadow-2xl rounded-2xl pb-2 ${matchRoute('/esevices')}
            `}
            onClick={()=>navigate('/eservices')}
            >
              <img src="https://luxorides.com/assets/images/dqtratkvyb.webp" 
              alt="explorepic" className='m-auto w-[260px] rounded-3xl'/>
              <h2 className='font-semibold text-lg py-8'>Explore all Services</h2>
            </button>
          </div>
        </div>

        <div className='md:flex md:item-center md:justify-center mt-28 text-center space-x-7  mx-7'>
          <div className={`md:shadow-2xl  ${matchRoute('/audi')}`} onClick={()=>navigate('/audi')}>
            <img src="https://luxorides.com/assets/images/audi-logo-for-luxorides-1x1.webp" 
            alt="audiimg" className='w-[250px] m-auto'/>
            <h2 className='font-light my-3'>Rent an <span className='font-semibold'>Audi</span></h2>
          </div>

          <div className={`md:shadow-2xl  ${matchRoute('/bmw')}`} onClick={()=>navigate('/bmw')}>
            <img src="https://luxorides.com/assets/images/bmw-logo-for-luxorides-512px-1x1.webp" 
            alt="bmwimg" className='w-[250px]  m-auto'/>
            <h2 className='font-light my-3'>Rent an <span className='font-semibold'>BMW</span></h2>
          </div>

          <div className={`md:shadow-2xl  ${matchRoute('/mercedes')}`} onClick={()=>navigate('/mercedes')}>
            <img src="https://luxorides.com/assets/images/mercedes-logo-for-luxorides-512px-1x1.webp" 
            alt="benzimg" className='w-[250px]  m-auto'/>
            <h2 className='font-light my-3 '>Rent an <span className='font-semibold'>Mercedes</span></h2>
          </div>

          <div className={`md:shadow-2xl ${matchRoute('/ebrands')}
          `}
          onClick={()=>navigate('/ebrands')}
          >
            <img src="https://luxorides.com/assets/images/luxorides-square-logo-only-solid-whitepng-400ppi-6-500x500.webp" 
            alt="luxologo" className='w-[250px]  m-auto'/>
            <h2 className='font-semibold my-3'>Explore all Brands</h2>
          </div>
        </div>

        <h2 className='text-6xl font-extralight text-center mt-44'>Why Choose Us</h2>
        <p className='text-2xl mt-7 text-center text-gray-500'>We know making a choice is tough but We will give you enough reasons to keep choosing us!</p>


        <div className='md:flex justify-center text-center mt-10 space-x-10'>
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

      {/* <div className='bg-gradient-to-r from-[#ffffff] to-[#cebfaf] py-14  '>
        <div className='justify-center flex space-x-52 md:flex'>
          <div>
            <p className=' text-[#cc2952] text-2xl font-thin'>
              At Luxorides, Your Safety is our Priority, We take utmost care for your safe ride. 
            </p>
            <h2 className=' mt-4 text-5xl font-semibold text-[#cc2952]'>Safety at LUXORIDE</h2>
          </div>
          <button className={`m-5 py-3 px-20 text-lg text-[#cc2952] border-2 border-[#cc2952] bg-transparent rounded-full hover:shadow-2xl hover:bg-[#cc2952] hover:text-white ${matchRoute('/safety')}
          `}
          onClick={()=>navigate('/safety')}
          >
            Safety
          </button>
        </div>
      </div> */}

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

          <div className='flex items-center justify-center mt-14 xm:hidden md:flex'>
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

          <div className='justify-center md:flex sm:m-auto'>
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

      <div className='bg-[#ccf5f4] pb-16'>
        <div className='flex-none justify-center pt-32 space-x-16 md:flex xm:p-4'>
          <div>
            <img src="./cargirl1.jpg" alt="windowgirl" 
            className={`w-[750px] cursor-pointer rounded-3xl md:ml-7 ${matchRoute('/travelclass')}
            `}
            onClick={()=>navigate('/travelclass')}
            />
          </div>
          <div className='text-center md:text-center'>
            <h2 className='text-6xl'>RIDE</h2>
            <h2 className='text-7xl font-semibold'>ELITE</h2>
            <p className='text-3xl font-light mt-5'>Luxorides is the finest<br/> luxury car rental service in<br/> Delhi NCR, Jaipur, Agra<br/> and Lucknow.<br/>
            We offer you a seamless<br/> chauffeur driven ride<br/> experience to light up<br/> your event. </p>
          </div>
        </div>
        <p className={`text-2xl text-center mt-12 italic text-gray-400 cursor-pointer hover:text-black ${matchRoute('/travelclass')}
        `}
        onClick={()=>navigate('/travelclass')}
        >
          Luxorides Luxury Car Rentals for Corporate Delhi Noida Gurgaon Ghaziabad
        </p>
      </div>

      <div className='bg-[#b2ccd2] h-auto py-24 '>
        <div className='justify-center flex-none text-5xl lg:flex'>
          <h2 className='text-left font-bold mx-20'>
            Not finding what You were<br/> looking for!
          </h2>
          <button className={`m-5 py-3 px-14 text-lg text-white sm:ml-[250px] md:ml-[330px] lg:mr-[100px] border-2 border-black bg-black rounded-full hover:shadow-2xl ${matchRoute('/support')}
          `}
          onClick={()=>navigate('/support')}
          >
            Go to Support
          </button>
        </div>
      </div>

      
      
    </section>
  )
}
