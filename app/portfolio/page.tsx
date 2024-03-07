import React from 'react'
import NavBar from "../components/navbar/nav-bar";
import StudentCard from '../components/student-portfolio/student-card';
import AboutText from '../components/student-portfolio/about-text';
import BlockPosts from '../components/student-portfolio/posts/block-posts';


export default function Portfolio() {
    return (
        <div>
            <div className='p-11'>
                <NavBar />

                <div className="flex flex-col pt-20">
                    <StudentCard />

                    <div className='flex justify-end pt-14 pb-14'>
                        <AboutText/>
                    </div>

                </div>
            </div>

            <BlockPosts />
        </div>
    );
}
