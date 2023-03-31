import React from "react";
import { StudentGradeContextProvider } from "../StudentGrade";

export const StudentGrade90AndAbove : React.FC  = () =>{
    return(
        <div>
            <h2>STUDENTS WITH GRADE 90 AND ABOVE</h2>
             <StudentGradeContextProvider.Consumer>
            
            {(value)=>value.filter(x=>x.grade >= 90).map(({name, grade},key)=><li>{name} - {grade}</li>)}
        </StudentGradeContextProvider.Consumer>
        </div>
       
    )
}