import React from 'react';
import { Link } from 'react-router-dom';


export function Navbar() {
  return (
    <nav>
      <ul>
        <li> <Link to="/views/LandingPage" className='Thispage1'>Home</Link>
        </li>
        <li>
          <Link to="/views/ProductInfo" className='Thispage2'>Products</Link>
        </li>
        <li>
          <Link to="/views/CheckOut" className='Thispage3'>Checkout</Link>
        </li>
        {/* <li>
          <Link to="/views/Artist" className='Thispage4'>Artistinfo</Link>
        </li> */}
      </ul>
    </nav>


  );
};

export default Navbar;