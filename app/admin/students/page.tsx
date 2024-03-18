'use client'
import React, { Suspense, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import SearchInput from '@/app/components/search-input'
import StudentsTable from './table'
import Loading from '@/app/loading'
import useFilterStudents from '@/app/components/filter/filter'

const StudentsPage = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const students = [
        {
            "id": 1,
            "name": "Гребенюк Агата Александровна",
            "group": "Дизайн",
            "year": "3 курс"
        },
        {
            "id": 1,
            "name": "Пулотова Мадина Рустамовна",
            "group": "Информационные системы и программирование",
            "year": "3 курс"
        },
        {
            "id": 1,
            "name": "Аверкина Ева Андреевна",
            "group": "Издательское дело",
            "year": "3 курс"
        }
    ]
  //-----------search----------
    const sortedStudents = useFilterStudents(students, searchQuery);


  //---------anim the appearance of elements----------
    useEffect(() => {
        gsap.from("h2", { 
            x: -300, 
            opacity: 0, 
            duration: 1, 
        }); 
        gsap.to("h2", { 
            x: 0, 
            opacity: 1, 
            duration: 1, 
        }); 
    }, []);
    

    return (
    <>
    <h2 className='z-5'>Студенты</h2>
    <section className='mt-20 w-full p-43'>

        <div className='flex items-stretch' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <SearchInput setSearchQuery={setSearchQuery}/>
            <div>
                <button className='leading-3 font-medium m-3 p-1 rounded-sm border tab-border-2 border-black'>
                    +
                </button>
                <span className="label-text text-base">Добавить студента</span>
                
            </div>
        </div>

        <div className='mt-7'>
            <Suspense fallback={<Loading />}>
                <StudentsTable sortedStudents={sortedStudents}/>
            </Suspense>
        </div>

    </section>
    </>
  )
}

export default StudentsPage