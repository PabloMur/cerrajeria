import Image from "next/image";
import Link from "next/link";
export default function ContactBlister() {
	return (
		<div className="w-full md:grid grid-cols-3 justify-items-center content-center flex flex-col items-center mb-5 gap-2 ">
			<Link href={"https://www.canva.com/es_es/"} target="_blank">
				<Image
					width={50}
					height={50}
					src={`/facebook.svg`}
					alt="Logo Facebook"
				/>
			</Link>
			<Link href={"https://www.canva.com/es_es/"} target="_blank">
				<Image
					width={30}
					height={30}
					src={`/instagram.svg`}
					alt="Logo Instagram"
				/>
			</Link>
			<Link href={"https://www.canva.com/es_es/"} target="_blank">
				<Image width={30} height={30} src={`/email.svg`} alt="Logo email" />
			</Link>
		</div>
	);
}
