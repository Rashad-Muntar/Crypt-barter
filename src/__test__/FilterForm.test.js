import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import FilterForm from '../Components/FilterForm';
// import Crypto from '../Components/Crypto'

describe('Home', () => {
  beforeEach(() => {
    render(<FilterForm />);
  });

  it('Renders Filter form component', () => {
    const tree = renderer.create(<FilterForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('Renders Filter form component', () => {
  //   const tree = renderer.create(< >).toJSON();
  //   expect(tree).not.toMatchSnapshot();
  // });
});
