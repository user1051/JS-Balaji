// src/components/ContactSection.tsx
import React from "react";
import "../styles/ContactSection.css";

const ContactSection: React.FC = () => {
	return (
		<section className="contact-section" id="contact">
			<h2>Contact Us</h2>
			<div className="contact-content">
				<p>
					<strong>Address:</strong> Plot No. MCF-123/A Prem Nagar, Mohna Road,
					Ballabgarh, Faridabad, Haryana, 121004
				</p>
				<p>
					<strong>Contact:</strong> +91 7982492457, +91 9671313643
				</p>
				<p>
					<strong>Email:</strong>{" "}
					<a href="mailto:jsbalajipacktech@gmail.com">
						jsbalajipacktech@gmail.com
					</a>
				</p>
				<p>
					<strong>Website:</strong>{" "}
					<a href="http://jsbpack.in" target="_blank" rel="noopener noreferrer">
						jsbpack.in
					</a>
				</p>
			</div>
		</section>
	);
};

export default ContactSection;
