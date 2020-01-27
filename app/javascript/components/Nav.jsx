import React, { Component } from "react"
import { Link } from "react-router-dom";
import "../../assets/stylesheets/application.css"


const navLinkStyle = {
    color: "#aaa",
    display: "block",
    lineHeight: "56px",
    padding: "0 1vw",
    textDecoration: "none"
};

const liStyle = {
    fontSize: "2vw"
}

class Nav extends Component {
    render() {
        return (
            <nav style={{width: "80%"}}>
                <h3 style={{fontSize: "5vh"}}>ME: HK</h3>
                <ul className="nav-links">
                <Link style={navLinkStyle} to="/">
                    <li style={liStyle}>Home</li>
                </Link>
                <Link style={navLinkStyle} to="/read">
                    <li style={liStyle}>Read</li>
                </Link>
                 <Link style={navLinkStyle} to="/about">
                    <li style={liStyle}>About</li>
                </Link>
                {this.props.showPost && <li style={navLinkStyle} style={{cursor: "pointer", fontSize: "2vw"}} onClick={this.props.onPostClick}>Post</li>}
                </ul>
            </nav>
        );
    }
}

export default Nav;