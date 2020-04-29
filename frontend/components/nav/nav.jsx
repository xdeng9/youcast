import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        const leftDisplay = (
            <div className="nav-left">
                <button><i className="far fa-bars"></i></button>
                <div className="logo">
                    <Link to="/">
                        <img src={window.youcastLogo} alt="logo" />
                    </Link>
                </div>
            </div>
        )

        const authDisplay = this.props.currentUser ? (
           <button onClick={() => this.props.logout()}>Logout</button>
            
            ) : (
                    <Link className="login-btn" to="/login">
                        <i className="fas fa-user-circle"></i>
                        <span className="login-link">SIGN IN</span>
                    </Link>
            )

        const rightDisplay = (
            <div className="nav-right">
                <button><i className="fas fa-video-plus fa-lg"></i></button>
                {authDisplay}
            </div>)

        return (
            <div className="nav-bar">
                {leftDisplay}
                {rightDisplay}
            </div>
        )
    }
}

export default Nav;