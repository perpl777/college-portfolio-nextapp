import React, { Suspense } from 'react'
import Loading from './loading'
import StudentsPage from './components/students-page/students-page'
import NavBar from './components/navbar/nav-bar'


export default function Home() {
  return (
    <div className='px-11'>
      <NavBar />

      <Suspense fallback={<Loading />}>
        <StudentsPage />
      </Suspense>
    </div>
  )
}