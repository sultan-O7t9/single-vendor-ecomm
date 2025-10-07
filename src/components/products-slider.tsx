"use client";

import { useEffect, useRef, useState } from "react";
import type { Product } from "@/data/home-data";
import { ProductCard } from "./product-card";

export const ProductsSlider = ({
  products,
  title,
}: {
  products: Product[];
  title?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const value = maxScroll <= 0 ? 0 : (scrollLeft / maxScroll) * 100;
      setProgress(
        Math.min(100, Math.max(0, Number.isFinite(value) ? value : 0))
      );
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollStep = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const step = container.clientWidth * 0.6;
    const delta = direction === "left" ? -step : step;

    container.scrollTo({
      left: container.scrollLeft + delta,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white">
      {title ? <h2 className="h-section">{title}</h2> : null}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 hidden md:flex items-center">
          <button
            className="h-10 w-10 rounded-full bg-white shadow hover:bg-mmb-primary hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
            onClick={() => scrollStep("left")}
            aria-label="Scroll left"
          >
            ◀
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 hidden md:flex items-center">
          <button
            className="h-10 w-10 rounded-full bg-white shadow hover:bg-mmb-primary hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
            onClick={() => scrollStep("right")}
            aria-label="Scroll right"
          >
            ▶
          </button>
        </div>
        <div
          ref={containerRef}
          className="grid grid-flow-col auto-cols-[calc(50%-12px)] sm:auto-cols-[calc(33.333%-16px)] gap-6 overflow-x-auto pb-3 no-scrollbar"
        >
          {products.map((product) => (
            <ProductCard key={product.pid} product={product} />
          ))}
        </div>
        <div className="h-1 bg-gray-200 rounded mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div
            className="h-full bg-mmb-primary rounded"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
};
