import React from "react"
import { Button } from "../Button"
import { Input } from "../Input"
import { StudentGrade70AndBelow } from "../StudentGrade70AndBelow"
import { StudentGrade90AndAbove } from "../studentGrade90AndAbove"
import { errorMessage, FIELDS_CONFIG } from "./constants"
import { Fields, StudentGradeDetails, StudentGradeProps, StudentGradeState } from "./interface"

export const StudentGradeContextProvider = React.createContext<StudentGradeDetails[]>([])

export class StudentGrade extends React.Component<StudentGradeProps, StudentGradeState>{

        inputGradeRef: React.RefObject<HTMLInputElement>
        inputStudentNameRef: React.RefObject<HTMLInputElement>

    constructor(props:StudentGradeProps){
        super(props)
       
        this.state = {
            studentsGrade: [{name:'Ifeanyi O', grade:89.7},
            {name:'Ade E', grade:76.9},
            {name:'Joshua', grade:70.5},
            {name:'Joy W', grade:55}],
            inputGrade: '',
            inputStudentName : '',
            fieldWithError :''     
        }
        this.inputGradeRef = React.createRef();
        this.inputStudentNameRef = React.createRef();
    }

    onInputChange = (keyState:Fields) => (event:React.ChangeEvent<HTMLInputElement>) =>{
            const {value} = event.currentTarget
            const {fieldWithError} = this.state

            this.setState({
                [keyState]:value
            } as Omit<StudentGradeState, 'studentsGrade'|'fieldWithError'>);

            if(keyState === fieldWithError && value.length)this.setState({fieldWithError:''})
    }

    getErrorMessage = (field:Fields) =>{
        const {fieldWithError} = this.state
        
        return fieldWithError === field? errorMessage : ''
    }

    handleButtonClick = () =>{
        const {studentsGrade, inputGrade, inputStudentName} = this.state

        if(this.areFieldsValid()){
                this.setState({
                    studentsGrade:[...studentsGrade, {name:inputStudentName, grade:parseFloat(inputGrade)}],
                    inputGrade : '',
                    inputStudentName:''
                })
        }

    }

    areFieldsValid = () =>{
        const {inputGrade, inputStudentName} = this.state
        const {INPUT_GRADE, INPUT_STUDENTS_NAME} = FIELDS_CONFIG

        if(!inputStudentName){
            this.inputStudentNameRef.current && this.inputStudentNameRef.current.focus()
            this.setState({fieldWithError: INPUT_STUDENTS_NAME.name})
        }
        else if(!inputGrade){
            this.inputStudentNameRef.current && this.inputStudentNameRef.current.focus()
            this.setState({fieldWithError: INPUT_GRADE.name})  
        }

        return inputGrade && inputStudentName
    }

    renderStudentsGrade(){
        const {studentsGrade} = this.state
        
            
                return studentsGrade.map(({name, grade}, key)=><li key={key}>{name} - {grade}</li>)
            
        
       
    }
    



    render(){
        const {studentsGrade, inputGrade, inputStudentName} = this.state
        const {INPUT_STUDENTS_NAME, INPUT_GRADE} = FIELDS_CONFIG
        return(

            <StudentGradeContextProvider.Provider value={studentsGrade}>
                <h1>STUDENTS GRADE MANAGEMENT</h1>
                <div>
                {this.renderStudentsGrade()}
                </div>
                   
                <Input value={inputStudentName}
                label={INPUT_STUDENTS_NAME.label}
                onChange={this.onInputChange(INPUT_STUDENTS_NAME.name)}
                error={this.getErrorMessage(INPUT_STUDENTS_NAME.name)}
                ref={this.inputStudentNameRef}/>

                <Input value={inputGrade}
                label={INPUT_GRADE.label}
                onChange={this.onInputChange(INPUT_GRADE.name)}
                error={this.getErrorMessage(INPUT_GRADE.name)}
                ref = {this.inputGradeRef}/>
                <br />
                <Button type="primary" onClick={this.handleButtonClick} className='student-grade-btn'>Add</Button>

                <StudentGrade70AndBelow />
                <StudentGrade90AndAbove />


            </StudentGradeContextProvider.Provider>
        )

    }
}