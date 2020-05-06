import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.hideModalSB = this.hideModalSB.bind(this);
        this.state = {
            hide: false
        }
    }

    componentDidMount() {
        if (!this.props.partial) this.props.toggleSidebar();
    }

    render() {
        if (this.props.partial && this.props.location.pathname.includes("/watch")) return null;

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

    hideModalSB() {
        return () => {
            this.setState({ hide: true });
            setTimeout(() => {
                this.setState({ hide: false });
                this.props.toggleSidebar();
            }, 230)
        }
    }

    renderModalSB() {
        let anime = 'slide-out wide';
        if (this.state.hide) anime = 'slide-in';
        return (
            <div className="modal-container" onClick={this.hideModalSB()}>
                <div className={`modal-sidebar-container ${anime}`}>
                    <div className="sidebar-top">
                        <div className="nav-left">
                            <div className="hamburger-btn"><i className="far fa-bars"></i></div>
                            <div className="logo">
                                <Link to="/">
                                    <img src={window.youcastLogo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="modal-sidebar-list">
                        <Link className="modal-list-item home" to="/">
                            <i className="fas fa-home-lg-alt modal-icon"></i>
                            <span className="sbit">Home</span>
                        </Link>
                        <a className="modal-list-item" href="https://github.com/xdeng9" target="_blank">
                            <i className="fab fa-github modal-icon"></i>
                            <span className="sbit">Github</span>
                        </a>
                        <a className="modal-list-item" href="http://linkedin.com/in/xideng" target="_blank">
                            <i className="fab fa-linkedin modal-icon"></i>
                            <span className="sbit">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Sidebar);