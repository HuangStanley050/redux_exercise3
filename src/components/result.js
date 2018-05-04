import React from "react";
import { connect } from "react-redux";

const Result = (props) => {
    return <h1>Total is:${props.price}</h1>;
};

const mapStateToProps = state => {
    return {
        price: state.total
    };
};

export default connect(mapStateToProps)(Result);
