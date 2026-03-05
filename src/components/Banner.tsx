"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import css from "@/styles/banner.module.css";
import CustomTitle from "./ui/CustomTitle";
import ContactBlister from "./ContactBlister";
import UrgentBtn from "./buttons/UrgentBtn";
import LocationMap from "./LocationMap";
import AttentionStatus from "./ui/AttentionStatus";
import ContactForm from "./forms/ContactForm";
import { useSiteConfig } from "@/context/SiteConfigContext";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
	const [count, setCount] = useState(0);
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, amount: 0.5 });

	useEffect(() => {
		if (!inView) return;
		const duration = 1200;
		const steps = 40;
		const increment = target / steps;
		let current = 0;
		const timer = setInterval(() => {
			current += increment;
			if (current >= target) {
				setCount(target);
				clearInterval(timer);
			} else {
				setCount(Math.floor(current));
			}
		}, duration / steps);
		return () => clearInterval(timer);
	}, [inView, target]);

	return <span ref={ref}>{count}{suffix}</span>;
}

export function HomePageBanner() {
	return (
		<div
			className={`${css.banner} min-h-[80vh] w-full flex flex-col justify-center items-center relative mt-10`}
			id="home"
		>
			<div className="absolute inset-0 bg-black/50" />

			<div className="relative z-10 flex flex-col justify-center items-center gap-6 px-6 text-center max-w-3xl">
				<p className="text-secondary font-semibold text-sm uppercase tracking-widest">
					Cerrajería 24 horas · Mar del Plata
				</p>
				<h1 className="text-white text-3xl sm:text-5xl font-bold leading-tight">
					Abrimos puertas,<br />
					<span className="text-secondary">cerramos preocupaciones.</span>
				</h1>
				<p className="text-gray-300 text-base sm:text-lg max-w-xl">
					Servicio de cerrajería profesional y de confianza. Respondemos rápido cuando más lo necesitás.
				</p>

				<AttentionStatus />
				<UrgentBtn />
			</div>
		</div>
	);
}

export function AboutBanner() {
	const { config } = useSiteConfig();

	const stats = [
		{ label: "Años de experiencia", target: config.stats.years, suffix: "+" },
		{ label: "Clientes satisfechos", target: config.stats.clients, suffix: "+" },
		{ label: "Disponibilidad", target: null as null, display: "24/7" },
	];

	return (
		<div
			className="bg-accent w-full flex flex-col justify-center items-center px-6 py-20"
			id="about"
		>
			<CustomTitle text={"Quiénes Somos"} light />
			<div className="flex flex-col sm:flex-row gap-10 mt-6 max-w-5xl w-full items-start">
				<p className="text-gray-300 text-base leading-relaxed sm:w-1/2 text-justify">
					{config.about}
				</p>
				<div className="sm:w-1/2 flex flex-col gap-4">
					{stats.map((stat, i) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, x: 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.4, delay: i * 0.15, ease: "easeOut" }}
							className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10"
						>
							<span className="text-secondary font-bold text-3xl">
								{stat.target !== null
									? <CountUp target={stat.target} suffix={stat.suffix} />
									: stat.display}
							</span>
							<span className="text-gray-300 text-sm">{stat.label}</span>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}

export function LocationBanner() {
	return (
		<div
			className="bg-white w-full flex flex-col justify-center items-center px-6 py-20"
			id="location"
		>
			<CustomTitle text={"Dónde encontrarnos"} />
			<p className="text-gray-500 text-center max-w-md mb-6">
				Estamos en pleno centro de la ciudad, por lo que en minutos podemos
				estar ahí para asistirte.
			</p>
			<div className="w-full max-w-4xl h-[400px] rounded-2xl overflow-hidden shadow-xl">
				<LocationMap />
			</div>
		</div>
	);
}

export function ContactBanner() {
	return (
		<div
			className="bg-gray-50 w-full flex flex-col justify-start items-center py-20 px-6"
			id="contacto"
		>
			<CustomTitle text={"Contactanos"} />
			<div className="flex flex-col sm:flex-row justify-center items-start w-full max-w-4xl gap-10 mt-6">
				<ContactBlister />
				<ContactForm />
			</div>
		</div>
	);
}
