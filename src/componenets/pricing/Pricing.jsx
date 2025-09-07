import React from 'react'
import { feature, plans, tableColor } from './pricingData'
import { FaCheckSquare, FaCross } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import './pricing.css'
const Pricing = () => {
    return (
        <section className='lg:py-32 py-24 bg-[#F1FBFB]' id='price'>
            <div className="container">
                <div className="text-center w-full lg:pb-5">
                    <h5 className='font-nurito font-semibold lg:text-2xl text-lg md:text-xl sm:text-xl text-[#7968EF] pb-2.5'>
                        Our Pricing
                    </h5>

                    <h1 className='font-popins font-semibold lg:text-5xl capitalize text-[#29313D] lg:leading-[150%] text-3xl md:text-4xl sm:text-3xl leading-[130%] lg:pb-16 m-0'>Premium optimization plans</h1>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 sm:gap-y-15 de-table">
                    <div className="one w-full lg:pb-10" >
                        <div className="relative after:absolute after:content-[''] after:bg-[#D2EAFD] after:w-full after:h-[14px] after:rounded-[10px] py-6 pl-[19px] after:-top-[20px] after:left-0  lg:before:-top-[20px]  lg:before:absolute lg:before:content-[''] lg:before:bg-[#D7E6F9] lg:before:h-[788px] lg:before:rounded-[10px] lg:before:right-[-20px] lg:before:w-[1px] pr-0 before:z-50">
                            <h1 className='font-popins font-medium text-xl leading-[160%] text-[#29313D] capitalize '>
                                Save annually!, <span className='font-semibold'>Up to 40%</span> by paying
                            </h1>



                        </div>

                    </div>

                    <div className="two w-full lg:pb-10">
                        <div className="relative after:absolute after:content-[''] after:bg-[#000] after:w-full after:h-[14px] after:rounded-[10px] py-6 pl-[19px] before:-top-[20px ] after:-top-[20px] after:left-0   lg:before:-top-[20px]  lg:before:absolute lg:before:content-[''] lg:before:bg-[#D7E6F9] lg:before:h-[788px] lg:before:rounded-[10px] lg:before:right-[-20px] lg:before:w-[1px] before:z-50">
                            <h1 className='font-popins font-bold text-[28px] text-center leading-[160%] text-[#29313D] capitalize'>personal</h1>
                            <p className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75 text-center'>Free</p>
                        </div>

                    </div>
                    <div className="three w-full lg:pb-10">
                        <div className="relative after:absolute after:content-[''] after:bg-[#43CB83] after:w-full after:h-[14px] after:rounded-[10px] py-6 pl-[19px] before:-top-[20px ] after:-top-[20px] after:left-0   lg:before:-top-[20px]  lg:before:absolute lg:before:content-[''] lg:before:bg-[#D7E6F9] lg:before:h-[788px] lg:before:rounded-[10px] lg:before:right-[-20px] lg:before:w-[1px] before:z-50">
                            <h1 className='font-popins font-bold text-[28px] text-center leading-[160%] text-[#29313D] capitalize'>professional </h1>
                            <p className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75 text-center'>$59
                                <span className='font-medium'>/monthly</span>
                            </p>
                        </div>

                    </div>
                    <div className="four w-full lg:pb-10                                                 ">
                        <div className="relative after:absolute after:content-[''] after:bg-[#845A9F] after:w-full after:h-[14px] after:rounded-[10px] py-6 pl-[19px] before:-top-[20px ] after:-top-[20px] after:left-0  ">
                            <h1 className='font-popins font-bold text-[28px] text-center leading-[160%] text-[#29313D] capitalize'>Enterprice </h1>
                            <p className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75 text-center'
                            >$299 <span className='font-medium'>/monthly</span>
                            </p>
                        </div>

                    </div>

                </div>
                <div className="features w-full de-table">
                    <div className="grid grid-cols-4">
                        <div className="col-1 w-full">
                            <ul className='row-1'>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75  py-7 border-t border-l border-b border-gray-300 pl-3 bg-[#F2F7FA] '
                                >keywords result
                                </li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75   py-7  bg-white pl-3'
                                >
                                    Territories
                                </li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75 py-7 pl-3 bg-[#F2F7FA]   border-t border-l border-b border-gray-300'
                                >
                                    Search by time
                                </li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75   py-7  bg-white pl-3'
                                >
                                    Api access
                                </li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75 py-7 pl-3 bg-[#F2F7FA]  border-t border-l border-b border-gray-300'
                                >
                                    competition metrics
                                </li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75   py-7  bg-white pl-3'
                                >
                                    Reports
                                </li>
                            </ul>
                        </div>
                        <div className="col-2 w-full">
                            <ul>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75 py-[27.50px]  border-t border-b border-x-0 border-gray-300 pl-3 bg-[#F2F7FA] flex items-cente justify-center'>
                                    Top 1,000
                                </li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75 py-7 border-t border-b border-x-0 border-gray-300 pl-3 bg-[#fff] flex items-cente justify-center'> Top 6</li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-green-500 capitalize opacity-75 py-[34.50px] border-t border-b border-x-0  border-gray-300 pl-3 bg-[#F2F7FA] flex items-cente justify-center'> <FaCheckSquare /></li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-green-500 capitalize opacity-75 py-[35.50px] border-t border-b border-x-0  border-gray-300 pl-3 bg-[#Ffff] flex items-cente justify-center'> <FaCheckSquare /></li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-red-500 capitalize opacity-75 py-[34.50px] border-t border-b border-x-0  border-gray-300 pl-3 bg-[#F2F7FA] flex items-cente justify-center'> <FaXmark /></li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-green-500 capitalize opacity-75 py-[35.50px] border-t border-b border-x-0  border-gray-300 pl-3 bg-[#Ffff] flex items-cente justify-center'> <FaCheckSquare /></li>

                            </ul>
                            <button className='py-[38px] w-full bg-[#000] text-white text-xl font-nurito font-semibold cursor-pointer'>Try for free</button>
                        </div>
                        <div className="col-3 w-full">
                            <ul>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75 py-[27.50px] border-t border-b border-x-0 border-gray-300 pl-3 bg-[#F2F7FA] flex items-cente justify-center'>Top 5,000</li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75 py-7 border-t border-b border-x-0 border-gray-300 pl-3 bg-[#fff] flex items-cente justify-center'>  13</li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-green-500 capitalize opacity-75 py-[34.50px] border-t border-b border-x-0  border-gray-300 pl-3 bg-[#F2F7FA] flex items-cente justify-center'> <FaCheckSquare /></li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-green-500 capitalize opacity-75 py-[35.50px] border-t border-b border-x-0  border-gray-300 pl-3 bg-[#Ffff] flex items-cente justify-center'> <FaCheckSquare /></li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-red-500 capitalize opacity-75 py-[34.50px] border-t border-b border-x-0  border-gray-300 pl-3 bg-[#F2F7FA] flex items-cente justify-center'> <FaXmark /></li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-green-500 capitalize opacity-75 py-[35.50px] border-t border-b border-x-0  border-gray-300 pl-3 bg-[#Ffff] flex items-cente justify-center'> <FaCheckSquare /></li>

                            </ul>
                            <button className='py-[38px] w-full bg-[#43CB83] text-white text-xl font-nurito font-semibold cursor-pointer'>Buy Now</button>
                        </div>
                        <div className="col-4 w-full">
                            <ul>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75 py-[27.50px] border-l-0 border border-gray-300 pl-3 bg-[#F2F7FA] flex items-cente justify-center'>10,000</li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75 py-7 border-l-0 border border-gray-300 pl-3 bg-[#fff] flex items-cente justify-center'>200+</li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-green-500 capitalize opacity-75 py-[34.50px] border-l-0 border  border-gray-300 pl-3 bg-[#F2F7FA] flex items-cente justify-center'> <FaCheckSquare /></li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-green-500 capitalize opacity-75 py-[35.50px] border-l-0 border  border-gray-300 pl-3 bg-[#Ffff] flex items-cente justify-center'> <FaCheckSquare /></li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-green-500 capitalize opacity-75 py-[34.50px] border-l-0 border  border-gray-300 pl-3 bg-[#F2F7FA] flex items-cente justify-center'> <FaCheckSquare /></li>
                                <li className='font-popins font-semibold text-2xl leading-[160%] text-green-500 capitalize opacity-75 py-[35.50px] border-l-0 border  border-gray-300 pl-3 bg-[#Ffff] flex items-cente justify-center'> <FaCheckSquare /></li>

                            </ul>
                            <button className='py-[38px] w-full bg-[#845A9F] text-white text-xl font-nurito font-semibold cursor-pointer'>Buy Now</button>
                        </div>
                    </div>

                </div>

                {/* Mobile cards */}
                <div className="w-full text-center lg:hidden">
                    <h1 className='font-popins font-medium text-xl leading-[160%] text-[#29313D] capitalize text-center sm:pt-6 md:pt-6 pt-6'>
                        Save annually!, <span className='font-semibold'>Up to 40%</span> by paying
                    </h1>

                </div>

                <div className="grid lg:hidden md:px-14 px-12  pt-12  sm:grid-cols-2 gap-5 gap-y-14  grid-cols-1 md:grid-cols-3">
                    <div className="two w-full pt-2 sm:mx-auto ">
                        <div className="w-full ">
                            <div className="relative after:absolute after:content-[''] after:bg-[#000] after:w-full after:h-[14px] after:rounded-[10px] py-6 pl-[19px] before:-top-[20px ] after:-top-[20px] after:left-0   lg:before:-top-[20px]  lg:before:absolute lg:before:content-[''] lg:before:bg-[#D7E6F9] lg:before:h-[100px] lg:before:rounded-[10px] lg:before:right-[-20px] lg:before:w-1 ">
                                <h1 className='font-popins font-bold text-[28px] leading-[160%] text-[#29313D] capitalize'>personal</h1>
                                <p className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75'>Free</p>
                                <ul className="flex flex-col gap-3 pt-6">
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60 r">
                                        keywords result : <span>Top 1,000</span>
                                    </li>
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60 r">
                                        Territories : <span>Top 6</span>
                                    </li>
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60 flex items-center gap-2">
                                        Search by time: <FaCheckSquare className="text-green-500" />
                                    </li>
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60 flex items-center gap-2">
                                        Api access : <FaXmark className="text-red-500" />
                                    </li>
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60  flex items-center gap-2">
                                        competition metrics : <FaCheckSquare className="text-green-500" />
                                    </li>
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60  flex items-center gap-2">
                                        Reports : <FaCheckSquare className="text-green-500" />
                                    </li>
                                </ul>
                                <button className='py-[20px] mt-7 rounded-2xl w-full bg-[#000] text-white text-xl font-nurito font-semibold cursor-pointer'>Try for free</button>
                            </div>
                        </div>

                    </div>
                    <div className="three w-full lg:pb-16 ">
                        <div className="relative after:absolute after:content-[''] after:bg-[#43CB83] after:w-full after:h-[14px] after:rounded-[10px] py-6 pl-[19px] before:-top-[20px ] after:-top-[20px] after:left-0   lg:before:-top-[20px]  lg:before:absolute lg:before:content-[''] lg:before:bg-[#D7E6F9] lg:before:h-[100px] lg:before:rounded-[10px] lg:before:right-[-20px] lg:before:w-1">
                            <h1 className='font-popins font-bold text-[28px]  leading-[160%] text-[#29313D] capitalize'>professional </h1>
                            <p className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75'>$59
                                <span className='font-medium'>/monthly</span>
                                
                            </p>
                            <div className="all">
                                <ul className="flex flex-col  gap-3 pt-6">
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60 ">
                                        keywords result : <span>5,000</span>
                                    </li>
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60     ">
                                        Territories : <span>13</span>
                                    </li>
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60 text-center flex items-center gap-2">
                                        Search by time: <FaCheckSquare className="text-green-500" />
                                    </li>
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60 text-center flex items-center gap-2">
                                        Api access : <FaXmark className="text-red-500" />
                                    </li>
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60 text-center flex items-center gap-2">
                                        competition metrics : <FaCheckSquare className="text-green-500" />
                                    </li>
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60 text-center flex items-center gap-2">
                                        Reports : <FaCheckSquare className="text-green-500" />
                                    </li>
                                </ul>
                                <button className='py-[20px] mt-7 rounded-2xl w-full bg-[#43CB83] text-white text-xl font-nurito font-semibold cursor-pointer'>Buy Now</button>
                            </div>
                        </div>

                    </div>
                    <div className="four sm:max-w-sm w-full sm:mx-auto sm:col-span-2 sm:text-center md:col-span-1">
                        <div className="relative after:absolute after:content-[''] after:bg-[#845A9F] after:w-full after:h-[14px] after:rounded-[10px] py-6 pl-[19px] before:-top-[20px ] after:-top-[20px] after:left-0  ">
                            <h1 className='font-popins font-bold text-[28px] md:text-center leading-[160%] text-[#29313D] capitalize'>Enterprice </h1>
                            <p className='font-popins font-semibold text-2xl leading-[160%] text-[#29313D] capitalize opacity-75 md:text-center'
                            >$299 <span className='font-medium'>/monthly</span>
                            </p>
                            <ul className="flex flex-col gap-3 pt-6 ">
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60  md:text-center">
                                        keywords result : <span>10,000</span>
                                    </li>
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60 r md:text-center">
                                        Territories : <span>200+</span>
                                    </li>
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60 flex items-center gap-2 sm:justify-center w-full">
                                        Search by time: <FaCheckSquare className="text-green-500" />
                                    </li>
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60 flex items-center gap-2 
                               sm:justify-center   w-full">
                                        Api access : <FaCheckSquare  className="text-green-500" />
                                    </li>
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60  flex items-center gap-2 sm:justify-center  md:justify-center w-full">
                                        competition metrics : <FaCheckSquare className="text-green-500" />
                                    </li>
                                    <li className="font-popins font-semibold text-xl leading-[160%] text-[#29313D] opacity-60  flex items-center gap-2 sm:justify-center  w-full">
                                        Reports : <FaCheckSquare className="text-green-500" />
                                    </li>
                                </ul>
                            <button className='py-[20px] mt-7 w-full bg-[#845A9F] text-white text-xl font-nurito font-semibold cursor-pointer rounded-2xl'>Buy Now</button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Pricing