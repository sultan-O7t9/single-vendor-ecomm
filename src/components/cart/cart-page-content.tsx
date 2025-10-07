"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CartList } from "@/components/cart/cart-list";
import { CartSummary } from "@/components/cart/cart-summary";
import type { CartItem } from "@/data/cart-data";
import { calculateCartTotals } from "@/data/cart-data";

const EmptyState = () => (
  <div className="flex flex-col gap-4 justify-center items-center text-center py-16">
    <div className="h-44 w-44 relative">
      <Image
        src="/illustrations/empty-cart.svg"
        alt="Empty cart illustration"
        fill
        sizes="176px"
        className="object-contain"
        priority
      />
    </div>
    <h2 className="text-3xl font-semibold">Your Cart is Empty</h2>
    <p className="text-sm text-gray-600 max-w-sm">
      It looks like you haven&apos;t added any items to your cart yet.
    </p>
    <Link
      href="/"
      className="bg-mmb-primary rounded-full py-2 px-8 font-medium text-white hover:bg-white hover:text-mmb-primary border border-mmb-primary transition-colors duration-300"
    >
      Continue Shopping
    </Link>
  </div>
);

type CartPageContentProps = {
  initialItems: CartItem[];
};

export const CartPageContent = ({ initialItems }: CartPageContentProps) => {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const handleQuantityChange = (pid: string, quantity: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.pid === pid ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemoveItem = (pid: string) => {
    setItems((prev) => prev.filter((item) => item.pid !== pid));
  };

  const totals = useMemo(() => calculateCartTotals(items), [items]);

  if (!items.length) {
    return <EmptyState />;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 flex-grow">
        <CartList
          items={items}
          onQuantityChange={handleQuantityChange}
          onRemoveItem={handleRemoveItem}
        />
      </div>
      <CartSummary
        items={items}
        totals={totals}
        action={{ label: "Proceed to checkout", href: "/checkout" }}
      />
    </div>
  );
};
