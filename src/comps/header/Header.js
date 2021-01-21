import React, { Component } from 'react';
import './Header.css';
import Menu from '../menu/Menu';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { title: 'PRS in React' }
    }
    render() {
        return (
            <div id="component">
                <div id="header">
                    <div>{this.state.title}</div>
                </div>
                <Menu />
            </div>
        );
    }
}
export default Header;