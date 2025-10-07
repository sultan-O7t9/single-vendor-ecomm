"use client";

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useCallback } from "react";
import type { CartItem } from "@/data/cart-data";
import { formatCurrency } from "@/data/cart-data";

type CartListProps = {
  items: CartItem[];
  onQuantityChange: (pid: string, quantity: number) => void;
  onRemoveItem: (pid: string) => void;
};

export const CartList = ({
  items,
  onQuantityChange,
  onRemoveItem,
}: CartListProps) => {
  const handleInputChange = useCallback(
    (pid: string, event: ChangeEvent<HTMLInputElement>) => {
      const nextValue = Number.parseInt(event.target.value, 10);
      if (Number.isNaN(nextValue) || nextValue < 1) {
        event.target.value = "";
        return;
      }
      onQuantityChange(pid, nextValue);
    },
    [onQuantityChange]
  );

  if (!items.length) {
    return null;
  }

  return (
    <ul className="flex flex-col bg-white border border-[#E5E7EB] rounded-xl divide-y divide-[#E5E7EB]">
      {items.map((item) => (
        <li key={item.pid} className="flex gap-4 px-2 sm:px-4 py-5 items-start">
          <div className="flex flex-1 gap-4">
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-[#F5F6F6]">
              <Image
                src={item.productImage}
                alt={item.productName}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-1">
              <div className="flex-1 flex flex-col">
                <Link
                  href={`/products/${item.pid}`}
                  className="text-sm sm:text-lg font-medium mb-1 hover:underline text-[#015C01]"
                >
                  {item.productName}
                </Link>
                <p className="text-xs sm:text-sm text-gray-600">
                  #{item.pid.toUpperCase()}
                </p>
              </div>
              <div className="flex-1 flex gap-4 items-start sm:items-center flex-wrap">
                <p className="flex flex-col md:flex-1 font-semibold sm:text-center">
                  <span className="text-xs sm:text-sm font-medium text-gray-500">
                    Price
                  </span>
                  <span>{formatCurrency(item.price)}</span>
                </p>
                <div className="flex md:flex-1 items-center gap-1">
                  <button
                    onClick={() =>
                      onQuantityChange(item.pid, Math.max(1, item.quantity - 1))
                    }
                    disabled={item.quantity <= 1}
                    className="px-2 text-lg hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label={`Decrease quantity of ${item.productName}`}
                  >
                    &minus;
                  </button>
                  <input
                    className="py-[2px] w-14 border border-[#D9D9D9] text-center rounded no-spinner"
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(event) => handleInputChange(item.pid, event)}
                    inputMode="numeric"
                  />
                  <button
                    onClick={() =>
                      onQuantityChange(item.pid, item.quantity + 1)
                    }
                    className="px-2 text-lg hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer"
                    aria-label={`Increase quantity of ${item.productName}`}
                  >
                    +
                  </button>
                </div>
                <p className="md:flex-1 font-semibold flex flex-col sm:text-center">
                  <span className="text-xs sm:text-sm font-medium text-gray-500">
                    Total
                  </span>
                  <span>{formatCurrency(item.price * item.quantity)}</span>
                </p>
              </div>
            </div>
          </div>

          <button
            title="Remove item"
            onClick={() => onRemoveItem(item.pid)}
            className="text-gray-400 text-xl hover:text-red-400 active:text-red-600 cursor-pointer"
            aria-label={`Remove ${item.productName} from cart`}
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};
