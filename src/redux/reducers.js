const reducers = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      const newState = state + 1;
      return newState;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default reducers;
