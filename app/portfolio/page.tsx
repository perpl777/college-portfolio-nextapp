'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import StudentCard from '../components/portfolio-page/student-card';
import AboutText from '../components/portfolio-page/about-text';
import Posts from '../components/portfolio-page/posts/posts';
import NavBar from '../components/navbar/nav-bar';

    //---------пока что не работает появление по скроллу----------
gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
    
    
    //---------anim the appearance of elements----------
    const aboutTextRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
    //---------anim in scroll----------
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutTextRef.current,
                start: 'top 80%',
            }
        });

        gsap.from(".about-text", { 
            x: -300, 
            opacity: 0, 
            duration: 1, 
        }); 
        gsap.to(".about-text", { 
            x: 0, 
            opacity: 1, 
            duration: 1, 
        }); 
    }, []);

    return (
        <div>
            <NavBar />
            <div className="flex flex-col pt-20">
                <StudentCard />
                
                <div ref={aboutTextRef} className='about-text flex justify-end p-14'>
                    <AboutText/>
                </div>

                <Posts />
            </div>
        </div>
    );
}
