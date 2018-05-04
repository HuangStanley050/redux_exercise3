import React from "react";
import "./course.css";

const Course = (props) => {

    var backColor = null;
    if (props.status) {
        backColor = {
            backgroundColor: "red"
        }
    }

    return (
        <div style={backColor} onClick = { props.clicked } className = "course_wrap" >
           <h3 className="course">{props.name}</h3> 
           <h4>${props.money}</h4>
        
        </div>
    )
}

export default Course;
