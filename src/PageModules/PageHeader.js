import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageLinks: props.links
        }
    }
    render() {

        const list = this.state.pageLinks.map((link) => {
            return (
                <Route key={link.key}>
                    <li><Link to={link.value}>{link.key}/</Link></li>
                </Route>
            )
        });

        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to /Boardster/</h1>
                <h1 className="App-title">-</h1>
                <h2 className="App-intro">The way an image message board should be</h2>
                <div className="navBar">
                    <Router>
                        <ul>
                            {list}
                        </ul>
                    </Router>
                </div>
            </header>
        );
    }
}

export default Header;