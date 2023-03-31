import React, { PropsWithChildren } from "react"
import { ButtonProps } from "../Button/interface"
 //import '../Button/style.css'

export const ButtonGroup:React.FC<PropsWithChildren> = ({children}) =>{
  return(
    <>
    {React.Children.map(children as React.ReactElement<ButtonProps>[], (child, index)=>{
        return React.isValidElement(child) ? React.cloneElement(child, {className:  `${index==0?'button-group-btn':'btn-primary'}`, onclick:()=>console.log(index)}):child
    })}
    </>
  )
}