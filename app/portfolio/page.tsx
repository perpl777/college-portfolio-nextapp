import React from 'react'
import NavBar from "../components/navbar/nav-bar";
import StudentCard from '../components/student-card';

export default function Portfolio() {
    return (
        <div>
            <NavBar />

            <div className="pt-16 pb-12">
                <StudentCard />
            </div>

        </div>
    );
}
