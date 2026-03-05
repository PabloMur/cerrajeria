"use client";

import { useState } from "react";
import { useSiteConfig } from "@/context/SiteConfigContext";

export default function ContactForm() {
	const { config } = useSiteConfig();
	const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });
	const [sent, setSent] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const text = encodeURIComponent(
			`Hola, soy ${form.nombre}. Mi teléfono es ${form.telefono}. ${form.mensaje}`
		);
		window.open(`https://wa.me/${config.phone}?text=${text}`, "_blank");
		setSent(true);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-4 w-full max-w-md p-6"
		>
			<div className="flex flex-col gap-1">
				<label htmlFor="nombre" className="text-sm font-semibold text-gray-700">
					Nombre
				</label>
				<input
					id="nombre"
					type="text"
					placeholder="Tu nombre"
					required
					value={form.nombre}
					onChange={(e) => setForm({ ...form, nombre: e.target.value })}
					className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
				/>
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="telefono" className="text-sm font-semibold text-gray-700">
					Teléfono
				</label>
				<input
					id="telefono"
					type="tel"
					placeholder="Tu número de teléfono"
					required
					value={form.telefono}
					onChange={(e) => setForm({ ...form, telefono: e.target.value })}
					className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
				/>
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="mensaje" className="text-sm font-semibold text-gray-700">
					Mensaje
				</label>
				<textarea
					id="mensaje"
					placeholder="¿En qué te podemos ayudar?"
					required
					rows={4}
					value={form.mensaje}
					onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
					className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
				/>
			</div>

			<button
				type="submit"
				className="bg-accent text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
			>
				Enviar por WhatsApp
			</button>

			{sent && (
				<p className="text-green-600 text-center text-sm">
					¡Gracias! Te redirigimos a WhatsApp.
				</p>
			)}
		</form>
	);
}
