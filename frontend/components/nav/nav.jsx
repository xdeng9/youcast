import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        const leftDisplay = (
            <div className="logo">
                <img src={window.youcastLogo} alt="logo" />
            </div>
        )

        const rightDisplay = this.props.currentUser ? (
            <div>
                <button onClick={() => this.props.logout()}>Logout</button>
            </div>
        ) : (
                <div>
                    <p>
                        <Link to="/login" to="login">SIGN IN</Link>
                    </p>
                </div>
            )

        return (
            <div className="nav-bar">
                {leftDisplay}
                {rightDisplay}
            </div>
        )
    }
}

export default Nav;