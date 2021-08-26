import React from 'react';
import PropTypes from 'prop-types';
import '../Assets/navbar.css';

// const inputChangeHandler = (e) => {
//   console.log(e.target.value);
// };

const FilterForm = ({ onCrytoFilter }) => (
  <input className="search" type="text" placeholder="Enter cryto name" onChange={onCrytoFilter} />
);

FilterForm.propTypes = {
  onCrytoFilter: PropTypes.func.isRequired,
};

export default FilterForm;
