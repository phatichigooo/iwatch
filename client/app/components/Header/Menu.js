import React from 'react';

import { Link } from 'react-router-dom';

const Menu = () => (
  <div className="col-sm-9  mt-3">
        <nav id="navbar">
          <ul>
            <li><a href="#" title="Home">Trang Chủ</a></li>
            <li><a href="#" title="DongHoNam">Đồng Hồ Nam</a></li>
            <li><a href="#" title="DongHoNu">Đồng Hồ Nữ</a></li>
            <li><a href="#" title="Video-Channel">Video-Channel</a></li>
            <li><a href="#" title="Support-Center">Support-Center</a></li>
          </ul>
        </nav>
    </div>
);

export default Menu;
