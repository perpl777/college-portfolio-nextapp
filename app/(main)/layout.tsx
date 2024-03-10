import NavBar from "../components/navbar/nav-bar";
import React, { ReactNode } from 'react'


interface Props{
  children: ReactNode
}

export const Mainlayout = ({ children }: Props) => {
  return(
    <div>
        <NavBar />
        {children}
      
    </div>

  )
} 
