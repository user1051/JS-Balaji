// src/components/Footer.tsx
import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<p>&copy; 2025 JS Balaji Pack Tech. All rights reserved.</p>
			<p>
				<a href="http://jsbpack.in" target="_blank" rel="noopener noreferrer">
					jsbpack.in
				</a>
			</p>
		</footer>
	);
};

export default Footer;
