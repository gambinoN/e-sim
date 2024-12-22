"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface PaymentFormProps {
  onSuccess: () => void; // Definicija propsa za prelazak na treći korak
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSuccess }) => {
  const handlePaymentSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Simulacija uspješnog plaćanja
    console.log("Podaci o kartici poslani");
    onSuccess(); // Poziv funkcije za prelazak na treći korak
  };

  return (
    <form onSubmit={handlePaymentSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-600">
          Broj kartice
        </label>
        <input
          type="text"
          placeholder="XXXX XXXX XXXX XXXX"
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Datum isteka
          </label>
          <input
            type="text"
            placeholder="MM/YY"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            CVC
          </label>
          <input
            type="text"
            placeholder="XXX"
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Potvrdi plaćanje
      </Button>
    </form>
  );
};

export default PaymentForm;
