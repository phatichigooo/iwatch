import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 logo2">
              <a href>
              <img src="../assets/img/logo.jpg" alt />
              </a>
            </div>
            <div className="col-sm-9 menu2">
              <nav id="navbar">
                <ul>
                  <li><a href="#" title="Home">Trang Chủ</a></li>
                  <li><a href="#" title="Fix">Đồng Hồ Nam</a></li>
                  <li><a href="#" title="NEWS">Đồng Hồ Nữ</a></li>
                  <li><a href="#" title="Video-Channel">Video-Channel</a></li>
                  <li><a href="#" title="Support-Center">Support-Center</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
);

export default Header;
