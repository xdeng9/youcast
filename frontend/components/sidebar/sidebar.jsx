import React from 'react';

class Sidebar extends React.Component {

    render() {
        console.log(this.props.partial)
        let sidebarSize = this.props.partial ? 'partial-size' : 'full-size';
        return (
            <div className={`${sidebarSize}`}>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item home">
                        <i className="fas fa-home-lg-alt"></i>
                        <span className="sbit">Home</span>    
                    </li>
                    <li className="sidebar-list-item">
                        <i className="fab fa-github"></i>
                        <span className="sbit">Github</span>
                    </li>
                    <li className="sidebar-list-item">
                        <i className="fab fa-linkedin"></i>
                        <span className="sbit">LinkedIn</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;