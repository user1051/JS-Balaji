// src/components/HeroSection.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeroSection.css";
// import heroImage from '../assets/images/hero-image.jpg';

const HeroSection: React.FC = () => {
	return (
		<section className="hero-section" style={{ backgroundImage: `#1a2a44` }}>
			<div className="hero-content">
				<h1>Precision Performance Packaging</h1>
				<p>
					At JS Balaji Pack Tech, we believe packaging is more than
					protection—it's a key to brand identity, sustainability, and customer
					experience.
				</p>
				<Link to="/get-in-touch" className="hero-button">
					Get in Touch →
				</Link>
			</div>
		</section>
	);
};

export default HeroSection;
