'use client'
import React from 'react';
import { useState } from 'react';
import data from '@/app/data';
import Header from '@/app/components/header';
import AboutText from '../../components/student/about-text';
import MenuPosts from '@/app/components/posts/menu-post';
import Posts from '@/app/components/posts/posts';
import StudentCard from '@/app/components/student/student-card';


interface Props {
    params: {id: number};
}


export default function Portfolio({params: {id}}: Props) {

    const [activeButton, setActiveButton] = useState(0);
    let filteredPosts = [];

    switch (activeButton) {
        case 1:
            filteredPosts = data.achievements.filter((post) => post?.id_student == id);
            break;
        case 2:
            filteredPosts = data.courses.filter((post) => post?.id_student == id);
            break;
        case 3:
            filteredPosts = data.internships.filter((post) => post?.id_student == id);
            break;
        case 4:
            filteredPosts = data.sports.filter((post) => post?.id_student == id);
            break;
        case 5:
            filteredPosts = data.volunteering.filter((post) => post?.id_student == id);
            break;
        default:
            filteredPosts = data.works.filter((post) => post?.id_student == id);
    }

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

            <div className='pt-20'>
                <StudentCard id_student={id}/>
            </div>
            
            <div className='flex justify-end py-24 font-light text-xl max-[425px]:w-full max-[425px]:justify-center'>
                <AboutText id_student={id}/>
            </div>
            
            <MenuPosts activeButton={activeButton} setActiveButton={setActiveButton}/>

            <div className='flex justify-between mt-16'> 
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