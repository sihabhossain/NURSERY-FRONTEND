import { useState } from "react";
import { TProduct } from "@/types/types";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "@/redux/api/api";
import Pagination from "../ui/Pagination";

interface ProductsProps {
  searchQuery: string;
  selectedCategories: string[];
  minPrice?: number;
  maxPrice?: number;
}

const Products = ({
  searchQuery,
  selectedCategories,
  minPrice,
  maxPrice,
}: ProductsProps) => {
  const { data, isLoading, isError } = useGetProductsQuery(undefined);

  const products = data?.data;

  let filteredProducts = products || [];

  // Filter products based on searchQuery
  if (searchQuery && searchQuery.trim() !== "") {
    filteredProducts = filteredProducts.filter((product: TProduct) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Filter products based on selected categories
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((product: TProduct) =>
      selectedCategories.includes(product.category.toLowerCase())
    );
  }

  // Filter products based on price range
  if (minPrice !== undefined && maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter(
      (product: TProduct) =>
        product.price >= minPrice && product.price <= maxPrice
    );
  } else if (minPrice !== undefined) {
    filteredProducts = filteredProducts.filter(
      (product: TProduct) => product.price >= minPrice
    );
  } else if (maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter(
      (product: TProduct) => product.price <= maxPrice
    );
  }

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching products.</div>;
  }

  if (filteredProducts.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {currentProducts.map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        itemsPerPage={productsPerPage}
        totalItems={filteredProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Products;
