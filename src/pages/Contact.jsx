import React from 'react'
import { ImFacebook } from 'react-icons/im'
import {BsInstagram, BsYoutube, BsPinterest, BsTwitter} from 'react-icons/bs'

export default function Contact() {
  return (
    <section>
        <h2 className='text-7xl text-center font-semibold mt-32'>Contact Us</h2>
        <h2 className='text-5xl text-center font-thin mt-10'>Need Suggestions, Assistance or Help?</h2>
        <p className='text-3xl text-center font-extralight text-gray-500 mt-8'>
            We are here!<br/>
            We are always available, Feel free to reach us out anytime.
        </p>
        <div className='flex justify-center mt-12'>
            <button className={`m-4 py-3 px-14 text-lg flex items-center border-2 border-black text-white bg-black rounded-full hover:shadow-2xl`}>
                Schedule an Appointment
            </button> 
            <button className={`m-4 py-3 px-14 text-lg flex items-center border-2 border-black text-black bg-transparent rounded-full hover:bg-black hover:text-white hover:shadow-2xl`}>
                Fill out a Contact Form
            </button> 
            <button className={`m-4 py-3 px-14 text-lg flex items-center border-2 border-black text-white bg-black rounded-full hover:shadow-2xl`}>
                Contact Info
            </button> 
        </div>

        <div className='mt-52 text-center'>
            <h2 className='text-6xl font-extralight'>Browsing on a <span className='font-semibold'>laptop?</span></h2>
            <p className='text-3xl mt-5'>
                Scan to initiate a WhatsApp Conversation
            </p>
            <img src="https://images.pexels.com/photos/11264966/pexels-photo-11264966.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-[350px] mx-auto mt-10 brightness-100' />
        </div>

        <div className='bg-gradient-to-r from-cyan-700 to-blue-300 mt-32 pt-28 list-none'>
           <h2 className='text-center text-7xl font-thin'>Contact Form</h2>
           <div className='flex justify-center space-x-10 mt-14'>
                <div>
                    <li>Name</li>
                    <input placeholder='' className='border-2 px-5 py-4 mt-4'/>
                </div>
                <div>
                    <li>Email</li>
                    <input placeholder='' className='border-2 px-5 py-4 mt-4'/>
                </div>
                <div>
                    <li>Phone</li>
                    <input placeholder='' className='border-2 px-5 py-4 mt-4'/>
                </div>
           </div>
           <div className='mx-[380px] mt-7'>
            <li>Message</li>
            <textarea cols="97" rows="7" className='border-2'></textarea>
           </div>
            <div className='text-center mt-10 pb-28'>
                <button className='py-3 m-auto px-14 text-lg border-2 rounded-full border-green-400 bg-green-400 hover:shadow-2xl text-white'>
                    SEND FORM
                </button>
            </div>
        </div>


        <div>
            <h2 className='text-6xl text-center mt-24'>
                Reach Us
            </h2>
            <div className='flex justify-center space-x-72 mt-10 pb-28'>
                <div>
                    <h2 className='text-2xl'>Address:</h2>
                    <h2 className='text-lg text-gray-400 mt-4'>CORPORATE OFFICE</h2>
                    <p className=''>
                        Umbrella Room Ventures India Pvt Ltd,<br/>
                        Level 3B, DLF Centre, Parliament Street,<br/>
                        Connaught Place, New Delhi - 110001,<br/>
                        India (IN)
                    </p>
                    <h2 className='cursor-pointer text-lg text-green-400 mt-3'>
                        Schedule an Appointment
                    </h2>

                    <h2 className='text-lg text-gray-400 mt-16'>ZONAL OFFICE</h2>
                    <p>
                        Umbrella Room Ventures India Pvt Ltd,<br/>
                        Sarovar Portico, Surajkund,<br/>
                        Faridabad, Haryana - 121010,<br/>
                        Delhi NCR, India (IN)
                    </p>
                </div>
                <div>
                    <h2 className='text-2xl'>Phone Numbers:</h2>

                    <h2 className='text-lg text-gray-400'>Personalised Bookings</h2>
                    <h>+91 8287568015, +91 8700663974</h>
                    <h2 className='text-lg text-gray-400'>Operations</h2>
                    <h>+91 9718776886</h>
                    <h2 className='text-lg text-gray-400'>Technical</h2>
                    <h>+91 9044469238</h>


                    <h2 className='text-2xl mt-9'>Email Ids:</h2>
                    <p className='text-lg'>
                        Queries - connect@luxorides.com<br/>
                        Bookings - bookings@luxorides.com<br/>
                        Careers and HR - hr@luxorides.com<br/>
                        Partnership - partner.relations@luxorides.com<br/>
                        Business Concerns - business.relations@luxorides.com
                    </p>
                </div>
            </div>
        </div>

        <div className='bg-gradient-to-t from-[#073b4c] to-[#b8dae6] pt-[90px] pb-[90px]'>
            <h2 className='text-[50px] font-extralight text-center '>Our Social Presence!</h2>
            <div className='flex justify-center space-x-7 mt-2'>
                <button><ImFacebook className='text-black text-4xl'/></button>
                <button><BsTwitter className='text-black text-4xl'/></button>
                <button><BsInstagram className='text-black text-4xl'/></button>
                <button><BsYoutube className='text-black text-4xl'/></button>
                <button><BsPinterest className='text-black text-4xl'/></button>
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
