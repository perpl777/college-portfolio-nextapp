'use client'

import { useEffect, useState } from 'react';
import SearchInput from './search-input';
import Filter from '../filter/filter';
import StudentsTable from './students-table';


interface Student {
    id: number;
    name: string;
    group: string;
    year: string;
}

const StudentsPage = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [sortedStudents, setSortedStudents] = useState<Student[]>([])

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

    useEffect(() => {
        setSortedStudents(students.filter(student =>
            student.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        ));
    }, [searchQuery]);
    
    return (
        <div>
            <div className="flex flex-wrap justify-between gap-10 pt-16 pb-12">
                <SearchInput setSearchQuery={setSearchQuery}/>
                <Filter />
            </div>

            <StudentsTable sortedStudents={sortedStudents}/>
        </div>
        
    );
};

export default StudentsPage;
