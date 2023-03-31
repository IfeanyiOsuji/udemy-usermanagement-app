import { PropsWithChildren } from "react";
import { ButtonProps } from "./interface";
import './style.css'


export const Button:React.FC<ButtonProps & PropsWithChildren> = ({type, onclick, className, children})=>{
    const currentType = type || 'default'
    return (
        <button className={`btn ${currentType} ${className||''}`} onClick={onclick}>{children}</button>
    )
}