import { useGetProductsQuery } from "@/redux/api/api";
import ProductCard from "./ProductCard";
import { TProduct } from "@/types/types";

const FeaturedProducts = () => {
  const { data } = useGetProductsQuery(undefined);

  const products = data?.data;

  // Ensure products is an array and slice the first 8 items
  const displayedProducts = products?.slice(0, 8) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center py-20 text-5xl text-gray-700 font-bold">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
