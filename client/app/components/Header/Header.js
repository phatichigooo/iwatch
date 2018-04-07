import React from 'react';

import { Link } from 'react-router-dom';
import Menu from './Menu';
import Logo from './Logo';

const Header = () => (
  <header >
        <div className="container">
          <div className="row">
           <Logo></Logo>
         <Menu />
          </div>
        </div>
      </header>
);

export default Header;
