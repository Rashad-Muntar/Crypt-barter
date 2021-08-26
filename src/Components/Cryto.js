import React from 'react';
import PropTypes from 'prop-types';

const Crypto = ({ name, price }) => (
  // <div>
  //   <p>{name}</p>
  //   <p>{price}</p>
  // </div>



    <div class="ui cards">
      <div class="card">
        <div class="content">
          <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg"/>
          <div class="header">
            {name}
          </div>
          <div class="meta">
            {price}
          </div>
          <div class="description">
            Elliot requested permission to view your contact details
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">Approve</div>
            <div class="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
    </div>
);

Crypto.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  // detailsHandler: PropTypes.func.isRequired,
};

export default Crypto;
