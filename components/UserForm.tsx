"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

// Validacijska šema pomoću Zod
const UserSchema = z.object({
  fullName: z.string().nonempty("Puno ime je obavezno"),
  email: z.string().email("Nevažeća adresa e-pošte"),
  phone: z.string().nonempty("Broj telefona je obavezan"),
  city: z.string().nonempty("Grad je obavezan"),
  country: z.string().nonempty("Država je obavezna"),
});

type UserFormData = z.infer<typeof UserSchema>;

interface UserFormProps {
  onNextStep: () => void; // Funkcija za prelazak na drugi korak
}

const UserForm: React.FC<UserFormProps> = ({ onNextStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(UserSchema),
    mode: "onTouched",
  });

  const submitHandler = async (data: UserFormData) => {
    console.log("Korisnički podaci:", data);
    onNextStep(); // Pozivanje funkcije za prelazak na drugi korak
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-6"
    >
      {/* Puno ime */}
      <div>
        <label className="block text-sm font-medium text-gray-600">
          Puno ime
        </label>
        <input
          type="text"
          {...register("fullName")}
          className={`w-full p-2 border rounded-md ${
            errors.fullName ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Email i broj telefona */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Email adresa
          </label>
          <input
            type="email"
            {...register("email")}
            className={`w-full p-2 border rounded-md ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Broj telefona */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Broj telefona
          </label>
          <input
            type="text"
            {...register("phone")}
            className={`w-full p-2 border rounded-md ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Grad i država */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Grad */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Grad
          </label>
          <input
            type="text"
            {...register("city")}
            className={`w-full p-2 border rounded-md ${
              errors.city ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">
              {errors.city.message}
            </p>
          )}
        </div>

        {/* Država */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Država
          </label>
          <input
            type="text"
            {...register("country")}
            className={`w-full p-2 border rounded-md ${
              errors.country ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.country.message}
            </p>
          )}
        </div>
      </div>

      {/* Dugme za slanje */}
      <Button type="submit" className="w-full">
        Idi na plaćanje
      </Button>
    </form>
  );
};

export default UserForm;
