import React from 'react'
import { Link } from 'react-router-dom'
import {ImFacebook} from 'react-icons/im'
import {BsInstagram, BsYoutube, BsPinterest, BsTwitter} from 'react-icons/bs'

export default function Forgotpassword() {
  return (
   <section>
      <div>
        <img src="./sign2.jpg" alt="forgotimg" 
        className='relative'
        />

        <div className='absolute top-32 right-12'>
            <div className=' mx-[150px] hover:shadow-2xl'>
                <div className='text-center p-5 mt-7'>
                    <h2 className='text-5xl text-white font-bold'>Recover Password</h2>
                    <p className='text-lg font-thin mt-6 text-white'>Please enter your email:</p>
                    <form>
                        <input 
                            className='w-full h-9 border-2 border-gray-400 px-4 py-5 mt-4'
                            placeholder='Email'
                        />
                        <button className='text-white w-full my-5 py-2 rounded-md bg-[#073b4c]'>RECOVER</button>

                        <div className='flex items-center before:border-t  before:flex-1  before:border-gray-500 after:border-t after:flex-1 after:border-gray-500'>
                        <p className='font-bold mx-3 text-white'>OR</p>
                        </div>

                        <div className=' mt-2'>
                            <p className='font-thin text-white'>Remember your password?<Link to='/signin' className='font-semibold text-red-500'> Back to Login</Link></p>
                        </div>
                    </form>
                </div>
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
