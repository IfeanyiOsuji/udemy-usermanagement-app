import { link } from "fs";
import React from "react";
import { ReactNode } from "react";
import { MyContext } from "../context/myContext";

export class UserInput extends React.Component{

render(){
    return(
        <MyContext.Consumer>
            {(value)=>(
                
                <div>
                    <h1>User Input</h1>
                    <ul>
                        {value.users.map(user => <li key={user}>{user}</li>)}
                    </ul>
                    <button onClick={()=>value.updateUser("John")}>Add User</button>
                </div>
                
    )}
        </MyContext.Consumer>
    )
}
}