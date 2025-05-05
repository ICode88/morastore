import { Game, TopUpItem, PaymentMethod, Transaction, Testimonial, Promo } from './types';

export const games: Game[] = [
  {
    id: '1',
    slug: 'mobile-legends',
    name: 'Mobile Legends',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress',
    rating: 4.8,
    category: 'MOBA',
    isPopular: true,
    description: 'Mobile Legends: Bang Bang adalah game MOBA mobile yang dikembangkan dan diterbitkan oleh Moonton. Mainkan dengan berbagai karakter berbeda, bertemu dengan teman, dan bentuk regu yang tak tertandingi!',
  },
  {
    id: '2',
    slug: 'free-fire',
    name: 'Free Fire',
    image: 'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress',
    rating: 4.5,
    category: 'Battle Royale',
    isPopular: true,
    description: 'Garena Free Fire adalah game battle royale mobile yang terkenal. Bertahan hidup melawan 49 pemain lain dan menjadi pemenang terakhir dengan strategi dan keterampilan terbaikmu!',
  },
  {
    id: '3',
    slug: 'pubg-mobile',
    name: 'PUBG Mobile',
    image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress',
    rating: 4.7,
    category: 'Battle Royale',
    isPopular: true,
    description: 'PUBG Mobile adalah game battle royale mobile yang dikembangkan oleh Tencent Games dan PUBG Corporation. Terjun ke medan perang yang luas, kumpulkan senjata, dan jadi yang terakhir bertahan!',
  },
  {
    id: '4',
    slug: 'genshin-impact',
    name: 'Genshin Impact',
    image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress',
    rating: 4.6,
    category: 'RPG',
    isPopular: true,
    description: 'Genshin Impact adalah game RPG aksi dunia terbuka yang dikembangkan oleh miHoYo. Jelajahi dunia Teyvat yang luas, mainkan sebagai berbagai karakter, dan temukan misteri di balik kisah tersebut.',
  },
  {
    id: '5',
    slug: 'call-of-duty-mobile',
    name: 'Call of Duty Mobile',
    image: 'https://images.pexels.com/photos/6498290/pexels-photo-6498290.jpeg?auto=compress',
    rating: 4.5,
    category: 'FPS',
    description: 'Call of Duty: Mobile adalah game first-person shooter yang dikembangkan oleh TiMi Studio Group. Nikmati mode multipemain klasik dan battle royale di perangkat mobile Anda.',
  },
  {
    id: '6',
    slug: 'league-of-legends-wild-rift',
    name: 'League of Legends: Wild Rift',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress',
    rating: 4.6,
    category: 'MOBA',
    description: 'League of Legends: Wild Rift adalah versi mobile dari game MOBA PC yang terkenal. Bertanding dalam pertempuran 5v5 yang intens dengan kontrol yang disesuaikan untuk perangkat mobile.',
  },
  {
    id: '7',
    slug: 'valorant',
    name: 'Valorant',
    image: 'https://images.pexels.com/photos/7915454/pexels-photo-7915454.jpeg?auto=compress',
    rating: 4.7,
    category: 'FPS',
    description: 'VALORANT adalah game first-person shooter taktis gratis yang dikembangkan oleh Riot Games. Bergabunglah dengan agen unik dan gunakan kemampuan khusus mereka untuk memenangkan pertempuran.',
  },
  {
    id: '8',
    slug: 'minecraft',
    name: 'Minecraft',
    image: 'https://images.pexels.com/photos/5767416/pexels-photo-5767416.jpeg?auto=compress',
    rating: 4.9,
    category: 'Sandbox',
    description: 'Minecraft adalah game sandbox yang memungkinkan pemain membangun dan menghancurkan berbagai blok dalam dunia tiga dimensi. Jelajahi, buat, dan bertahan hidup di dunia yang terbuat dari blok.',
  },
];

export const topUpItems: TopUpItem[] = [
  // Mobile Legends
  { id: 'ml-1', gameId: '1', name: '86 Diamonds', amount: 86, price: 22000, discountPrice: 20000 },
  { id: 'ml-2', gameId: '1', name: '172 Diamonds', amount: 172, price: 44000, discountPrice: 40000 },
  { id: 'ml-3', gameId: '1', name: '257 Diamonds', amount: 257, price: 66000, discountPrice: 60000 },
  { id: 'ml-4', gameId: '1', name: '344 Diamonds', amount: 344, price: 87000, discountPrice: 80000 },
  { id: 'ml-5', gameId: '1', name: '429 Diamonds', amount: 429, price: 110000, discountPrice: 100000 },
  { id: 'ml-6', gameId: '1', name: 'Starlight Member', amount: 1, price: 150000, discountPrice: 135000 },
  
  // Free Fire
  { id: 'ff-1', gameId: '2', name: '100 Diamonds', amount: 100, price: 16000, discountPrice: 15000 },
  { id: 'ff-2', gameId: '2', name: '310 Diamonds', amount: 310, price: 48000, discountPrice: 45000 },
  { id: 'ff-3', gameId: '2', name: '520 Diamonds', amount: 520, price: 80000, discountPrice: 75000 },
  { id: 'ff-4', gameId: '2', name: '1060 Diamonds', amount: 1060, price: 160000, discountPrice: 150000 },
  { id: 'ff-5', gameId: '2', name: 'Membership Mingguan', amount: 1, price: 30000, discountPrice: 28000 },
  
  // PUBG Mobile
  { id: 'pubg-1', gameId: '3', name: '60 UC', amount: 60, price: 16000, discountPrice: 15000 },
  { id: 'pubg-2', gameId: '3', name: '325 UC', amount: 325, price: 80000, discountPrice: 75000 },
  { id: 'pubg-3', gameId: '3', name: '660 UC', amount: 660, price: 160000, discountPrice: 150000 },
  { id: 'pubg-4', gameId: '3', name: 'Royale Pass', amount: 1, price: 150000, discountPrice: 140000 },
  
  // Genshin Impact
  { id: 'gi-1', gameId: '4', name: '60 Genesis Crystals', amount: 60, price: 16000, discountPrice: 15000 },
  { id: 'gi-2', gameId: '4', name: '300 Genesis Crystals', amount: 300, price: 80000, discountPrice: 75000 },
  { id: 'gi-3', gameId: '4', name: '980 Genesis Crystals', amount: 980, price: 250000, discountPrice: 240000 },
  { id: 'gi-4', gameId: '4', name: 'Blessing of the Welkin Moon', amount: 1, price: 80000, discountPrice: 75000 },
];

export const paymentMethods: PaymentMethod[] = [
  { id: 'dana', name: 'DANA', type: 'e-wallet', logo: '/dana.png', fee: 0 },
  { id: 'ovo', name: 'OVO', type: 'e-wallet', logo: '/ovo.png', fee: 0 },
  { id: 'gopay', name: 'GoPay', type: 'e-wallet', logo: '/gopay.png', fee: 0 },
  { id: 'shopeepay', name: 'ShopeePay', type: 'e-wallet', logo: '/shopeepay.png', fee: 0 },
  { id: 'bca', name: 'Bank BCA', type: 'bank', logo: '/bca.png', fee: 0 },
  { id: 'mandiri', name: 'Bank Mandiri', type: 'bank', logo: '/mandiri.png', fee: 0 },
  { id: 'bni', name: 'Bank BNI', type: 'bank', logo: '/bni.png', fee: 0 },
  { id: 'qris', name: 'QRIS', type: 'qris', logo: '/qris.png', fee: 0 },
  { id: 'indomaret', name: 'Indomaret', type: 'convenience-store', logo: '/indomaret.png', fee: 2000 },
  { id: 'alfamart', name: 'Alfamart', type: 'convenience-store', logo: '/alfamart.png', fee: 2000 },
];

export const promos: Promo[] = [
  { 
    code: 'WELCOME10', 
    discount: 10, 
    maxDiscount: 20000, 
    validUntil: '2025-12-31T23:59:59Z'
  },
  { 
    code: 'MEGA20', 
    discount: 20, 
    maxDiscount: 50000, 
    minPurchase: 100000, 
    validUntil: '2025-06-30T23:59:59Z'
  },
  { 
    code: 'NEWUSER', 
    discount: 15, 
    maxDiscount: 30000, 
    validUntil: '2025-12-31T23:59:59Z'
  },
];

export const dummyTransactions: Transaction[] = [
  {
    invoiceId: 'INV12345678',
    userId: 'user123',
    userName: 'Budi Setiawan',
    gameId: '1',
    gameName: 'Mobile Legends',
    itemId: 'ml-3',
    itemName: '257 Diamonds',
    quantity: 1,
    price: 66000,
    discount: 6000,
    total: 60000,
    paymentMethodId: 'dana',
    paymentMethodName: 'DANA',
    status: 'success',
    whatsapp: '08123456789',
    createdAt: '2025-01-15T08:30:00Z',
    expiresAt: '2025-01-15T09:00:00Z',
    paymentDetails: {
      accountNumber: '08123456789',
      accountName: 'MoraStore'
    }
  },
  {
    invoiceId: 'INV23456789',
    userId: 'user456',
    userName: 'Siti Rahayu',
    gameId: '2',
    gameName: 'Free Fire',
    itemId: 'ff-2',
    itemName: '310 Diamonds',
    quantity: 1,
    price: 48000,
    discount: 3000,
    total: 45000,
    paymentMethodId: 'ovo',
    paymentMethodName: 'OVO',
    status: 'pending',
    whatsapp: '08234567890',
    createdAt: '2025-01-16T10:45:00Z',
    expiresAt: '2025-01-16T11:15:00Z',
    paymentDetails: {
      accountNumber: '08234567890',
      accountName: 'MoraStore'
    }
  },
  {
    invoiceId: 'INV34567890',
    userId: 'user789',
    userName: 'Ahmad Fadli',
    gameId: '3',
    gameName: 'PUBG Mobile',
    itemId: 'pubg-2',
    itemName: '325 UC',
    quantity: 1,
    price: 80000,
    discount: 5000,
    total: 75000,
    paymentMethodId: 'qris',
    paymentMethodName: 'QRIS',
    status: 'processing',
    whatsapp: '08345678901',
    createdAt: '2025-01-17T14:20:00Z',
    expiresAt: '2025-01-17T14:50:00Z',
    paymentDetails: {
      qrCode: 'https://images.pexels.com/photos/8452429/pexels-photo-8452429.jpeg?auto=compress'
    }
  },
  {
    invoiceId: 'INV45678901',
    userId: 'user101',
    userName: 'Dewi Anggraini',
    gameId: '4',
    gameName: 'Genshin Impact',
    itemId: 'gi-2',
    itemName: '300 Genesis Crystals',
    quantity: 1,
    price: 80000,
    discount: 5000,
    total: 75000,
    paymentMethodId: 'bca',
    paymentMethodName: 'Bank BCA',
    status: 'expired',
    whatsapp: '08456789012',
    createdAt: '2025-01-18T09:15:00Z',
    expiresAt: '2025-01-18T09:45:00Z',
    paymentDetails: {
      accountNumber: '1234567890',
      accountName: 'PT MoraStore Indonesia'
    }
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rudi Hartono',
    rating: 5,
    comment: 'Top up cepat, harga murah, admin ramah. Recommend banget!',
    gameName: 'Mobile Legends',
    date: '2025-01-10'
  },
  {
    id: '2',
    name: 'Nina Safitri',
    rating: 4,
    comment: 'Proses cepat, tapi UI aplikasi masih bisa ditingkatkan lagi.',
    gameName: 'Free Fire',
    date: '2025-01-08'
  },
  {
    id: '3',
    name: 'Arief Wicaksono',
    rating: 5,
    comment: 'Saya sudah 3x top up disini dan selalu cepat prosesnya. Terima kasih MoraStore!',
    gameName: 'PUBG Mobile',
    date: '2025-01-15'
  },
  {
    id: '4',
    name: 'Dian Permata',
    rating: 5,
    comment: 'Harga paling murah dibanding tempat lain. CS juga responsif.',
    gameName: 'Genshin Impact',
    date: '2025-01-02'
  },
  {
    id: '5',
    name: 'Fajar Purnama',
    rating: 4,
    comment: 'Pengiriman cepat, tapi aplikasi kadang error saat jam ramai.',
    gameName: 'Call of Duty Mobile',
    date: '2025-01-13'
  },
];

export const categories = [
  'Semua',
  'MOBA',
  'Battle Royale',
  'RPG',
  'FPS',
  'Sandbox',
  'Strategy',
  'Card',
  'Simulation'
];

export function getGameBySlug(slug: string): Game | undefined {
  return games.find(game => game.slug === slug);
}

export function getItemsByGameId(gameId: string): TopUpItem[] {
  return topUpItems.filter(item => item.gameId === gameId);
}

export function getTransactionByInvoice(invoiceId: string): Transaction | undefined {
  return dummyTransactions.find(tx => tx.invoiceId === invoiceId);
}

export function getTransactionsByWhatsapp(whatsapp: string): Transaction[] {
  return dummyTransactions.filter(tx => tx.whatsapp === whatsapp);
}

export function validatePromoCode(code: string, amount: number): Promo | null {
  const promo = promos.find(p => p.code === code);
  
  if (!promo) return null;
  
  const now = new Date();
  const validUntil = new Date(promo.validUntil);
  
  if (now > validUntil) return null;
  
  if (promo.minPurchase && amount < promo.minPurchase) return null;
  
  return promo;
}

export function calculateDiscount(amount: number, promo: Promo | null): number {
  if (!promo) return 0;
  
  const discountAmount = amount * (promo.discount / 100);
  
  if (promo.maxDiscount && discountAmount > promo.maxDiscount) {
    return promo.maxDiscount;
  }
  
  return discountAmount;
}