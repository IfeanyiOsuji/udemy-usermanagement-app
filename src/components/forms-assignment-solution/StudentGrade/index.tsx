import React from "react";

import Button from "../Button";
import GradeWith70AndBelow from "../GradeWith70AndBelow";
import GradeWith90AndAbove from "../GradeWith90AndAbove";
import Input from "../Input";
import { ERROR_MESSAGE, FIELDS_CONFIG } from "./constants";
import { Fields, StudentGradeDetails, StudentGradeProps, StudentGradeState } from "./interface";



export const StudentGradeContext = React.createContext<StudentGradeDetails[]>([])

export class StudentGrade extends React.Component<StudentGradeProps, StudentGradeState>{


 inputGraderef: React.RefObject<HTMLInputElement>
 inputStudentNameRef: React.RefObject<HTMLInputElement>


 constructor(props:{}){
    super(props)

    this.state = {
        studentsGrade: [
            {name: "Sunny", grade:76.4},
            {name: "Amy", grade:65.5},
            {name: "Chidi", grade:90},
            {name: "Amaka", grade:55},
            {name: "Akon", grade:84.8},
        ],
        inputGrade : '',
        inputStudentName: '',
        fieldWithError : ''
    }



    this.inputGraderef = React.createRef();
    this.inputStudentNameRef = React.createRef();

 }
    handleInputOnChange = (stateKey:Fields) => (event:React.ChangeEvent<HTMLInputElement>)=>{

        const {value} = event.currentTarget
        const {fieldWithError} = this.state

        this.setState(
            {[stateKey] : value} as unknown as Omit<StudentGradeState, 'studentgrade' | 'fieldwithError'>
        );
        if(fieldWithError === stateKey && value.length) this.setState({fieldWithError:''})


    }

    handleButtonClick = () =>{
        const {studentsGrade, inputGrade, inputStudentName} = this.state

        if(this.areInputsValid()){
            this.setState({
                studentsGrade: [...studentsGrade, {name:inputStudentName, grade:parseFloat(inputGrade)}],
                inputGrade : '',
                inputStudentName: ''
            });
        }

    }

    areInputsValid = () =>{
         const {inputGrade, inputStudentName} = this.state
         let hasError = false
         if(!inputStudentName){
            this.inputStudentNameRef.current && this.inputStudentNameRef.current.focus()
            hasError = true
            this.setState({fieldWithError: 'inputStudentName'});
         }
         else if(!inputGrade){
            this.inputGraderef.current && this.inputGraderef.current.focus();
            hasError = true
            this.setState({fieldWithError:'inputGrade'})

         }
         return inputGrade && inputStudentName;

    }

    getErrorMessage =(field:Fields) =>{
        const {fieldWithError} = this.state

        return fieldWithError === field? ERROR_MESSAGE : '';
    }

    renderStudentsGrade = () =>{
            const {studentsGrade} = this.state
            return studentsGrade.map(({name, grade})=>{
                return <li>{name} - {grade}</li>
            })
    }


    render(): React.ReactNode {
        const {inputStudentName, inputGrade, studentsGrade} = this.state
        const {INPUT_GRADE, INPUT_STUDENTS_NAME} = FIELDS_CONFIG
        return(

            <StudentGradeContext.Provider value = {studentsGrade}>
                <div>
                    <h1>Students Grade</h1>
                    <ul>
                        {this.renderStudentsGrade()}
                    </ul>
                    <Input 
                    ref={this.inputStudentNameRef}
                    onChange={this.handleInputOnChange(INPUT_STUDENTS_NAME.name)}
                    label={INPUT_STUDENTS_NAME.label}
                    value ={inputStudentName}
                    error = {this.getErrorMessage(INPUT_STUDENTS_NAME.name)}

                    />

                    <Input 
                    ref={this.inputGraderef}
                    onChange={this.handleInputOnChange(INPUT_GRADE.name)}
                    label={INPUT_GRADE.label}
                    value ={inputGrade}
                    error = {this.getErrorMessage(INPUT_GRADE.name)}
                    />
                    <br />
                    <Button className="student-grade-button" type="primary" onclick={this.handleButtonClick}></Button>
                    <GradeWith90AndAbove />
                    <GradeWith70AndBelow />
                </div>
                </StudentGradeContext.Provider>

        )
    }
    
}