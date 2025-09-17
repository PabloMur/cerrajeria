import Image, { StaticImageData } from "next/image";

type ServiceCardType = {
  title: string;
  description: string;
  image: StaticImageData;
};
export function ServiceCard({ title, description, image }: ServiceCardType) {
  return (
    <div className="sm:w-1/3 max-w-[350px]  bg-accent flex flex-col min-h-[400px] rounded-xl overflow-hidden ">
      <div className=" text-black w-full flex justify-center items-center h-[200px] overflow-hidden min-h-3/5 ">
        <Image
          src={image}
          alt={"imagen descriptiva del servicio"}
          className="bg-accent"
        ></Image>
      </div>
      <div className="min-h-2/5 flex flex-col justify-center items-center p-2">
        <h4 className="text-white font-bold">{title}</h4>
        <p className="p-2 text-justify h-full">{description}</p>
      </div>
    </div>
  );
}
