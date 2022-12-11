import * as React from 'react';

import image from './icon.png';

import './Icon.css';

const Icon = () => {
  return <div className="icon-container">
    <img alt="love" src={image} className="icon" />
  </div>
};

export default Icon