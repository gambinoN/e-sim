'use client';

import React, { useState, useRef } from "react";
import { useFetchData } from "@/hooks/useFetchData";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import UserForm from "@/components/UserForm";
import PaymentForm from "@/components/PaymentForm";
import { FooterSection } from "@/components/layout/sections/footer";
import { Skeleton } from "@/components/ui/skeleton";
import Script from "next/script";

export default function PackagePage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { data, error, loading } = useFetchData<any>(
    "/api/open/package/list",
    {
      locationCode: "",
      type: "",
      slug,
      packageCode: "",
      iccid: "",
    }
  );

  const [step, setStep] = useState(1); // Trenutni korak
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Ref za sekciju plaćanja
  const paymentSectionRef = useRef<HTMLDivElement>(null);

  const finishSectionRef = useRef<HTMLDivElement>(null);


  const isMobileDevice = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768;
    }
    return false;
  };

  const goToPaymentStep = () => {
    setStep(2);
    if (isMobileDevice()) {
      setTimeout(() => {
        const offset = -100;
        const elementPosition = paymentSectionRef.current?.getBoundingClientRect().top ?? 0;
        const scrollPosition = window.pageYOffset + elementPosition + offset;
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }, 100);
    }
  };

  const goToSuccessStep = () => {
    setStep(3);
    if (isMobileDevice()) {
      setTimeout(() => {
        const offset = -100;
        const elementPosition = finishSectionRef.current?.getBoundingClientRect().top ?? 0;
        const scrollPosition = window.pageYOffset + elementPosition + offset;
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }, 100);
    }
  };

  // Prikaz Skeletona ako je učitavanje
  if (loading) {
    return (
      <div className="container mx-auto p-6 space-y-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardHeader>
              <Skeleton className="h-6 w-1/3 bg-gray-300" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Skeleton className="h-10 w-full bg-gray-200" />
                <Skeleton className="h-6 w-1/2 bg-gray-200" />
                <Skeleton className="h-6 w-1/3 bg-gray-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <Skeleton className="h-6 w-1/3 bg-gray-300" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Skeleton className="h-10 w-full bg-gray-200" />
                <Skeleton className="h-10 w-full bg-gray-200" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (error) {
    console.error(error);
    return <p className="text-center mt-4">Greška prilikom preuzimanja podataka</p>;
  }

  if (!data || !data.obj || !data.obj.packageList || data.obj.packageList.length === 0) {
    notFound();
  }

  const packageDetails = data.obj.packageList.find((pkg: any) => pkg.slug === slug);

  if (!packageDetails) {
    notFound();
  }

  return (
    <>
  <Script
    src="https://ipgtest.monri.com/dist/monri.min.js"
    strategy="afterInteractive"
  />
    <div className="container mx-auto p-6 space-y-6 mt-10">
      <h1 className="text-3xl font-bold">Plaćanje</h1>

      {/* Progress Bar */}
      <div className="relative w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className={`absolute bg-blue-600 h-2 rounded-full transition-all duration-300`}
          style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
        />
      </div>
      <div className="flex justify-between text-sm text-gray-600 mb-6">
        <span>1. Korisnički podaci</span>
        <span>2. Plaćanje</span>
        <span>3. Podaci o narudžbi</span>
      </div>

      {/* Koraci 1 i 2: Dijeljeni layout */}
      {step !== 3 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Odabrani paket</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={packageDetails.image || "/esim.png"}
                  alt={packageDetails.name}
                  className="w-15 h-10 rounded-md object-cover"
                />
                <div>
                  <h2 className="text-lg font-bold">{packageDetails.name}</h2>
                  <p className="text-sm text-gray-500">{packageDetails.duration} dan/a</p>
                </div>
              </div>
              <p className="text-lg font-bold text-gray-800">
                KM {((packageDetails.price / 10000) * 1.9).toFixed(2)}
              </p>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Cijena</span>
                <span className="font-medium">
                  KM {((packageDetails.price / 10000) * 1.9).toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Ušteda</span>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="PROMO CODE"
                    className="p-1 border rounded-md text-sm focus:ring-blue-500 focus:outline-none"
                    readOnly
                  />
                  <span className="text-green-500 font-medium">-</span>
                </div>
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>PDV</span>
                <span className="font-medium">0.00 KM</span>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex justify-between items-center text-lg font-bold">
              <span>Ukupno</span>
              <span>
                KM {((packageDetails.price / 10000) * 1.9).toFixed(2)}
              </span>
            </div>
          </CardContent>
        </Card>

          {step === 1 && (
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Unesite vaše podatke</CardTitle>
              </CardHeader>
              <CardContent>
                <UserForm onNextStep={goToPaymentStep} />
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card ref={paymentSectionRef} className="shadow-md">
              <CardHeader>
                <CardTitle>Unesite podatke o kartici</CardTitle>
              </CardHeader>
              <CardContent>
                <PaymentForm onSuccess={goToSuccessStep} />
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Korak 3: Uspješna narudžba */}
      {step === 3 && (
        <div className="flex justify-center items-center">
          <Card ref={finishSectionRef} className="shadow-md text-center p-6 max-w-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold mb-4">Uspješna narudžba</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                Vaša narudžba za <span className="font-semibold">{packageDetails?.name}</span> je uspješno završena!
              </p>
              <p className="text-md text-gray-600 mb-4">
                Detalji narudžbe su poslani na e-mail adresu.
              </p>
              <p className="text-sm text-gray-500">
                Ako ne vidite poruku, provjerite svoj folder za neželjenu poštu.
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      <FooterSection />
    </div>
    </>
  );
}
