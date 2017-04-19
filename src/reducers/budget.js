const initialState = {
  myBudgets: [],
};

const SET_MY_BUDGETS = 'SET_MY_BUDGETS';

const budgetReducer = (prevState = initialState, action) => {
  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case SET_MY_BUDGETS:
      newState.myBudgets = action.myBudgets;
      break;
    default:
      return prevState;
  }
  return newState;
};

export const setMyBudgets = (budgetsArray) => ({
  myBudgets: budgetsArray,
});

export default budgetReducer;
