import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            dropdown: false
        };
        this.hideDropDown = this.hideDropDown.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
    }

    handleUpdate() {

    }

    showDropdown(e) {
        e.preventDefault();
        this.setState({ dropdown: true }, () => {
            document.addEventListener('click', this.hideDropDown);
        });
    }

    hideDropDown(e) {
        let dropdown = document.getElementsByClassName('dropdown-container')[0];
        let logoutBtn = document.getElementsByClassName('logout-btn')[0];
        if (e.target === logoutBtn || !dropdown.contains(e.target)) {
            this.setState({ dropdown: false }, () => {
                document.removeEventListener('click', this.hideDropDown);
            })
        }  
    }

    renderUserLogo() {
        const { currentUser } = this.props;
        return (
            <div className="user-logo">
                <span>{currentUser.username[0].toUpperCase()}</span> 
            </div>
        )
    }

    renderDropDown() {
        return (
            <div className="dropdown-container">
                <div className="user-info">
                    {this.renderUserLogo()}
                    <div className="username-email">
                        <p className="info-username">
                            {this.props.currentUser.username}
                        </p>
                        <p>
                            {this.props.currentUser.email}
                        </p>
                    </div>
                </div>
                <div className="dropdown-links">
                    <a className="link-item" href="#">
                        <i className="fab fa-github"></i>
                        Github
                    </a>
                    <a className="link-item" href="#">
                        <i className="fab fa-linkedin"></i>
                        LinkedIn
                    </a>
                    <button className="link-item logout-btn" onClick={this.props.logout}>
                        <i className="fas fa-sign-out-alt"></i>
                        Sign out
                    </button>
                </div>
            </div>
        )
    }

    renderSearchBar() {
        return (
            <div className="search-bar-container">
                <form className="search-bar">
                    <input
                    onChange={this.handleUpdate}
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
                <button onClick={this.props.toggleSidebar}><i className="far fa-bars"></i></button>
                <div className="logo">
                    <Link to="/">
                        <img src={window.youcastLogo} alt="logo" />
                    </Link>
                </div>
            </div>
        )

        const centerDisplay = this.renderSearchBar();

        const authDisplay = this.props.currentUser ? (
            <button onClick={this.showDropdown}>{this.renderUserLogo()}</button>
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
                {this.state.dropdown ? this.renderDropDown() : null}
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