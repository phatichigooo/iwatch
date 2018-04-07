import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePages from './../../pages/Home/HomePages';
import womenswatch from './../../pages/WomensWatchs/womenswatch';
import menswatch from './../../pages/MensWatchs/menswatch';
import videochannel from './../../pages/VideoChannel/VideoChannel';
import supportcenter from './../../pages/SupportCenter/supportcenter';

const Menu = () => (
    <Router>
         <div className="col-sm-9  mt-3">
        <nav id="navbar">
          <ul>
            <li><Link to="/" title="Home">Trang Chủ</Link></li>
            <li><Link to="/donghonam" title="DongHoNam">Đồng Hồ Nam</Link></li>
            <li><Link to="/donghonu" title="DongHoNu">Đồng Hồ Nữ</Link></li>
            <li><Link to="/video" title="Video-Channel">Video-Channel</Link></li>
            <li><Link to="/support" title="Support-Center">Support-Center</Link></li>
          </ul>
        </nav>

      <Route exact path="/" component={HomePages} />
      <Route path="/donghonam" component={menswatch} />
      <Route path="/donghonu" component={womenswatch} />
      <Route path="/video" component={videochannel} />
      <Route path="/support" component={supportcenter} />
    </div>
    </Router> 
    
);


export default Menu;
