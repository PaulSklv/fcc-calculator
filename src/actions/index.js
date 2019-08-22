export const clearDisplay = () => {
  return {
    type: 'ALL_CLEAR'
  };
}

export const composeValues = (value) => {
  return {
    type: 'COMPOSE_VALUE',
    payload: value
  };
}