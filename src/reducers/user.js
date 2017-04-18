const initialState = {
  userId: '',
};

const SET_USER = 'SET_USER';

const userReducer = (prevState = initialState, action) => {
  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case SET_USER:
      newState.userId = action.userId;
      break;
    default:
      return prevState;
  }
  return newState;
};

export const setUser = (userId) => ({
  userId: userId,
});

export default userReducer;
