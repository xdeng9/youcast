import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    renderUserLogo() {
        const { currentUser } = this.props;
        return (
            <div className="user-logo">
                <span>{currentUser.username[0].toUpperCase()}</span> 
            </div>
        )
    }

    renderSearchBar() {
        return (
            <div className="search-bar-container">
                <form className="search-bar">
                    <input
                    className="search-field" 
                    type="text" 
                    placeholder="Search" 
                    value={this.state.search} />
                    <button className="search-btn">
                        <i className="far fa-search"></i>
                    </button>
                </form>
            </div>
        )
    }

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

        const centerDisplay = this.renderSearchBar();

        const authDisplay = this.props.currentUser ? (
            <button onClick={() => this.props.logout()}>{this.renderUserLogo()}</button>
            ) : (
                    <Link className="login-btn" to="/login">
                        <i className="fas fa-user-circle"></i>
                        <span className="login-link">SIGN IN</span>
                    </Link>
            )

        const rightDisplay = (
            <div className="nav-right">
                <button className="video-icon"><i className="fas fa-video-plus fa-lg"></i></button>
                {authDisplay}
            </div>)

        return (
            <div className="nav-bar">
                {leftDisplay}
                {centerDisplay}
                {rightDisplay}
            </div>
        )
    }
}

export default Nav;