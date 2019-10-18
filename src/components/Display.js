import React from "react";
import { connect } from 'react-redux';

const Display = (props) => {
  return (
    <div id='display'>
      <div dangerouslySetInnerHTML = {{__html: props.currentValue}} />
      <div dangerouslySetInnerHTML = {{__html: props.result}} />
    </div>
  );
};


const mapStateToProps = state => {
  console.log(state.calculations.currentValue)
  // console.log(state.calculations.currentValue.split("")[state.calculations.currentValue.split("").length - 1])
  // console.log(state.calculations.currentResult)
  return { 
    currentValue: state.calculations.currentValue,
    result: state.calculations.result
 };
}

export default connect(mapStateToProps)(Display);