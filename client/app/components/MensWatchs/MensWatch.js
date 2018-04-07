import React from 'react';
import { Link } from 'react-router-dom';
import menswatch from './../../pages/MensWatchs/menswatch';


const MensWatch = () => (
  <Router>
    <div>

      <Route exact path="/" component={Home} />
      <Route path="/donghonam" component={menswatch} />
    </div>
  </Router>
);

export default MensWatch;
