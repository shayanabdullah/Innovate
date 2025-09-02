  import React from 'react'
  import './banner.css'
  import Images from './Images'
  import cloud from '../assets/cloude.png'
  import Navber from './Navber'
  import bannercard from '../assets/banner-card.png'
  import bannercard2 from '../assets/banner-card2.png'
  import bannercard3 from '../assets/banner-card3.png'
  import bannercard4 from '../assets/banner-card4.png'
  const Banner = () => {
    return (<>
    <Navber/>

      <section className="banner relative lg:py-[100px]  pb-10  md:pb-14 sm:pb-12 pt-0 md:pt-9 sm:pt-8 " id="home">
    {/* Overlay circle */}
    <div className="overlay absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px] bg-white/5 rounded-full 
        -top-16 -left-16 sm:-top-[25%] sm:-left-[20%] md:-top-[45%] md:-left-[35%] lg:top-[-25%] lg:left-[-20%] z-10">
    </div>

    {/* Square */}
    <div className="absolute bg-[#072149] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[130px] lg:h-[130px] 
        lg:top-[28%] lg:right-[-2%] md:top-[25%] md:right-[-5%] sm:top-[25%] sm:right-[-5%] top-[25%] right-[-5%] z-10">
    </div>

    <div className="container">
         <div className="banner-text lg:py-[60px] py-12 md:py-16 sm:py-14 relative z-[96]">
          <div className="flex flex-col items-center w-full justify-center lg:pb-[200px] pb-[250px] md:pb-[180px] sm:pb-[150px]">
          <div className="top-text flex items-center gap-5 pb-3 md:pb-2 lg:pb-0">
          <div className="text-1 border border-solid border-gray-400 rounded-[10px] lg:py-2.5 lg:px-4 py-1 px-2 md:py-2.5 md:px-4 sm:py-2 sm:px-2">
            <h4 className='font-nurito font-medium lg:text-xl md:text-base sm:text-[14px] text-[12px] text-gray-400'>SEO</h4>
          </div>
          <div className="text-2 border border-solid border-gray-400 rounded-[10px] lg:py-2.5 lg:px-4 py-1 px-2 md:py-2.5 md:px-4 sm:py-2 sm:px-2">
            <h4 className='font-nurito font-medium lg:text-xl md:text-base sm:text-[14px] text-[12px] text-gray-400'>SMM</h4>
          </div>
          <div className="text-3 border border-solid border-gray-400 rounded-[10px] lg:py-2.5 lg:px-4 py-1 px-2 md:py-2.5 md:px-4 sm:py-2 sm:px-2">
            <h4 className='font-nurito font-medium lg:text-xl md:text-base sm:text-[14px] text-[12px] text-gray-400'>CRO</h4>
          </div>
      
        </div>

        <div className="text ">
    <h1 className='font-popins font-bold text-center lg:text-[64px] md:text-5xl sm:text-4xl text-3xl text-white px-2 capitalize lg:leading-[130%] lg:pb-8 pb-3 md:pb-7 sm:pb-6  '>Guaranteed increase of your
        <span className="block">website sales</span>
        </h1>
        <p className='font-nurito font-regular lg:text-lg text-gray-400 sm:text-[16px] md:text-[16px] text-center lg:leading-[200%] lg:pb-12 pb-6 md:pb-10 sm:pb-9 px-3 md:px-4 sm:px-3'>With over 25 years of experience, we have crafted thousands of strategic discovery process 
    <span className="block p">     that enables us to peel back the layers which enable us to understand.</span>
          </p>
  
    </div>
    <div className="input flex items-center flex-wrap justify-center gap-y-4">
      <input type="text" placeholder='paste your website links' className='bg-white lg:py-8 lg:pl-8 py-4 px-6 md:py-5 md:px-9 lg:w-[450px]  md:w-[450px] sm:w-[350px] w-[230px]  rounded-l-xl  focus:outline-0 font-nurito font-regular text-[16px] lg:leading-[120%] text-[#29313D] capitalize placeholder:text-[16px] placeholder:font-nurito placeholder:text-[#29313D]'/>
<div className="text-center">
<button className='lg:text-lg md:text-lg sm:text-lg font-nurito font-semimbold text-white lg:px-8 lg:py-7 bg-[#6A55EA] rounded-r-[20px] md:py-[18px] sm:py-[14px] py-[16px] px-5 text-[16px]  sm:px-5  md:px-7 in-btn cursor-pointer'>Analyze website</button>
</div>
    </div>
          </div>
         </div>
         <div className="flex items-center justify-center lg:mt-[250px] w-full">
              <div className="mt-[100px] flex items-center flex-wrap lg:gap-[150px] justify-center w-full gap-[50px] md:gap-[70px] px-1 lg:pb-[62px]   ">
              <Images src={bannercard}/>
          <Images src={bannercard2}/>
          <Images src={bannercard3}/>
          <Images src={bannercard4}/>
              </div>
         </div>
    </div>
  </section>
  </>
    )
  }

  export default Banner