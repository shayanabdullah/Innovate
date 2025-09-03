import React from 'react'
import Images from './Images'
import traffic from '../assets/traffic.svg'
const Traffic = () => {
  return (
<section className='lg:pt-[112px] lg:pb-[96px] md:pt-20 md:pb-16 sm:pt-16 sm:pb-14 pt-14 pb-12'>
    <div className="container">
        <div className="row flex flex-wrap lg:gap-x-[10%] md:justify-center sm:justify-center justify-center">
            <div className="left lg:max-w-[45%] w-full md:text-center sm:text-center text-center lg:text-left">
            <h5 className='font-nurito font-semibold lg:text-2xl text-lg md:text-xl sm:text-xl text-[#7968EF] pb-2.5'>Core feature</h5>
            <h1 className='font-popins font-semibold lg:text-5xl capitalize text-[#29313D] lg:leading-[150%] text-3xl md:text-4xl sm:text-3xl leading-[130%] lg:pb-6 pb-5 md:pb-6  sm:pb-6'>
            Get more traffic
            </h1>
            <p className='font-nurito font-regular text-[#29313D]  text-lg lg:leading[200%] lg:pb-[80px] pb-12 sm:pl-2 md:pl-2 lg:px-0 md:px-3 sm:px-3 px-3 capitalize'>With over 25 years of experience, we have crafted thousands of 
              <span className="lg:block">  strategic discovery process that enables us to peel back the layers</span>
                 
               <span className="lg:block">which enable us to understand.With over 25 years of experience, </span>
               we have crafted thousands of strategic discovery process</p>
            </div>
            <div className="right lg:w-[45%]">
            <div className="img lg:w-full ">
                <Images src={traffic} className='w-full'/>
                </div>
                </div>  
        </div>
    </div>
</section>
  )
}

export default Traffic