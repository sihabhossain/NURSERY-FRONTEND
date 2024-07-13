import React from "react";
import { ShoppingCart } from "lucide-react";

import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { TProduct } from "@/types/types";
import { ProductDetailsModal } from "./ProductDetailsModal";

interface ProductCardProps {
  product: TProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (!product) {
    return null;
  }

  return (
    <div className="max-w-xs mx-auto bg-white shadow-sm rounded-lg overflow-hidden relative group cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          className="h-[200px] w-[200px] object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
          src={product.image}
          alt={product.title}
        />
        <img
          className="h-[200px] w-[200px] object-cover object-center absolute inset-0 backface-hidden transform rotate-y-180 group-hover:rotate-y-0 group-hover:scale-110 transition-transform duration-500"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="p-4">
        <h2 className="text-gray-800 text-lg font-semibold mb-2 group-hover:text-[#98A869] transition-colors duration-300">
          {product.title}
        </h2>
        <div className="text-gray-700 text-xl font-bold mb-2">
          ${product.price.toFixed(2)}
        </div>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.5 3 1.4-6.2L0 7l6.3-.5L10 1l2.7 5.5L19 7l-5.5 4.8L15 18z" />
            </svg>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center space-x-2 p-4 opacity-0 group-hover:opacity-100 transform translate-x-[-50px] group-hover:translate-x-0 transition-all duration-300 ease-in-out">
          <button
            className="bg-white text-gray-500 hover:text-white hover:bg-[#98A869] p-2 rounded-md shadow-lg transition duration-300 transform hover:scale-110"
            aria-label="View Product Details"
          >
            <ProductDetailsModal product={product} />
          </button>
          <button
            onClick={handleAddToCart}
            className="bg-white text-gray-500 hover:text-white hover:bg-[#98A869] p-2 rounded-md shadow-lg transition duration-300 transform hover:scale-110"
            aria-label="Add to Cart"
          >
            <ShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
