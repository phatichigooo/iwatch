import React from 'react';
import { Link } from 'react-router-dom';
import womanswatch from './../../pages/WomensWatchs/womenswatch';


const MensWatch = () => (
  <Router>
    <div>

      <Route exact path="/" component={Home} />
      <Route path="/donghonam" component={menswatch} />
    </div>
  </Router>
);

export default MensWatch;
