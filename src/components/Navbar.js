import React from 'react';
import logo from '../images/AL.png';
import '../components/style/Navbar.css';
import { Link } from "react-router-dom";


class Navbar extends React.Component {
    render() {
        return(
            <div className="navbar">
                <a className="a" href="/">
                <figure className="a">    
                    <img className= "navbarlogo"src={logo} alt="Logo-AL" />
                </figure>
                </a>
                    <nav className="text">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/work">Work</Link>
                            </li>
                            <li>
                                <Link to="/contact">contact</Link>
                            </li>
                        </ul>
                    </nav>
            </div>
        )
    }
}
export default Navbar;
