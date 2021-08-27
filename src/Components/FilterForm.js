import React from 'react';
import PropTypes from 'prop-types';
import '../Assets/navbar.css';

// const inputChangeHandler = (e) => {
//   console.log(e.target.value);
// };

const FilterForm = ({ onCrytoFilter }) => (
  <div className="search">
    <i className="search icon" />
    <input type="text" placeholder="Enter cryto name" onChange={onCrytoFilter} />
  </div>

);

FilterForm.propTypes = {
  onCrytoFilter: PropTypes.func.isRequired,
};

export default FilterForm;
