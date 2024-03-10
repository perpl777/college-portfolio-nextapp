'use client'
import React, { Suspense, useEffect } from 'react'
import { gsap } from 'gsap'
import SearchInput from '@/app/components/students-page/search-input'
import StudentsTable from './table'
import Loading from '@/app/loading'


const StudentsPage = () => {
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
            <SearchInput />
            <div>
                <button className='leading-3 font-medium m-3 p-1 rounded-sm border tab-border-2 border-black'>
                    +
                </button>
                <span className="label-text text-base">Добавить студента</span>
                
            </div>
        </div>

        <div className='mt-7'>
            <Suspense fallback={<Loading />}>
                <StudentsTable />
            </Suspense>
        </div>

    </section>
    </>
  )
}

export default StudentsPage