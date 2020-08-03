import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import { increament, decreament } from './action/count';
class App extends React.Component{
  state={
    value:null
  }
  render(){
    return(
      <div>
        Count: {this.props.count}
        <br/>
        <input onChange={(e)=>{
          this.setState({value:e.target.value})
        }}/>
        <br/>
        <button onClick={()=>{this.props.increament(this.state.value)}}>Increamnent</button>
        <button onClick={()=>{this.props.decreament(this.state.value)}}>Decreament</button>
      </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    increament:(val)=>{
      increament(dispatch,val&&Number(val))
    },
    decreament:(val)=>{
      decreament(dispatch,val&&Number(val))
    }
  }
}

const mapStateToProps=state=>{
  return {
    count:state.count
  }
}
// //redux implementation
// const temp=mapDispatchToProps
// temp(dispatch)
// //redux implementation


export default connect(mapStateToProps,mapDispatchToProps)(App);
