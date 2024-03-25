'use client'

import React, { Suspense, useEffect, useState } from 'react'
import data from './data';
import Loading from './loading'
import NavBar from './components/header'
import SearchInput from './components/search-input'
import Filter from './components/filter/filter'
import StudentsTable from './components/students-table'


interface StudentTableProps {
  id: number;
  name: string;
  lastname: string;
  surname: string;
  group: string;
  year: string;
}


export default function Home() {

  const [searchQuery, setSearchQuery] = useState('');
  const [sortedStudents, setSortedStudents] = useState<StudentTableProps[]>([]);

  // фильтр и поиск студентов
  useEffect(() => {
      let filteredStudents = data.students;
      if (searchQuery) {
          filteredStudents = filteredStudents.filter((student) =>
              student.lastname.toLowerCase().startsWith(searchQuery.toLowerCase())
          );
      }
      setSortedStudents(filteredStudents);
  }, [searchQuery]);


  return (
    <div>
      <NavBar />

      <div className="flex justify-between pt-16 pb-12 flex-wrap gap-8 lg:flex-nowrap">
        <SearchInput setSearchQuery={setSearchQuery}/>
        <Filter/>
      </div>

      <Suspense fallback={<Loading />}>
        <StudentsTable sortedStudents={sortedStudents}/>
      </Suspense>
    </div>
  )
}