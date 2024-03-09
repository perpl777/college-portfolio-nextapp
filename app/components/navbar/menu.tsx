'use client'

import React, { useEffect, useState } from 'react';
import { FC } from "react"
import { gsap } from 'gsap'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import menu from '@/public/bx-menu 2.svg'


type childMenu = ['Все студенты', 'Все работы'] | ['Все студенты']
interface MenuProps {
    childMenu: childMenu
}


const Menu:FC<MenuProps> = ({childMenu}) => {

    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false);

  //--------- anim click appirance menu----------
    const handleMouseEnter = () => {
        setMenuOpen(true);
        HandleMenuAppirance();
    };
    const handleMouseLeave = () => {
        setMenuOpen(false);
        HandleMenuAppirance();

    };
    const HandleMenuAppirance = () => {

        gsap.to(".menu-nav-elenemt", {
            duration: 1,
            stagger: 0.25,
            opacity: menuOpen ? 0 : 1,
            y: menuOpen ? -10 : 0,
            ease: "slow"
        });
        gsap.to("#menu", { 
            opacity: menuOpen ? 0 : 1,
            y: menuOpen ? -10 : 0,
            duration: 0.6, 
            ease: "slow" 
        });
    }
    const HandleBurgerClick = () => {
        setMenuOpen(!menuOpen);

    }

    useEffect(() => {
  //--------- anim scroll appirance menu----------
        let lastScrollTop = 0;
        const handleScroll = () => {
            const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop || currentScrollTop == 0 ) {
                gsap.to("#menu", { opacity: 0, y: -10,  duration: 0.6, ease: "slow" });
                gsap.to("#menu", { 
                    opacity: 0,
                    y: -10,
                    duration: 0.6, 
                    ease: "slow" 
                });
                setMenuOpen(false);

            } else {
                gsap.to("#menu", { opacity: 1, y: 0, duration: 0.6, ease: "slow" });
                gsap.to("#menu", { 
                    opacity: 1,
                    y: 0,
                    duration: 0.6, 
                    ease: "slow" 
                });
                setMenuOpen(true);

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
            <Image 
                src={menu} 
                alt='menu' 
                className='cursor-pointer z-10'
                onClick={HandleBurgerClick} 
            />

    {/*-------------- Full nav ------------------*/}
            <div 
                id="menu" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}

                className='fixed z-20 opacity-0 top-0 left-0 right-0 box-border 
                text-black backdrop-blur-sm bg-white/70 '>
                <div role="button" className='flex align-text-bottom items-end py-3 border-b tracking-wide border-black/50'>
                    {childMenu.map((element, index) => (
                        <Link key={index} 
                            href={element === 'Все студенты' ? '/' : '/works'}>
                                <span 
                                    className={`menu-nav-elenemt ml-12 hover:text-gray-400 ${pathname === (element === 'Все студенты' ? '/' : '/works') ? 'font-medium' : ''}`}>
                                        {element}
                                </span>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
};
export default Menu
