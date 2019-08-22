import React from "react";
import { connect } from 'react-redux';

const Display = () => {
  return <div>{parseInt(props.value.join(''))}</div>;
};


const mapStateToProps = state => {
  return { value: state.value }
}

export default connect(mapStateToProps)(Display);