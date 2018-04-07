import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './../Header/Logo';
import Menu from './../Header/Menu';
import HomePages from './../../pages/Home/HomePages';

const Home = () => (
  <Router>
    <div>

      <Route exact path="/" component={HomePages} />
      
    </div>
  </Router>
);

export default Home;
