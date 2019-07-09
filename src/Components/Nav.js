import React, { Component } from 'react';

class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="text-white">Tasks
                    <span className="badge badge-pill badge-light ml-2">
                        {this.props.length}
                    </span> 
                </a>
        </nav>
        )
    }
}

export default Nav;