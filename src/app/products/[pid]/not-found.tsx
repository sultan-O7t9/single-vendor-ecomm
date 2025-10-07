import Link from "next/link";

const ProductDetailsNotFound = () => {
  return (
    <div className="wrapper px-base py-16 flex flex-col items-center text-center gap-6">
      <h1 className="text-3xl font-bold">Product Not Found</h1>
      <p className="text-gray-600 max-w-xl">
        The product you&apos;re looking for doesn&apos;t exist or has been
        removed.
      </p>
      <Link
        href="/"
        className="bg-mmb-primary rounded-full py-3 px-8 text-[17px] font-semibold text-white hover:bg-white hover:text-mmb-primary border border-mmb-primary transition-all duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default ProductDetailsNotFound;
