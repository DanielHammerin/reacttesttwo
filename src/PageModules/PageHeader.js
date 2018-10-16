import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Boardster</h1>
                <h1 className="App-title">-</h1>
                <div className="navBar">
                    <p id="navigationPages">a/b/c/d/e/f/g/h/i/j/k/l</p>
                </div>
            </header>
        );
    }
}

export default Header;