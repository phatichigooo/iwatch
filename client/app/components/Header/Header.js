import React from 'react';
import { BrowserRouter as Router, Route, NavLink ,Link } from "react-router-dom";
import HomePages from './../../pages/Home/HomePages';
import womenswatch from './../../pages/WomensWatchs/womenswatch';
import menswatch from './../../pages/MensWatchs/menswatch';
import videochannel from './../../pages/VideoChannel/VideoChannel';
import supportcenter from './../../pages/SupportCenter/supportcenter';
import Logo from './Logo';



// const MenuLink = ({label , to , activeOnlyWhenExact}) => {
//   return (
//     <Route path = {to} exact ={activeOnlyWhenExact} children = {({match}) =>{
//       var active = match ? 'active' : '';
//       return (
//         <li className = {active}>
//             <Link to={to} >
//                   {label}
//             </Link>
//         </li>
//       )
//     }} 
//     />
//   )
// }
const Header = () => (
  <Router>
  <div className="headerHover">
        <div className="container ">
          <div className="row ">
           <Logo />
           <div className="col-sm-9 menu  mt-3">
            <nav id="navbar">
              <ul>
                <li><NavLink 
                      exact to="/" 
                      title="Home"
                      activeStyle = {{color:'#e65100'}}>Trang Chủ</NavLink></li>
                {/* <MenuLink label="Trang Chủ" to= "/" activeOnlyWhenExact={true} /> */}
                <li><NavLink 
                      to="/donghonam" 
                      title="DongHoNam"
                      activeStyle = {{color:'#e65100'}}>Đồng Hồ Nam</NavLink></li>
                <li><NavLink
                      to="/donghonu" 
                      title="DongHoNu"
                      activeStyle = {{color:'#e65100'}}
                      >Đồng Hồ Nữ</NavLink></li>
                <li><NavLink
                      to="/video" 
                      title="Video-Channel"
                      activeStyle = {{color:'#e65100'}}
                      >Video-Channel</NavLink></li>
                <li><NavLink
                      to="/support" 
                      title="Support-Center"
                      activeStyle = {{color:'#e65100'}}
                      >Support-Center</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>

      
     </div>
     <Route exact path="/" component={HomePages} />
      <Route path="/donghonam" component={menswatch} />
      <Route path="/donghonu" component={womenswatch} />
      <Route path="/video" component={videochannel} />
      <Route path="/support" component={supportcenter} />
   </div>
  </Router>
);

export default Header;
