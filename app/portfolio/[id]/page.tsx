'use client'
import React from 'react';

import data from '@/app/data';

import Header from '@/app/components/header/header';
import StudentCard from '../../components/portfolio-page/student-card';
import AboutText from '../../components/portfolio-page/about-text';
import MenuPosts from '@/app/components/portfolio-page/posts/post-menu';
import Posts from '@/app/components/posts';



interface Props {
    params: {id: number};
}

export default function Portfolio({params: {id}}: Props) {
    const student = data.student.find((stud) => stud.id == id);
    if (!student) {
        return <div>Студент не найден</div>;
    }
    const filteredPosts = data.work.filter((post) => post?.id_student == id);
    const halfLength = Math.ceil(filteredPosts.length / 2); 


    let firstHalf;
    let secondHalf;

    if (filteredPosts.length % 2 == 0 ){ 
        firstHalf = filteredPosts.slice(0, halfLength); 
        secondHalf = filteredPosts.slice(halfLength) 
    }else { 
        firstHalf = filteredPosts.slice(0, halfLength); 
        secondHalf = filteredPosts.slice(halfLength + 1) 
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

            <div className='flex flex-row mb-20'>
                <div className='grow border-t border-l border-r border-black'>
                    <MenuPosts />
                </div>
                <div className='shrink basis-1/4 border-b border-black max-md:flex-none'></div>
            </div>

            {/* <div className='grid grid-cols-2 gap-y-32 py-24 max-[950px]:grid-cols-1'>
                <Posts posts={filteredPosts}/>
            </div> */}
            <div className='flex justify-between'> 
                <div className='flex flex-wrap flex-col px-36'> 
                    <Posts posts={firstHalf}/>
                </div>
                <div className='flex flex-wrap flex-col px-36'> 
                    <Posts posts={secondHalf}/>
                </div>
            </div>

        </div>
    );
}