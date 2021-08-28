import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Crypto from '../Components/Crypto';

describe('StockCard DOM', () => {
  it('renders correctly', () => {
    const cryptoCard = renderer.create(
      <Crypto
        name="name"
        price={5}
        icon="df"
        rank="f"
        perChange="3"
        symbol="34"
      />,
    ).toJSON();
    expect(cryptoCard).toMatchSnapshot();
  });
});

// it('renders correctly when store is provided', () => {
//   const store = createStore(rootReducer);
//   const cryptoList = renderer.create(
//     <Provider store={store}>
//       <Crypto />
//     </Provider>,
//   ).toJSON();
//   expect(cryptoList).toMatchSnapshot();
// });
