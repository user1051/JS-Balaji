// src/components/GetInTouch.tsx
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../styles/GetInTouch.css";
import { CircularProgress, TextField } from "@mui/material";

interface FormData {
	name: string;
	email: string;
	mobile: string;
	message: string;
}

// Define the type for EmailJS response and error
interface EmailJSResponse {
	text: string;
}

const GetInTouch: React.FC = () => {
	useEffect(() => {
		emailjs.init("xNsHoyWWQetIh6D84"); // Replace with your EmailJS Public Key
	}, []);
	const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state
	const [showPopup, setShowPopup] = useState<boolean>(false); // Popup state

	const [showErrorPopup, setShowErrorPopup] = useState<boolean>(false);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		mobile: "",
		message: "",
	});
	const [status, setStatus] = useState("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (
			!formData.name ||
			!formData.email ||
			!formData.mobile ||
			!formData.message
		) {
			setShowErrorPopup(true);
			return;
		}

		// Email format validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			setStatus("Please enter a valid email address.");
			setShowErrorPopup(true);
			return;
		}

		// Mobile number length validation
		if (formData.mobile.length < 10) {
			setStatus("Mobile number must be at least 10 digits.");
			setShowErrorPopup(true);
			return;
		}
		setIsLoading(true); // Start loading
		setStatus("");
		// EmailJS configuration
		emailjs
			.send(
				process.env.REACT_APP_SERVICE_KEY, // Replace with your EmailJS Service ID
				process.env.REACT_APP_TEMPLATE_KEY, // Replace with your EmailJS Template ID

				{
					name: formData.name,
					email: formData.email,
					mobile: formData.mobile,
					title: formData.message,
				},
				process.env.REACT_APP_PUBLIC_KEY // Replace with your EmailJS Public Key
			)
			.then(
				(result: EmailJSResponse) => {
					console.log(result.text);
					setStatus("Message sent successfully!");
					setFormData({ name: "", email: "", mobile: "", message: "" });
					setIsLoading(false);
					setShowPopup(true);
				},
				(error: EmailJSResponse) => {
					console.error("EmailJS Error:", error.text);
					setIsLoading(false); // Stop loading
					setStatus("Failed to send message!. Please try again later.");
				}
			);
	};
	const closePopup = () => {
		setShowPopup(false);
	};
	const closeErrorPopup = () => {
		setShowErrorPopup(false);
	};
	return (
		<section className="get-in-touch-section">
			<div className="form-container">
				<h2>Get in Touch</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="mobile">Mobile Number</label>
						<input
							type="tel"
							id="mobile"
							name="mobile"
							value={formData.mobile}
							onChange={handleChange}
							maxLength={10}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
						/>
					</div>
					<button type="submit" disabled={isLoading}>
						{isLoading ? (
							// <span className="loader"></span> // Loader during loading
							<CircularProgress color="inherit" />
						) : (
							"Send Message" // Default text
						)}
					</button>
				</form>
				{/* {status && <p className="status-message">{status}</p>} */}
			</div>
			{showPopup && (
				<div className="popup-overlay">
					<div className="popup">
						<h3>Request Submitted Successfully!</h3>
						<p>Thank you for reaching out. We'll get back to you soon!</p>
						<button onClick={closePopup}>Close</button>
					</div>
				</div>
			)}
			{showErrorPopup && (
				<div className="popup-overlay">
					<div className="popup">
						<h3>Incomplete Form</h3>
						<p>{status}</p>
						<button onClick={closeErrorPopup}>Close</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default GetInTouch;
