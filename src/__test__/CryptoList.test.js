import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import CryptoList from '../Components/CryptoList';

describe('Home', () => {
  beforeEach(() => {
    render(<CryptoList />);
  });

  it('Renders Home component', () => {
    const tree = renderer.create(<CryptoList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders Home correctly', () => {
    expect(screen.getByText(/Enter cryto name/)).toBeInTheDocument();
  });

  test('renders only the home page', () => {
    expect(screen.queryByText(/randomw text/)).not.toBeInTheDocument();
  });
});
