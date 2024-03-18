'use client'


import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import menu from '@/public/bx-menu 2.svg'



const Menu = () => {

    const [menuHide, setMenuHide] = useState(true);

  //--------- anim click appirance menu----------
    const handleMouseEnter = () => {
        setMenuHide(false);
        HandleMenuAppirance();
    };
    const handleMouseLeave = () => {
        setMenuHide(true);
        HandleMenuAppirance();

    };
    const HandleMenuAppirance = () => {
        gsap.to(".menu-nav-elenemt", {
            duration: 1,
            stagger: 0.25,
            opacity: menuHide ? 1 : 0,
            y: menuHide ? 0 : -10,
            ease: "slow"
        });
        gsap.to("#menu", { 
            duration: 0.6, 
            opacity: menuHide ? 1 : 0,
            y: menuHide ? 0 : -10,
            ease: "slow" 
        });
    }
    const HandleBurgerClick = () => {
        setMenuHide(true);
        gsap.to(".menu-nav-elenemt", {
            duration: 1,
            stagger: 0.25,
            opacity: 1,
            y: 0,
            ease: "slow"
        });
        gsap.to("#menu", { 
            duration: 0.6, 
            opacity: 1,
            y: 0,
            ease: "slow" 
        });
    }

    useEffect(() => {
  //--------- anim scroll appirance menu----------
        let lastScrollTop = 0;
        const handleScroll = () => {
            const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop || currentScrollTop <= 0) {
                // setMenuOpen(true);
                // HandleMenuAppirance();
                gsap.to("#menu", { opacity: 0, y: -10,  duration: 0.6, ease: "slow" });
                gsap.to(".menu-nav-elenemt", { 
                    opacity: 0,
                    y: -10,
                    duration: 1, 
                    ease: "slow" 
                });
                setMenuHide(false);

            } else {
                // setMenuOpen(false);
                // HandleMenuAppirance();

                gsap.to("#menu", { opacity: 1, y: 0, duration: 0.6, ease: "slow" });
                gsap.to(".menu-nav-elenemt", { 
                    opacity: 1,
                    y: 0,
                    duration: 1, 
                    ease: "slow" 
                });
                setMenuHide(true);
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
            { /*-------------- Burger-menu ------------------*/}
            <div className='w-6 h-auto'>
                <Image 
                    src={menu} 
                    alt='menu' 
                    className='flex cursor-pointer z-10 w-6'
                    onClick={HandleBurgerClick} 
                />
            </div>
            {/*-------------- Full nav ------------------*/}
            <div 
                id="menu" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='fixed z-20 opacity-0 top-0 left-0 right-0 box-border 
                text-black backdrop-blur-sm bg-white/70 '>
                    
                <div role="button" className='flex align-text-bottom items-end py-3 border-b tracking-wide border-black'>
                    <Link href='/'>
                        <span className={"menu-nav-elenemt ml-12 hover:text-gray-400"}>
                            Все студенты
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Menu
