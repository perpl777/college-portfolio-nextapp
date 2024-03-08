'use client'
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap'
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';
import menu from '@/public/bx-menu 2.svg'

const AdminMenu = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    handleClickBurger();
  };
  const handleMouseLeave = () => {
    handleClickBurger();
    };

  const handleClickBurger = () => {

    gsap.to(".menu-nav-elenemt", {
      duration: 1,
      stagger: 0.25,
      opacity: menuOpen ? 0 : 1,
      y: menuOpen ? -30 : 0,
      ease: "slow" 
    });
    gsap.to("#menu", { 
      opacity: menuOpen ? 0 : 1,
      y: menuOpen ? -30 : 0,
      duration: 0.6, 
      ease: "slow" 
    });
    setMenuOpen(!menuOpen);
    }
  
  //--------- Animation----------
  useEffect(() => {
    
  //--------- anim menu----------
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
  {/*-------------- Burger-menu ------------------*/}
        <Image 
            src={menu} 
            alt='menu' 
            className='cursor-pointer z-10
            absolute right-0 my-5 mx-12'
            onClick={handleClickBurger}
            />

  {/*-------------- Full nav ------------------*/}
            <div 
                id="menu" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}

                className='fixed z-20 opacity-0 top-0 left-0 right-0 box-border 
                text-black backdrop-blur-sm bg-white/70 '>
                <div role="button" className='flex align-text-bottom items-end py-3 border-b tracking-wide border-black/50'>

                  <Link
                      href={'/admin/students'}>
                          <span 
                              className={`menu-nav-elenemt mx-7 ${pathname === '/admin/students' ? 'font-medium' : ''}`}>
                              Все студенты
                          </span>
                  </Link>

                </div>
            </div>
    </div>
  )
}

export default AdminMenu




