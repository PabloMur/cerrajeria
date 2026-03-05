type CustomTitleProps = {
  text: string;
  light?: boolean;
};

export default function CustomTitle({ text, light = false }: CustomTitleProps) {
  return (
    <div className="flex flex-col items-center gap-3 mb-4">
      <h3
        className={`font-bold text-3xl sm:text-4xl tracking-tight text-center ${
          light ? "text-white" : "text-accent"
        }`}
      >
        {text}
      </h3>
      <div className="w-14 h-1 bg-secondary rounded-full" />
    </div>
  );
}
