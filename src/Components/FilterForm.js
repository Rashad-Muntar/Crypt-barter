import React from 'react';
import PropTypes from 'prop-types';
import '../Assets/navbar.css';

const FilterForm = ({ onCrytoFilter }) => (
  <div className="search">
    <i className="search icon" />
    <input type="text" placeholder="Enter crypto name" onChange={onCrytoFilter} />
  </div>

);

FilterForm.propTypes = {
  onCrytoFilter: PropTypes.func,
};

FilterForm.defaultProps = {
  onCrytoFilter: () => {

  },
};

export default FilterForm;
