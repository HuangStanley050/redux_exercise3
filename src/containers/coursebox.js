import React, { Component } from "react";
import Course from "../components/course.js";
import * as actionTypes from "../reducer/actions.js";
import { connect } from "react-redux";
import "./coursebox.css";


//<Course clicked={this.props.toggleCourse1} status={this.props.course1}/>

class CourseBox extends Component {
    render() {
        //console.log(this.props.course1);
        //console.log(this.props.course3);

        return (
            <div className="wrapper">
                <Course name={"ReactJS"} money={200} clicked={this.props.toggleCourse1} status={this.props.course1}/>
                <Course name={"NodeJS"} money={400} clicked={this.props.toggleCourse2} status={this.props.course2}/>
                <Course name={"CSS"} money={100}clicked={this.props.toggleCourse3} status={this.props.course3}/>
                <Course name={"Git"}money={60} clicked={this.props.toggleCourse4} status={this.props.course4}/>
                
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        course1: state.course1,
        course2: state.course2,
        course3: state.course3,
        course4: state.course4
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleCourse1: () => dispatch({ type: actionTypes.C1 }),
        toggleCourse2: () => dispatch({ type: actionTypes.C2 }),
        toggleCourse3: () => dispatch({ type: actionTypes.C3 }),
        toggleCourse4: () => dispatch({ type: actionTypes.C4 })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseBox);
