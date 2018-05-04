import React, { Component } from 'react';
import CourseBox from "./containers/coursebox.js";
import Total from "./components/calculate.js";
import Result from "./components/result.js";
import * as actionTypes from "./reducer/actions.js";
import { connect } from "react-redux";
import './App.css';

//have to remember to use this.props to call the function like this.props.callback

class App extends Component {
  render() {
    return (
      <div>
        <h1>Select the courses below:</h1>
        <p style={{textAlign:"center"}}>Click on the course to select</p>
        <CourseBox/>
        <div className="container">
          <Total click={this.props.calculate}/> 
          <Result price={this.props.total}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    calculate: () => dispatch({ type: actionTypes.CALC })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
