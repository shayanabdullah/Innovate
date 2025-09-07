import React from 'react'
import Images from './Images'
import Logo from "../assets/logo2.png"
const Footer = () => {
  return (
    <>
       <section id='contact' className='bg-white lg:pt-[140px] pt-24 lg:pb-16 pb-14'>
       <div className="container">
      <div className="footer flex flex-wrap ">
      <div className="right pl-10 lg:w-2/5 pb-20">
            <div className="img pb-10">
                <Images src={Logo}/>
            </div>
            <p className='font-nurito font-normal text-lg leading-[180%] opacity-90 text-[#29313D] lg:pr-12'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
        </div>
        <div className="left lg:w-3/5 w-full lg:pl-30 pl-20 flex md:justify-between gap-10 sm:gap-0  flex-wrap">
             <div className="text-1 sm:w-[25%]">
             <h2 className='font-sans font-semibold text-[#29313D] lg:leading-[140%] lg:text-2xl text-xl lg:pb-12 pb-10'>Features</h2>
                <ul>
                    <li>
                        <a href="home" className='font-nurito font-medium text-xl text-[#29313D] lg:leading-[120%] pb-8 block'>Home</a>
                    </li>

                    <li>
                        <a href="#about" className='font-nurito font-medium text-xl text-[#29313D] lg:leading-[120%] pb-8 block'>About</a>
                    </li>

                    <li>
                        <a href="#home" className='font-nurito font-medium text-xl text-[#29313D] lg:leading-[120%] pb-8 block'>Benifit</a>
                    </li>

                    <li>
                        <a href="#price" className='font-nurito fontmediumd text-xl text-[#29313D] lg:leading-[120%] pb-8 block'>Pricing</a>
                    </li>
                    <li>
                        <a href="#blog" className='font-nurito font-medium text-xl text-[#29313D] lg:leading-[120%] pb-8 block'>Blog</a>
                    </li>

                </ul>
             </div>
             <div className="text-2 sm:w-1/3 ">
             <h2 className='font-sans font-semibold text-[#29313D] lg:leading-[140%] lg:text-2xl text-xl lg:pb-12 pb-10'>Products</h2>
                <ul>
                    <li>
                        <a href="home" className='font-nurito font-medium text-xl text-[#29313D] lg:leading-[120%] pb-8 block'>Task Management</a>
                    </li>

                    <li>
                        <a href="#about" className='font-nurito font-medium text-xl text-[#29313D] lg:leading-[120%] pb-8 block'>Company growth</a>
                    </li>

                    <li>
                        <a href="#home" className='font-nurito font-medium text-xl text-[#29313D] lg:leading-[120%] pb-8 block'>Time tracking</a>
                    </li>

           

                </ul>
             </div>
             <div className="text-3 sm:w-1/3 ">
             <h2 className='font-sans font-semibold text-[#29313D] lg:leading-[140%] lg:text-2xl text-xl lg:pb-12 pb-10'>Support</h2>
                <ul>
                    <li>
                        <a href="home" className='font-nurito font-medium text-xl text-[#29313D] lg:leading-[120%] pb-8 block'>Customer service </a>
                    </li>

                    <li>
                        <a href="#about" className='font-nurito font-medium text-xl text-[#29313D] lg:leading-[120%] pb-8 block'>Accessibility</a>
                    </li>

                    <li>
                        <a href="#home" className='font-nurito font-medium text-xl text-[#29313D] lg:leading-[120%] pb-8 block'>Contact us</a>
                    </li>

           

                </ul>
             </div>
     
        </div>
      </div>



        </div>  
    </section>



    <footer>
<div className="container">
<div className="flex sm:justify-between pt-20 flex-wrap justify-center gap-y-5">
      <p className='font-nurito font-normal text-lg leading-[180%] opacity-90 text-[#29313D] '>@20201 Innovate.All rights reserved.</p>
<div className="flex gap-16">
<p className='font-nurito font-normal text-lg leading-[180%] opacity-90 text-[#29313D] '>Privacy policy.</p>
      <p className='font-nurito font-normal text-lg leading-[180%] opacity-90 text-[#29313D] '>Terms & condition.</p>
</div>
    
        </div>  
</div>
      </footer>
    </>
 
    
  )
}

export default Footer