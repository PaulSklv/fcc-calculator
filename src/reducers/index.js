import { combineReducers } from "redux";
import { evaluate } from "mathjs";

const originalState = {
  currentValue: "0",
  result: "",
  evaluated: false
}
const endsWithOperators = /(\+|\-|\*|\/)/;
const calcReducer= (state = originalState, action) => {
  switch(action.type) {
    case 'HANDLE_NUMBERS':
      return {
        currentValue: action.payload,
        prevValue: action.payload.calculation
      }
    case 'HANDLE_OPERATOR':
      let { currentValue, value } = action.payload
      var arr = currentValue.split("");
      if(state.evaluated) {
        return {
          currentValue: state.result.toString() + action.payload.value,
          result: '',
          evaluated: false
        }
      }
      if(endsWithOperators.test(arr[arr.length - 1])) {
        if(arr[arr.length - 1] === value){
          return {
            currentValue: currentValue,
            }
          } else {
            arr[arr.length - 1] = value;
            return {
              currentValue: arr.join("")
            }
          }
        } else {
          return {
            currentValue: action.payload.currentValue + action.payload.value
          }
        }
    case 'EVALUATION':
      return {
        currentValue: action.payload.currentValue,
        result: evaluate(action.payload.currentValue),
        evaluated: true
      }
    default:
      return state;
  };
};

export default combineReducers({
  calculations: calcReducer
});
