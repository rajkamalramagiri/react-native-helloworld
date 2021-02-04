const initialState = {
  count: 10,
};

export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_CAKE':
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
};
