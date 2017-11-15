import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className = 'container heder'>
                <nav className = 'z-depth-0 transparent'>
                    <div className = 'nav-wrapper'>
                        <a className="btn btn-floating btn-large pulse">
                            <i className="material-icons">BIT</i>
                        </a>
                        <ul id="nav-mobile" className="right">
                            <li><Link className = 'teal-text' to='/'>Home</Link></li>
                            <li><Link className = 'teal-text' to='/authors'>Authors</Link></li>
                            <li><Link className = 'teal-text' to='/about'>About</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;