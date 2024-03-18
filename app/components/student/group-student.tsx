import React from 'react'
import data from '@/app/data';


const GroupStudent= ({id_student}: any) => {

    const student = data.students.find((stud) => stud.id == id_student);

    return (
        <>
            {student?.group}
        </>
    )
}

export default GroupStudent