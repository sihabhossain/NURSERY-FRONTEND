import { TProduct } from "@/types/types";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "@/redux/api/api";

const Products = () => {
  const { data, isLoading, isError } = useGetProductsQuery(undefined);

  const products = data?.data;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching products.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
