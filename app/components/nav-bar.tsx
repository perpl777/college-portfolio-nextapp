'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import title from '@/public/ПОРТФОЛИО.svg'
import { gsap } from 'gsap'
import DropdownMenu from './dropdown-menu'

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
        <div className='flex flex-col'>
            <DropdownMenu />
            <div className='title flex items-center justify-end z-1 relative pb-7 border-b border-black'>
                <Image src={title} alt='title'/>
            </div>
            
            <div className='flex mr-20 gap-40 mt-4 justify-end'>
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