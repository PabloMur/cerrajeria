import CustomTitle from "./ui/CustomTitle";
import { PaymentCard } from "@/components/cards/PaymentsCard"; // Asegurate de poner la ruta correcta

export function PaymentsBanner() {
  return (
    <div
      className="bg-gradient-to-b from-white to-purple min-h-[100vh] w-full flex flex-col justify-center items-center p-4 py-10"
      id="pagos"
    >
      <CustomTitle text={"Medios de pago aceptados"} />

      <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-2 mt-8">
        <PaymentCard
          title="Efectivo"
          description="Pago al contado en el local"
          icon="💵"
        />
        <PaymentCard
          title="Transferencias"
          description="Banco X, CBU: XXXX"
          icon="🏦"
        />
        <PaymentCard
          title="Tarjetas de crédito/débito"
          description="Visa, Mastercard, etc."
          icon="💳"
        />
      </div>
    </div>
  );
}
