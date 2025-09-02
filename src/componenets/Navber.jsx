    import React, { useState } from 'react'
    import './navber.css'
    import logo from "../assets/Logo.png"
    import { FaArrowDown, FaCaretDown, FaSortDown } from 'react-icons/fa'
    import { FaBars } from "react-icons/fa";
    import { RxCross2 } from "react-icons/rx";
    import { RiArrowDropDownLine } from "react-icons/ri";
import Images from './Images';


    const Navber = () => {
    let [show, setShow] = useState(false)

    let showHandle = ()=> {
        setShow(!show);
    }



        return (
    <section className='navber-sec py-3'>
        <div className="container">
        <div className={`overlay-2 ${show == true ? 'show' : ''}`} onClick={()=>setShow(!show)}></div>
       
        <div className='flex lg:items-center justify-between '>
        <div className="logo">
                <Images src={logo}/>
            </div>
            <div className={` flex lg:items-center justify-between navber ${show ? "show": ""} `}>
            <nav className='flex items-center nav relative'>
                <ul className="flex items-center lg:gap-x-12 md:gap-5 sm:gap-5 nav-ul">
                    <li className='flex items-center'onClick={()=>setShow(!show)}>
                        <a href="#home" className='font-opens text-lg font-medium text-white  flex gap-1 items-center'>Home <RiArrowDropDownLine className='down-i'/></a>
                    </li>
                    <li className='flex items-center'onClick={()=>setShow(!show)}>
                        <a href="#about" className='font-opens text-lg font-medium text-white  flex gap-1 items-center'>About <RiArrowDropDownLine className='down-i'/></a>
                    </li>
                    <li className='flex items-center'onClick={()=>setShow(!show)}>
                        <a href="#service" className='font-opens text-lg font-medium text-white  flex gap-1 items-center'>Service <RiArrowDropDownLine className='down-i'/></a>
                    </li>
                    <li className='flex items-center'onClick={()=>setShow(!show)}>
                        <a href="#portfolio" className='font-opens text-lg font-medium text-white  flex gap-1 items-center'>Portfolio <RiArrowDropDownLine className='down-i'/></a>
                    </li>
                    <li className='flex items-center'onClick={()=>setShow(!show)}>
                        <a href="#price" className='font-opens text-lg font-medium text-white  flex gap-1 items-center'>Price <RiArrowDropDownLine className='down-i'/></a>
                    </li>
                    <li className='flex items-center'onClick={()=>setShow(!show)}>
                        <a href="#blog" className='font-opens text-lg font-medium text-white  flex gap-1 items-center'>Blog <RiArrowDropDownLine className='down-i'/></a>
                    </li>
                </ul>
                <RxCross2 onClick={()=>setShow(!show)} className={`close ${show== true ? 'opacity-100' :'opacity-0'}`}/>
            </nav>
            <button className='py-[14px] px-[28px] bg-transparent text-white text-lg font-medium font-nurito border-2 border-solid border-white rounded-[18px] nav-btn lg:ml-15'>Contact us</button>
            </div>
           
        </div>
        <div className="icons text-white lg:hidden" onClick={showHandle}>
            {
                show == true ? '':<FaBars className='bar'/>
            }
        </div>
        </div>
    </section>
    )
    }

    export default Navber ;