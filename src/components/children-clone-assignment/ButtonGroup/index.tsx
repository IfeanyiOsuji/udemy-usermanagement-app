import React, { PropsWithChildren } from "react";
import { ButtonProps } from "../Button/interface";
import { ButtonGroupProps, ButtonGroupState } from "./interface";

export class ButtonGroup extends React.Component<ButtonGroupProps & PropsWithChildren, ButtonGroupState>{
      constructor(props:ButtonGroupProps & PropsWithChildren){
        super(props)

        this.state = {
            index:0
        }

      }

    render(){
        const {onClick, selected, children, direction} = this.props
        const   directionClassName = direction === 'column' ? 'column' : 'row';
        
        return(
            <div className= {`btn-group-btn ${directionClassName}`}>
    {React.Children.map(children as React.ReactElement<ButtonProps>[], (child, index)=>{
        const selectedClassName = selected === index ? 'selected':'';
        console.log(selectedClassName)
        return React.isValidElement(child) ? React.cloneElement(child, {className:  `btn-group ${selectedClassName} ${directionClassName}`, onclick:()=>onClick(index)}):child
    })}
    </div> 
        )
    }
}