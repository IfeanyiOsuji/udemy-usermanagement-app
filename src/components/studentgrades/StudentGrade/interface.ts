    export interface StudentGradeProps{}

export interface InputeGrade{
    firstname:string,
    lastname:string
    grade: string
}

export interface StudentsGradeState{
    studentsgrade:InputeGrade[],
    firstname: string,
    lastname:string,
    grade : string,
    studentGrade:InputeGrade
}

