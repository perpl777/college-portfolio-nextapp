'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import title from '@/public/ПОРТФОЛИО.svg'
import Menu from './menu'


const NavBar = () => {

    useEffect(() => {
        gsap.from(".title", { 
            x: 300, 
            opacity: 0, 
            duration: 1, 
        }); 
        gsap.to(".title", { 
            x: 0, 
            opacity: 1, 
            duration: 1, 
        }); 

        gsap.from(".title-decor", { 
            delay: 1,

            y: -300,
            opacity: 0, 
            duration: 1, 
        }); 
        gsap.to(".title-decor", { 
            delay: 1,
            y: 0,
            stagger: 0.25,
            opacity: 1, 
            duration: 1, 
        }); 
    }, []);

    return (
        <div className='flex flex-col pt-11 px-11'>
            
            <div className='flex justify-between py-7 border-b border-black'>
                <Menu childMenu={['Все студенты', 'Все работы']} />
                <Image src={title} alt='title' className='title z-1 relative'/>
            </div> 

            <div className='flex justify-end mt-4 mr-20 gap-40'>
                <p className='title-decor text-gray-400 w-40'>
                    Новосибирский
                    колледж
                    печати
                    и информационных технологий
                </p>
                <p className='title-decor text-gray-400 w-40'>
                    Новосибирский
                    колледж
                </p>
                <p className='title-decor text-gray-400 w-40'>
                    Новосибирский
                    колледж
                    печати
                    и информационных технологий
                </p>
            </div>
        </div>
    )
}

export default NavBar