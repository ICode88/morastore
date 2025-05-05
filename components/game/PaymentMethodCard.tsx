import { PaymentMethod } from "@/lib/types";
import Image from "next/image";
import { Check } from "lucide-react";

interface PaymentMethodCardProps {
  method: PaymentMethod;
  isSelected: boolean;
  onSelect: (method: PaymentMethod) => void;
}

const PaymentMethodCard = ({ 
  method, 
  isSelected, 
  onSelect 
}: PaymentMethodCardProps) => {
  return (
    <button
      className={`
        w-full border rounded-lg p-4 transition-all duration-300
        hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:border-primary flex items-center
        ${isSelected 
          ? 'border-primary bg-primary/10' 
          : 'border-primary/30 bg-card'}
      `}
      onClick={() => onSelect(method)}
    >
      <div className="w-12 h-12 bg-white rounded flex items-center justify-center mr-3">
        <Image 
          src={method.logo} 
          alt={method.name}
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      
      <div className="flex-1 text-left">
        <h3 className="text-sm font-medium mb-0.5">{method.name}</h3>
        {method.fee > 0 ? (
          <p className="text-xs text-gray-400">+Rp {method.fee.toLocaleString('id-ID')}</p>
        ) : (
          <p className="text-xs text-green-500">Tanpa biaya admin</p>
        )}
      </div>
      
      {isSelected && (
        <div className="bg-primary text-black p-1 rounded-full">
          <Check className="h-4 w-4" />
        </div>
      )}
    </button>
  );
};

export default PaymentMethodCard;