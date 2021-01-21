import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            menus: [
                { display: 'Home', route: '/home' },
                { display: 'About', route: '/about' }
            ] 
        }
    }
    render() {
        return (
            <nav>
                <ul>
                    {
                        this.state.menus.map(m => 
                            <li>
                                <a href={m.route}>{m.display}</a>
                            </li>
                        )
                    }
                </ul>
            </nav>
        );
    }
}
export default Menu;