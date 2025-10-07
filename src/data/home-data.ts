export type Product = {
  pid: string;
  productName: string;
  productImage: string;
  sellPrice: string;
};

export type Category = {
  id: string;
  name: string;
};

export type Brand = {
  id: string;
  title: string;
  description: string;
};

export type Offer = {
  id: number;
  discount: string;
  description: string;
  color1: string;
  color2: string;
};

export type Service = {
  id: number;
  title: string;
  description: string;
};

export const categories: Category[] = [
  { id: 'fresh-food', name: 'Fresh Food' },
  { id: 'frozen-food', name: 'Frozen Food' },
  { id: 'beverages', name: 'Beverages' },
  { id: 'organic', name: 'Organic Grocery' },
  { id: 'office', name: 'Office Supplies' },
  { id: 'beauty', name: 'Beauty Products' },
  { id: 'fitness', name: 'Fitness' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'travel', name: 'Travel Accessories' },
  { id: 'toys', name: 'Toys' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'books', name: 'Books' },
];

export const products: Product[] = [
  {
    pid: 'prd-001',
    productName: 'Organic Avocado',
    productImage:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    sellPrice: '$6.99',
  },
  {
    pid: 'prd-002',
    productName: 'Fresh Berries Mix',
    productImage:
      'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80',
    sellPrice: '$8.50',
  },
  {
    pid: 'prd-003',
    productName: 'Ceramic Coffee Cups',
    productImage:
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80',
    sellPrice: '$24.00',
  },
  {
    pid: 'prd-004',
    productName: 'Minimalist Chair',
    productImage:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    sellPrice: '$129.00',
  },
  {
    pid: 'prd-005',
    productName: 'Vintage Camera',
    productImage:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    sellPrice: '$220.00',
  },
  {
    pid: 'prd-006',
    productName: 'Leather Backpack',
    productImage:
      'https://images.unsplash.com/photo-1518544801976-3e18c85b87e3?auto=format&fit=crop&w=800&q=80',
    sellPrice: '$89.00',
  },
  {
    pid: 'prd-007',
    productName: 'Wireless Headphones',
    productImage:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80',
    sellPrice: '$159.00',
  },
  {
    pid: 'prd-008',
    productName: 'Fitness Smartwatch',
    productImage:
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80',
    sellPrice: '$199.00',
  },
  {
    pid: 'prd-009',
    productName: 'Laptop Stand',
    productImage:
      'https://images.unsplash.com/photo-1487611459768-bd414656ea10?auto=format&fit=crop&w=800&q=80',
    sellPrice: '$45.00',
  },
  {
    pid: 'prd-010',
    productName: 'Designer Lamp',
    productImage:
      'https://images.unsplash.com/photo-1505692592594-29cb8dc1f7b4?auto=format&fit=crop&w=800&q=80',
    sellPrice: '$72.00',
  },
];

export const offers: Offer[] = [
  {
    id: 1,
    discount: '$100',
    description: 'Explore our furniture & home furnishing range',
    color1: 'hsl(43 79% 44%)',
    color2: '#FFE6CC',
  },
  {
    id: 2,
    discount: '$29',
    description: 'Pick fresh groceries with next day delivery',
    color1: '#961F1F',
    color2: '#F9DCDC',
  },
  {
    id: 3,
    discount: '$67',
    description: 'Upgrade your kitchen essentials collection',
    color1: '#94623C',
    color2: '#FFE6CC',
  },
  {
    id: 4,
    discount: '$59',
    description: 'Refresh your wardrobe with seasonal drops',
    color1: '#003D29',
    color2: '#D2F7EC',
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Frequently asked questions',
    description: 'Updates on safe shopping in our stores',
  },
  {
    id: 2,
    title: 'Online order pickup',
    description: 'Reserve online & pick up in-store',
  },
  {
    id: 3,
    title: 'Live customer support',
    description: 'Chat with our specialists 24/7',
  },
];

export const brands: Brand[] = [
  {
    id: 'brand-1',
    title: 'Staples',
    description: 'Delivery within 24 hours',
  },
  {
    id: 'brand-2',
    title: 'Sprouts',
    description: 'Delivery within 24 hours',
  },
  {
    id: 'brand-3',
    title: 'Grocery outlet',
    description: 'Delivery within 24 hours',
  },
  {
    id: 'brand-4',
    title: 'Mollie stones',
    description: 'Delivery within 24 hours',
  },
  {
    id: 'brand-5',
    title: 'Sports Basement',
    description: 'Delivery within 24 hours',
  },
  {
    id: 'brand-6',
    title: 'Container Store',
    description: 'Delivery within 24 hours',
  },
  {
    id: 'brand-7',
    title: 'Target',
    description: 'Delivery within 24 hours',
  },
  {
    id: 'brand-8',
    title: 'Bevmo!',
    description: 'Delivery within 24 hours',
  },
];

export const departmentLinks = [
  'Fashion',
  'Education',
  'Product',
  'Frozen Food',
  'Beverages',
  'Organic Grocery',
  'Office Supplies',
  'Beauty Products',
  'Books',
  'Electronics & Gadget',
  'Travel Accessories',
  'Fitness',
  'Sneakers',
  'Toys',
  'Furniture',
];

export const aboutLinks = [
  'About Shopcart',
  'Careers',
  'News & Blog',
  'Help',
  'Press Center',
  'Shop By Location',
  'Shopcart Brands',
  'Affiliate & Partners',
  'Ideas & Guides',
];

export const serviceLinks = [
  'Gift Card',
  'Mobile App',
  'Shipping & Delivery',
  'Order Pickup',
  'Account Signup',
];

export const helpLinks = [
  'Shopcart Help',
  'Returns',
  'Track Orders',
  'Contact Us',
  'Feedback',
  'Security & Fraud',
];

export const footerHighlights = [
  { id: 'sell', label: 'Become Seller' },
  { id: 'gift', label: 'Gift Cards' },
  { id: 'help', label: 'Help Center' },
  { id: 'terms', label: 'Terms of Service' },
  { id: 'privacy', label: 'Privacy & Policy' },
];
