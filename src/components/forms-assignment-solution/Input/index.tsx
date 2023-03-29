import React from "react"
import { InputProps } from "./interface"


const Input = React.forwardRef<HTMLInputElement, InputProps>(({label, onChange, value, error}, ref) => {
   const errorClassname = error ? 'error':"";
    return(
        <label className="input-container">
            <div className="input-label">{label}</div>
            <input ref={ref} className = {`input ${errorClassname}`} value={value} onChange={onChange}/>
            {error && <div className="error-message">{error}</div>}
        </label>
    )
})
export default Input;