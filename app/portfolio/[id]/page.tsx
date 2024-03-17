'use client'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import data from '@/app/data';
import StudentCard from '../../components/portfolio-page/student-card';
import AboutText from '../../components/portfolio-page/about-text';
import Post from '@/app/components/portfolio-page/posts/post';
import MenuPosts from '@/app/components/portfolio-page/posts/post-menu';
import Header from '@/app/components/header/header';

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

        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".about-text", { 
            x: -300, 
            opacity: 0, 
            duration: 1, 
        }); 
        gsap.to(".about-text", { 
            scrollTrigger: { trigger: ".square" },
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
            <Header />

            <StudentCard 
                name={student.name}
                lastname={student.lastname}
                group={student.group}
                year={student.year}
                technologies={student.technologies}
                image={student.image}
                contacts={student.contacts}
            />
            
            <div className='flex justify-end py-20 max-[425px]:justify-center'>
                <AboutText text={student.about}/>
            </div>

            <div className='flex flex-row'>
                <div className='grow border-t border-l border-r border-black'>
                    <MenuPosts />
                </div>
                <div className='shrink basis-1/4 border-b border-black max-md:flex-none'></div>
            </div>

            <div className='grid grid-cols-2 gap-y-32 py-24 max-[950px]:grid-cols-1'>
                {filteredPosts.map((post, index) => (
                    post && (
                        <div className={`${index % 2 == 0 ? 'justify-self-start' : 'justify-self-end'} max-[500px]:justify-self-center`}>    
                            <Post
                                key={index}
                                title={post.title}
                                subtitle={post.subtitle}
                                image={post.image}
                                link={post.link}
                            />
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}
