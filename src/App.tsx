import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/childrec-clone-isvalid-elements/HomePage';
//import { HomePage } from './components/code-splitting/HomePage';
import { StudentGrade } from './components/seconForm&Ass_solut/StudentGrade';

// import SuperComponent from './components/refs/SuperComponent/SuperComponent';

// import { InputComponentProps } from './components/input/inputInterface';
// import { Input } from './components/refs/Input';
// import { HomePage } from './components/contextApi/Homepage';
// import { MyContext, MyContextProvider } from './components/contextApi/context/myContext';
//import { FormElements } from './components/FormElements';
//import Button from './components/studentgrades/Button';

// import { StudentGrade } from './components/studentgrades/StudentGrade';

class App extends React.Component{
  inputRef:React.RefObject<HTMLInputElement>

  constructor(props: {}){
    super(props)
    this.inputRef = React.createRef();
  }



  componentDidMount(){
   console.log(this.inputRef)
   this.inputRef.current && this.inputRef.current.focus();
    
  }

  // getInputRef = (element:HTMLInputElement) =>{
  //   this.inputRef = element;

  //  }

  render() {
    
    return(
   <>
   {/* <h1>Student Grade</h1>
   <StudentGrade /> */}
   {/* <h1>My App</h1>
   <SuperComponent/>
   <Input ref= {this.inputRef}/> */}
   
   {/* <input /> */}
   {/* <MyContextProvider>
   <HomePage />
   </MyContextProvider> */}

   <div className="App">
    {/* <FormElements /> */}
    
    
    <HomePage />
   </div>
  
   </>
    )
  };
}

export default App;
// function componentDidMount() {
//   throw new Error('Function not implemented.');
// }

