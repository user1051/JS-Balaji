// src/components/ProductsSection.tsx
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../styles/ProductsSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JP1200P from "../assets/images/JP1200P.png";
import JP1000PAU from "../assets/images/JP1000P-AU.png";
import JP80 from "../assets/images/JP 80.png";
import FlowWrap from "../assets/images/Flow_wrap.png";
import JP600L from "../assets/images/JP600L.png";

const products = [
	{
		category: "Free Flowing Machines",
		name: "JP 1200 P",
		image: JP1200P,
	},
	{
		category: "Non-Free Flowing Machines",
		name: "JP 450 P-AU",
		image: JP1000PAU,
	},
	{
		category: "Liquids and Pastes Products",
		name: "JP600L",
		image: JP600L,
	},
	{
		category: "Line Carton Packing Machine",
		name: "JP 80 (With Servo Auger)",
		image: JP80,
	},
	{
		category: "Flow Wrap Machine",
		name: "Flow Wrap",
		image: FlowWrap,
	},
];

const ProductsSection: React.FC = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		centerMode: true,
		centerPadding: "20px",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerPadding: "5px",
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: "10px",
				},
			},
		],
	};

	return (
		<section className="products-section" id="products">
			<h2>Our Products</h2>
			<Slider {...settings}>
				{products.map((product, index) => (
					<div key={index} className="product-card-wrapper">
						<div className="product-card">
							<h3>{product.category}</h3>
							<img
								src={product.image}
								alt=""
								style={{ width: "70%", height: "70%" }}
							/>
							<h4>{product.name}</h4>
						</div>
					</div>
				))}
			</Slider>
			<Link to="/all-products" className="view-all-button">
				View All Products
			</Link>
		</section>
	);
};

export default ProductsSection;
