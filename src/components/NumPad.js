import React from 'react';
import Button from './Button';

const firstRow = [
  {
    id: 'clear',
    label: 'AC'
  }
]

const secondRow = [
  {
    id: 'one',
    label: '1',
    keyValue: '97'
  },
  {
    id: 'two',
    label: '2',
    keyValue: '98'
  },
  {
    id: 'three',
    label: '3',
    keyValue: '99'
  },
  {
    id: 'add',
    label: '+',
    keyValue: '107'
  } 
]

const thirdRow = [
  {
    id: 'four',
    label: '4',
    keyValue: '100'
  },
  {
    id: 'five',
    label: '5',
    keyValue: '101'
  },
  {
    id: 'six',
    label: '6',
    keyValue: '102'
  },
  {
    id: 'subtract',
    label: '-',
    keyValue: '109'
  }
]

const fourthRow = [
  {
    id: 'seven',
    label: '7',
    keyValue: '103'
  },
  {
    id: 'eight',
    label: '8',
    keyValue: '104'
  },
  {
    id: 'nine',
    label: '9',
    keyValue: '105'
  },
  {
    id: 'multipy',
    label: '*',
    keyValue: '106'
  }
]

const fifthRow = [
  {
    id: 'equal',
    label: '=',
    keyValue: '13'
  },
  {
    id: 'zero',
    label: '0',
    keyValue: '96'
  },
  {
    id: 'decimal',
    label: '.',
    keyValue: '110'
  },
  {
    id: 'divide',
    label: '/',
    keyValue: '111'
  }
]

class NumPad extends React.Component {

  renderRow = row => {
    return row.map(button => {
      const { id, label, keyValue } = button;
      return (
        <Button id={id} value={label} key={id} valueObj={button}/>
      );
    });
  }

  render() {
    return (
    <div className = "wrapper">
      <div className = 'row'>
        {this.renderRow(firstRow)}
      </div>
      <div className = 'row'>
        {this.renderRow(secondRow)}
      </div>
      <div className = 'row'>
        {this.renderRow(thirdRow)}
      </div>
      <div className = 'row'>
        {this.renderRow(fourthRow)}
      </div>
      <div className = 'row'>
        {this.renderRow(fifthRow)}
      </div>
    </div>
    );
  }
}

export default NumPad;