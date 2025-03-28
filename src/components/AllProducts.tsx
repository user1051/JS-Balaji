// src/components/AllProducts.tsx
import React from "react";
import "../styles/AllProducts.css";
import JP1200P from "../assets/images/JP1200P.png";
import JP1000P from "../assets/images/JP1000P.png";
import JP1000L from "../assets/images/JP1000L.png";
import JP450G from "../assets/images/JP450G.png";
import JP450P from "../assets/images/JP450P.png";
import JP450PAU from "../assets/images/JP450P-AU.png";
import JP1000PAU from "../assets/images/JP1000P-AU.png";
import JP600L from "../assets/images/JP600L.png";
import JP800L from "../assets/images/JP800L.png";
import JP80 from "../assets/images/JP 80.png";
import JP12 from "../assets/images/JP12.png";
import FlowWrap from "../assets/images/Flow_wrap.png";

const placeholderImage = "";

const allProducts = [
	{
		category: "Free Flowing Machines",
		items: [
			{
				name: "JP 1000 P",
				image: JP1000P,
				details: [
					"Sealing: 4 Side Seal",
					"Speed: 50-70 strokes/min",
					"Filling Capacity: 10gm - 300gm",
					"Product: Free-flowing powder",
					"Control: Touch Screen (HMI), PLC-based",
					"Material: SS 316 / 304 contact parts",
					"Power: 2.2 KW motor, 14 KW load",
					"Dimensions: 3200 x 2600 x 2100 mm",
					"Weight: 3500 kg (Net)",
					"Efficiency: 90%, Scrap <2%",
				],
			},
			{
				name: "JP 1200 P",
				image: JP1200P,
				details: [
					"Speed: 50-70 strokes/min",
					"Filling Capacity: 10gm - 100gm",
					"Product: Free-flowing powder",
					"Control: Touch Screen (HMI), PLC-based",
					"Material: SS 304 / 316 contact parts",
					"Power: 2.2 KW motor, 14 KW load",
					"Dimensions: 3200 x 2600 x 2100 mm",
					"Weight: 3500 kg (Net)",
					"Efficiency: 90%, Scrap <2%",
				],
			},
			{
				name: "JP 450 M",
				image: JP450P,
				details: [
					"Sealing: Center Seal",
					"Speed: 40-70 strokes/min",
					"Power Consumption: 7 KW",
					"Material: SS 304/316 contact parts, MS frame with powder coating",
					"Max Reel Diameter: 560 mm",
					"Max Reel Width: 600mm/800mm",
					"Core ID: 76 mm",
					"Air Requirement: 1000 IPM, 9.6kg pressure (extra cost)",
					"Cutting Type: Plain/Zigzag with batch cutting or horizontal sachet cutting",
					"Net Weight: 1400kg approx",
					"Reel Feed System: Single reel film laminate stock reel feed with sensor controlled motorized web feed error connection system",
					"Accuracy & Scrap Rate: 1.2% Depend upon Product & Operator Efficiency",
				],
			},
			{
				name: "JP 450 G",
				image: JP450G,
				details: [
					"Sealing: Center Seal",
					"Speed: 50-70 strokes/min",
					"Filling Capacity: 10 gm - 1000 gm",
					"Product: Free-flowing products",
					"Control: Touch Screen (HMI), PLC-based",
					"Filling Mechanism: Cup Filler",
					"Material: SS 304/316 contact parts",
					"Power: 2.2 KW motor, 14 KW load",
					"Dimensions: 3200 × 2600 × 2100 mm",
					"Contact Parts: SS 316 / 304",
					"Indirect Contact Parts: SS 304 / 316",
					"Main Control Panel: Air cooled panel – BCH make or Rittal",
					"Weight: 3500 kg (Net), 4000 kg (Gross)",
					"Efficiency: 90%, Scrap <2%",
				],
			},
		],
	},
	{
		category: "Non-Free Flowing Machines",
		items: [
			{
				name: "JP 450 P-AU",
				image: JP450PAU,
				details: [
					"Sealing Style: Center Seal",
					"Speed: 30-100 pouches/min",
					"Filling Capacity: 5 gm - 2000 gm",
					"Power Consumption: 4 KW",
					"Main Motor: 2.2 KW, 3-Phase, 415V",
					"Machine Dimensions: 2m × 1.5m × 3m (L × W × H)",
					"Weight: 1000 kg (Net), 1200 kg (Gross)",
					"Air Compressor: 4-cylinder, single-stage, 3 HP, 100L tank",
					"Sealing Mechanism: Mechanical/Pneumatic/Servo",
					"Control: Automatic with Touch Screen Display",
					"Safety: Covered with Acrylic Sheet",
					"Machine Structure: SS 304/316 contact parts, powder-coated main body",
				],
			},
			{
				name: "JP 1200 P-AU",
				image: JP1000PAU,
				details: [
					"Sealing Style: 4 Side Seal",
					"Speed: 60-80 strokes/min",
					"Filling Capacity: 10 gm - 100 gm",
					"Product: Non free-flowing powder",
					"Control: Touch Screen (HMI), PLC-based",
					"Filling Mechanism: Servo Auger Filler",
					"Material: SS 304 / 316 contact parts",
					"Power: 2.2 KW motor, 14 KW load",
					"Dimensions: 3200 × 2600 × 2100 mm",
					"Weight: 3500 kg (Net), 4000 kg (Gross)",
					"Efficiency: 90%, Scrap <2%",
				],
			},
		],
	},
	{
		category: "Liquids and Pastes Products",
		items: [
			{
				name: "JP 600 L",
				image: JP600L,
				details: [
					"Product To Be Packed: Any type of Liquid & Paste",
					"Sealing Style: 4 Side Seal",
					"Speed: 50-70 strokes/min",
					"Filling Capacity: 2 gm - 50 gm",
					"Max Pouch Length: 200 mm",
					"Filling Mechanism: Piston Filler",
					"Control: Touch Screen (HMI), PLC-based",
					"Material: SS 304 / 316L contact parts",
					"Power: 2.2 KW motor, 14 KW load",
					"Dimensions: 3200 × 2600 × 2100 mm",
					"Weight: 3500 kg (Net), 4000 kg (Gross)",
					"Efficiency: 90%, Scrap <2%",
				],
			},
			{
				name: "JP 1000 L",
				image: JP1000L,
				details: [
					"Sealing Style: 4 Side Seal",
					"Speed: 50-70 strokes/min",
					"Filling Capacity: 2 gm - 50 gm",
					"Filling Mechanism: Piston Filler",

					"Control: Touch Screen (HMI), PLC-based",
					"Perforation and Cutting: As per customer requirement",
					"Material: SS 304 / 316L contact parts",
					"Power: 2.2 KW motor, 14 KW load",
					"Dimensions: 3200 × 2600 × 2100 mm",
					"Weight: 3500 kg (Net), 4000 kg (Gross)",
					"Efficiency: 90%, Scrap <2%",
				],
			},
			{
				name: "JP 1200 L",
				image: JP1000L,
				details: [
					"Product: Liquid & Paste",
					"Sealing Style: 4 Side Seal",
					"Speed: 50-70 strokes/min",
					"Product To Be Packed: Any type of Liquid & Paste",
					"Filling Capacity: 2 gm - 50 gm",
					"Filling Mechanism: Piston Filler",
					"Sealing Drives: Mechanical – Cam driven with individual sealing jaw setting",
					"Control: Touch Screen (HMI), PLC-based",
					"Perforation and Cutting: As per customer requirement",
					"Material: SS 304 / 316L contact parts",
					"Power: 2.2 KW motor, 14 KW load",
					"Dimensions: 3200 × 2600 × 2100 mm",
					"Weight: 3500 kg (Net), 4000 kg (Gross)",
					"Efficiency: 90%, Scrap <2%",
				],
			},
			{
				name: "JP 800 L",
				image: JP800L,
				details: [
					"Sealing Style: 4 Side Seal",
					"Speed: 50-70 strokes/min",
					"Filling Capacity: 2 gm - 50 gm",
					"Filling Mechanism: Piston Filler",
					"Max Pouch Length: 200 mm",
					"Control: Touch Screen (HMI), PLC-based",
					"Material: SS 304 / 316L contact parts",
					"Power: 2.2 KW motor, 14 KW load",
					"Dimensions: 3200 × 2600 × 2100 mm",
					"Weight: 3500 kg (Net), 4000 kg (Gross)",
					"Efficiency: 90%, Scrap <2%",
				],
			},
		],
	},
	{
		category: "Line Carton Packing Machine",
		items: [
			{
				name: "JP 80 (With Servo Auger)",
				image: JP80,
				details: [
					"Machine Mechanism: Intermittent",
					"Stations: 22",
					"Speed: 48-50 cartons/min",
					"Power Consumption: 8 KW",
					"Electric Supply: 3 Phase, 415V, 1440 RPM",
					"Main Motor: 3HP, 415V, 1440 RPM",
					"Weight: 2000 Kg",
					"Packing Limit: 15g - 1000g (depends on product density)",
					"Laminate Draw Off System: PLC-based Servo Driven",
					"Packing Material: Duplex carton with heat-sealable liner",
					"Filling Unit: Servo Auger, Cap Filler, Multi-Head Weigher",
					"Gluing: Cold gluing (optional system)",
					"Carton Size: Min. 60mm / Max. 200mm",
				],
			},
			{
				name: "JP 90 (With Twin Servo Auger)",
				image: JP80,
				details: [
					"Machine Mechanism: Intermittent",
					"Stations: 28",
					"Speed: 80-85 Cartons/min (depends on product & pack size)",
					"Power Consumption: 10 KW",
					"Main Motor: 5 HP, 415V, 3 Phases, 1440 RPM",
					"Weight: 3000 Kg",
					"Packing Limit: 15g - 1000g (depends on product density)",
					"Packing Material: Duplex carton with heat-sealable liner",
					"Filling Unit: Servo Auger, Cup Filler (as per requirement)",
					"Magazine Unit: Double Feeding Unit",
					"Gluing: Cold & Hot Gluing (optional)",
					"Carton Size: L :Min. 60mm/ Max. 200mm, W :Min. 22mm/ Max. 108mm",
				],
			},
			{
				name: "JP 12",
				image: JP12,
				details: [
					"Machine Type: Intermittent",
					"Stations: 14",
					"Speed: 25-30 Cartons/min",
					"Power Consumption: 5 KW",
					"Main Motor: 3 HP, 415V, 3 Phases, 1440 RPM",
					"Weight: 1400 Kg",
					"Packing Limit: 15g - 1000g (depends on product density)",
					"Coding Unit: Embossing station or Laser print option",
					"Packing Material: Duplex carton with heat-sealable liner",
					"Filling Unit: Servo Auger, Cup Filler (as per requirement)",
					"Gluing: Cold Gluing & Hot Gluing (optional)",
				],
			},
		],
	},
	{
		category: "Flow Wrap Machine",
		items: [
			{
				name: "Flow Wrap",
				image: FlowWrap,
				details: [
					"Machine Type: Automatic Feeding System with L-Shape Conveyor",
					"Contact Parts: SS Made",
					"Chain Conveyor: 8 ft long with auto feeder",
					"Power Consumption: 3 KW",
					"Machine Body: SLIZER Fabricated (MS)",
					"Weight: Approx. 1400 Kg",
					"Body Covers: MS with Powder Coating",
					"Main Motor: 2HP, Single Phase or Servo Motor",
					"Max Film Roll Width: 250 mm",
					"Packaging Film: Heat-sealable laminated film (roll form)",
					"Packing Speed: 80-150 pouches/min",
					"Product Application: 50gm, 75gm & 100gm",
					"Sealing Mechanism: Continuous",
					"Sealing Type: Center Seal",
				],
			},
		],
	},
	{
		category: "Pouch Packaging Machine",
		items: [
			{
				name: "JP 1000 P",
				image: JP1000P,
				details: [
					"Sealing: 4 Side Seal",
					"Speed: 50-70 strokes/min",
					"Filling Capacity: 10gm - 300gm",
					"Product: Free-flowing powder",
					"Main Motor: 2.2 KW, 3 Phase, 415 V",
					"Control: Touch Screen (HMI), PLC-based",
					"Material: SS 316 / 304 contact parts",
					"Power: 2.2 KW motor, 14 KW load",
					"Dimensions: 3200 x 2600 x 2100 mm",
					"Weight: 3500 kg (Net)",
					"Efficiency: 90%, Scrap <2%",
					" Machine Weight: 3500 Kg (Net), 4000Kg (Gross)",
					"Pneumatics: FESTO or equivalent",
					"Material Contact Parts: SS 316/304",
				],
			},
			{
				name: "JP 1200 P",
				image: JP1200P,
				details: [
					"Speed: 50-70 strokes/min",
					"Filling Capacity: 10gm - 100gm",
					"Product: Free-flowing powder",
					"Control: Touch Screen (HMI), PLC-based",
					"Material: SS 304 / 316 contact parts",
					"Power: 2.2 KW motor, 14 KW load",
					"Dimensions: 3200 x 2600 x 2100 mm",
					"Weight: 3500 kg (Net)",
					"Efficiency: 90%, Scrap <2%",
					"Pneumatics: FESTO or equivalent",
					"Material Contact Parts: SS 304/316",
				],
			},
			{
				name: "JP 450 M",
				image: JP450P,
				details: [
					"Sealing: Center Seal",
					"Speed: 40-70 strokes/min",
					"Power Consumption: 7 KW",
					"Material: SS 304/316 contact parts, MS frame with powder coating",
					"Max Reel Diameter: 560 mm",
					"Max Reel Width: 600mm/800mm",
					"Core ID: 76 mm",
					"Air Requirement: 1000 IPM, 9.6kg pressure (extra cost)",
					"Cutting Type: Plain/Zigzag with batch cutting or horizontal sachet cutting",
					"Net Weight: 1400kg approx",
					"Reel Feed System: Single reel film laminate stock reel feed with sensor controlled motorized web feed error connection system",

					"Accuracy & Scrap Rate: 1.2% Depend upon Product & Operator Efficiency",
				],
			},
			{
				name: "JP 450 G",
				image: JP450G,
				details: [
					"Sealing: Center Seal",
					"Speed: 50-70 strokes/min",
					"Filling Capacity: 10 gm - 1000 gm",
					"Product: Free-flowing products",
					"Control: Touch Screen (HMI), PLC-based",
					"Filling Mechanism: Cup Filler",
					"Material: SS 304/316 contact parts",
					"Power: 2.2 KW motor, 14 KW load",
					"Dimensions: 3200 × 2600 × 2100 mm",
					"Contact Parts: SS 316 / 304",
					"Indirect Contact Parts: SS 304 / 316",
					"Main Control Panel: Air cooled panel – BCH make or Rittal",
					"Weight: 3500 kg (Net), 4000 kg (Gross)",
					"Efficiency: 90%, Scrap <2%",
				],
			},
		],
	},
	{
		category: "Automatic Food Packaging Machine",
		items: [
			{
				name: "JP 1000 P",
				image: JP1000P,
				details: [
					"Sealing Style: 4 Side Seal",
					"Speed: 50 - 70 Strokes/min",
					"Product To Be Packed: Any type of free flowing powder",
					"Filling Capacity: 10gm - 300gm",
					"Filling Mechanism: Slide Filler",
					"Control System: PLC-based, Touch Screen (HMI)",
					"Main Motor: 2.2 KW, 3 Phase, 415 V",
					"Machine Efficiency: 90%",
					"Machine Dimensions: 3200 mm (L) x 2600 mm (W) x 2100 mm (H)",
					"Machine Weight: 3500 Kg (Net), 4000 Kg (Gross)",
					"Pneumatics: FESTO or equivalent",
					"Material Contact Parts: SS 316/304",
				],
			},
			{
				name: "JP 1200 P",
				image: JP1200P,
				details: [
					"Speed: 50-70 strokes/min",
					"Filling Capacity: 10gm - 100gm",
					"Product: Free-flowing powder",
					"Control: Touch Screen (HMI), PLC-based",
					"Material: SS 304 / 316 contact parts",
					"Power: 2.2 KW motor, 14 KW load",
					"Dimensions: 3200 x 2600 x 2100 mm",
					"Weight: 3500 kg (Net)",
					"Efficiency: 90%, Scrap <2%",
				],
			},
			{
				name: "JP 450 M",
				image: JP450P,
				details: [
					"Sealing: Center Seal",
					"Speed: 40-70 strokes/min",
					"Power Consumption: 7 KW",
					"Material: SS 304/316 contact parts, MS frame with powder coating",
					"Max Reel Diameter: 560 mm",
					"Max Reel Width: 600mm/800mm",
					"Core ID: 76 mm",
					"Air Requirement: 1000 IPM, 9.6kg pressure (extra cost)",
					"Cutting Type: Plain/Zigzag with batch cutting or horizontal sachet cutting",
					"Net Weight: 1400kg approx",
					"Reel Feed System: Single reel film laminate stock reel feed with sensor controlled motorized web feed error connection system",
					"Accuracy & Scrap Rate: 1.2% Depend upon Product & Operator Efficiency",
				],
			},
			{
				name: "JP 450 G",
				image: JP450G,
				details: [
					"Sealing: Center Seal",
					"Speed: 50-70 strokes/min",
					"Filling Capacity: 10 gm - 1000 gm",
					"Product: Free-flowing products",
					"Control: Touch Screen (HMI), PLC-based",
					"Filling Mechanism: Cup Filler",
					"Material: SS 304/316 contact parts",
					"Power: 2.2 KW motor, 14 KW load",
					"Dimensions: 3200 × 2600 × 2100 mm",
					"Contact Parts: SS 316 / 304",
					"Indirect Contact Parts: SS 304 / 316",
					"Main Control Panel: Air cooled panel – BCH make or Rittal",
					"Weight: 3500 kg (Net), 4000 kg (Gross)",
					"Efficiency: 90%, Scrap <2%",
				],
			},
		],
	},
	{
		category: "Spare Parts",
		items: [
			{ name: "Helical Gearbox Motor", image: placeholderImage, details: [] },
			{ name: "Yellow Silicon Wheel", image: placeholderImage, details: [] },
			{ name: "Pump and Motor", image: placeholderImage, details: [] },
			{ name: "Timing Belt", image: placeholderImage, details: [] },
			{ name: "Continuous Band Sealer", image: placeholderImage, details: [] },
			{ name: "12inch Mild Steel", image: placeholderImage, details: [] },
			{ name: "Machine Gears & Shafts", image: placeholderImage, details: [] },
			{ name: "Collar Suit Parts", image: placeholderImage, details: [] },
			{ name: "Stainless Steel Disc", image: placeholderImage, details: [] },
			{ name: "Conveyor System", image: placeholderImage, details: [] },
			{ name: "Machine Blades", image: placeholderImage, details: [] },
			{
				name: "Box Strapping Machine Spare Plunger Assembly",
				image: placeholderImage,
				details: [],
			},
			{ name: "Machine Hinge", image: placeholderImage, details: [] },
			{
				name: "Form Fill Seal Machine Chute",
				image: placeholderImage,
				details: [],
			},
			{
				name: "Vacuum Packaging Spare Parts Combo",
				image: placeholderImage,
				details: [],
			},
		],
	},
];

const AllProducts: React.FC = () => {
	return (
		<section className="all-products-section">
			<h2>All Products</h2>
			{allProducts.map((category, index) => (
				<div key={index} className="category-section">
					<h3>{category.category}</h3>
					<div className="products-grid">
						{category.items.map((product, idx) => (
							<div key={idx} className="product-card">
								<img
									src={product.image}
									alt={product.name}
									className="product-image"
								/>
								{/* <h4>{product.category}</h4> */}
								<div className="product-details">
									<p>{product.name}</p>
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
