import React from 'react';
import './Menu.css';

let menus = [
    { key: 1, display: 'Home', route: '/home' },
    { key: 2, display: 'Userlist', route: '/user/list' },
    { key: 3, display: 'About', route: '/about' }
];

const Menu = () => {
    return (
        <nav>
            <ul>
                {
                    menus.map(m => 
                        <li key={m.key}>
                            <a href={m.route}>{m.display}</a>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
}
export default Menu;