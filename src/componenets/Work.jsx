import React from 'react'
import card1 from '../assets/cardi1.png'
import card2 from '../assets/caardi2.png'
import Images from './Images'
const Work = () => {
  return (
 <section className='lg:py-32 md:pt-24 sm:py-24 py-20  bg-white' id='blog'>
    <div className="container">
    <div className=" flex justify-between items-center w-full pr-3 lg:pb-10 md:pb-10 pb-5">
    <div className="pl-3">
                  <h5 className='font-nurito font-semibold lg:text-2xl text-lg md:text-xl sm:text-xl text-[#7968EF] pb-2.5'>
                  Our works
                  </h5>
              
                    <h1 className='font-popins font-semibold lg:text-5xl capitalize text-[#29313D] lg:leading-[150%] text-3xl md:text-4xl sm:text-3xl leading-[130%] lg:pb-16 pb-12 md:pb-16 sm:pb-10'>Our case</h1>
                  </div>
                  <button className='lg:text-lg md:text-lg sm:text-lg font-nurito font-semimbold text-[#6A55EA] lg:px-9 lg:py-4 bg-white rounded-[14px] md:py-[18px] sm:py-[14px] py-[16px] px-5 text-[16px]  sm:px-5  md:px-7 in-btn cursor-pointer  border-2 border-[#6A55EA]'><a href="#">View all</a></button>
            </div>

            <div className="card-section grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10  grid-cols-1  gap-8">
              <div className="card-1 w-full max-w-sm mx-auto overflow-hidden lg:p-0 md:p-0 sm:p-0 pl-3">
                  <div className="img-box rounded-3xl bg-[#C4C4C4] ">
                    <Images src={card1}/>
                  </div>
                  <h1 className='font-popins font-semibold text-[28px] pt-7'>Search marketer</h1>
                  <p className='font-nurito font-regular text-[#29313D] text-lg pt-4'>Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.</p>
              </div>
              <div className="card-2 overflow-hidden  max-w-sm w-full mx-auto">
                  <div className="img-box rounded-3xl bg-[#C4C4C4] ">
                    <Images src={card2}/>
                  </div>
                  <h1 className='font-popins font-semibold text-[28px] pt-7'>Watching for trends</h1>
                  <p className='font-nurito font-regular text-[#29313D] text-lg pt-4'>Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.</p>
              </div>
        <div className="">
        <div className="card-3  max-w-sm w-full mx-auto  sm:text-center lg:text-left">
                  <div className="img-box rounded-3xl bg-[#C4C4C4] ">
                    <Images src={card2}/>
                  </div>
                  <h1 className='font-popins font-semibold text-[28px] pt-7'>Cross over benifits</h1>
                  <p className='font-nurito font-regular text-[#29313D] text-lg pt-4'>Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.</p>
              </div>
        </div>
            </div>
    </div>
 </section>
  )
}

export default Work