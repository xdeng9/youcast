import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class Sidebar extends React.Component {

    render() {
        if (this.props.location.pathname.includes("/watch")) return null;

        let sidebarSize = this.props.partial ? 'partial-size' : 'full-size';
        return (
            <div className={`${sidebarSize}`}>
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
            </div>
        )
    }
}

export default withRouter(Sidebar);