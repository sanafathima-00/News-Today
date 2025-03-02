import React, { Component } from 'react';
import './NavBar.css'; 
import logo from './logo.jpg'; 

export class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <img src={logo} alt="Logo" className="navbar-logo-img" />
                        <div className="navbar-title">News Today</div>
                    </div>
                    <div className="search">
                        <form className="searchBox" role="search">
                            <input className="searchBar" type="search" placeholder="Search" aria-label="Search" />
                            <button className="searchButton" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="navbar-actions">
                        <button className="subscribe-btn">SUBSCRIBE</button>
                        <a href="/login" className="login">LOGIN</a>
                        <span className="user-icon">👤</span>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
