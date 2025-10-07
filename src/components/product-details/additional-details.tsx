import type { ProductDetail } from "@/data/product-details-data";

const CheckListIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
  </svg>
);

export const AdditionalDetails = ({ product }: { product: ProductDetail }) => {
  return (
    <section className="wrapper bg-white py-16 px-base flex flex-col gap-10">
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold">Description</h2>
        <p className="text-gray-600">{product.longDescription}</p>
      </div>

      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold">Product Details</h2>
        <ul className="flex flex-col gap-4">
          {product.productDetails.map((detail) => (
            <li key={detail} className="flex items-center gap-2">
              <CheckListIcon className="h-5 w-5 text-mmb-primary" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold">Additional Details</h2>
        <ul className="flex flex-col gap-4">
          {product.additionalDetails.map((detail) => (
            <li key={detail} className="flex items-center gap-2">
              <CheckListIcon className="h-5 w-5 text-mmb-primary" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
