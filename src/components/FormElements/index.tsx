import React from "react";
import { FormElementsProps, FormElementsState } from "./interface";


export class FormElements extends React.Component<FormElementsProps, FormElementsState>{
    constructor(props:FormElementsProps){
        super(props)

        this.state = {
            inputvalue:"test",
            textAreaValue:"textarea",
            selectValue:"guava"
        }

        
    }
    handleChangeEvent = (event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>{
        const {value, name} = event.currentTarget;

        this.setState({
            [name] :value
        } as unknown as FormElementsState)
    }
    
    render(): React.ReactNode {
        const {inputvalue, textAreaValue, selectValue} = this.state;
        return(
            <>
            <form onSubmit={(event => event.preventDefault())}>
                Input : <input onChange={this.handleChangeEvent} value={inputvalue} name="inputvalue" />
                <br />
                TextArea : <textarea onChange={this.handleChangeEvent} value={textAreaValue} name="textAreaValue"></textarea>
                <br />
                Select : <select onChange={this.handleChangeEvent} value={selectValue} name="selectValue">
                    <option value="mango">Mango</option>
                    <option  value="guava">Guava</option>
                    <option value="apple">Apple</option>
                </select>
                <br />
                <button>Submit</button>
            </form>
            </>
        )
    }
}