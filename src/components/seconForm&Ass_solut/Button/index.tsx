import React from 'react'
import { ButtonProps } from './interface'

export const Button:React.FC<ButtonProps & React.PropsWithChildren> = ({type, onClick, className , children})=> {
  return (
    <button className={`btn btn-${type} ${className||''}`} onClick={onClick}>{children}</button>
  )
}

