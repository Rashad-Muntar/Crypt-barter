import filterReducer from '../Reducers/FilterReducer'
import cryptoReducer from '../Reducers/CryptoReducer'

describe('Reducers', () => {
  const action = {
    type: "FETCH-DATA",
    data: {
      coins: [

      ]
    },
  };

  const action2 = {
    type: "CHANGE_FILTER",
    filter: 2,
  };

  it('crypto reducer has an initial state', () => {
    expect(cryptoReducer([], {})).toEqual([]);
  });

  it('filter reducer returns a genre id', () => {
    expect(filterReducer('', action2)).toEqual(2);
  });
});