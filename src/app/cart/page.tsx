import { CartPageContent } from "@/components/cart/cart-page-content";
import { getDefaultCartItems } from "@/data/cart-data";

const CartPage = () => {
  const initialItems = getDefaultCartItems();

  return (
    <main className="bg-white">
      <section className="wrapper pb-20 pt-5 px-base">
        <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
        <CartPageContent initialItems={initialItems} />
      </section>
    </main>
  );
};

export default CartPage;
