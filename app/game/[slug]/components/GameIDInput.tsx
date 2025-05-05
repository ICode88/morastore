"use client";

import { useState } from "react";
import { HelpCircle } from "lucide-react";

interface GameIDInputProps {
  gameName: string;
  onChange: (userId: string, serverID?: string) => void;
}

const GameIDInput = ({ gameName, onChange }: GameIDInputProps) => {
  const [userId, setUserId] = useState("");
  const [serverID, setServerID] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  const needsServerID = gameName === "Mobile Legends";

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.trim();
    setUserId(newValue);
    onChange(newValue, serverID);
  };

  const handleServerIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.trim();
    setServerID(newValue);
    onChange(userId, newValue);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-medium">
          ID {gameName}
        </label>
        <button
          type="button"
          onClick={() => setShowHelp(!showHelp)}
          className="text-primary text-xs flex items-center hover:underline"
        >
          <HelpCircle className="h-3 w-3 mr-1" />
          Cara Cek ID
        </button>
      </div>

      {needsServerID ? (
        <div className="flex space-x-2">
          <div className="w-3/4">
            <input
              type="text"
              value={userId}
              onChange={handleUserIdChange}
              placeholder="Masukkan User ID"
              className="w-full bg-secondary/50 border border-primary/30 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600"
            />
          </div>
          <div className="w-1/4">
            <input
              type="text"
              value={serverID}
              onChange={handleServerIdChange}
              placeholder="Server ID"
              className="w-full bg-secondary/50 border border-primary/30 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600"
            />
          </div>
        </div>
      ) : (
        <input
          type="text"
          value={userId}
          onChange={handleUserIdChange}
          placeholder={`Masukkan ID ${gameName} Anda`}
          className="w-full bg-secondary/50 border border-primary/30 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600"
        />
      )}

      {showHelp && (
        <div className="mt-2 p-3 rounded-md bg-primary/10 border border-primary/30 text-xs text-gray-300">
          <p className="font-medium mb-1">Cara Menemukan ID {gameName}:</p>
          {gameName === "Mobile Legends" && (
            <ol className="list-decimal list-inside space-y-1">
              <li>Buka aplikasi Mobile Legends</li>
              <li>Tap icon profil di pojok kiri atas</li>
              <li>User ID dan Server ID akan terlihat di bawah nama profil</li>
              <li>
                Contoh format: 12345678 (1234) - dimana 12345678 adalah User ID
                dan 1234 adalah Server ID
              </li>
            </ol>
          )}
          {gameName === "Free Fire" && (
            <ol className="list-decimal list-inside space-y-1">
              <li>Buka aplikasi Free Fire</li>
              <li>Tap ikon profil di pojok kiri atas layar</li>
              <li>
                ID akan terlihat di bawah nama karakter Anda (biasanya terdiri
                dari angka)
              </li>
            </ol>
          )}
          {gameName === "PUBG Mobile" && (
            <ol className="list-decimal list-inside space-y-1">
              <li>Buka aplikasi PUBG Mobile</li>
              <li>Tap ikon profil di pojok kanan atas</li>
              <li>
                User ID akan terlihat di bawah nama profil Anda (format: ID:
                5xxxxx)
              </li>
            </ol>
          )}
          {gameName === "Genshin Impact" && (
            <ol className="list-decimal list-inside space-y-1">
              <li>Buka aplikasi Genshin Impact</li>
              <li>Buka menu Paimon (pojok kanan atas)</li>
              <li>Pilih menu Settings/Pengaturan</li>
              <li>Pilih tab Account</li>
              <li>UID akan terlihat di bagian User Center</li>
            </ol>
          )}
        </div>
      )}

      <p className="mt-1 text-xs text-gray-400">
        Masukkan ID dengan benar untuk memastikan item sampai ke akun Anda
      </p>
    </div>
  );
};

export default GameIDInput;