import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'

export default function Signin() {

  const [showPassword,setShowPassword] = useState(false)

  return (
    <section>
      <div>
        <img src="./sign.jpg" alt="signinimage"
        className='relative' 
        />

        <div className='absolute top-32 right-12 '>
          <div className=' mx-[150px] hover:shadow-2xl'>
            <div className=' p-5 mt-7 text-center'>
                <h2 className='text-4xl font-bold text-white'>Sign In</h2>
                <p className='text-lg font-thin mt-6 text-white'>Please enter your e-mail and password:</p>
                    
                  <form>
                    <input 
                      className='w-full h-9 border-2 border-gray-400 px-10 py-5 mt-4'
                      placeholder='Email Address'
                    />
                    <input 
                        type={showPassword?'text':'password'}
                        className='w-full h-9 border-2 border-gray-400 px-10 py-5 mt-6 relative'
                        placeholder='Password'
                    />

                  {showPassword?(
                    <AiFillEye
                      className=' cursor-pointer absolute right-48 top-[235px] text-[18px]'
                      onClick={()=>setShowPassword(false)}
                    />
                  ):(
                    <AiFillEyeInvisible 
                      className='cursor-pointer absolute right-48 top-[235px] text-[18px]'
                      onClick={()=>setShowPassword(true)}  
                    />
                  )}   


                    <div className='flex justify-between mt-2'>
                      <p className='font-thin text-white'>Don't Have An Account?<Link to='/sign-up' className='font-semibold text-red-500'> Create one</Link></p>
                      <Link to='/forgotpassword' className='font-semibold text-blue-500'>Forgot Password?</Link>
                    </div>
                    <button className='text-white w-full my-5 py-2 rounded-md bg-[#073b4c]'>SIGN IN</button>

                    <div className='flex items-center before:border-t  before:flex-1  before:border-gray-500 after:border-t after:flex-1 after:border-gray-500'>
                        <p className='font-bold mx-3 text-white'>OR</p>
                    </div>

                    <button className='text-white w-full my-5 py-2 items-center flex justify-center rounded-md bg-red-600'>
                        <FcGoogle className='bg-white mr-3 text-2xl rounded-xl'/>
                        CONTINUE WITH GOOGLE
                    </button>
                  </form>
                    
            </div>
          </div>
        </div>
      </div>

      
    </section>
  )
}
