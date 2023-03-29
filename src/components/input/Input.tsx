import React from 'react'
import './input.css'
import { InputComponentProps } from './inputInterface'

function Input(props:InputComponentProps) {
    const {label, value, onChange, error, name} = props


  return (
    <>
       <label htmlFor="">{label} :</label>
       <br />
    <input type="text" value={value} onChange={onChange} className={error} name={name} />
    </>
 
  )
}

export default Input