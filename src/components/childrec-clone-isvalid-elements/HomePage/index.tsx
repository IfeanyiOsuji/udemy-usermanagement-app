import React from "react"
import { Button } from "../../children-clone-assignment/Button"
import { ButtonGroup } from "../../children-clone-assignment/ButtonGroup"
import { HomePageState } from "./interface"
//import { Button } from "../Button"
//import { ButtonGroup } from "../ButtonGroup"
import './style.css'

export class HomePage extends React.Component<{}, HomePageState>{
    constructor(props:{}){
        super(props)
        this.state ={
            selectedIndex: null
        }

    }

    changeIndexState= (index:number)=>{
    
        this.setState({
            selectedIndex:index
        })
        
    }
    render(){
        const {selectedIndex} = this.state
    return(
        <div>
        <h1>Reusable Buttons</h1>
        <div>
            <h2>Primary</h2>
        <Button type="primary">Primary</Button>
        </div>
        <div>
            <h2>Defaylt</h2>
        <Button type="default">Default</Button>
        </div>
        <h2>Button Group</h2>
        <ButtonGroup onClick={this.changeIndexState} direction='column' selected={selectedIndex}>
            
              
             <Button type="primary">Yes</Button>
            <Button type="default">No</Button> 

        </ButtonGroup>
       
        </div>
    )
    }
}