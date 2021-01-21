import React, { Component } from 'react';
import Header from '../header/Header';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { title: 'AboutComponent' }
    }
    render() {
        return (
            <div>
                <Header />
                <p>{this.state.title} works!</p>
            </div>
        );
    }
}
export default About;