import type { Product } from "@/data/home-data";
import { ProductsSlider } from "../products-slider";

export const SimilarProducts = ({ products }: { products: Product[] }) => {
  if (!products.length) {
    return null;
  }

  return (
    <section className="bg-white wrapper pb-20 pt-5 px-base">
      <ProductsSlider products={products} title="Similar Products" />
    </section>
  );
};
