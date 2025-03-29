// src/components/ProductDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetails.css";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	// Fetch product data based on id (e.g., from an array or API)

	const product = products
		.flatMap((category) => category.items) // Flatten the nested structure
		.find((item) => item.id === id);

	if (!product) {
		return <h2>Product not found</h2>;
	}

	return (
		<section className="product-details-section">
			<div className="product-details-container">
				<div className="product-details-image">
					<img src={product.image} alt={product.name} />
				</div>
				<div className="product-details-info">
					<h1>{product.name}</h1>
					{product.details.length > 0 && (
						<ul>
							{product.details.map((detail, detailIdx) => {
								// Split the detail string at ': '
								const [label, value] = detail.split(": ");
								return (
									<li key={detailIdx}>
										<strong>{label}</strong>: {value}
									</li>
								);
							})}
						</ul>
					)}
					<Link to="/get-in-touch" className="inquire-btn">
						Inquire Now
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
