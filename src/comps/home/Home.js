import React, { Component } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { title: 'HomeComponent' }
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
export default Home;