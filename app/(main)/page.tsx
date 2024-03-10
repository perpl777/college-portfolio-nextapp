import React, { Suspense } from 'react'
import Loading from '../loading'
import StudentsPage from '../admin/page'


export default function Home() {
  return (
    <div className='px-11'>
      <Suspense fallback={<Loading />}>
        <StudentsPage />
      </Suspense>
    </div>
  )
}