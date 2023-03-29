import React from 'react'
import './index.css'
import { ButtonProp } from './interface';

function Button(props:ButtonProp) {
    const type = props.type || 'default'
  return (
    <button className= {`btn ${type}`}>Submit
        </button>
  )
}

export default Button;