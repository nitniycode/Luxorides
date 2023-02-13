import React from 'react'
import { ImWhatsapp, ImFacebook } from 'react-icons/im'
import {BsInstagram, BsYoutube, BsPinterest, BsTwitter} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

export default function Support() {
  return (
    <section>
        <div className='my-16'>
            <div className='bg-[#465052] mx-[200px]'>
                <div className='ml-8 p-10 mt-5 text-left'>
                    <h2 className='text-7xl font-semibold text-white pb-8'>
                        Your problem is ours!
                    </h2>
                    <p className='text-2xl text-white font-thin'>
                        We offer you complete personal support regarding our services. You can reach us by<br/>
                        various means, whether it be a <button className='text-green-500'>Mail</button>, <button className='text-green-500'>Call</button> or through <button className='text-green-500'>WhatsApp</button>.
                    </p>
                    <p className='text-2xl text-white font-thin my-9'>
                        We may already have a solution for your concerns. Visit our <button className='text-green-500'>FAQs</button>Section.
                    </p>
                    <p className='text-2xl text-white font-thin mb-14'>
                        Feel free to reach us out. We are available anytime in 24 hours a day, 7 days a Week.
                    </p>
                </div>
            </div>
        </div>
        <div  className='bg-gradient-to-r from-[#232323] to-[#25d366] py-20'>
            <div className='flex justify-center space-x-44'>
                <div className='py-5'>
                    <button className='m-4 py-4 px-14 text-lg flex items-center text-white bg-green-500 rounded-full hover:bg-green-600'>
                        <ImWhatsapp className='mr-2'/>
                        WhatsApp Us
                    </button>
                </div>
                <div className='text-right'>
                    <h2 className='text-5xl text-white font-medium'>
                        Personalised Resolution
                    </h2>
                    <p className='text-white font-thin text-2xl mt-6 '>
                        WhatsApp us your concerns and Our team will attend to it<br/> immediately !
                    </p>
                </div>
            </div>
        </div>

        <div  className='bg-gradient-to-r from-[#232323] to-[#e4d295] py-20'>
            <div className='flex justify-center space-x-44'>
                <div className='py-5'>
                    <button className='m-4 py-4 px-14 text-lg flex items-center text-black bg-yellow-300 rounded-full hover:bg-yellow-400'>
                        <MdEmail className='mr-2 text-2xl'/>
                        E-Mail Us
                    </button>
                </div>
                <div className='text-right'>
                    <h2 className='text-5xl text-white font-medium'>
                        E-Mail us Your Concerns
                    </h2>
                    <p className='text-white font-thin text-2xl mt-6 '>
                        Stuck in a Problem?<br/>Do not hold it to yourself, Mail us your concerns !
                    </p>
                </div>
            </div>
        </div>

        <div  className='bg-gradient-to-r from-[#232323] to-[#b2ccd2] py-20'>
            <div className='text-left ml-64'>
                <h2 className='text-5xl text-white font-medium'>
                    Frequently Asked<br/>
                    Questions
                </h2>
                <p className='text-white font-thin text-2xl mt-6 '>
                    Have a concern?<br/>We might already have a solution ready for you !
                </p>
            </div>
        </div>

        <div>
            <h2 className='text-5xl text-black text-center font-semibold mt-24'>
                Frequently Asked Questions
            </h2>


            <div className='border-2 border-gray-300 border-solid bg-[#dfdfdf] mx-80 mt-20 mb-1'>
                <h2 className='text-left text-3xl font-thin ml-14 py-4'>
                    How to choose which Luxoride is best for my<br/>occasion?
                </h2>
            </div>
            <div className='border-2 border-gray-300 border-solid bg-[#dfdfdf] mx-80  mb-1'>
                <h2 className='text-left text-3xl font-thin ml-14 py-4'>
                    How to book my Luxoride?
                </h2>
            </div>
            <div className='border-2 border-gray-300 border-solid bg-[#dfdfdf] mx-80  mb-1'>
                <h2 className='text-left text-3xl font-thin ml-14 py-4'>
                    What are appicable booking slots?
                </h2>
            </div>
            <div className='border-2 border-gray-300 border-solid bg-[#dfdfdf] mx-80  mb-1'>
                <h2 className='text-left text-3xl font-thin ml-14 py-4'>
                    Which areas do you cover?
                </h2>
            </div>
            <div className='border-2 border-gray-300 border-solid bg-[#dfdfdf] mx-80  mb-1'>
                <h2 className='text-left text-3xl font-thin ml-14 py-4'>
                    How many days before do i need to Book my Ride?
                </h2>
            </div>
            <div className='border-2 border-gray-300 border-solid bg-[#dfdfdf] mx-80  mb-1'>
                <h2 className='text-left text-3xl font-thin ml-14 py-4'>
                    What if my Luxorideis not on time / doesn't<br/>showup?
                </h2>
            </div>
            <div className='border-2 border-gray-300 border-solid bg-[#dfdfdf] mx-80  mb-1'>
                <h2 className='text-left text-3xl font-thin ml-14 py-4'>
                    How do i trust you with day of my life?
                </h2>
            </div>
            <div className='border-2 border-gray-300 border-solid bg-[#dfdfdf] mx-80  mb-1'>
                <h2 className='text-left text-3xl font-thin ml-14 py-4'>
                    What if i want to see my Luxoride prior to booking?
                </h2>
            </div>
            <div className='border-2 border-gray-300 border-solid bg-[#dfdfdf] mx-80  mb-1'>
                <h2 className='text-left text-3xl font-thin ml-14 py-4'>
                    Are there any surprise that you will provide me?
                </h2>
            </div>
            <div className='border-2 border-gray-300 border-solid bg-[#dfdfdf] mx-80  mb-1 pb-7'>
                <h2 className='text-left text-3xl font-thin ml-14 py-4'>
                    What are the changes of Upgrade?
                </h2>
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
