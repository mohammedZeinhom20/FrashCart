"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast";
import { cartContext } from "@/Context/CartContext";
import { cashPaymentAction } from "@/PaymentActions/cashPayment";
import { onlinePaymentAction } from "@/PaymentActions/onlinePayment";
import { useRouter } from "next/navigation";
import React, { useContext, useRef } from "react";

const Payment = () => {
  const router = useRouter();

  const { cartId, afterPayment } = useContext(cartContext);

  const details = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);

  async function cashPayment() {
    const values = {
      shippingAddress: {
        details: details.current?.value ?? "",
        phone: phone.current?.value ?? "",
        city: city.current?.value ?? "",
      },
    };

    try {
      const data = await cashPaymentAction(cartId, values);

      console.log(data);

      if (data.status) {
        toast.add({
          type: "success",
          description: "success",
        });
      }

      afterPayment();
      router.push("/allorders");
    } catch (error) {
      console.log(error);
    }
  }

  async function onlinePayment() {
    const values = {
      shippingAddress: {
        details: details.current?.value ?? "",
        phone: phone.current?.value ?? "",
        city: city.current?.value ?? "",
      },
    };

    try {
      const data = await onlinePaymentAction(cartId, values);

      console.log(data);

      if (data.status) {
        toast.add({
          type: "success",
          description: "success",
        });
      }

      if (data.status === "success") {
        window.location.href = data.session.url;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full md:w-1/2 my-10 mx-auto px-5 md:px-0">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Payment
      </h1>

      <div>
        <label htmlFor="details" className="mb-2 block">
          Details
        </label>

        <Input
          ref={details}
          type="text"
          id="details"
          className="mb-4"
        />

        <label htmlFor="phone" className="mb-2 block">
          Phone
        </label>

        <Input
          ref={phone}
          type="tel"
          id="phone"
          className="mb-4"
        />

        <label htmlFor="city" className="mb-2 block">
          City
        </label>

        <Input
          ref={city}
          type="text"
          id="city"
          className="mb-5"
        />

        <Button
          onClick={cashPayment}
          className="py-4 rounded-[5px]"
        >
          Cash Payment
        </Button>

        <Button
          onClick={onlinePayment}
          className="ms-5 py-4 rounded-[5px]"
        >
          OnLine Payment
        </Button>
      </div>
    </div>
  );
};

export default Payment;