'use client'

import { useEffect, useState } from 'react';
import SearchInput from './search-input';
import Filter from '../filter/filter';
import StudentsTable from './students-table';
import { gsap } from 'gsap'
import useFilterStudents from './filter-student';

// interface Student {
//     id: number;
//     name: string;
//     group: string;
//     year: string;
// }

const StudentsPage = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const students = [
        {
            "id": 1,
            "name": "Гребенюк Агата Александровна",
            "group": "Дизайн",
            "year": "3 курс"
        },
        {
            "id": 1,
            "name": "Пулотова Мадина Рустамовна",
            "group": "Информационные системы и программирование",
            "year": "3 курс"
        },
        {
            "id": 1,
            "name": "Аверкина Ева Андреевна",
            "group": "Издательское дело",
            "year": "3 курс"
        }
    ]


  //-----------search----------
    const sortedStudents = useFilterStudents(students, searchQuery);

  //---------anim the appearance of elements----------
    useEffect(() => {
        gsap.from(".students-page", { 
            x: -300, 
            opacity: 0, 
            duration: 1, 
        }); 
        
        gsap.to(".students-page", { 
            x: 0, 
            opacity: 1, 
            duration: 1, 
        }); 
        
    }, []);


    return (
        <div className='students-page'>
            <div className="flex flex-wrap justify-between gap-10 pt-16 pb-12">
                <SearchInput setSearchQuery={setSearchQuery}/>
                <Filter />
            </div>

            <StudentsTable sortedStudents={sortedStudents}/>
        </div>
        
    );
};

export default StudentsPage;
