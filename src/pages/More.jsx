import React from 'react'
import { ImFacebook } from 'react-icons/im'
import { BsInstagram, BsYoutube, BsPinterest, BsTwitter } from 'react-icons/bs'

export default function About() {
  return (
    <section>
      <div>
        <img src="./merc.jpg" alt="mercpic" />
      </div>

      <div className=''>
        <div className='bg-[#149dcc] w-[20%] h-[3px] mx-auto mt-20'></div>
        <h2 className='text-7xl text-center mt-4 font-semibold'>LUXORIDES</h2>
        <div className='bg-[#149dcc] w-[20%] h-[3px] mx-auto mt-7'></div>

        <div className='text-center'>
          <h2 className='text-5xl mt-20 font-thin'>Your</h2>
          <h2 className='text-5xl mt-2 font-semibold'>Luxury Car Rentals</h2>
          <h2 className='text-5xl mt-2 font-thin'>Solution</h2>

          <p className='text-2xl font-sans mt-10'>
            Luxorides is a premier luxury car rental service. We offer chauffeur-driven and<br/>
            self-drive luxury cars on rent in and around Delhi NCR. We cater to companies<br/> 
            and individuals who appreciate the highest quality of assistance and require a fast<br/>
            and professional car rental service, whether it be for leisure, business, events or<br/>
            activities. We are continuously upgrading our quality and services and are<br/>
            determined to provide the best experiences to our guests.
          </p>
          <p className='text-2xl font-sans mt-10'>
            Luxorides offers all luxury and premium car brands including Audi, BMW,<br/>
            Mercedes, Jaguar, Land Rover, Bentley, Rolls Royce and in all sorts of categories as <br/>
            Convertibles, Sedans, SUVs, Commuters and Limousines for travel, transport, rental <br/>
            or hire.
          </p>
        </div>

        <div>
          <h2 className='text-6xl text-center font-thin mt-36'>Our Strength</h2>
          <div className='flex justify-center mt-20 space-x-16'>
            <div>

              <div className='flex '>
                <h3 className='m-auto pr-4 text-5xl font-thin'>98%</h3>
                <div>
                  <h2 className='text-lg'>Satisfied Customers</h2>
                  <p className='font-light text-lg'>
                  We believe that our strength is from our customers and we serve with <br/>
                  unparralled service quality driving high satisfaction.
                  </p>
                </div>
              </div>

              <div className='flex mt-16'>
                <h3 className='m-auto pr-4 text-5xl font-thin'>914</h3>
                <div>
                  <h2 className='text-lg'>Vehicle Onboard</h2>
                  <p className='font-light text-lg'>
                  We have 900+ vehicles onboard to meet your requirements and offer<br/>
                  you a pretty good deal.
                  </p>
                </div>
              </div>

              <div className='flex mt-16 pr-10'>
                <h3 className='m-auto pr-4 text-5xl font-thin'>29</h3>
                <div>
                  <h2 className='text-lg'>Business Partners</h2>
                  <p className='font-light text-lg'>
                  We are backed with a support system of multiple car owners and<br/>
                  vendors to deal against any unforeseen circumstances.
                  </p>
                </div>
              </div>

            </div>
              <div>
                <img src="https://luxorides.com/assets/images/luxorides-square-logo-only-solid-whitepng-400ppi-13-500x500.webp" alt="luxorideslogo"  
                className='py-8 pl-6'
                />
              </div>
          </div>
        </div>

        <div className='text-center mt-44'>
          <h2 className='text-5xl font-light'>YOUR SAFETY, OUR PRIORITY</h2>
          <p className='text-2xl font-light mt-5 text-gray-500'>
          Your safety is our concern,<br/>
          We take utmost care for your safety from our side.<br/>
          Please read our safety guidelines for your safer ride.<br/> 
          View <button className='text-green-500'> Safety Instructions</button>.
          </p>
        </div>

        <div className='text-center mt-28'>
          <h2 className='text-5xl font-light'>EASY BOOKING PROCEDURE</h2>
          <p className='text-2xl font-light mt-5 text-gray-500'>
          Bookings on the Go. Now book your ride easily by our simple<br/> 
          booking process and Get Confirmation within few hours.<br/>
          <button className='text-green-500'> Book Now</button>!

          </p>
        </div>

        <div className='text-center mt-28'>
          <h2 className='text-5xl font-light'>24x7 CUSTOMER SUPPORT</h2>
          <p className='text-2xl font-light mt-5 text-gray-500'>
          We offer 24x7 Customer Support.<br/>
          Go to <button className='text-green-500'> Support</button>.
          </p>
        </div>
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
          <button className='m-5 py-3 px-14 text-lg text-white border-2 border-black bg-black rounded-full'>
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
              <button className='text-gray-400 hover:text-gray-600'>Delhi</button><br />
              <button className='text-gray-400 hover:text-gray-600'>Lucknow</button><br />
              <button className='text-gray-400 hover:text-gray-600'>Agra</button><br />
              <button className='text-gray-400 hover:text-gray-600'>Jaipur</button><br />
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

