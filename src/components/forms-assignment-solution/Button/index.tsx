import React, { Children } from 'react'
import { ButtonProps } from './interface'

const Button:React.FC<ButtonProps & React.PropsWithChildren> = ({type, className, onclick, children}) =>{
    const buttonType = type || 'default'
    return(
        <button className={`btn btn-${buttonType} ${className || ''}`} onClick={onclick}>{children}</button>
    )
}

export default Button