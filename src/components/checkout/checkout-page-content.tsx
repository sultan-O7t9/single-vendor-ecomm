"use client";

import { useMemo, useState } from "react";
import { CartSummary } from "@/components/cart/cart-summary";
import type { CartItem } from "@/data/cart-data";
import { calculateCartTotals } from "@/data/cart-data";

type CheckoutFormState = {
  fullName: string;
  email: string;
  phone: string;
  shippingAddress: string;
  shippingCity: string;
  shippingState: string;
  shippingZip: string;
  billingAddress: string;
  billingCity: string;
  billingState: string;
  billingZip: string;
};

type CheckoutPageContentProps = {
  items: CartItem[];
};

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: keyof CheckoutFormState;
  value: string;
  onChange: (name: keyof CheckoutFormState, value: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) => (
  <label className="flex flex-col gap-1 text-sm text-gray-700">
    <span className="font-medium text-[#1D2939]">{label}</span>
    <input
      className="border border-[#D9D9D9] rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mmb-primary"
      type={type}
      name={name}
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={(event) => onChange(name, event.target.value)}
    />
  </label>
);

const initialFormState: CheckoutFormState = {
  fullName: "",
  email: "",
  phone: "",
  shippingAddress: "",
  shippingCity: "",
  shippingState: "",
  shippingZip: "",
  billingAddress: "",
  billingCity: "",
  billingState: "",
  billingZip: "",
};

export const CheckoutPageContent = ({ items }: CheckoutPageContentProps) => {
  const [form, setForm] = useState<CheckoutFormState>(initialFormState);
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [status, setStatus] = useState<"idle" | "submitted" | "saved">("idle");

  const totals = useMemo(() => calculateCartTotals(items), [items]);

  const updateField = (name: keyof CheckoutFormState, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setStatus("idle");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitted");
  };

  const handleSaveAndExit = () => {
    setStatus("saved");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <form className="flex-1 flex-grow space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <InputField
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={updateField}
            required
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6">
            <InputField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              required
            />
            <InputField
              label="Phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={updateField}
              placeholder="Optional"
            />
          </div>

          <InputField
            label="Address"
            name="shippingAddress"
            value={form.shippingAddress}
            onChange={updateField}
            required
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-6">
            <InputField
              label="City"
              name="shippingCity"
              value={form.shippingCity}
              onChange={updateField}
              required
            />
            <InputField
              label="State"
              name="shippingState"
              value={form.shippingState}
              onChange={updateField}
              required
            />
            <InputField
              label="Zip Code"
              name="shippingZip"
              value={form.shippingZip}
              onChange={updateField}
              required
            />
          </div>
        </div>

        <div className="space-y-4">
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={sameAsShipping}
              onChange={(event) => {
                setSameAsShipping(event.target.checked);
                setStatus("idle");
              }}
              className="h-4 w-4 text-mmb-primary border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-mmb-primary"
            />
            <span>Billing Address same as Shipping Address</span>
          </label>

          {!sameAsShipping ? (
            <div className="space-y-4">
              <InputField
                label="Billing Address"
                name="billingAddress"
                value={form.billingAddress}
                onChange={updateField}
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-6">
                <InputField
                  label="City"
                  name="billingCity"
                  value={form.billingCity}
                  onChange={updateField}
                  required
                />
                <InputField
                  label="State"
                  name="billingState"
                  value={form.billingState}
                  onChange={updateField}
                  required
                />
                <InputField
                  label="Zip Code"
                  name="billingZip"
                  value={form.billingZip}
                  onChange={updateField}
                  required
                />
              </div>
            </div>
          ) : null}
        </div>

        <div className="pt-6 flex flex-col sm:flex-row gap-6">
          <button
            type="submit"
            className="bg-mmb-primary rounded-md py-2 px-8 font-semibold text-white hover:bg-white hover:text-mmb-primary border-2 border-mmb-primary transition-colors duration-300 cursor-pointer"
          >
            Proceed to Checkout
          </button>
          <button
            type="button"
            onClick={handleSaveAndExit}
            className="hover:bg-mmb-primary rounded-md py-2 px-8 font-semibold hover:text-white bg-white text-mmb-primary border-2 border-mmb-primary transition-colors duration-300 cursor-pointer"
          >
            Save &amp; Exit
          </button>
        </div>

        {status === "submitted" ? (
          <p className="text-sm text-green-600">
            Shipping details saved. We will notify you soon.
          </p>
        ) : null}
        {status === "saved" ? (
          <p className="text-sm text-blue-600">
            Draft saved. Come back anytime to finish checkout.
          </p>
        ) : null}
      </form>

      <CartSummary items={items} totals={totals} showPaymentLogos={false} />
    </div>
  );
};
