import React from 'react';
import { connect } from 'react-redux';
import { calculation } from '../actions';

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
}


const Button = props => {
    return (
      <div className="button-wrapper">
        <button className={`num-button ${isOperator(props.value) ? null : "operator" }`} id={props.id} 
                onClick={() => props.calculation(props.value, props.currentValue, props.result)}>{props.value}</button>
      </div>
    );
};

const mapStateToProps = state => {
  return {
    currentValue: state.calculations.currentValue,
    result: state.calculations.result
  };
};

export default connect(mapStateToProps, { calculation })(Button);
