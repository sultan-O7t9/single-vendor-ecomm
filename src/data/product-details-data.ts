import { products, type Product } from './home-data';

export type ProductDetail = {
  pid: string;
  productName: string;
  categoryName: string;
  description: string;
  longDescription: string;
  productImage: string;
  gallery: string[];
  sellPrice: string;
  originalPrice: string;
  rating: number;
  reviewsCount: number;
  recommendationPercentage: number;
  colors: string[];
  sizes: string[];
  productDetails: string[];
  additionalDetails: string[];
  similarProductIds: string[];
};

const defaultDetails = {
  productDetails: [
    'Crafted from premium materials with meticulous attention to detail.',
    'Designed to deliver long-lasting durability for everyday use.',
    'Engineered for comfort and ease-of-use straight out of the box.',
  ],
  additionalDetails: [
    'Includes a complimentary care guide to extend product life.',
    'Ships in sustainable packaging sourced from recycled materials.',
    'Backed by our 30-day hassle-free return and exchange program.',
  ],
  colors: ['#ECDECC', '#BBD278', '#BBC1F8', '#FFD3F8'],
  sizes: ['Small', 'Medium', 'Large', 'XXL'],
} satisfies Pick<
  ProductDetail,
  'productDetails' | 'additionalDetails' | 'colors' | 'sizes'
>;

const productDetailsList: ProductDetail[] = [
  {
    pid: 'prd-001',
    productName: 'Organic Avocado',
    categoryName: 'Fresh Food',
    description: 'Hand-picked Hass avocados ripened to creamy perfection.',
    longDescription:
      'Our Organic Avocados are grown on small family farms using natural sunlight and clean groundwater. Each fruit is carefully hand-selected to ensure peak ripeness, velvety texture, and rich flavor—perfect for salads, toast, and smoothies.',
    productImage:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571844305563-d975f22d7e09?auto=format&fit=crop&w=800&q=80',
    ],
    sellPrice: '$6.99',
    originalPrice: '$8.99',
    rating: 4.8,
    reviewsCount: 123,
    recommendationPercentage: 80,
    similarProductIds: ['prd-002', 'prd-008', 'prd-006'],
    ...defaultDetails,
  },
  {
    pid: 'prd-002',
    productName: 'Fresh Berries Mix',
    categoryName: 'Organic Grocery',
    description:
      'Juicy strawberries, blueberries, and raspberries freshly packed.',
    longDescription:
      'Our Fresh Berries Mix brings together the juiciest seasonal berries picked at dawn and packed within hours. Enjoy vibrant flavors and powerful antioxidants in your breakfasts, desserts, or smoothies.',
    productImage:
      'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534308983496-4fabb1f2d8ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80',
    ],
    sellPrice: '$8.50',
    originalPrice: '$10.99',
    rating: 4.9,
    reviewsCount: 98,
    recommendationPercentage: 86,
    similarProductIds: ['prd-001', 'prd-003', 'prd-009'],
    ...defaultDetails,
  },
  {
    pid: 'prd-003',
    productName: 'Ceramic Coffee Cups',
    categoryName: 'Home & Living',
    description:
      'Matte-finish ceramic cups for slow mornings and cozy evenings.',
    longDescription:
      'This set of Ceramic Coffee Cups features a double-glazed finish that maintains beverage temperature while staying comfortable to hold. Each cup is hand-crafted and kiln-fired for a unique speckled pattern.',
    productImage:
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    ],
    sellPrice: '$24.00',
    originalPrice: '$32.00',
    rating: 4.7,
    reviewsCount: 210,
    recommendationPercentage: 92,
    similarProductIds: ['prd-004', 'prd-010', 'prd-006'],
    ...defaultDetails,
  },
  {
    pid: 'prd-004',
    productName: 'Minimalist Chair',
    categoryName: 'Furniture',
    description: 'Ergonomic lounge chair with breathable mesh and steel frame.',
    longDescription:
      'Built for statement-making comfort, the Minimalist Chair blends a powder-coated steel frame with a breathable woven mesh seat. Lightweight yet sturdy, it fits home offices and living rooms alike.',
    productImage:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1449247613801-ab06418e2861?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505692794403-55b39e8701e0?auto=format&fit=crop&w=800&q=80',
    ],
    sellPrice: '$129.00',
    originalPrice: '$179.00',
    rating: 4.6,
    reviewsCount: 87,
    recommendationPercentage: 78,
    similarProductIds: ['prd-003', 'prd-010', 'prd-005'],
    ...defaultDetails,
  },
  {
    pid: 'prd-005',
    productName: 'Vintage Camera',
    categoryName: 'Photography',
    description:
      'Retro-inspired instant camera with a modern autofocus system.',
    longDescription:
      'Capture timeless moments with the Vintage Camera, combining analog warmth with digital convenience. It features auto-exposure, a built-in flash, and premium glass optics for crisp portraits.',
    productImage:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508898578281-774ac4893c0e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    ],
    sellPrice: '$220.00',
    originalPrice: '$249.00',
    rating: 4.9,
    reviewsCount: 154,
    recommendationPercentage: 94,
    similarProductIds: ['prd-006', 'prd-007', 'prd-003'],
    ...defaultDetails,
  },
  {
    pid: 'prd-006',
    productName: 'Leather Backpack',
    categoryName: 'Accessories',
    description: 'Full-grain leather backpack with padded laptop compartment.',
    longDescription:
      'The Leather Backpack is handcrafted from full-grain leather sourced from ethical tanneries. With a dedicated laptop sleeve and hidden pockets, it keeps essentials secure on daily commutes.',
    productImage:
      'https://images.unsplash.com/photo-1518544801976-3e18c85b87e3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518544801976-3e18c85b87e3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=800&q=80',
    ],
    sellPrice: '$89.00',
    originalPrice: '$119.00',
    rating: 4.8,
    reviewsCount: 267,
    recommendationPercentage: 88,
    similarProductIds: ['prd-005', 'prd-007', 'prd-003'],
    ...defaultDetails,
  },
  {
    pid: 'prd-007',
    productName: 'Wireless Headphones',
    categoryName: 'Electronics',
    description: 'Noise-cancelling headphones with 32-hour battery life.',
    longDescription:
      'Immerse yourself in studio-quality sound with Wireless Headphones featuring active noise cancellation and adaptive EQ. Enjoy up to 32 hours of battery life with quick USB-C recharging.',
    productImage:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518443952241-07c4b4a49db0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80',
    ],
    sellPrice: '$159.00',
    originalPrice: '$189.00',
    rating: 4.7,
    reviewsCount: 301,
    recommendationPercentage: 90,
    similarProductIds: ['prd-008', 'prd-009', 'prd-005'],
    ...defaultDetails,
  },
  {
    pid: 'prd-008',
    productName: 'Fitness Smartwatch',
    categoryName: 'Fitness',
    description: 'Water-resistant smartwatch with advanced health tracking.',
    longDescription:
      'Track workouts, heart rate, and sleep quality with the Fitness Smartwatch. Built-in GPS, swim-proof design, and personalized coaching insights help you stay on top of your training goals.',
    productImage:
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
    ],
    sellPrice: '$199.00',
    originalPrice: '$249.00',
    rating: 4.6,
    reviewsCount: 412,
    recommendationPercentage: 84,
    similarProductIds: ['prd-007', 'prd-009', 'prd-010'],
    ...defaultDetails,
  },
  {
    pid: 'prd-009',
    productName: 'Laptop Stand',
    categoryName: 'Office',
    description: 'Adjustable aluminum stand for ergonomic desk setups.',
    longDescription:
      'Raise your screen to eye level with this anodized aluminum Laptop Stand. It features adjustable height settings, silicone pads for grip, and a cable-friendly open-frame design.',
    productImage:
      'https://images.unsplash.com/photo-1487611459768-bd414656ea10?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1487611459768-bd414656ea10?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484807352052-23338990c6c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1457305247631-52c61a468e7d?auto=format&fit=crop&w=800&q=80',
    ],
    sellPrice: '$45.00',
    originalPrice: '$59.00',
    rating: 4.5,
    reviewsCount: 76,
    recommendationPercentage: 82,
    similarProductIds: ['prd-008', 'prd-007', 'prd-010'],
    ...defaultDetails,
  },
  {
    pid: 'prd-010',
    productName: 'Designer Lamp',
    categoryName: 'Lighting',
    description: 'Sculptural metal lamp with warm dimmable glow.',
    longDescription:
      'Illuminate your space with the Designer Lamp, featuring a sculptural silhouette and hand-brushed brass finish. The dimmable LED bulb casts an inviting, warm glow for any room.',
    productImage:
      'https://images.unsplash.com/photo-1505692592594-29cb8dc1f7b4?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505692592594-29cb8dc1f7b4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
    ],
    sellPrice: '$72.00',
    originalPrice: '$95.00',
    rating: 4.8,
    reviewsCount: 132,
    recommendationPercentage: 88,
    similarProductIds: ['prd-003', 'prd-004', 'prd-009'],
    ...defaultDetails,
  },
];

export const productDetailsMap = productDetailsList.reduce<
  Record<string, ProductDetail>
>((acc, detail) => {
  acc[detail.pid] = detail;
  return acc;
}, {});

export const getProductDetailByPid = (pid: string): ProductDetail | undefined =>
  productDetailsMap[pid];

export const getSimilarProducts = (ids: string[]): Product[] => {
  if (!ids.length) {
    return products.slice(0, 6);
  }

  const lookup = new Map(products.map((product) => [product.pid, product]));
  const selected = ids
    .map((id) => lookup.get(id))
    .filter((product): product is Product => Boolean(product));

  if (selected.length < 4) {
    const fallback = products.filter((product) => !ids.includes(product.pid));
    return [...selected, ...fallback].slice(0, 6);
  }

  return selected;
};

export const getAllProductPids = (): string[] =>
  productDetailsList.map((detail) => detail.pid);
