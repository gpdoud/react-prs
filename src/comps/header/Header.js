import React from 'react';
import './Header.css';
import Menu from '../menu/Menu';

const Header = () => {
    return (
        <div id="component">
            <div id="header">
                <div>HeaderComponent works!</div>
            </div>
            <Menu />
        </div>
    );
}
export default Header;