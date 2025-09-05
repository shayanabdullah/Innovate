import React from 'react'
import Images from './Images'
import card1 from '../assets/mess-1.png'
import card2 from '../assets/social.png'
import card3 from '../assets/market.png'
import left from '../assets/pro-left.png'
import './procces.css'
const Procces = () => {
  return (
   <section className='lg:py-[120px] py-20 md:py-24 sm:py-20 bg-[#F1FBFB]' id='portfolio'>
    <div className="container">
    <div className="text-center w-full">
                  <h5 className='font-nurito font-semibold lg:text-2xl text-lg md:text-xl sm:text-xl text-[#7968EF] pb-2.5'>
                    Our process

                  </h5>
                  <div className="text-center w-full">
                    <h1 className='font-popins font-semibold lg:text-5xl capitalize text-[#29313D] lg:leading-[150%] text-3xl md:text-4xl sm:text-3xl leading-[130%] lg:pb-16 pb-10 md:pb-12 sm:pb-10'>How can we help?</h1>
                  </div>
                  
                  
            </div>
            {/* cards */}
            <div className="flex items-center lg:gap-6 md:flex-wrap sm:flex-wrap flex-wrap lg:flex-row  md:gap-[40px] sm:justify-center sm:gap-[40px] box-2 pb-[90px]"> 
                        <div className="card-1 px-12 bg-[#F8A64C] rounded-[14px] relative after:absolute after:bottom-0 after:left-[50%] after:content-[''] after:w-[50px] after:h-[50px] after:bg-[#F8A64C] after:translate-[-50%] after:rotate-[45deg] after:opacity-0 hover:after:bottom-[-23%] hover:after:opacity-100 after:duration-300 after:ease-in-out lg:max-w-[320px] lg:max-h-[220px]">
                            <div className="text-center">
                              <div className="text-center flex justify-center w-full  pt-[38px]">
                              <Images src={card1} className='max-w-[68px] w-full'/>
                              </div>
                                <h4 className='font-popins font-semibold lg:text-2xl text-xl md:text-xl sm:text-xl text-white pb-[50px] pt-[30px]'>Real time analytics</h4>

                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="card-2 px-10 bg-[#F0EDFF] rounded-[14px] relative after:absolute after:bottom-0 after:left-[50%] after:content-[''] after:w-[50px] after:h-[50px] after:bg-[#F0EDFF] after:translate-[-50%] after:rotate-[45deg] after:opacity-0 hover:after:bottom-[-23%] hover:after:opacity-100 after:duration-300 after:ease-in-out lg:max-w-[320px] lg:max-h-[220px] after:-z-10 z-20">
                            <div className="text-center">
                              <div className="text-center flex justify-center w-full  pt-[38px]">
                              <Images src={card2} className='max-w-[68px] w-full'/>
                              </div>
                                <h4 className='font-popins font-semibold lg:text-2xl text-xl md:text-xl sm:text-xl text-black pb-[50px] pt-[30px]'>Social media stragedy</h4>

                            </div>
                        </div>
                        <div className="card-3 px-10 bg-[#E8FCF2] rounded-[14px] relative after:absolute after:bottom-0 after:left-[50%] after:content-[''] after:w-[50px] after:h-[50px] after:bg-[#E8FCF2] after:translate-[-50%] after:rotate-[45deg] after:opacity-0 hover:after:bottom-[-23%] hover:after:opacity-100 after:duration-300 after:ease-in-out lg:max-w-[320px] lg:max-h-[220px]">
                            <div className="text-center">
                              <div className="text-center flex justify-center w-full  pt-[38px]">
                              <Images src={card3} className='max-w-[68px] w-full'/>
                              </div>
                                <h4 className='font-popins font-semibold lg:text-2xl text-xl md:text-xl sm:text-xl text-black pb-[50px] pt-[30px]'>Media management</h4>

                            </div>
                        </div>
                        <div className="card-4 px-9 bg-[#FEF6EC] rounded-[14px] relative after:absolute after:bottom-0 after:left-[50%] after:content-[''] after:w-[50px] after:h-[50px] after:bg-[#FEF6EC] after:translate-[-50%] after:rotate-[45deg] after:opacity-0 hover:after:bottom-[-23%] hover:after:opacity-100 after:duration-300 after:ease-in-out lg:max-w-[320px] lg:max-h-[220px]">
                            <div className="text-center">
                              <div className="text-center flex justify-center w-full  pt-[38px]">
                              <Images src={card1} className='max-w-[68px] w-full'/>
                              </div>
                                <h4 className='font-popins font-semibold lg:text-2xl text-xl md:text-xl sm:text-xl text-black pb-[50px] pt-[30px]'>Reporting & analysis</h4>

                            </div>
                        </div>
 
                            
                     </div>


                     <div className="flex lg:justify-start items-center lg:gap-[10%] md:gap-[10%] sm:gap-[5%] box">

                        
  <div className="img lg:w-[45%] lg:pl-[132px] w-full left-2">
    <Images src={left} />
  </div>

  <div className="right-2 lg:w-[45%] w-full right">
    <h2 className="font-popins font-semibold lg:leading-[145%] lg:text-4xl sm:text-3xl md:text-4xl text-3xl">
      Real time analytics
    </h2>
    <p className="font-nurito font-regular text-[#29313D] text-lg pt-6 sm:pl-2 md:pl-2 lg:px-0 md:px-3 sm:px-3 px-3 capitalize lg:leading-[200%]">
      Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.
      Turn your visitors into customers with our team of experts. We'll analyze your website and develop a suitable conversion-rate strategy.
    </p>
<div className="pro-btn">
<button className='lg:text-lg md:text-lg sm:text-lg font-nurito font-semimbold text-white lg:px-8 lg:py-5 bg-[#6A55EA] rounded-[20px] md:py-[18px] sm:py-[14px] py-[16px] px-5 text-[16px]  sm:px-5  md:px-7 in-btn cursor-pointer mt-12 pro-btn'><a href="#">Analyze website</a></button>
</div>
  </div>
</div>

    </div>
   </section>
  )
}

export default Procces