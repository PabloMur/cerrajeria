"use client";
import Image from "next/image";
import Link from "next/link";
import { useSiteConfig } from "@/context/SiteConfigContext";

export default function ContactBlister() {
	const { config } = useSiteConfig();

	return (
		<div className="flex flex-col items-center justify-center gap-8 py-10 w-full">
			<p className="text-gray-600 text-center max-w-md">
				También podés encontrarnos en nuestras redes o contactarnos directamente.
			</p>
			<div className="flex items-center justify-center gap-6">
				<Link
					href={config.facebook}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Facebook"
					className="hover:opacity-75 transition-opacity"
				>
					<div className="w-10 h-10 flex items-center justify-center">
						<Image src="/facebook.svg" alt="Logo Facebook" width={40} height={40} />
					</div>
				</Link>
				<Link
					href={config.instagram}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
					className="hover:opacity-75 transition-opacity"
				>
					<div className="w-10 h-10 flex items-center justify-center">
						<Image src="/instagram.svg" alt="Logo Instagram" width={40} height={40} />
					</div>
				</Link>
				<Link
					href={`https://wa.me/${config.phone}?text=Hola%2C%20quisiera%20consultar%20sobre%20sus%20servicios`}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="WhatsApp"
					className="hover:opacity-75 transition-opacity"
				>
					<div className="w-10 h-10 flex items-center justify-center">
						<Image src="/whatsapp.svg" alt="Logo WhatsApp" width={40} height={40} />
					</div>
				</Link>
				<Link
					href={`mailto:${config.email}`}
					aria-label="Email"
					className="hover:opacity-75 transition-opacity"
				>
					<div className="w-10 h-10 flex items-center justify-center">
						<Image src="/email.svg" alt="Logo Email" width={40} height={40} />
					</div>
				</Link>
			</div>
			<p className="text-gray-700 font-semibold text-lg">
				Tel:{" "}
				<a href={`tel:+${config.phone}`} className="text-accent hover:underline">
					{config.phoneDisplay}
				</a>
			</p>
		</div>
	);
}
