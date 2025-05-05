"use client";

import { Transaction } from "@/lib/types";
import Link from "next/link";
import { format } from "date-fns";
import { id } from "date-fns/locale";

interface TransactionTableProps {
  transactions: Transaction[];
}

const statusClasses = {
  pending: "bg-yellow-500/20 text-yellow-500",
  processing: "bg-blue-500/20 text-blue-500",
  success: "bg-green-500/20 text-green-500",
  failed: "bg-red-500/20 text-red-500",
  expired: "bg-gray-500/20 text-gray-400"
};

const statusText = {
  pending: "Menunggu Pembayaran",
  processing: "Diproses",
  success: "Sukses",
  failed: "Gagal",
  expired: "Kadaluarsa"
};

const TransactionTable = ({ transactions }: TransactionTableProps) => {
  if (transactions.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">Tidak ada transaksi ditemukan</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b border-primary/30">
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">Invoice</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">Game</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">Item</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">Tanggal</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">Total</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">Status</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-400"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-primary/30">
          {transactions.map((transaction) => (
            <tr key={transaction.invoiceId} className="hover:bg-primary/5">
              <td className="py-3 px-4 text-sm">{transaction.invoiceId}</td>
              <td className="py-3 px-4 text-sm">{transaction.gameName}</td>
              <td className="py-3 px-4 text-sm">{transaction.itemName}</td>
              <td className="py-3 px-4 text-sm">
                {format(new Date(transaction.createdAt), "dd MMM yyyy, HH:mm", { locale: id })}
              </td>
              <td className="py-3 px-4 text-sm">Rp {transaction.total.toLocaleString('id-ID')}</td>
              <td className="py-3 px-4">
                <span className={`inline-flex rounded-full px-2 py-1 text-xs ${statusClasses[transaction.status]}`}>
                  {statusText[transaction.status]}
                </span>
              </td>
              <td className="py-3 px-4">
                <Link 
                  href={`/checkout/${transaction.invoiceId}`}
                  className="text-primary text-xs hover:underline"
                >
                  Detail
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;