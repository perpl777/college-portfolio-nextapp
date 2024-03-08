import React from 'react'
import addIcon from '@/public/icons/add-icon.svg'
import editIcon from '@/public/icons/edit-icon.svg'



const StudentsTable = () => { 
    const students = [
        {
            "id": 1,
            "name": "Гребенюк Агата Александровна",
            "group": "Дизайн",
            "year": "3 курс"
        },
        {
            "id": 2,
            "name": "Гребенюк Агата Александровна",
            "group": "Информационные системы и программирование",
            "year": "3 курс"
        },
        {
            "id": 3,
            "name": "Гребенюк Агата Александровна",
            "group": "Графический дизайн",
            "year": "3 курс"
        }
    ]
    return (
        <div className="overflow-x-auto">
            <table className="table m-auto table-auto w-7/12 min-w-max">
                <tbody> 
                    {students.map(student => 
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