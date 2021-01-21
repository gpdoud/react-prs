import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { title: 'FooterComponent' }
    }
    render() {
        return (
            <div id="footer">
                <div>{this.state.title}</div>
            </div>
        );
    }
}
export default Footer;