import React, { Children } from 'react'
import { ButtonProps } from './interface'

const Button:React.FC<ButtonProps & React.PropsWithChildren> = ({type, onclick, className}) =>{
    const buttonType = type || 'default'
    return(
        <button className={`btn btn-${buttonType} ${className || ''}`} onClick={onclick}>Add</button>
    )
}

export default Button