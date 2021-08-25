const initialState = {
  data: {
    coins: [

    ],
  },
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH-DATA':
      return {
        ...state,
        data: action.data,
      };
    // case 'DATA-FETCH-FAILURE':
    //   return {
    //     loading: false,
    //     data: [],
    //     err: action.payload,
    //   };
    default:
      return state;
  }
};

export default dataReducer;
