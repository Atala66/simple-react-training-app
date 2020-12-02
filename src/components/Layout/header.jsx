import React, { Component } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import header_styles from '../../styles/header_styles.scss';

// ECMA 5
class Header extends Component {
	render() {
		return (
			<nav>
				<ul className="navbar">
					<li>
						<Link to="/" className="navbar-link">Home</Link>
					</li>
					<li>
						<Link to="/new-form" className="navbar-link">New Form</Link>
					</li>
					<li>
						<Link to="/about" className="navbar-link">About Us</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Header;
