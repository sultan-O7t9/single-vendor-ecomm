"use-client";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/home-data";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      href={`/products/${product.pid}`}
      className="h-full bg-white rounded-[10px] overflow-hidden hover:scale-95 transition-transform duration-300 cursor-pointer flex flex-col"
    >
      <div className="aspect-[1.3538/1] bg-[#F5F6F6] relative w-full">
        <Image
          src={product.productImage}
          alt={product.productName}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start pb-3">
          <h3 className="font-semibold text-base lg:text-lg line-clamp-1 pr-2">
            {product.productName}
          </h3>
          <p className="font-bold text-base lg:text-lg text-mmb-primary whitespace-nowrap">
            {product.sellPrice}
          </p>
        </div>
        <p className="text-[#333] text-xs lg:text-sm mb-3">
          N/A (category name)
        </p>
        <div className="flex gap-2 mb-4 text-[#333] text-xs">
          <ul className="flex gap-0.5 text-mmb-primary">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index}>
                <StarIcon className="h-4 w-4" />
              </li>
            ))}
          </ul>
          <span>(N/A reviews)</span>
        </div>
        <button className="mt-auto border border-mmb-text-dark text-[13.6px] font-semibold text-mmb-text-dark rounded-full py-[10px] px-5 cursor-pointer hover:bg-mmb-primary hover:text-white transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

const StarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);
