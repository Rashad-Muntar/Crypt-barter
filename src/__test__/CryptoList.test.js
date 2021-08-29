import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CryptoList from '../Containers/Home';
import rootReducer from '../Reducers/index';

describe('CryptoList DOM', () => {

it('renders correctly when store is provided', () => {
  const store = createStore(rootReducer);
  const cryptoList = renderer.create(
    <Provider store={store}>
      <CryptoList />
    </Provider>,
  ).toJSON();
  expect(cryptoList).toMatchSnapshot();
});

});