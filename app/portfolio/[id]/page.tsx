'use client'
import React from 'react';
import { useState } from 'react';
import data from '@/app/data';
import Header from '@/app/components/header';
import AboutText from '../../components/student/about-text';
import MenuPosts from '@/app/components/posts/menu-post';
import Post from "../../components/posts/post"
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

    const styles = {
        first: 'margin-right: -1px',
        second: 'margin-left: -1px'
    }
    

    return (
        <div className="flex flex-col">
            <Header />

            <div className='pt-20 max-lg:m-auto'>
                <StudentCard id_student={id}/>
            </div>

            <div className='flex justify-end py-20 font-light text-xl max-[480px]:justify-center max-[480px]:text-base'>
                <AboutText id_student={id}/>
            </div>

            <MenuPosts activeButton={activeButton} setActiveButton={setActiveButton}/>

            {filteredPosts.length > 0 ? (
                <div className='grid grid-cols-2 max-lg:grid-cols-1'>
                    {filteredPosts.map((post, index) => (
                        post && (
                            <div 
                                key={index} 
                                style={{marginRight: index % 2 === 0 ? '-1px' : '0', marginTop: '-1px'}}>
                                    <Post
                                        title={post.title}
                                        subtitle={post.subtitle}
                                        image={post.image}
                                        link={post.link}
                                    />
                            </div>
                        )
                    ))}
                </div>
            ) : (
                <div className='text-center text-zinc-400 text-lg mt-40'>Здесь пока ничего нет</div>
            )}
        </div>
    );
}