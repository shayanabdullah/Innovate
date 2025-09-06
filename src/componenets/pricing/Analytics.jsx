import React from 'react'
import './analytics.css'
const Analytics = () => {
  return (
   <section className=''>
    <div className="container">
        <div className="w-full bg lg:py-[12 0px] pt-20 pb-9  sm:py-24 md:rounded-[40px] px-5 sm:px-0">
            <div className="text-box w-full text-center">
                <h1 className='font-popins font-semibold lg:text-5xl text-white md:text-[40px] text-4xl lg:leading-[140%] capitalize m-0'>Get your free seo analytics</h1>
                <p className='font-nurito md:text-lg text-[16px] font-normal text-white text-center pt-5 pb-9 capitalize md:leading-[200%] opacity-60'>Paste your website link to get the free 7 days analytics of your website <span className="block">for totaly free</span></p>
                <div className="input flex items-center flex-wrap justify-center gap-y-4">
      <input type="text" placeholder='paste your website links' className='bg-white lg:py-8 lg:pl-8 py-4 px-6 md:py-5 md:px-9 lg:w-[450px]  md:w-[450px] sm:w-[350px] w-[230px]  rounded-l-xl  focus:outline-0 font-nurito font-regular text-[16px] lg:leading-[120%] text-[#29313D] capitalize placeholder:text-[16px] placeholder:font-nurito placeholder:text-[#29313D]'/>
<div className="text-center">
<button className='lg:text-lg md:text-lg sm:text-lg font-nurito font-semimbold text-white lg:px-8 lg:py-7 bg-[#6A55EA] rounded-r-[20px] md:py-[18px] sm:py-[14px] py-[16px] px-5 text-[16px]  sm:px-5  md:px-7 in-btn cursor-pointer'>Analyze website</button>
</div>
    </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Analytics