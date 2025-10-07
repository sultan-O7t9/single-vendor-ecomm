import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductInfo } from "@/components/product-details/product-info";
import { AdditionalDetails } from "@/components/product-details/additional-details";
import { SimilarProducts } from "@/components/product-details/similar-products";
import {
  getAllProductPids,
  getProductDetailByPid,
  getSimilarProducts,
} from "@/data/product-details-data";

const createBreadcrumbs = (
  pid: string,
  productName: string,
  category: string
) => {
  const categorySlug = category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return [
    { id: "home", label: "Home", href: "/" },
    {
      id: `category-${categorySlug}`,
      label: category,
      href: `/products?category=${encodeURIComponent(categorySlug)}`,
    },
    { id: pid, label: productName },
  ];
};

export const dynamicParams = false;

export const generateStaticParams = () => {
  return getAllProductPids().map((pid) => ({ pid }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ pid: string }>;
}): Promise<Metadata> => {
  const { pid } = await params;
  const product = getProductDetailByPid(pid);

  if (!product) {
    return {
      title: "Product Not Found | Shopcart",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.productName} | Shopcart`,
    description: product.description,
    openGraph: {
      title: product.productName,
      description: product.description,
      images: [{ url: product.productImage }],
    },
  };
};

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ pid: string }>;
}) => {
  const { pid } = await params;
  const product = getProductDetailByPid(pid);

  if (!product) {
    notFound();
  }

  const breadcrumbs = createBreadcrumbs(
    pid,
    product.productName,
    product.categoryName
  );
  const similarProducts = getSimilarProducts(product.similarProductIds);

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <main>
        <ProductInfo product={product} />
        <AdditionalDetails product={product} />
        <SimilarProducts products={similarProducts} />
      </main>
    </>
  );
};

export default ProductDetailsPage;
