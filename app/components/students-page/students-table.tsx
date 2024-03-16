import Loading from '@/app/loading';
import Link from 'next/link';
import { Suspense } from 'react';


interface Student {
    id: number;
    name: string;
    lastname: string;
    surname: string;
    group: string;
    year: string;
}


const StudentsTable = ({ sortedStudents }: { sortedStudents: Student[] }) => {
    return (
        <div className='overflow-x-auto'>
            <table className="table table-lg m-auto">
                <thead>
                    <tr>
                        <th className='border-b border-black text-sm text-slate-400 w-6 font-normal leading-6'>Курс</th>
                        <th className='border-b border-black text-sm text-slate-400 w-44 font-normal leading-6'>Студент</th>
                        <th className='border-b border-black text-sm text-slate-400 w-44 font-normal leading-6'>Специальность</th>
                    </tr>
                </thead>
                <tbody>
                    <Suspense fallback={<Loading />}>

                        {sortedStudents.map(student =>
                            <tr key={student.id}>
                                <td className='border-b border-black'>{student.year}</td>
                                <td className='border-b border-black'> 
                                    <Link href={`/portfolio/${student.id}`}>
                                        {`${student.lastname} ${student.name} ${student.surname}`}
                                    </Link>
                                </td>
                                <td className='border-b border-black'>{student.group}</td>
                            </tr>
                        )}
                    </Suspense>
                </tbody>
            </table>
        </div>
    );
};

export default StudentsTable;
