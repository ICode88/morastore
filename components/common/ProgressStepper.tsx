import { Check, Clock, Loader, X } from "lucide-react";
import { TransactionStatus } from "@/lib/types";

interface Step {
  label: string;
  status: 'complete' | 'current' | 'upcoming' | 'error';
  icon?: React.ReactNode;
}

interface ProgressStepperProps {
  transactionStatus: TransactionStatus;
}

const ProgressStepper = ({ transactionStatus }: ProgressStepperProps) => {
  let steps: Step[] = [];
  
  switch(transactionStatus) {
    case 'pending':
      steps = [
        { 
          label: 'Menunggu Pembayaran', 
          status: 'current',
          icon: <Clock className="h-5 w-5 text-primary" />
        },
        { 
          label: 'Pembayaran Diterima', 
          status: 'upcoming' 
        },
        { 
          label: 'Pesanan Diproses', 
          status: 'upcoming' 
        },
        { 
          label: 'Pesanan Berhasil', 
          status: 'upcoming' 
        },
      ];
      break;
    case 'processing':
      steps = [
        { 
          label: 'Menunggu Pembayaran', 
          status: 'complete',
          icon: <Check className="h-5 w-5" />
        },
        { 
          label: 'Pembayaran Diterima', 
          status: 'complete',
          icon: <Check className="h-5 w-5" />
        },
        { 
          label: 'Pesanan Diproses', 
          status: 'current',
          icon: <Loader className="h-5 w-5 text-primary animate-spin" />
        },
        { 
          label: 'Pesanan Berhasil', 
          status: 'upcoming' 
        },
      ];
      break;
    case 'success':
      steps = [
        { 
          label: 'Menunggu Pembayaran', 
          status: 'complete',
          icon: <Check className="h-5 w-5" />
        },
        { 
          label: 'Pembayaran Diterima', 
          status: 'complete',
          icon: <Check className="h-5 w-5" /> 
        },
        { 
          label: 'Pesanan Diproses', 
          status: 'complete',
          icon: <Check className="h-5 w-5" />
        },
        { 
          label: 'Pesanan Berhasil', 
          status: 'complete',
          icon: <Check className="h-5 w-5" />
        },
      ];
      break;
    case 'failed':
      steps = [
        { 
          label: 'Menunggu Pembayaran', 
          status: 'complete',
          icon: <Check className="h-5 w-5" />
        },
        { 
          label: 'Pembayaran Diterima', 
          status: 'complete',
          icon: <Check className="h-5 w-5" />
        },
        { 
          label: 'Pesanan Diproses', 
          status: 'error',
          icon: <X className="h-5 w-5" />
        },
        { 
          label: 'Pesanan Gagal', 
          status: 'error',
          icon: <X className="h-5 w-5" />
        },
      ];
      break;
    case 'expired':
      steps = [
        { 
          label: 'Menunggu Pembayaran', 
          status: 'error',
          icon: <X className="h-5 w-5" />
        },
        { 
          label: 'Pembayaran Expired', 
          status: 'error',
          icon: <X className="h-5 w-5" />
        },
        { 
          label: 'Pesanan Dibatalkan', 
          status: 'error',
          icon: <X className="h-5 w-5" />
        },
        { 
          label: 'Transaksi Selesai', 
          status: 'error',
          icon: <X className="h-5 w-5" />
        },
      ];
      break;
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div className={`
              flex items-center justify-center w-8 h-8 rounded-full z-10
              ${step.status === 'complete' ? 'bg-green-500 text-black' : ''}
              ${step.status === 'current' ? 'bg-primary text-black' : ''}
              ${step.status === 'upcoming' ? 'bg-gray-700 text-gray-400' : ''}
              ${step.status === 'error' ? 'bg-red-500 text-white' : ''}
            `}>
              {step.icon || (index + 1)}
            </div>
            
            {index < steps.length - 1 && (
              <div className={`
                absolute top-4 -right-1/2 w-full h-0.5
                ${step.status === 'complete' ? 'bg-green-500' : ''}
                ${step.status === 'current' || step.status === 'upcoming' ? 'bg-gray-700' : ''}
                ${step.status === 'error' ? 'bg-red-500' : ''}
              `} />
            )}
            
            <div className="text-xs text-center mt-2 w-20">
              <span className={`
                ${step.status === 'complete' ? 'text-green-500' : ''}
                ${step.status === 'current' ? 'text-primary' : ''}
                ${step.status === 'upcoming' ? 'text-gray-400' : ''}
                ${step.status === 'error' ? 'text-red-500' : ''}
              `}>
                {step.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressStepper;