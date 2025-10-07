import { products } from "@/data/home-data";
import { ProductsSlider } from "../products-slider";

export const WeeklyProductsSection = () => {
  return (
    <section className="bg-white wrapper pb-20 pt-5 px-base">
      <ProductsSlider
        products={products.slice(0, 8)}
        title="Weekly Popular Products"
      />
    </section>
  );
};
