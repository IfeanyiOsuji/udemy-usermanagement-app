import React from 'react'
import { InputComponentProps } from '../../input/inputInterface'
import { InputProps } from './interface'

// export const Input:React.FC<InputProps> = ({ inputRef }) =>{
//   return (
//     <input ref={inputRef}/>
//   )
// }

export const Input = React.forwardRef<HTMLInputElement> ((props, ref) =>{
  return (
    <input ref = {ref}/>
  )
})

                      