import React from 'react'
import { FC } from 'react'
import data from '@/app/data'


type type = 'name_lastname' | 'lastname_name_surname'
interface NameStudentProps {
    id_student: number;
    type?: type
}

const NameStudent:FC<NameStudentProps> = ({id_student, type}) => {

    const student = data.students.find((stud) => stud.id == id_student);

    return (
        <>
            {type === 'name_lastname' 
            ?
                <span>{student?.name} {student?.lastname}</span>
            :
                <span>{student?.lastname} {student?.name} {student?.surname}</span>
            }
        </>
    )
}

export default NameStudent