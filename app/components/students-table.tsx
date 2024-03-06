import Link from 'next/link'
import React from 'react'


const StudentsTable = async () => { 

    const students = [
        {
            "id": 1,
            "name": "Гребенюк Агата Александровна",
            "group": "Дизайн",
            "year": "3 курс"
        },
        {
            "id": 1,
            "name": "Гребенюк Агата Александровна",
            "group": "Информационные системы и программирование",
            "year": "3 курс"
        },
        {
            "id": 1,
            "name": "Гребенюк Агата Александровна",
            "group": "Графический дизайн",
            "year": "3 курс"
        }
    ]

    return (
        <div className="overflow-x-auto">
            <table className="table table-lg w-9/12 m-auto">
            <tbody> 
                {students.map(student => 
                    <tr> 
                        <th> {student.id} </th>
                        <td> <Link href='/portfolio'> {student.name} </Link> </td> 
                        <td> {student.group} </td> 
                        <td> {student.year} </td> 
                    </tr> 
                )} 
            </tbody> 
            </table>
        </div>
    )
}

export default StudentsTable