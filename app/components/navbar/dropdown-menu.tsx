'use client'
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap'


import Image from 'next/image'
import menu from '@/public/bx-menu 2.svg'
import Link from 'next/link'



const DropdownMenu = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMouseEnter = () => {
        gsap.to("#menu", { opacity: 1, y: 0, duration: 0.6, ease: "slow" });
    };

    // const handleMouseLeave = () => {
    //     if (!menuOpen) {
    //         gsap.to("#menu", { opacity: 0, y: -50, duration: 0.6, ease: "slow" });
    //     }
    // };

    const handleClickBurger = () => {
        setMenuOpen(!menuOpen);

        gsap.to(".menu-nav-elenemt", {
            duration: 1,
            stagger: 0.25,
            opacity: menuOpen ? 0 : 1,
            y: menuOpen ? -30 : 0
        });
    }
    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop || currentScrollTop == 0 ) {
                gsap.to("#menu", { opacity: 0, y: -10, duration: 0.6, ease: "slow" });

            } else {
                gsap.to("#menu", { opacity: 1, y: 0, duration: 0.6, ease: "slow" });
            }

            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            {/* <Image src={menu} alt='menu' className='cursor-pointer mx-7' /> */}

            <div 
                id="menu" 
                onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                className='fixed z-10  top-0 left-0 right-0 box-border 
                text-black backdrop-blur-sm bg-white/70 '>
                <div role="button" className='flex align-text-bottom items-end py-3 border-b tracking-wide border-black/50'>
                    <div onClick={handleClickBurger}>
                        <Image src={menu} alt='menu' className='cursor-pointer mx-7' />
                    </div>
                    <span className='menu-nav-elenemt pr-7'>Все работы</span>
                    <span className='menu-nav-elenemt'>Все студенты</span>

                </div>
            </div>

        </div>
    );
};
export default DropdownMenu