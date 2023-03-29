import React from "react";
import { StudentInputProps, StudentinputState } from "./interface";


export class StudentInput extends React.Component<StudentInputProps, StudentinputState>{
    constructor(props:StudentInputProps){
        super(props)
    }

    render(): React.ReactNode {
        const {name, value, onChange} = this.props
        return(
            <input name={name} value={value} onChange={onChange}/>
        )
    }
}