import Image from "next/image";
import Link from "next/link";

export default function ContactBlister() {
	return (
		<div className="bg-red-500 flex items-center justify-center gap-4">
			<Link href="https://www.canva.com/es_es/" target="_blank">
				<div className="w-8 h-8 flex items-center justify-center">
					<Image
						src="/facebook.svg"
						alt="Logo Facebook"
						width={32}
						height={32}
					/>
				</div>
			</Link>
			<Link href="https://www.canva.com/es_es/" target="_blank">
				<div className="w-8 h-8 flex items-center justify-center">
					<Image
						src="/instagram.svg"
						alt="Logo Instagram"
						width={32}
						height={32}
					/>
				</div>
			</Link>
			<Link href="https://www.canva.com/es_es/" target="_blank">
				<div className="w-8 h-8 flex items-center justify-center">
					<Image
						src="/email.svg"
						alt="Logo Email"
						width={32}
						height={32}
					/>
				</div>
			</Link>
		</div>
	);
}
