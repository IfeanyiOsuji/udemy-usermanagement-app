export interface StudentGradeProps{}
export interface StudentGradeDetails{
    name:string,
    grade:number
}

export type StudentGradeState = {
    [key in Fields]: string
} & {
    studentsGrade: StudentGradeDetails[],
    fieldWithError?:string
}

export type Fields = 'inputGrade' | 'inputStudentName'

export interface FieldsConfig{
    [field:string]:{
        name:Fields,
        label:string
    }
}