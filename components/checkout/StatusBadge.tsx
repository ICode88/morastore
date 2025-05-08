import { TransactionStatus } from "@/lib/types";
import { 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Loader2, 
  XCircle 
} from "lucide-react";

interface StatusBadgeProps {
  status: TransactionStatus;
  size?: 'sm' | 'md' | 'lg';
}
const statusConfig: Record<TransactionStatus, {
  color: string;
  icon: React.ComponentType<any>;
  text: string;
  animate?: string;
}> = {
  pending: {
    color: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50',
    icon: Clock,
    text: 'Menunggu Pembayaran'
  },
  processing: {
    color: 'bg-blue-500/20 text-blue-500 border-blue-500/50',
    icon: Loader2,
    text: 'Sedang Diproses',
    animate: 'animate-spin'
  },
  success: {
    color: 'bg-green-500/20 text-green-500 border-green-500/50',
    icon: CheckCircle2,
    text: 'Transaksi Berhasil'
  },
  failed: {
    color: 'bg-red-500/20 text-red-500 border-red-500/50',
    icon: XCircle,
    text: 'Transaksi Gagal'
  },
  expired: {
    color: 'bg-gray-500/20 text-gray-400 border-gray-400/50',
    icon: AlertCircle,
    text: 'Transaksi Kadaluarsa'
  }
};


const StatusBadge = ({ status, size = 'md' }: StatusBadgeProps) => {
  const config = statusConfig[status];
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };
  
  const iconSizes = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };
  
  const Icon = config.icon;
  
  return (
    <div className={`
      inline-flex items-center rounded-full border ${config.color} ${sizeClasses[size]}
    `}>
      <Icon className={`${iconSizes[size]} mr-1 ${config.animate || ''}`} />
      <span>{config.text}</span>
    </div>
  );
};

export default StatusBadge;