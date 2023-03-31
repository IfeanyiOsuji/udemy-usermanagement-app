import React, { Suspense, useState } from "react"
import { HomePageState } from "./interface";



const EvenComponent = React.lazy(() => import ("../EvenComponent").then(({EvenComponent})=>({default:EvenComponent})) );
const OddComponent = React.lazy(()=> import("../OddComponent").then(({OddComponent})=>({default:OddComponent})));





  export  class HomePage  extends React.Component<{}, HomePageState>{
    constructor(props:{}){

        super(props)
        this.state = {
            counter : 0,
            hasError:false
        }
    }
   
   changeComponent = () =>{
    const {counter} = this.state;
    this.setState({counter: counter+1})
   }
    static  getDerivedStateFromError = () =>{ // lifecycle for error handling
       return {
        hasError: true
       }
    }
  render(){
    const {counter, hasError} = this.state
    return(
        <div>
            <h2>HOME PAGE</h2>
        {hasError ? <div><h2>Error Occured</h2></div>:<Suspense fallback ={<div>...Loading</div>}>
            {counter % 2 === 0 ? <EvenComponent />: <OddComponent />}      
           
        </Suspense>}
        <div><button onClick={this.changeComponent}>Change Component</button></div>
        </div>
    )
  }
}

export default HomePage

