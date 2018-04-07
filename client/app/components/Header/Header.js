import React from 'react';

import { Link } from 'react-router-dom';
import Menu from './Menu';

const Header = () => (
  <header >
        <div className="container">
          <div className="row">
            <div className="col-sm-3 ">
              <a href ="#">
              <img src="../assets/img/logo.png" alt="true" />
              </a>
            </div>
         <Menu />
          </div>
        </div>
      </header>
);

export default Header;
