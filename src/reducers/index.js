import { combineReducers } from "redux";
import { evaluate } from "mathjs";

const isFloat = n => !!(n % 1);

const originalState = {
  currentValue: "0",
  evaluated: false
}

const endsWithOperators = /(\+|\-|\*|\/|\.)/;
const operatorsRegExp = /(\+|\-|\*|\/)/;
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
          currentValue: state.currentValue + value,
          evaluated: false
        }
      }
      if(endsWithOperators.test(arr[arr.length - 1])) {
        if(arr[arr.length - 1] === value){
          return {
            currentValue: currentValue
            }
          } else if(!/(\+|\*|\/)/.test((arr[arr.length - 2])) && value === '-'){
            return {
              currentValue: action.payload.currentValue + action.payload.value
            }
          } else if(/(\+|\*|\/)/.test((arr[arr.length - 2])) && arr[arr.length - 1] === '-') {
            arr.splice(arr.length - 2, 2, value);
            return {
              currentValue: arr.join("")
            }
          } else {
            arr[arr.length - 1] = value;
            return {
              currentValue: arr.join("")
            }
          }
        } else {
          return {
            currentValue: currentValue + value
          }
        }
    case 'ALL_CLEAR':
      return {
        currentValue: "0",
        evaluated: false
      }
    case 'EVALUATION':

      return {
        currentValue: isFloat(evaluate(action.payload.currentValue)) ? 
        (Math.floor(evaluate(action.payload.currentValue) * 100000) / 100000).toString() 
        : evaluate(action.payload.currentValue).toString(),
        evaluated: true
      }
    case "DECIMAL": 
      if(!state.currentValue.includes('.')) {
        return {
          currentValue: state.currentValue + action.payload
        }
      } else if (state.currentValue.includes('.') && operatorsRegExp.test(state.currentValue) && /\d$/.test(state.currentValue)) {
        return {
          currentValue: state.currentValue + action.payload
        }
      } else {
          return {
            currentValue: state.currentValue
          }
        }
    default:
      return state;
  };
};

export default combineReducers({
  calculations: calcReducer
});
