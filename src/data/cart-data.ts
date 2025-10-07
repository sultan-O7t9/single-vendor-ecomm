import { getProductDetailByPid } from '@/data/product-details-data';

export const TAX_RATE = 0.08;
export const SHIPPING_THRESHOLD = 50;
export const SHIPPING_COST = 5.99;

export type CartItem = {
  pid: string;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
};

export type CartTotals = {
  itemsCount: number;
  subtotal: number;
  discount: number;
  tax: number;
  shipping: number;
  grandTotal: number;
};

const baseCartConfiguration: Array<{ pid: string; quantity: number }> = [
  { pid: 'prd-006', quantity: 1 },
  { pid: 'prd-003', quantity: 2 },
  { pid: 'prd-001', quantity: 3 },
];

const parsePrice = (value: string): number => {
  const numeric = value.replace(/[^0-9.-]+/g, '');
  const parsed = Number.parseFloat(numeric);
  return Number.isFinite(parsed) ? parsed : 0;
};

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const formatCurrency = (value: number): string =>
  currencyFormatter.format(value);

export const getDefaultCartItems = (): CartItem[] =>
  baseCartConfiguration
    .map(({ pid, quantity }) => {
      const product = getProductDetailByPid(pid);
      if (!product) {
        return null;
      }

      return {
        pid: product.pid,
        productName: product.productName,
        productImage: product.productImage,
        price: parsePrice(product.sellPrice),
        quantity,
      } satisfies CartItem;
    })
    .filter((item): item is CartItem => Boolean(item))
    .map((item) => ({ ...item }));

export const calculateCartTotals = (items: CartItem[]): CartTotals => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 0;
  const tax = subtotal * TAX_RATE;
  const shipping =
    subtotal >= SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_COST;
  const grandTotal = subtotal - discount + tax + shipping;
  const itemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const round = (value: number) => Math.round(value * 100) / 100;

  return {
    itemsCount,
    subtotal: round(subtotal),
    discount: round(discount),
    tax: round(tax),
    shipping: round(shipping),
    grandTotal: round(grandTotal),
  };
};
