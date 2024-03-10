import React from 'react'
import StudentCard from '../components/portfolio-page/student-card';
import AboutText from '../components/portfolio-page/about-text';
import Posts from '../components/portfolio-page/posts/posts';


export default function Portfolio() {
    return (
        <div className="flex flex-col pt-20">
            <StudentCard />
            
            <div className='flex justify-end p-14'>
                <AboutText/>
            </div>

            <Posts />
        </div>
    );
}
