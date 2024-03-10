// useFilterStudents.ts
import { useEffect, useState } from 'react';
interface Student {
    id: number;
    name: string;
    group: string;
    year: string;
}


const useFilterStudents = (students: Student[], searchQuery: string) => {
    const [sortedStudents, setSortedStudents] = useState<Student[]>([]);

    useEffect(() => {
        setSortedStudents(students.filter(student =>
            student.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        ));
    }, [searchQuery, students]);

    return sortedStudents;
};

export default useFilterStudents;
