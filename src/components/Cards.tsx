export function ServiceCard({ title }: any) {
  return (
    <div className="w-[30%] bg-white h-full flex flex-col justify-center items-center">
      <h4 className="text-black font-bold">{title}</h4>
    </div>
  );
}
