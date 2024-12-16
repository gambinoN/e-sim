'use client';

import React, { use, useState, useCallback } from "react";
import { useFetchData } from "@/hooks/useFetchData";
import { notFound } from "next/navigation";
import { useOrderPackage } from "@/hooks/useOrderPackage";
import PackageDetails from "@/components/PackageDetails";
import UserForm from "@/components/UserForm";

// Helper function to generate a unique transaction ID
function generateTransactionId() {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 15);
  const transactionId = `${timestamp}_${randomPart}`.substring(0, 50);
  return transactionId;
}

export default function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  // Fetch package data
  const { data, error, loading } = useFetchData<any>(
    '/api/open/package/list',
    {
      locationCode: "",
      type: "",
      slug,
      packageCode: "",
      iccid: ""
    }
  );

  // Order hook
  const { orderPackage, loading: ordering, error: orderError, success } = useOrderPackage();

  // State to store user's email (for reuse)
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Handle successful user form submission
  const handleUserSubmit = async (formData: {
    fullName: string;
    email: string;
    phone: string;
    city: string;
    country: string;
  }) => {
    const fd = new FormData();
    fd.append("fullName", formData.fullName);
    fd.append("email", formData.email);
    fd.append("phone", formData.phone);
    fd.append("city", formData.city);
    fd.append("country", formData.country);

    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: fd,
      });
      if (!response.ok) {
        throw new Error("Failed to submit user data.");
      }
      // Store user email for later use
      setUserEmail(formData.email);
    } catch (err) {
      console.error(err);
    }
  };

  // Handle order
  const handleOrder = useCallback(() => {
    if (!data || !data.obj || !data.obj.packageList || data.obj.packageList.length === 0 || !userEmail) {
      return;
    }

    const selectedPackage = data.obj.packageList[0];
    const transactionId = generateTransactionId();

    const orderData = {
      transactionId,
      amount: selectedPackage.price,
      packageInfoList: [
        {
          packageCode: selectedPackage.packageCode,
          count: 1,
          price: selectedPackage.price,
        },
      ],
      userEmail,
    };

    orderPackage(orderData);
  }, [data, orderPackage, userEmail]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error(error);
    return <p>Error fetching data</p>;
  }

  if (!data) {
    notFound();
  }

  return (
    <div>
      <h1>Package Details</h1>
      <PackageDetails data={data} />

      <h2>User Information</h2>
      <UserForm onUserSubmit={handleUserSubmit} />

      {/* Only show the order button if user info was submitted successfully (userEmail is present) */}
      {userEmail && (
        <>
          {success && <p>Order placed successfully! We'll send details to {userEmail}.</p>}
          {orderError && <p>Error ordering package: {orderError}</p>}
          <button onClick={handleOrder} disabled={ordering}>
            {ordering ? 'Ordering...' : 'Order Package'}
          </button>
        </>
      )}
    </div>
  );
}
