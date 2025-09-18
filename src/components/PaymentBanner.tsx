import CustomTitle from "./ui/CustomTitle";


export function PaymentsBanner() {
  return (
    <div
      className="bg-gradient-to-b from-white to-purple min-h-[90vh] w-full flex flex-col justify-center items-center p-4 py-10"
      id="pagos"
    >
      <CustomTitle text={"Medios de pago aceptados"}></CustomTitle>

      <div className="flex flex-col sm:flex-row w-full justify-evenly items-center gap-2">
    
      </div>
    </div>
  );
}
