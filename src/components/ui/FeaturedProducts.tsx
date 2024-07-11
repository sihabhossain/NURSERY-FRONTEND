import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center py-20 text-5xl text-gray-700 font-bold">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
