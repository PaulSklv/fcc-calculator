import _ from "lodash";

const isOperator = val => {
  return !isNaN(val) || val === "=" || val === "AC" || val === '.' ;
}


export const calculation = (value, currentValue, result) => {
  if(!isOperator(value)) {
    return {
      type: "HANDLE_OPERATOR",
      payload: {
        currentValue: currentValue,
        value: value
      }
    }
  }
  else if(value === "=") {
    return {
      type: "EVALUATION",
      payload: {
        currentValue: currentValue,
        result: result,
        value: value
      }
    }
  }
  else if(value === "AC") {
    return {
      type: "ALL_CLEAR"
    }
  }
  else if(value === ".") {
    return {
      type: "DECIMAL",
      payload: value
    }
  }
  else {
    return {
      type: "HANDLE_NUMBERS",
      payload: currentValue === "0" ? currentValue = value : currentValue + value
    }
  }
}

export const clearDisplay = () => {
  return {
    type: "ALL_CLEAR"
  };
};
