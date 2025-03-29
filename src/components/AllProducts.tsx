// src/components/AllProducts.tsx
import React, { useState } from "react";
import "../styles/AllProducts.css";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const AllProducts: React.FC = () => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<section className="all-products-section">
			<h2>All Products</h2>
			{products.map((category, index) => (
				<div key={index} className="category-section">
					<h3>{category.category}</h3>
					<div className="products-grid">
						{category.items.map((product, idx) => (
							<div
								key={idx}
								className="product-card"
								onClick={() => setIsHovered(!isHovered)}
							>
								<img
									src={product.image}
									alt={product.name}
									className="product-image"
								/>
								{/* <h4>{product.category}</h4> */}
								<div className="product-details">
									<p>{product.name}</p>

									<Link
										to={`/product/${product.id}`}
										className={`view-details-btn ${isHovered ? "visible" : ""}`}
									>
										View Details
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</section>
	);
};

export default AllProducts;
