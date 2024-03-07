import React from 'react'
import SearchInput from '@/app/components/search-input'
import StudentsTable from './table'


const StudentsPage = () => {
  return (
    <>
    <h2>Студенты</h2>
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
            <StudentsTable />
        </div>
    </section>
    </>
  )
}

export default StudentsPage