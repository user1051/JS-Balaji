// src/components/AboutSection.tsx
import React from "react";
import "../styles/AboutSection.css";

const AboutSection: React.FC = () => {
	return (
		<section className="about-section" id="about">
			<h2>About Us</h2>
			<div className="about-content">
				<div className="about-item">
					<h3>Company</h3>
					<p>
						As a premier entity in the manufacturing sector, JS Balaji Pack Tech
						takes pride in pioneering the production of cutting-edge Flexible
						Packaging Machines. Our extensive portfolio includes
						industry-leading solutions such as the Collar Type Machine, Lined
						Carton Machine, and Multi-Track Machine, designed for precision,
						efficiency, and durability.
					</p>
				</div>
				<div className="about-item">
					<h3>Our Vision</h3>
					<p>
						At JS Balaji Pack Tech, we believe packaging is more than
						protection—it's a key to brand identity, sustainability, and
						customer experience. Our commitment to excellence ensures that every
						machine we manufacture delivers precision, reliability, and value.
					</p>
				</div>
				<div className="about-item">
					<h3>Our Mission</h3>
					<p>
						Our mission is to revolutionize packaging by blending aesthetics,
						functionality, and sustainability—ensuring your products arrive
						safely while making a lasting impression.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
