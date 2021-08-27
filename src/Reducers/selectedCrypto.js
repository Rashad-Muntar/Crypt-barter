const selectCryptoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_CRYPTO':
      return {
        ...state,
        ...crypto,
      };
    default:
      return state;
  }
};

export default selectCryptoReducer;
