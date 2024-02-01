export function ServiceCard({ title, description }: any) {
  return (
    <div className="w-[30%] bg-accent h-full flex flex-col justify-between items-center">
      <div className="bg-white text-black w-full h-3/5 flex justify-center items-center">
        Aca va a estar la imagen del servicio
      </div>
      <div className="h-2/5 flex flex-col justify-center items-center p-2">
        <h4 className="text-white font-bold">{title}</h4>
        <p className="p-2 text-justify">{description}</p>
      </div>
    </div>
  );
}
