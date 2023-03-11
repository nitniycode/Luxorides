import React from 'react'

export default function Decorations() {
  return (
    <section>
      <img src="./decoration.jpg" alt="decorationimg" 
      className='relative'/>

      <div className='absolute top-[35%] left-[70%] text-center'>
        <h2 className='text-7xl font-semibold text-white'>Personalised</h2>
        <h2 className='text-7xl font-semibold text-white'>Decorations</h2>
        <p className='text-2xl text-white mt-10'>for your Wedding Car</p>
      </div>

      <div className='bg-[#efefef] pt-24'>
        <h2 className='text-7xl font-semibold text-center'>Some Custom Decors</h2>
        <p className='text-2xl text-gray-400 text-center mt-8'>to make our service a little more special...</p>

        <div className='flex justify-center space-x-8 mt-20'>
          <img src="https://luxorides.com/assets/images/luxury-wedding-car-decoration-ideas-delhi-noida-gurgaon-ghaziabad-by-luxorides-1-800x534.webp" alt="" className='w-[250px]'/>

          <img src="https://luxorides.com/assets/images/luxury-wedding-car-decoration-ideas-delhi-noida-gurgaon-ghaziabad-by-luxorides-2-800x534.webp" alt="" className='w-[250px]'/>

          <img src="https://luxorides.com/assets/images/luxury-wedding-car-decoration-ideas-delhi-noida-gurgaon-ghaziabad-by-luxorides-3-800x533.webp" alt="" className='w-[250px]'/>

          <img src="https://luxorides.com/assets/images/luxury-wedding-car-decoration-ideas-delhi-noida-gurgaon-ghaziabad-by-luxorides-4-800x534.webp" alt="" className='w-[250px]'/>
        </div>
        <div className='flex justify-center space-x-8 mt-7'>
          <img src="https://luxorides.com/assets/images/clwfgbifjx-800x534.webp" alt="" className='w-[250px]'/>

          <img src="https://luxorides.com/assets/images/luxury-wedding-car-decoration-ideas-delhi-noida-gurgaon-ghaziabad-by-luxorides-6-800x534.webp" alt="" className='w-[250px]'/>

          <img src="https://luxorides.com/assets/images/dt91d9otxq-1-800x534.webp" alt="" className='w-[250px]'/>

          <img src="https://luxorides.com/assets/images/luxury-wedding-car-decoration-ideas-delhi-noida-gurgaon-ghaziabad-by-luxorides-8-800x534.webp" alt="" className='w-[250px]'/>
        </div>
      </div>
    </section>
  )
}
