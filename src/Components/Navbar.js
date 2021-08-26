import React from 'react';
import '../Assets/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="ui secondary  menu">
    <div className="wrapper">
      <Link to="/" className="active item">Home</Link>
      <i className="bars icon" />
    </div>
  </div>

  //     <Link to="/">Home</Link>
  //   </div>

);

export default Navbar;
