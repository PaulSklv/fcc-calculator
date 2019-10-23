import React from 'react';
import { connect } from 'react-redux';
import { calculation } from '../actions';

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
}


class Button extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = e => {
    if(e.keyCode == this.props.valueObj.keyValue) {
      this.props.calculation(this.props.value, this.props.currentValue)
    }
  }
    render() {
      const {value, id, currentValue } = this.props;
      return (
        <div className="button-wrapper">
          <div className={`num-button ${isOperator(value) ? null : "operator" }`} id={id}
                  onClick={() => this.props.calculation(value, currentValue)}>{value}</div>
        </div>
      );
  }
};

const mapStateToProps = state => {
  return {
    currentValue: state.calculations.currentValue
  };
};

export default connect(mapStateToProps, { calculation })(Button);
