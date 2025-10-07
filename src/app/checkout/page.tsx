import { CheckoutPageContent } from "@/components/checkout/checkout-page-content";
import { getDefaultCartItems } from "@/data/cart-data";

const CheckoutPage = () => {
  const items = getDefaultCartItems();

  return (
    <main className="bg-white">
      <section className="wrapper pb-20 pt-5 px-base">
        <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
        <h2 className="text-xl font-semibold mb-4">Shipping Info</h2>
        <CheckoutPageContent items={items} />
      </section>
    </main>
  );
};

export default CheckoutPage;
