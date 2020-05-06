import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class Sidebar extends React.Component {

    render() {
        if (this.props.partial) return null;

        if (this.props.location.pathname.includes("/watch")) {
            return this.renderModalSB();
        }

        let sidebarSize = this.props.partial ? 'partial-size' : 'full-size';
        return (
            <div className={`${sidebarSize}`}>
                {this.renderSidebarList()}
            </div>
        )
    }

    renderSidebarList() {
        return (
            <ul className="sidebar-list">
                <Link className="sidebar-list-item home" to="/">
                    <i className="fas fa-home-lg-alt"></i>
                    <span className="sbit">Home</span>
                </Link>
                <a className="sidebar-list-item" href="https://github.com/xdeng9" target="_blank">
                    <i className="fab fa-github"></i>
                    <span className="sbit">Github</span>
                </a>
                <a className="sidebar-list-item" href="http://linkedin.com/in/xideng" target="_blank">
                    <i className="fab fa-linkedin"></i>
                    <span className="sbit">LinkedIn</span>
                </a>
            </ul>
        )
    }

    renderModalSB() {
        let anime = this.props.partial ? 'slide-in' : 'slide-out wide';
        let bg = this.props.partial ? '' : 'modal-container'
        return (
            <div className={`${bg}`}>
                <div className={`modal-sidebar-container ${anime}`}>
                    <div className="sidebar-top">
                        <div className="nav-left">
                            <button onClick={this.props.toggleSidebar}><i className="far fa-bars"></i></button>
                            <div className="logo">
                                <Link to="/">
                                    <img src={window.youcastLogo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="modal-sidebar-list">
                        <Link className="sidebar-list-item home" to="/">
                            <i className="fas fa-home-lg-alt"></i>
                            <span className="sbit">Home</span>
                        </Link>
                        <a className="sidebar-list-item" href="https://github.com/xdeng9" target="_blank">
                            <i className="fab fa-github"></i>
                            <span className="sbit">Github</span>
                        </a>
                        <a className="sidebar-list-item" href="http://linkedin.com/in/xideng" target="_blank">
                            <i className="fab fa-linkedin"></i>
                            <span className="sbit">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Sidebar);