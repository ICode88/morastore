"use client";

import { useState } from "react";

interface WhatsAppInputProps {
  onChange: (value: string, isValid: boolean) => void;
  defaultValue?: string;
}

const WhatsAppInput = ({ onChange, defaultValue = '' }: WhatsAppInputProps) => {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState<string | null>(null);

  const validateWhatsApp = (number: string): boolean => {
    // Basic Indonesian phone number validation
    const regex = /^08[1-9][0-9]{7,11}$/;
    return regex.test(number);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.trim();
    setValue(newValue);
    
    if (newValue === '') {
      setError(null);
      onChange(newValue, false);
      return;
    }
    
    if (!validateWhatsApp(newValue)) {
      setError("Format nomor WhatsApp tidak valid");
      onChange(newValue, false);
    } else {
      setError(null);
      onChange(newValue, true);
    }
  };

  return (
    <div>
      <label htmlFor="whatsapp" className="block text-sm font-medium mb-1">
        Nomor WhatsApp
      </label>
      <div className="relative">
        <input
          id="whatsapp"
          type="tel"
          value={value}
          onChange={handleChange}
          placeholder="08123456789"
          className="w-full bg-secondary/50 border border-primary/30 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600"
        />
      </div>
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
      <p className="text-xs text-gray-400 mt-1">
        Hasil transaksi akan dikirimkan melalui WhatsApp
      </p>
    </div>
  );
};

export default WhatsAppInput;