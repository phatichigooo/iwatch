import React from 'react';
import { Link } from 'react-router-dom';
import womanswatch from './../../pages/WomensWatchs/womenswatch';


const WomensWatchs = () => (
  <Router>
    <div>

      <Route exact path="/" component={Home} />
      <Route path="/donghonu" component={womanswatch} />
    </div>
  </Router>
);

export default WomensWatchs;
