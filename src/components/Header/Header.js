import React from 'react';
import logo from '../../images/attachment_131694683.jfif'
import './Header.css';


const Header = () => {
    return (
        <div className="header m-0-p-0">
            <img src={logo} alt="" />
            <h2 className='text-center mt-5'>Daily-Activities-Record</h2>

        </div>
    );
};

export default Header;