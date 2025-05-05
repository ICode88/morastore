"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getItemsByGameId, paymentMethods } from "@/lib/data";
import TopUpItemCard from "@/components/game/TopUpItemCard";
import PaymentMethodCard from "@/components/game/PaymentMethodCard";
import WhatsAppInput from "@/components/game/WhatsAppInput";
import PromoInput from "@/components/game/PromoInput";
import GameIDInput from "./GameIDInput";
import { TopUpItem, PaymentMethod } from "@/lib/types";
import LoadingSpinner from "@/components/common/LoadingSpinner";

interface TopUpFormProps {
  gameId: string;
  gameName: string;
}

const TopUpForm = ({ gameId, gameName }: TopUpFormProps) => {
  const router = useRouter();
  const items = getItemsByGameId(gameId);
  
  const [userId, setUserId] = useState("");
  const [serverID, setServerID] = useState("");
  const [selectedItem, setSelectedItem] = useState<TopUpItem | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
  const [discount, setDiscount] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isWhatsappValid, setIsWhatsappValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleGameIDChange = (newUserId: string, newServerID?: string) => {
    setUserId(newUserId);
    if (newServerID) setServerID(newServerID);
    if (errors.userId) setErrors(prev => ({ ...prev, userId: "" }));
  };

  const handleItemSelect = (item: TopUpItem) => {
    setSelectedItem(item);
    if (errors.selectedItem) setErrors(prev => ({ ...prev, selectedItem: "" }));
  };

  const handlePaymentSelect = (method: PaymentMethod) => {
    setSelectedPayment(method);
    if (errors.selectedPayment) setErrors(prev => ({ ...prev, selectedPayment: "" }));
  };

  const handlePromoChange = (newDiscount: number, code: string) => {
    setDiscount(newDiscount);
    setPromoCode(code);
  };

  const handleWhatsappChange = (value: string, isValid: boolean) => {
    setWhatsapp(value);
    setIsWhatsappValid(isValid);
    if (errors.whatsapp) setErrors(prev => ({ ...prev, whatsapp: "" }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!userId) {
      newErrors.userId = "ID Game harus diisi";
    }

    if (gameName === "Mobile Legends" && !serverID) {
      newErrors.serverID = "Server ID harus diisi";
    }

    if (!selectedItem) {
      newErrors.selectedItem = "Silakan pilih item";
    }

    if (!selectedPayment) {
      newErrors.selectedPayment = "Silakan pilih metode pembayaran";
    }

    if (!whatsapp || !isWhatsappValid) {
      newErrors.whatsapp = "Nomor WhatsApp tidak valid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const mockInvoiceId = 'INV' + Math.floor(Math.random() * 100000000);
      router.push(`/checkout/${mockInvoiceId}`);
    }, 1500);
  };

  const calculateTotal = (): number => {
    if (!selectedItem) return 0;
    
    let total = selectedItem.discountPrice || selectedItem.price;
    const paymentFee = selectedPayment?.fee || 0;
    
    total = total + paymentFee - discount;
    return total < 0 ? 0 : total;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <GameIDInput
          gameName={gameName}
          onChange={handleGameIDChange}
        />
        {errors.userId && <p className="text-red-500 text-xs mt-1">{errors.userId}</p>}
        {errors.serverID && <p className="text-red-500 text-xs mt-1">{errors.serverID}</p>}

        <div>
          <h3 className="text-lg font-medium mb-4">Pilih Item</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {items.map((item) => (
              <TopUpItemCard
                key={item.id}
                item={item}
                isSelected={selectedItem?.id === item.id}
                onSelect={handleItemSelect}
              />
            ))}
          </div>
          {errors.selectedItem && <p className="text-red-500 text-xs mt-2">{errors.selectedItem}</p>}
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Metode Pembayaran</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {paymentMethods.map((method) => (
              <PaymentMethodCard
                key={method.id}
                method={method}
                isSelected={selectedPayment?.id === method.id}
                onSelect={handlePaymentSelect}
              />
            ))}
          </div>
          {errors.selectedPayment && <p className="text-red-500 text-xs mt-2">{errors.selectedPayment}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <PromoInput
              amount={selectedItem?.discountPrice || selectedItem?.price || 0}
              onDiscount={handlePromoChange}
            />
          </div>
          <div>
            <WhatsAppInput onChange={handleWhatsappChange} />
            {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
          </div>
        </div>

        <div className="bg-black/30 border border-primary/30 rounded-lg p-4">
          <h3 className="text-lg font-medium mb-2">Ringkasan Pembayaran</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Item</span>
              <span>{selectedItem?.name || "-"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Harga</span>
              <span>
                {selectedItem
                  ? `Rp ${(selectedItem.discountPrice || selectedItem.price).toLocaleString('id-ID')}`
                  : "-"}
              </span>
            </div>
            {selectedPayment?.fee ? (
              <div className="flex justify-between">
                <span className="text-gray-400">Biaya Admin</span>
                <span>Rp {selectedPayment.fee.toLocaleString('id-ID')}</span>
              </div>
            ) : null}
            {discount > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-400">Diskon</span>
                <span className="text-green-500">- Rp {discount.toLocaleString('id-ID')}</span>
              </div>
            )}
            <div className="pt-2 border-t border-primary/20">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-primary">Rp {calculateTotal().toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full btn-primary py-3 text-center flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <LoadingSpinner size="sm" color="black" /> 
              <span className="ml-2">Memproses...</span>
            </>
          ) : (
            "Pesan Sekarang"
          )}
        </button>
      </div>
    </form>
  );
};

export default TopUpForm;