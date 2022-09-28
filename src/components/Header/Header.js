import React from 'react';
import logo from '../../images/attachment_131694683.jfif'
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <h2>Daily-Activities-Record</h2>

        </div>
    );
};

export default Header;