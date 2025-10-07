"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import type { ProductDetail } from "@/data/product-details-data";

const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    className="w-4 lg:w-6 h-4 lg:h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
    />
  </svg>
);

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

const TruckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M3 5a2 2 0 012-2h9a2 2 0 012 2v12H5a2 2 0 01-2-2V5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M14 7h3l4 4v6a2 2 0 01-2 2h-2"
    />
    <circle cx="7.5" cy="19.5" r="1.5" />
    <circle cx="17.5" cy="19.5" r="1.5" />
  </svg>
);

const RefreshIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
);

const ChatBubbleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const CartIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    className={className}
  >
    <circle cx="9" cy="21" r="1.5" />
    <circle cx="19" cy="21" r="1.5" />
    <path d="M2 3h2l3.6 9.59a2 2 0 002 1.41h7.72a2 2 0 002-1.41L21 7H6" />
  </svg>
);

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 6v12m6-6H6"
    />
  </svg>
);

export const ProductInfo = ({ product }: { product: ProductDetail }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  const gallery = useMemo(() => {
    const images = product.gallery?.length
      ? product.gallery
      : [product.productImage];
    return images.slice(0, 6);
  }, [product.gallery, product.productImage]);

  const currentImage = gallery[selectedImageIndex] ?? gallery[0];

  const handleSelectImage = useCallback((index: number) => {
    setSelectedImageIndex(index);
  }, []);

  const handlePrevImage = () => {
    setSelectedImageIndex(
      (prev) => (prev - 1 + gallery.length) % gallery.length
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    setIsInCart(true);
  };

  const handleUpdateCartQuantity = (increment: boolean) => {
    setQuantity((prev) => Math.max(1, prev + (increment ? 1 : -1)));
  };

  return (
    <section className="flex flex-col lg:flex-row gap-10 p-4 lg:p-8 px-base wrapper">
      <div className="flex flex-col gap-8 lg:gap-12">
        <div className="w-full lg:w-[400px] min-[84rem]:w-[600px] aspect-[1/1.17] rounded-xl bg-gray-200 overflow-hidden relative">
          {currentImage ? (
            <Image
              src={currentImage}
              alt={product.productName}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
              priority
            />
          ) : null}
        </div>
        {gallery.length > 1 ? (
          <div className="flex justify-between items-center gap-4 lg:gap-8">
            <button
              onClick={handlePrevImage}
              className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Previous image"
            >
              <ArrowIcon direction="left" />
            </button>
            <div className="flex gap-3 min-[84rem]:gap-6">
              {gallery.map((image, index) => (
                <button
                  key={image}
                  onClick={() => handleSelectImage(index)}
                  className={`w-16 min-[84rem]:w-24 h-16 min-[84rem]:h-24 min-[84rem]:rounded-[22px] rounded-[12px] bg-gray-200 overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === index
                      ? "border-mmb-selected-outline"
                      : "border-transparent"
                  }`}
                  aria-label={`Select image ${index + 1}`}
                >
                  <span className="relative block w-full h-full">
                    <Image
                      src={image}
                      alt={`${product.productName} thumbnail ${index + 1}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </span>
                </button>
              ))}
            </div>
            <button
              onClick={handleNextImage}
              className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Next image"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-12 lg:gap-24 w-full lg:max-w-[582px]">
        <div className="flex flex-col gap-8 min-[84rem]:gap-12">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2 min-[84rem]:gap-3">
              <h1 className="text-2xl min-[84rem]:text-[30px] font-semibold text-[#28293D]">
                {product.productName}
              </h1>
              <p className="text-base min-[84rem]:text-lg font-semibold text-[#64748B]">
                {product.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
            <div className="flex flex-col gap-1 min-[84rem]:gap-2">
              <span className="text-3xl min-[84rem]:text-4xl font-bold text-[#3A4980]">
                {product.sellPrice}
              </span>
              <span className="text-xl min-[84rem]:text-2xl text-black/50 line-through">
                {product.originalPrice}
              </span>
            </div>

            <div className="flex flex-col gap-4 lg:gap-5">
              <div className="flex flex-wrap gap-4 lg:gap-5">
                <div className="flex items-center gap-2 min-[84rem]:gap-3 px-3 min-[84rem]:px-4 min-[84rem]:py-2 bg-[#FBF3EA] rounded-xl">
                  <StarIcon className="w-4 min-[84rem]:w-5 h-4 min-[84rem]:h-5 text-[#D48D3B]" />
                  <span className="min-[84rem]:text-[22px] font-semibold text-[#D48D3B]">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
                <div className="flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 bg-[#EDF0F8] rounded-xl">
                  <ChatBubbleIcon className="w-4 lg:w-5 h-4 lg:h-5 text-[#3A4980]" />
                  <span className="font-semibold text-[#3A4980]">
                    {product.reviewsCount} Reviews
                  </span>
                </div>
              </div>
              <p className="text-[#B9BBBF]">
                {product.recommendationPercentage}% of buyers have recommended
                this.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 min-[84rem]:gap-6 w-full">
            <h2 className="text-lg min-[84rem]:text-xl font-semibold text-[#64748B]">
              Choose a Color
            </h2>
            <div className="flex flex-wrap gap-4 lg:gap-8">
              {product.colors.map((color, index) => (
                <button
                  key={color}
                  className={`w-8 h-8 min-[84rem]:w-14 min-[84rem]:h-14 rounded-full transition-shadow focus:outline-none ${
                    selectedColorIndex === index
                      ? "ring-2 ring-offset-2 ring-[#C69960]"
                      : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColorIndex(index)}
                  aria-label={`Select color option ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 min-[84rem]:gap-6 w-full">
            <h2 className="text-lg min-[84rem]:text-xl font-semibold text-[#64748B]">
              Select Size
            </h2>
            <div className="flex flex-wrap gap-3 min-[84rem]:gap-4">
              {product.sizes.map((size, index) => (
                <button
                  key={size}
                  className={`px-3 lg:px-4 py-1 min-[84rem]:py-2 rounded-xl transition-colors ${
                    selectedSizeIndex === index
                      ? "bg-[#EDF0F8] text-[#3A4980]"
                      : "bg-[#F3F3F3] text-[#726C6C]"
                  }`}
                  onClick={() => setSelectedSizeIndex(index)}
                  aria-label={`Select size ${size}`}
                >
                  <span className="text-lg min-[84rem]:text-[22px] font-medium">
                    {size}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:gap-20 w-full">
          <div className="flex flex-col sm:flex-row gap-4">
            {!isInCart ? (
              <>
                <div className="flex justify-between items-center gap-6 px-4 py-3 min-[84rem]:py-5 bg-[#F3F3F3] rounded-xl">
                  <button
                    className="text-2xl lg:text-[28px] font-bold text-[#3A4980] px-5"
                    onClick={() => handleQuantityChange(-1)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="text-2xl lg:text-3xl font-bold text-[#3A4980] min-w-[30px] text-center">
                    {quantity}
                  </span>
                  <button
                    className="text-2xl lg:text-[28px] font-bold text-[#3A4980] px-5"
                    onClick={() => handleQuantityChange(1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <button
                  className="flex-1 flex items-center justify-center gap-3 lg:gap-4 bg-[#3361FF] border-2 border-[#3361FF] text-white rounded-xl py-3 transition-all duration-300 hover:bg-white hover:text-[#3361FF]"
                  onClick={handleAddToCart}
                >
                  <CartIcon />
                  <span className="text-lg font-bold">Add To Cart</span>
                </button>
              </>
            ) : (
              <>
                <div className="flex-1 flex items-center justify-center gap-4 bg-[#F3F3F3] rounded-xl py-3 min-[84rem]:py-5">
                  <button
                    className="text-2xl lg:text-[28px] font-bold text-[#3A4980] px-5 hover:text-[#3361FF] transition-colors"
                    onClick={() => handleUpdateCartQuantity(false)}
                    aria-label="Decrease cart quantity"
                  >
                    -
                  </button>
                  <span className="text-2xl lg:text-3xl font-bold text-[#3A4980] min-w-[30px] text-center">
                    {quantity}
                  </span>
                  <button
                    className="text-2xl lg:text-[28px] font-bold text-[#3A4980] px-5 hover:text-[#3361FF] transition-colors"
                    onClick={() => handleUpdateCartQuantity(true)}
                    aria-label="Increase cart quantity"
                  >
                    +
                  </button>
                </div>
                <button
                  className="flex-1 flex items-center justify-center gap-3 lg:gap-4 bg-[#3361FF] border-2 border-[#3361FF] text-white rounded-xl py-3 transition-all duration-300 hover:bg-white hover:text-[#3361FF]"
                  onClick={handleAddToCart}
                >
                  <PlusIcon className="w-6 h-6" />
                  <span className="text-lg font-bold">Add More</span>
                </button>
              </>
            )}
          </div>

          <div className="border border-[#E4E4E4] rounded-xl p-4 lg:p-6 space-y-4 lg:space-y-5">
            <div className="flex gap-3 lg:gap-4">
              <TruckIcon className="w-5 lg:w-6 h-5 lg:h-6 text-[#D75951]" />
              <div className="flex flex-col gap-1 lg:gap-2">
                <h3 className="text-base lg:text-[17px] font-bold text-[#1D364D]">
                  Free Delivery
                </h3>
                <p className="text-xs lg:text-sm text-[#726C6C]">
                  Enter your postal code for delivery availability.
                </p>
              </div>
            </div>

            <hr className="border-[#E4E4E4]" />

            <div className="flex gap-3 lg:gap-4">
              <RefreshIcon className="w-5 lg:w-6 h-5 lg:h-6 text-[#D75951]" />
              <div className="flex flex-col gap-1 lg:gap-2">
                <h3 className="text-base lg:text-[17px] font-bold text-[#1D364D]">
                  Return Delivery
                </h3>
                <p className="text-xs lg:text-sm text-[#726C6C]">
                  Free 30 days delivery return. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
