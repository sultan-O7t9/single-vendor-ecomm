import Image from "next/image";
import Link from "next/link";
import type { CartItem, CartTotals } from "@/data/cart-data";
import { formatCurrency } from "@/data/cart-data";

const paymentLogos = [
  { id: "visa", src: "/cart-summary/visa.svg", alt: "Visa" },
  { id: "mastercard", src: "/cart-summary/mastercard.svg", alt: "Mastercard" },
  { id: "klarna", src: "/cart-summary/klarna.svg", alt: "Klarna" },
  {
    id: "online-banking",
    src: "/cart-summary/online-banking.svg",
    alt: "Online Banking",
  },
];

type CartSummaryProps = {
  items: CartItem[];
  totals: CartTotals;
  action?: {
    label: string;
    href: string;
  };
  showPaymentLogos?: boolean;
};

export const CartSummary = ({
  items,
  totals,
  action,
  showPaymentLogos = true,
}: CartSummaryProps) => {
  const subtotalWithTax = totals.subtotal + totals.tax;

  return (
    <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-sm border border-[#E5E7EB] h-fit">
      <h2 className="text-lg font-semibold mb-1">Cart Summary</h2>
      <h3 className="text-xs font-semibold mb-4 text-gray-500">
        {totals.itemsCount} Item{totals.itemsCount === 1 ? "" : "s"}
      </h3>

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.pid}
            className="flex justify-between text-sm text-gray-700"
          >
            <span className="line-clamp-1 pr-3" title={item.productName}>
              {item.productName}
            </span>
            <span>{formatCurrency(item.price * item.quantity)}</span>
          </div>
        ))}
      </div>

      <div className="border-t mt-4 pt-4 space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Items subtotal :</span>
          <span>{formatCurrency(totals.subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount :</span>
          <span className="text-red-500">
            - {formatCurrency(totals.discount)}
          </span>
        </div>
        <div className="flex justify-between text-gray-500">
          <span>Tax :</span>
          <span>{formatCurrency(totals.tax)}</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal :</span>
          <span>{formatCurrency(subtotalWithTax)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Cost :</span>
          <span>{formatCurrency(totals.shipping)}</span>
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-bold">Total :</span>
        <span className="text-2xl font-bold text-[#1D364D]">
          {formatCurrency(totals.grandTotal)}
        </span>
      </div>

      {showPaymentLogos ? (
        <div className="flex gap-2 mb-4 flex-wrap">
          {paymentLogos.map((logo) => (
            <div key={logo.id} className="h-10 w-24 relative">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      ) : null}

      {action ? (
        <Link
          href={action.href}
          className="w-full inline-flex justify-center items-center bg-black text-white py-3 rounded font-semibold hover:bg-white hover:text-black border border-black transition-colors duration-300"
        >
          {action.label}
        </Link>
      ) : null}
    </div>
  );
};
