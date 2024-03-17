import React, { Suspense } from 'react'
import Loading from './loading'
import StudentsPage from './components/students-page/students-page'
import NavBar from './components/header/header'


export default function Home() {
  return (
    <div>
      <NavBar />

      <Suspense fallback={<Loading />}>
        <StudentsPage />
      </Suspense>
    </div>
  )
}