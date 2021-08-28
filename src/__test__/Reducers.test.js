import filterReducer from '../Reducers/FilterReducer';
import cryptoReducer from '../Reducers/CryptoReducer';

const mockData = {
  data: {
    coins: [{ crypto1: 'crypto1', ids: 1 },
      { crypto2: 'crypto2', ids: 2 },
      { crypto3: 'crypto3', ids: 2 },
    ],
  },
};

describe('Reducers', () => {
  const action = {
    type: 'FETCH-DATA',
    data: {
      coins: [{ crypto1: 'crypto1', ids: 1 },
        { crypto2: 'crypto2', ids: 2 },
        { crypto3: 'crypto3', ids: 2 },
      ],
    },
  };

  const action2 = {
    type: 'CHANGE_FILTER',
    filter: 2,
  };

  it('crypto reducer has an initial state', () => {
    expect(cryptoReducer([], {})).toEqual([]);
  });

  it('crypto reducer has cryptocurrencies in state', () => {
    expect(cryptoReducer({}, action)).toEqual(mockData);
  });

  it('filter reducer returns a crypto id', () => {
    expect(filterReducer('', action2)).toEqual(2);
  });
});
