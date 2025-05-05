export interface Game {
  id: string;
  slug: string;
  name: string;
  image: string;
  rating: number;
  category: string;
  isPopular?: boolean;
  description: string;
}

export interface TopUpItem {
  id: string;
  gameId: string;
  name: string;
  amount: number;
  price: number;
  discountPrice?: number;
}

export interface PaymentMethod {
  id: string;
  name: string;
  type: 'e-wallet' | 'bank' | 'qris' | 'convenience-store';
  logo: string;
  fee: number;
}

export interface Promo {
  code: string;
  discount: number; // in percentage
  maxDiscount?: number; // max discount amount
  minPurchase?: number;
  validUntil: string; // ISO date string
}

export interface Transaction {
  invoiceId: string;
  userId: string;
  userName?: string;
  gameId: string;
  gameName: string;
  itemId: string;
  itemName: string;
  quantity: number;
  price: number;
  discount: number;
  total: number;
  paymentMethodId: string;
  paymentMethodName: string;
  status: 'pending' | 'processing' | 'success' | 'failed' | 'expired';
  whatsapp: string;
  createdAt: string;
  expiresAt: string; // ISO date string
  paymentDetails?: {
    qrCode?: string;
    accountNumber?: string;
    accountName?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
  gameName?: string;
  date: string;
}

export type TransactionStatus = 'pending' | 'processing' | 'success' | 'failed' | 'expired';

export interface OrderCheckResult {
  invoice?: string;
  transactions: Transaction[];
}