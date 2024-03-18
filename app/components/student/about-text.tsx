import React from 'react';
import data from '@/app/data';

const AboutText =({ id_student }: any) => {

    const student = data.students.find((stud) => stud.id == id_student);

    return (
        <span className='w-4/6'>
            {student?.about}
        </span>
    );
};

export default AboutText;
