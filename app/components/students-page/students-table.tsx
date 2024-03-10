import Link from 'next/link';


interface Student {
    id: number;
    name: string;
    group: string;
    year: string;
}


const StudentsTable = ({ sortedStudents }: { sortedStudents: Student[] }) => {
    return (
        <div className='overflow-x-auto'>
            <table className="table table-lg w-9/12 m-auto">
                <tbody>
                    {sortedStudents.map(student =>
                        <tr key={student.id}>
                            <th>{student.id}</th>
                            <td><Link href='/portfolio'>{student.name}</Link></td>
                            <td>{student.group}</td>
                            <td>{student.year}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default StudentsTable;