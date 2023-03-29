
 import React, { ReactNode } from "react";

// export type contextType = "light"|"dark";


// export const MyContext = React.createContext<contextType>("light");

export interface MyContextType{
    users: string[],
    updateUser(user : string):any,
}

export interface MyComponentProviderState{
    users : string[]
}

export const MyContext = React.createContext<MyContextType>({
    users: ["Ifeanyi", "Amarachi"],
    updateUser: ()=>{}
})

export class MyContextProvider extends React.Component<{} & React.PropsWithChildren, MyComponentProviderState>{
    constructor(props:{}&React.PropsWithChildren){
        super(props)

        this.state = {
            users: ["Ifeanyi", "Amarachi"]
        }

    }
    handleUpdateUser = (user :string) =>{
        this.setState({
            users: [...this.state.users, user]
        })
    }

    render(){
        return(
           <MyContext.Provider value={{
            users: this.state.users,
            updateUser: this.handleUpdateUser
            } } >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}