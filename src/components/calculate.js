import React from "react";
import "./calculate.css";

const calculate = (props) => {
    return (
        <button onClick = { props.click } className = "myButton" > Total Amount </button>
    );
};

export default calculate;
