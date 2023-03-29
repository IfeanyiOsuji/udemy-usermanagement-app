import React, { FormHTMLAttributes } from "react";
import { StudentGradeProps, StudentsGradeState } from "./interface";


import { StudentInput } from "../StudentInput";

import Button from "../Button";

export class StudentGrade extends React.Component<StudentGradeProps, StudentsGradeState>
{
    constructor(props:StudentGradeProps){
        super(props)

        this.state = {
            studentsgrade:[{firstname:"John", lastname:"Sunny", grade:"90"},
            {firstname:"John", lastname:"Sunny", grade:"90"},
            {firstname:"John", lastname:"Sunny", grade:"90"}],
            firstname:'',
            lastname:'',
            grade :'', 
            studentGrade:{firstname:'', lastname:'', grade:''}

       
        }

       
        
    }

    onValueChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.currentTarget;
        this.setState(
            {[name] :value } as unknown as StudentsGradeState
        ) 
        // this.setState(
        //     {studentGrade:{this.firstname, lastname, grade}}
        // )
        

    }
    onFormSubmit = (e:React.FormEvent) =>{
        e.preventDefault();

        this.setState(
            {firstname:this.state.firstname,
                lastname: this.state.lastname,
                grade: this.state.grade,
                studentGrade: {firstname:this.state.firstname, lastname:this.state.lastname, grade:this.state.grade},
                studentsgrade: [...this.state.studentsgrade, this.state.studentGrade]}
        )
        console.log(this.state.studentGrade)

    }
    

    render(){
        const {firstname, lastname, grade} = this.state;
        
        return(
            <>
            <div>
                <ul>
                    {this.state.studentsgrade.map((student, index) => <li key={index}>
                        {student.firstname} | {student.lastname} | {student.grade}
                    </li>)}
                </ul>
            </div>

            <div>
            <form action="" onSubmit={this.onFormSubmit} >
            FirstName : <StudentInput name='firstname' value={firstname} onChange={this.onValueChange} />
             <br />
            lastName  :  <StudentInput name='lastname' value={lastname} onChange={this.onValueChange} />
             <br />
             Grade    :    <StudentInput name='grade' value={grade} onChange={this.onValueChange} />
             <br />
           
            <Button type="primary"/>

            </form>

            </div>
            
           
            </>
            
        )
    }

}