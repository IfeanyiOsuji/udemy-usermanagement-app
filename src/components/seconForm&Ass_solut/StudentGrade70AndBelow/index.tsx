import { link } from 'fs'
import React from 'react'
import { StudentGradeContextProvider } from '../StudentGrade'

export const StudentGrade70AndBelow:React.FC = ()=>{
    return(
        <div>
            <h2>STUDENTS WITH GRADE 70 AND BELOW</h2>
             <StudentGradeContextProvider.Consumer>
            
            {(value)=>value.filter(x=>x.grade <= 70).map(({name, grade},key)=><li>{name} - {grade}</li>)}
        </StudentGradeContextProvider.Consumer>
        </div>
       
    )
}