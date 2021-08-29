import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Crypto from '../Components/Crypto';

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

  it('renders card content correctly', () => {
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
    expect(cryptoCard.name).not.toBe('random');
  });
});
