import React from 'react';
import './App.css';
import MyFormContent from './components/myForm'
import AskPassword from './components/AskPassword'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {title:"Waiting for the OTP"}
  }

  render(){
    return(
      <div>
        <MyFormContent title={this.state.title} button="shop Again">
          <AskPassword></AskPassword>
        </MyFormContent>

      </div>
    )
  }
}
export default App;
