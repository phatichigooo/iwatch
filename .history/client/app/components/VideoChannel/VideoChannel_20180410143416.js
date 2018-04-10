import React from 'react';
import { Link } from 'react-router-dom';
import videoschannel from '../../pages/VideoChannel/VideoChannel'


const MensWatch = () => (
  <Router>
    <div>

      <Route exact path="/" component={Home} />
      <Route path="/video" component={videoschannel} />
    </div>
  </Router>
);

export default MensWatch;