import React from 'react'
import Images from './Images'
import leftimg from '../assets/ft-left.png'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
const CareFeature = () => {
  return (
    <section className='pb-16'>
        <div className="container">
            <div className="text-center w-full">
                  <h5 className='font-nurito font-semibold lg:text-2xl text-lg md:text-xl sm:text-xl text-[#7968EF] pb-2.5'>Core feature</h5>
                  <div className="text-center w-full">
                    <h1 className='font-popins font-semibold lg:text-5xl capitalize text-[#29313D] lg:leading-[150%] text-3xl md:text-4xl sm:text-3xl leading-[130%] lg:pb-16 pb-10 md:pb-12 sm:pb-10'>Provide awsome service <span className="block">with our tools</span></h1>
                  </div>

                  
            </div>
            <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap sm:flex-wrap md:justify-center sm:justify-center justify-center gap-y-12 md:gap-y-12 sm:gap-y-12 lg:gap-8 ">
                    <div className="left lg:w-2/5">
                        <p className='font-nurito font-regular text-[#29313D]  text-lg lg:leading[200%] lg:pb-[80px] pb-12 sm:pl-2 md:pl-2 px-3'>With over 25 years of experience, we have crafted thousands of strategic 
                            <span className="block">discovery process that enables us to peel back the layers which enable us to</span>
                             understand.</p>
                             <div className="w-full max-w-[600px]">
                                <Images src={leftimg}/>
                             </div>
                    </div>

                    <div className="right lg:w-3/5">
                        <div className="flex flex-col items-center gap-y-9 w-full">
                            <div className="card-1 lg:py-9 py-7 lg:pl-9 md:pl-8 sm:pl-7 pl-6 bg-[#F0EDFF] rounded-2xl flex gap-y-10 lg:gap-x-10 md:gap-x-7 sm:gap-x-6 gap-x-5" >
                                <Images src={card1} className='w-[80px]  h-[80px] sm:w-[100px] sm:h-[100px] md:h-[100px]  md:w-[120px] lg:w-[120px] lg:h-[120px] '/>
                                <div className="text">
                                    <h2 className='font-popins font-semibold lg:text-[28px] text-[#29313D] md:text-xl sm:text-xl text-lg'>SEO Consultancy</h2>
                                    <p className=' font-nurito font-regular text-[#29313D]  lg:text-lg md:text-lg sm:text-[16px] text-[14px] leading[200%] lg:pr-[120px] md:pr-[100px] sm:pr-[80px] pr-[40px] '>Nam libero tempore, cum soluta nobis est <span className="block">eligendi optio cumque</span> </p>
                                </div>
                            </div>
                            <div className="card-2 lg:py-9 py-7 lg:pl-9 md:pl-8 sm:pl-7 pl-6 bg-[#F0EDFF] rounded-2xl flex gap-y-10 lg:gap-x-10 md:gap-x-7 sm:gap-x-6 gap-x-5" >
                                <Images src={card2} className='w-[80px]  h-[80px] sm:w-[100px] sm:h-[100px] md:h-[100px]  md:w-[120px] lg:w-[120px] lg:h-[120px] '/>
                                <div className="text">
                                    <h2 className='font-popins font-semibold lg:text-[28px] text-[#29313D] md:text-xl sm:text-xl text-lg'>Competitor analysis</h2>
                                    <p className=' font-nurito font-regular text-[#29313D]  lg:text-lg md:text-lg sm:text-[16px] text-[14px] leading[200%] lg:pr-[120px] md:pr-[100px] sm:pr-[80px] pr-[40px] '>Nam libero tempore, cum soluta nobis est <span className="block">eligendi optio cumque</span> </p>
                                </div>
                            </div>
                            <div className="card-3 lg:py-9 py-7 lg:pl-9 md:pl-8 sm:pl-7 pl-6 bg-[#F0EDFF] rounded-2xl flex gap-y-10 lg:gap-x-10 md:gap-x-7 sm:gap-x-6 gap-x-5" >
                                <Images src={card3} className='w-[80px]  h-[80px] sm:w-[100px] sm:h-[100px] md:h-[100px]  md:w-[120px] lg:w-[120px] lg:h-[120px] '/>
                                <div className="text">
                                    <h2 className='font-popins font-semibold lg:text-[28px] text-[#29313D] md:text-xl sm:text-xl text-lg'>Social media marketing</h2>
                                    <p className=' font-nurito font-regular text-[#29313D]  lg:text-lg md:text-lg sm:text-[16px] text-[14px] leading[200%] lg:pr-[120px] md:pr-[100px] sm:pr-[80px] pr-[40px] '>Nam libero tempore, cum soluta nobis est <span className="block">eligendi optio cumque</span> </p>
                                </div>
                            </div>
                         
                           

                        </div>
                    </div>
                  </div>
        </div>
    </section>
  )
}

export default CareFeature