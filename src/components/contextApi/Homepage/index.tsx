import React from "react";
import { MyContext } from "../context/myContext";
import { UserInput } from "../UserInput";

export class HomePage extends React.Component{
    static contextType = MyContext
    context!: React.ContextType<typeof MyContext>;

    render() {
        return(

           <div>
            <h1>Home page</h1>
            <ul>{this.context.users.map(user => <li key={user}>
                {user}
            </li> )}</ul>
            <button onClick ={()=>this.context.updateUser("Paschaline")}>Update user</button>
            <UserInput />
            
           </div> 
        )
        
    }
}