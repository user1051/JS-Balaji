// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";
import AllProducts from "./components/AllProducts";
import GetInTouch from "./components/GetInTouch";
import ProductDetails from "./components/ProductDetails";

const App: React.FC = () => {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<HeroSection />
								<ProductsSection />
								<AboutSection />
								<ContactSection />
								<Footer />
							</>
						}
					/>
					<Route path="/about" element={<AboutSection />} />
					<Route path="/products" element={<ProductsSection />} />
					<Route path="/contact" element={<ContactSection />} />
					<Route path="/all-products" element={<AllProducts />} />
					<Route path="/product/:id" element={<ProductDetails />} />
					<Route path="/get-in-touch" element={<GetInTouch />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
