import React from "react";
import { InputProps } from "./interface";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({label, onChange,value, error }, ref)=>{
        const errorMessage = error? error:''
    return (
        <label className="input-container">
            <div className="input-label">{label}</div>
            <input ref ={ref} value={value} onChange={onChange} className={`error ${errorMessage}`}/>
            {error && <div className="error-message">{error}</div>}
           
        
        </label>
    )
})

