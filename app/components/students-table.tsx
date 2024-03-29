import Loading from '@/app/loading';
import Link from 'next/link';
import { Suspense } from 'react';
import YearStudent from './student/year-students';
import NameStudent from './student/name-student';
import GroupStudent from './student/group-student';
import { text } from 'stream/consumers';


interface StudentTableProps {
    id: number;
    name: string;
    lastname: string;
    surname: string;
    group: string;
    year: string;
}


const StudentsTable = ({ sortedStudents }: { sortedStudents: StudentTableProps[] }) => {


    const textsTh = [
        {text: "Курс"},
        {text: "Студент"},
        {text: "Специальность"},
    ]

    return (
        <div className='overflow-x-auto'>
            <table className="table table-lg m-auto">
                <thead>
                    <tr> {/*выводим заголовки таблицы */}
                        {textsTh.map((textTh) => 
                            <th key={textTh.text} className='border-b border-black text-sm text-slate-400 w-44 font-normal leading-6'> 
                                {textTh.text} 
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    <Suspense fallback={<Loading />}>
                        {sortedStudents.map(student =>
                            <tr key={student.id}>

                                <td className='border-b border-black'>
                                    <YearStudent id_student={student.id}/> {/*выводим курс студента */}
                                </td>

                                <td className='border-b border-black'> 
                                    <Link href={`/portfolio/${student.id}`}>
                                        <NameStudent id_student={student.id} type='lastname_name_surname'/> {/*выводим имя студента */}
                                    </Link>
                                </td>

                                <td className='border-b border-black'>
                                    <GroupStudent id_student={student.id}/> {/*выводим группу студента */}
                                </td>
                                
                            </tr>
                        )}
                    </Suspense>
                </tbody>
            </table>
        </div>
    );
};

export default StudentsTable;
