import React from 'react'
import addIcon from '@/public/icons/add-icon.svg'
import editIcon from '@/public/icons/edit-icon.svg'

interface Student {
    id: number;
    name: string;
    group: string;
    year: string;
}


const StudentsTable = ({ sortedStudents }: { sortedStudents: Student[] }) => { 
    return (
        <div className="overflow-x-auto">
            <table className="table m-auto table-auto w-7/12 min-w-max">
                <tbody> 
                    {sortedStudents.map(student =>
                        <tr className='cursor-pointer' key={student.id}> 
                                <th>{student.id}</th>
                                <td><a href='/portfolio'>{student.name}</a></td> 
                                <td className='w-fit'><img src={addIcon.src} alt="Add Icon" /></td>
                                <td className='w-fit'><img src={editIcon.src} alt="Edit Icon" /></td>
                        </tr> 
                    )} 
                </tbody> 
            </table>
        </div>
    )
}


export default StudentsTable