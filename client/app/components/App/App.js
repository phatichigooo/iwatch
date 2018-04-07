import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import VideoBackground from './../Header/VideoBackground';

const App = ({ children }) => (
  <div>
    <Header />
    <VideoBackground />
    
  </div>
);

export default App;
