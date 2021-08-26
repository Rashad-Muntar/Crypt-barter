import React from 'react';
import PropTypes from 'prop-types';

// const inputChangeHandler = (e) => {
//   console.log(e.target.value);
// };

const FilterForm = ({ onCrytoFilter }) => (
  <input type="text" placeholder="Enter cryto name" onChange={onCrytoFilter} />
);

FilterForm.propTypes = {
  onCrytoFilter: PropTypes.func.isRequired,
};

export default FilterForm;
