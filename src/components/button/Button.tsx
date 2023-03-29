import React from 'react'
import { ButtonComponentProps } from './interface'

function Button(props:ButtonComponentProps & React.PropsWithChildren) {
     const type = props.type || 'default'
     const onclick = props.onClick
  return (
    <button className={type} onClick={onclick}>{props.children}</button>
  )
}

export default Button