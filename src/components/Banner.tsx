"use client"; // si estás en App Router (Next.js 13+)

import { useEffect, useState } from "react";
import css from "@/styles/banner.module.css";
import CustomTitle from "./ui/CustomTitle";
import ContactBlister from "./ContactBlister";
import UrgentBtn from "./buttons/UrgentBtn";
import LocationMap from "./LocationMap";

export function HomePageBanner() {
	const [apiMessage, setApiMessage] = useState<string>("Cargando...");

	useEffect(() => {
		fetch("https://backend-cerrajeria.vercel.app/api/test") // URL de tu backend
			.then((res) => res.json())
			.then((data) => {
				setApiMessage(JSON.stringify(data));
			})
			.catch((err) => {
				setApiMessage("Error: " + err.message);
			});
	}, []);

	return (
		<div
			className={`${css.banner} min-h-[60vh] w-full flex flex-col justify-center items-center mt-10`}
			id="home"
		>
			<div className="flex flex-col justify-center items-center gap-7">
				<h3 className="text-black text-2xl sm:text-4xl font-bold text-center p-4">
					Abrimos puertas, cerramos preocupaciones. <br />Tu Cerrajería de
					confianza.
				</h3>

				{/* Mostrar mensaje de la API */}
				<p className="text-sm text-gray-600">Respuesta API: {apiMessage}</p>

				<div className="flex flex-col justify-center items-center gap-10">
					<UrgentBtn />
				</div>
			</div>
		</div>
	);
}

export function AboutBanner() {
	return (
		<div
			className="bg-white min-h-[90vh] w-full flex flex-col justify-center items-center p-10"
			id="about"
		>
			<CustomTitle text={"Quienes Somos"} />
			<p className="text-black text-xl sm:w-[70%] text-justify">
				Bienvenido a La Torre Cerrajería, tu socio confiable en Mar del Plata.
				Nos dedicamos a proporcionar servicios de cerrajería las 24 horas del
				día. Con un equipo altamente calificado, nos especializamos en apertura
				de puertas, reparación y cambio de cerraduras. En La Torre, nuestra
				misión es brindar soluciones rápidas y seguras para garantizar tu
				tranquilidad. Con años de experiencia, nos enorgullece ser la elección
				preferida en servicios de cerrajería. Estamos aquí para protegerte en
				todo momento.
			</p>
		</div>
	);
}

export function LocationBanner() {
	return (
		<div
			className="bg-gradient-to-b from-secondary to-white h-[90vh] w-full flex flex-col justify-center items-center p-10"
			id="location"
		>
			<CustomTitle text={"Donde encontrarnos"} />
			<p className="text-black m-3 font-bold text-justify">
				Estamos en pleno centro de la ciudad, por lo que en minutos podemos
				estar ahi para aisistirte.
			</p>
			<LocationMap />
		</div>
	);
}

export function ContactBanner() {
	return (
		<div
			className="bg-white  w-full flex flex-col justify-start items-center pt-10"
			id="contacto"
		>
			<CustomTitle text={"Contactanos"} />
			<div className="flex justify-center items-center w-full h-full">
				<ContactBlister />
			</div>
		</div>
	);
}
