import CustomTitle from "./ui/CustomTitle";
import { PaymentCard } from "@/components/cards/PaymentsCard";

export function PaymentsBanner() {
  return (
    <div
      className="bg-gray-50 w-full flex flex-col justify-center items-center p-4 py-20"
      id="pagos"
    >
      <CustomTitle text={"Medios de pago aceptados"} />

      <div className="flex flex-col sm:flex-row w-full max-w-4xl justify-center items-stretch gap-4 mt-10 px-4">
        <PaymentCard
          title="Efectivo"
          description="Pago al contado, rápido y sin comisiones."
          icon="💵"
        />
        <PaymentCard
          title="Transferencia bancaria"
          description="Transferencia bancaria. Consultá el CBU al momento del servicio."
          icon="🏦"
        />
        <PaymentCard
          title="Tarjetas de crédito/débito"
          description="Aceptamos Visa, Mastercard y más."
          icon="💳"
        />
      </div>
    </div>
  );
}
