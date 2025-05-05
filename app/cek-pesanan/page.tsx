import { Metadata } from "next";
import SectionTitle from "@/components/common/SectionTitle";
import OrderCheckForm from "./components/OrderCheckForm";
import OrderResult from "./components/OrderResult";

export const metadata: Metadata = {
  title: "Cek Pesanan - MoraStore",
  description: "Periksa status transaksi dan history pesanan top up game online Anda di MoraStore.",
};

export default function CheckOrderPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Cek Pesanan"
          subtitle="Periksa status transaksi dan history pesanan Anda"
          centered
        />
        
        <div className="glass-card p-6 mb-8">
          <OrderCheckForm />
        </div>
        
        <div className="glass-card p-6">
          <h2 className="text-lg font-medium mb-4">Transaksi Terbaru</h2>
          <OrderResult />
        </div>
      </div>
    </div>
  );
}