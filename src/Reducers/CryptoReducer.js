const initialState = {
  data: {
    coins: [

    ],
  },
};
const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH-DATA':
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default cryptoReducer;
