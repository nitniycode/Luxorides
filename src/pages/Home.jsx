import React from 'react'

export default function Home() {
  return (
    <section>
      <div>
        <img src="./tajmahal.jpg" 
              alt="taj" 
        />
        
      </div>
      <div >
        <p className='text-center mt-24 text-7xl font-light'>
          Plannig To Rent
        </p>

        <p className='text-center mt-3 text-7xl font-light'>
          a Luxury Car for <span className='font-medium'>Agra?</span>
        </p>

        <div className='text-right'>
          <p className='text-5xl mt-8 font-extralight mr-80 '>
            We will help.
          </p>
        </div>
        <div className='flex justify-center mt-5'>
          <button className='m-5 py-3 px-14 text-lg text-black border-2 border-black bg-white rounded-full hover:bg-black hover:text-white'>
            Explore Brands
          </button>

          <button className='m-5 py-3 px-14 text-lg text-black border-2 border-black bg-white rounded-full hover:bg-black hover:text-white'>
            Explore Cars
          </button>

          <button className='m-5 py-3 px-14 text-lg text-black border-2 border-black bg-white rounded-full hover:bg-black hover:text-white'>
            Explore Services
          </button>
        </div>

        <div>
                <p className='text-center mt-48 text-5xl font-light mb-[30px] '>
                      Renting a luxury car in <span className='font-medium'>Agra</span>
                </p>
                <p className=' m-auto text-2xl w-[700px] font-extralight'>
                        Renting a luxury car in a city like Agra (Delhi,NCR) is much of a
                        hurdle unless you arrive at the right place to the right people. In
                        this case, You are at the correct place.
                        <br />
                        <span className='font-medium'>Luxorides</span> offers you a wide variety of luxury cars like <button className='text-green-500'>Audi</button>,<br/>
                        <button className='text-green-500'>Mercedes</button>,
                        <button className='text-green-500'>BMW</button>,
                        <button className='text-green-500'>Jaguar</button>,
                        <button className='text-green-500'>Range Rover</button>,
                        <button className='text-green-500'>Bentley</button>,
                        <button className='text-green-500'>Porsche</button>,
                        <button className='text-green-500'>Rolls Royce</button>,<br/>
                        <button className='text-green-500'>Ferrari</button> and <button className='text-green-500'>Vintage Cars</button> on rent in Delhi NCR.
                </p>
        </div>
      </div>

      <div className='bg-[#efefef] mt-16 h-auto  text-center'>
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
        <div className=' mt-3 mr-20'>
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
    </section>
  )
}
