import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import FilterForm from '../Components/FilterForm';

describe('Home', () => {
  beforeEach(() => {
    render(<FilterForm />);
  });

  it('Renders Filter form component', () => {
    const tree = renderer.create(<FilterForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
