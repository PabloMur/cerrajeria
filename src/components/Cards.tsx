import Image, { StaticImageData } from "next/image";

type ServiceCardType = {
  title: string;
  description: string;
  image: StaticImageData;
};
export function ServiceCard({ title, description, image }: ServiceCardType) {
  return (
    <div className="sm:w-[30%] w-[100%] bg-accent min-h-[100%] flex flex-col justify-between items-center cursor-pointer">
      <div className="bg-white text-black w-full flex justify-center items-center overflow-hidden">
        <Image src={image} alt={"imagen descriptiva del servicio"}></Image>
      </div>
      <div className="h-2/5 flex flex-col justify-center items-center p-2">
        <h4 className="text-white font-bold">{title}</h4>
        <p className="p-2 text-justify">{description}</p>
      </div>
    </div>
  );
}
