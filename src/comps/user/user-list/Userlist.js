import React, { Component } from 'react';
import './Userlist.css';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';

class Userlist extends Component {
    constructor(props) {
        super(props);
        this.state = { title: 'UserlistComponent' }
    }
    render() {
        return (
            <div>
                <Header />
                <p>{this.state.title} works!</p>
                <Footer />
            </div>
        );
    }
}
export default Userlist;