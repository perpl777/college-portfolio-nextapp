import Link from 'next/link';

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
                        <th className='border-b border-black pl-16 pr-0 '></th>
                        <th className='border-b border-black pl-24 pr-0'>Студент</th>
                        <th className='border-b border-black'>Специальность</th>
                        <th className='border-b border-black'>Курс</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedStudents.map(student =>
                        <tr key={student.id}>
                            <th className='border-b border-black pl-16 pr-0'>{student.id}</th>
                            <td className='border-b border-black pl-24 pr-0'> 
                                <Link href={`/portfolio/${student.id}`}>
                                    {`${student.lastname} ${student.name} ${student.surname}`}
                                </Link>
                            </td>
                            <td className='border-b border-black'>{student.group}</td>
                            <td className='border-b border-black'>{student.year}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default StudentsTable;
