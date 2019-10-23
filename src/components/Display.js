import React from "react";
import { connect } from 'react-redux';

const Display = (props) => {
  return (
    <div id='display'>
      {props.currentValue}
    </div>
  );
};


const mapStateToProps = state => {
  return { 
    currentValue: state.calculations.currentValue
 };
}

export default connect(mapStateToProps)(Display);