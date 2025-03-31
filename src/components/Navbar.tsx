// src/components/Navbar.tsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import LOGO from "../assets/images/LOGO.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="navbar">
			<div className="navbar-logo">
				{/* <h2>JS Balaji Pack Tech</h2> */}
				<Link to="/">
					<img
						src={LOGO}
						alt=""
						style={{ width: 250, height: 60, cursor: "pointer" }}
					/>
				</Link>
			</div>
			<div
				className={`navbar-toggle ${isOpen ? "open" : ""}`}
				onClick={toggleMenu}
			>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
			<div className={`navbar-links ${isOpen ? "active" : ""}`}>
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? "active" : "")}
					onClick={toggleMenu}
				>
					Home
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) => (isActive ? "active" : "")}
					onClick={toggleMenu}
				>
					About
				</NavLink>
				<NavLink
					to="/all-products"
					className={({ isActive }) => (isActive ? "active" : "")}
					onClick={toggleMenu}
				>
					Products
				</NavLink>
				<NavLink
					to="/contact"
					className={({ isActive }) => (isActive ? "active" : "")}
					onClick={toggleMenu}
				>
					Contact
				</NavLink>
			</div>
			<NavLink
				to="/get-in-touch"
				className="navbar-get-in-touch"
				onClick={toggleMenu}
			>
				Get in Touch →
			</NavLink>
		</nav>
	);
};

export default Navbar;
