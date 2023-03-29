import React from "react";

class SuperComponent extends React.Component{

    printSuperComponent = () =>{
        alert("Super component");
    }

    render(){
        return (
            <div>
                <h1>SuperComponent</h1>
            </div>
        )
        
    }
}
export default SuperComponent;