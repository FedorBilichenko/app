import * as React from 'react';

import icon from './icon.png';

import './Header.css';

const Header = () => {
    return <div className="header">
        <img className="header-icon" src={icon} alt="logo" />
    </div>
};

export default Header;
