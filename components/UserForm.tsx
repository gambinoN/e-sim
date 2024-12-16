"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation schema using Zod
const UserSchema = z.object({
  fullName: z.string().nonempty("Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().nonempty("Phone number is required"),
  city: z.string().nonempty("City is required"),
  country: z.string().nonempty("Country is required"),
});

type UserFormData = z.infer<typeof UserSchema>;

interface UserFormProps {
  onUserSubmit: (data: UserFormData) => Promise<void>;
}

const UserForm: React.FC<UserFormProps> = ({ onUserSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserFormData>({
    resolver: zodResolver(UserSchema),
    mode: "onTouched"
  });

  const submitHandler = async (data: UserFormData) => {
    await onUserSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label>Full Name</label>
        <input type="text" {...register("fullName")} />
        {errors.fullName && <p style={{color:"red"}}>{errors.fullName.message}</p>}
      </div>

      <div>
        <label>Email Address</label>
        <input type="email" {...register("email")} />
        {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
      </div>

      <div>
        <label>Phone Number</label>
        <input type="text" {...register("phone")} />
        {errors.phone && <p style={{color:"red"}}>{errors.phone.message}</p>}
      </div>

      <div>
        <label>City</label>
        <input type="text" {...register("city")} />
        {errors.city && <p style={{color:"red"}}>{errors.city.message}</p>}
      </div>

      <div>
        <label>Country</label>
        <input type="text" {...register("country")} />
        {errors.country && <p style={{color:"red"}}>{errors.country.message}</p>}
      </div>

      <button type="submit">Submit User Info</button>
    </form>
  );
};

export default UserForm;
