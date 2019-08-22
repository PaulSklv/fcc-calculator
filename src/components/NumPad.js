import React from 'react';
import { clearDisplay, composeValues } from '../actions';
import { connect } from 'react-redux';

const buttons = [
  {
    id: 'clear',
    label: 'AC',
    onclick: () => clearDisplay()
  },
  {
    id: 'one',
    label: '1',
    onclick: () => composeValues(1)
  },

  // {
  //   id: 'add',
  //   label: '+',
  //   onclick: () => addValue()
  // }
]

class NumPad extends React.Component {

  renderPad = () => {
    return buttons.map(button => {
      const { id, label, onclick } = button;
      return (
        <div className='num-button' id={id} onClick={onclick}>{label}</div>
      );
    });
  }

  render() {
    return (
    <div>
      {this.renderPad()}
    </div>
    );
  }
}

export default connect(null, { composeValues })(NumPad);