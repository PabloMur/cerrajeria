type PaymentCardType = {
  title: string;
  description: string;
  icon: string; // Emoji o un componente SVG
};

export function PaymentCard({ title, description, icon }: PaymentCardType) {
  return (
    <div className="sm:w-1/3 max-w-[250px] bg-accent flex flex-col items-center rounded-xl shadow-xl p-6 hover:scale-105 transition-transform">
      <div className="text-5xl mb-4">{icon}</div>
      <h4 className="text-white font-bold text-lg">{title}</h4>
      <p className="text-white text-center mt-2">{description}</p>
    </div>
  );
}
