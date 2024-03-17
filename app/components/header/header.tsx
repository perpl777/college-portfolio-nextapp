'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import title from '@/public/ПОРТФОЛИО.svg'
import Menu from './menu'


const Header = () => {

    useEffect(() => {
        gsap.from(".title", { 
            x: 100, 
            opacity: 0, 
            duration: 0.4, 
        }); 
        gsap.to(".title", { 
            x: 0, 
            opacity: 1, 
            duration: 0.6, 
        }); 

        gsap.from(".title-decor", { 
            delay: 0.7,

            x: -100,
            opacity: 0, 
            duration: 1, 
        }); 
        gsap.to(".title-decor", { 
            delay: 1,
            x: 0,
            opacity: 1, 
            duration: 1, 
        }); 
    }, []);

    return (
        <div className='flex flex-col'>
            
            <div className='flex justify-between py-7 gap-5 border-b border-black'>
            {/* <div className='flex justify-between py-7 gap-5 border-b border-black flex-col lg:flex-row'> */}
                <Menu />
                <div>
                    <Image src={title} alt='title' className='flex w-auto title z-1 resize relative'/>
                </div>
            </div> 

            <div className='justify-end mt-4 mr-20 gap-36 hidden sm:flex'>
                <p className='title-decor text-gray-400 w-44 text-sm leading-5 hidden lg:block'>
                    Новосибирский
                    колледж
                    печати
                    и информационных технологий
                </p>
                <p className='title-decor text-gray-400 w-40 text-sm leading-5'>
                    Новосибирский
                    колледж
                </p>
                <p className='title-decor text-gray-400 w-44 text-sm leading-5'>
                    Новосибирский
                    колледж
                    печати
                    и информационных технологий
                </p>
            </div>
        </div>
    )
}

export default Header