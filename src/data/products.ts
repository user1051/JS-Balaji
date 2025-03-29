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
import JP1200L from "../assets/images/JP1200L.png";
import JP90 from "../assets/images/JP90.png";
import HGM from "../assets/images/HGM.png";
import PAM from "../assets/images/PAM.png";
import TB from "../assets/images/TB.jpg";
import CBS from "../assets/images/CBS.jpg";
import MS from "../assets/images/MS.jpg";
import GS from "../assets/images/G&S.jpg";
import SSD from "../assets/images/SSD.png";
import SW from "../assets/images/SW.png";
import CSP from "../assets/images/CSP.png";
import CS from "../assets/images/CS.png";
import MB from "../assets/images/MB.png";
import BSP from "../assets/images/BSP.png";
import MH from "../assets/images/MH.png";
import SMC from "../assets/images/SMC.png";
import PSPC from "../assets/images/PSPC.png";
import VSPC from "../assets/images/VSPC.png";
import VPF from "../assets/images/VPF.png";
import BF from "../assets/images/BF.png";
import HAG from "../assets/images/HAG.png";
import JH from "../assets/images/JH.png";
import SMP from "../assets/images/SMP.png";

export interface Product {
	category: string;
	items: { id: string; name: string; image: string; details: string[] }[];
}
export const products: Product[] = [
	{
		category: "Free Flowing Machines",
		items: [
			{
				id: "ff1",
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
				id: "ff2",
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
				id: "ff3",
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
				id: "ff4",
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
				id: "nff1",
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
				id: "nff2",
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
				id: "lpp1",
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
				id: "lpp2",
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
				id: "lpp3",
				name: "JP 1200 L",
				image: JP1200L,
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
				id: "lpp4",
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
				id: "lcp1",
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
				id: "lcp2",
				name: "JP 90 (With Twin Servo Auger)",
				image: JP90,
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
				id: "lcp3",
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
				id: "fw1",
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
				id: "pp1",
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
				id: "pp2",
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
				id: "pp3",
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
				id: "pp4",
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
				id: "afp1",
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
				id: "afp2",
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
				id: "afp3",
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
				id: "afp4",
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
			{
				id: "sp1",
				name: "Helical Gearbox Motor",
				image: HGM,
				details: [],
			},
			{
				id: "sp2",
				name: "Yellow Silicon Wheel",
				image: SW,
				details: [],
			},
			{
				id: "sp3",
				name: "Pump and Motor",
				image: PAM,
				details: [],
			},
			{ id: "sp4", name: "Timing Belt", image: TB, details: [] },
			{
				id: "sp5",
				name: "Continuous Band Sealer",
				image: CBS,
				details: [],
			},
			{
				id: "sp6",
				name: "12inch Mild Steel",
				image: MS,
				details: [],
			},
			{
				id: "sp7",
				name: "Machine Gears & Shafts",
				image: GS,
				details: [],
			},
			{
				id: "sp8",
				name: "Collar Suit Parts",
				image: CSP,
				details: [],
			},
			{
				id: "sp9",
				name: "Stainless Steel Disc",
				image: SSD,
				details: [],
			},
			{
				id: "sp10",
				name: "Conveyor System",
				image: CS,
				details: [],
			},
			{
				id: "sp11",
				name: "Machine Blades",
				image: MB,
				details: [],
			},
			{
				id: "sp12",
				name: "Box Strapping Machine Spare Plunger Assembly",
				image: BSP,
				details: [],
			},
			{
				id: "sp13",
				name: "Machine Hinge",
				image: MH,
				details: [],
			},
			{
				id: "sp14",
				name: "Form Fill Seal Machine Chute",
				image: SMC,
				details: [],
			},
			{
				id: "sp15",
				name: "Vacuum Packaging Spare Parts Combo",
				image: VSPC,
				details: [],
			},
			//
			{
				id: "sp16",
				name: "Pouch Packaging Spare Parts Combo",
				image: PSPC,
				details: [],
			},
			{
				id: "sp17",
				name: "Vacuum Packaging Machines Filter",
				image: VPF,
				details: [],
			},
			{
				id: "sp18",
				name: "Bag Former",
				image: BF,
				details: [],
			},
			{
				id: "sp19",
				name: "Hot Air Gun",
				image: HAG,
				details: [],
			},
			{
				id: "sp20",
				name: "Bag sewing machine Spare Parts",
				image: SMP,
				details: [],
			},
			{
				id: "sp21",
				name: "Jacket Heater",
				image: JH,
				details: [],
			},
		],
	},
];
