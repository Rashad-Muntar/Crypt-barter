import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Crypto from '../Components/Crypto';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

console.error = jest.fn();

beforeEach(() => {
  console.error.mockClear();
});


describe('CryptoCard DOM', () => {
  it('renders correctly', () => {
    const cryptoCard = renderer.create(
      <Crypto
        name="name"
        price={5}
        icon="df"
        rank={5}
        perChange={5}
        symbol="34"
      />,
    ).toJSON();
    expect(cryptoCard).toMatchSnapshot();
  });
});

