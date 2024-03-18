'use client'

import data from '../../data';
import { useEffect, useState } from 'react';
import SearchInput from './search-input';
import Filter from '../filter/filter';
import StudentsTable from './students-table';


interface Student {
    id: number;
    name: string;
    lastname: string;
    surname: string;
    group: string;
    year: string;
}


const StudentsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortedStudents, setSortedStudents] = useState<Student[]>([]);

    useEffect(() => {
        let filteredStudents = data.students;
        if (searchQuery) {
            filteredStudents = filteredStudents.filter((student) =>
                student.lastname.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        }
        setSortedStudents(filteredStudents);
    }, [searchQuery]);

    return (
        <div>
            <div className="flex justify-between gap-8 pt-16 pb-12 flex-wrap lg:flex-nowrap">
                <SearchInput setSearchQuery={setSearchQuery}/>
                <Filter/>
            </div>

            <StudentsTable sortedStudents={sortedStudents}/>
        </div>
    );
};

export default StudentsPage;
