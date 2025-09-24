"use client";
import React, { useRef, useState, useEffect } from "react";
import "./ProjectsCarousel.css";

const projects = [
	{
		image: "https://picsum.photos/320/200?t=1",
		title: "Project Alpha",
		titleClass: "text-cyan-400",
		description:
			"Exploring the neon-drenched landscapes of a digital frontier. AI-driven procedural generation creates infinite cityscapes.",
		progress: 65,
		phase: "PHASE II",
		status: "65% COMPLETE",
		tech: ["Neural Networks", "Voxel Systems", "Quantum Rendering"],
	},
	{
		image: "https://picsum.photos/320/200?t=2",
		title: "Neuro-Link UI",
		titleClass: "text-blue-400",
		description:
			"Designing intuitive interfaces for brain-computer interaction. Holographic elements respond to neural patterns.",
		progress: 42,
		phase: "PHASE I",
		status: "42% COMPLETE",
		tech: ["BCI Framework", "Gesture Recognition", "Thought Mapping"],
	},
	{
		image: "https://picsum.photos/320/200?t=3",
		title: "Quantum Entanglement",
		titleClass: "text-purple-400",
		description:
			"Visualizing complex quantum states through advanced rendering techniques. Real-time simulation of parallel realities.",
		progress: 89,
		phase: "PHASE III",
		status: "89% COMPLETE",
		tech: ["Q-Bit Architecture", "Multiverse Modeling", "Probability Fields"],
	},
	{
		image: "https://picsum.photos/320/200?t=4",
		title: "Project Chimera",
		titleClass: "text-amber-400",
		description:
			"Developing next-gen propulsion systems for deep space exploration. Fusion drive concepts push beyond known physics.",
		progress: 51,
		phase: "PHASE II",
		status: "51% COMPLETE",
		tech: ["Dark Energy Capture", "Plasma Containment", "Gravitational Lensing"],
	},
	{
		image: "https://picsum.photos/320/200?t=5",
		title: "Aether Network",
		titleClass: "text-emerald-400",
		description:
			"Building a decentralized data network leveraging quantum blockchain and next-gen P2P technology.",
		progress: 78,
		phase: "PHASE III",
		status: "78% COMPLETE",
		tech: ["Quantum Encryption", "Self-Healing Nodes", "Data Holograms"],
	},
];

function getCardClass(idx: number, current: number) {
	if (idx === current) return "carousel-card is-active";
	if (idx === current - 1) return "carousel-card is-prev";
	if (idx === current + 1) return "carousel-card is-next";
	if (idx < current - 1) return "carousel-card is-far-prev";
	if (idx > current + 1) return "carousel-card is-far-next";
	return "carousel-card";
}

export default function ProjectsCarousel() {
	const trackRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [current, setCurrent] = useState(2); // Centered on 3rd card by default

	// Center the active card
	useEffect(() => {
		if (!trackRef.current || !containerRef.current) return;
		const card = trackRef.current.children[current] as HTMLElement;
		if (!card) return;
		const containerWidth = containerRef.current.offsetWidth;
		const cardWidth = card.offsetWidth;
		const cardMargin = 25; // match .carousel-card margin
		const amountToMove = current * (cardWidth + cardMargin * 2);
		const containerCenter = containerWidth / 2;
		const cardCenter = cardWidth / 2;
		const targetTranslateX = containerCenter - cardCenter - amountToMove;
		trackRef.current.style.transform = `translateX(${targetTranslateX}px)`;
	}, [current]);

	// Keyboard navigation
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === "ArrowRight" || e.key === "ArrowDown") {
				setCurrent((c) => Math.min(c + 1, projects.length - 1));
			} else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
				setCurrent((c) => Math.max(c - 1, 0));
			}
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, []);

	return (
		<div className="carousel-container" ref={containerRef}>
			<div className="carousel-track" ref={trackRef}>
				{projects.map((p, i) => (
					<div className={getCardClass(i, current)} key={i}>
						<div className="card-image-container">
							<img src={p.image} alt={p.title} className="card-image" />
						</div>
						<div className="card-content">
							<h3
								className={`card-title text-xl font-bold ${p.titleClass}`}
								data-text={p.title}
							>
								{p.title}
							</h3>
							<p className="card-description">{p.description}</p>
							<div className="card-progress">
								<div
									className="progress-value"
									style={{ width: `${p.progress}%` }}
								></div>
							</div>
							<div className="card-stats">
								<span>{p.phase}</span>
								<span>{p.status}</span>
							</div>
						</div>
						<div className="tech-details">
							{p.tech.map((t) => (
								<div className="tech-tag" key={t}>
									{t}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<button
				className="carousel-button prev"
				onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
				aria-label="Previous"
				disabled={current === 0}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 19.5 8.25 12l7.5-7.5"
					/>
				</svg>
			</button>
			<button
				className="carousel-button next"
				onClick={() => setCurrent((c) => Math.min(c + 1, projects.length - 1))}
				aria-label="Next"
				disabled={current === projects.length - 1}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m8.25 4.5 7.5 7.5-7.5 7.5"
					/>
				</svg>
			</button>
			<div className="carousel-indicators">
				{projects.map((_, i) => (
					<div
						key={i}
						className={"indicator" + (i === current ? " active" : "")}
						onClick={() => setCurrent(i)}
					></div>
				))}
			</div>
		</div>
	);
}
