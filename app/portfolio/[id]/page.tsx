'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import data from '@/app/data';
import StudentCard from '../../components/portfolio-page/student-card';
import AboutText from '../../components/portfolio-page/about-text';
import Post from '@/app/components/portfolio-page/posts/post';
import Sidebar from '@/app/components/portfolio-page/posts/sidebar';
import NavBar from '@/app/components/navbar/nav-bar';

interface Props {
    params: {id: number};
}

    //---------пока что не работает появление по скроллу----------
gsap.registerPlugin(ScrollTrigger);

export default function Portfolio({params: {id}}: Props) {
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


    const student = data.student.find((stud) => stud.id == id);
    const filteredPosts = data.work.filter((post) => post?.id_student == id);

    if (!student) {
        return <div>Студент не найден</div>;
    }

    return (
        <div className="flex flex-col">
            <div className='px-11'>
                <NavBar />
            </div>

            <StudentCard 
                name={student.name}
                lastname={student.lastname}
                group={student.group}
                year={student.year}
                technologies={student.technologies}
                image={student.image}
                contacts={student.contacts}
            />
            
            <div className='flex justify-end p-16'>
                <AboutText text={student.about}/>
            </div>

            <div className='flex justify-between border-t border-black'>
                <div className='flex flex-col'>
                    {filteredPosts.map((post, index) => (
                        post && (
                            <Post
                                key={index}
                                title={post.title}
                                subtitle={post.subtitle}
                                image={post.image}
                                date={post.date}
                                link={post.link}
                            />
                        )
                    ))}
                </div>

                <Sidebar />
            </div>
        </div>
    );
}

