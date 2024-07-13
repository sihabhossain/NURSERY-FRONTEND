import { useAppDispatch } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { TProduct } from "@/types/types";
import { useState } from "react";
import toast from "react-hot-toast";

export function ProductDetailsModal({ product }: { product: TProduct }) {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const handleAddToCart = () => {
    toast.success("Product added to cart");
    dispatch(addToCart({ ...product }));
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Eye />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-cover"
          />
          <div className="flex flex-col justify-between">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {product.title}
              </DialogTitle>
              <p className="text-2xl text-green-600">${product.price}</p>
              <div className="flex items-center mt-2">
                <div className="flex items-center text-yellow-500">
                  {Array.from(
                    { length: Math.floor(product.rating!) },
                    (_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.429l-6 6.163L19.335 24 12 20.09 4.665 24 6 15.592l-6-6.163 8.332-1.274L12 .587z" />
                      </svg>
                    )
                  )}
                </div>
                <span className="text-gray-500 ml-2">
                  ({product.rating!} Review{product.rating! > 1 ? "s" : ""})
                </span>
              </div>
            </DialogHeader>
            <DialogDescription className="mt-4">
              <p>{product.description}</p>
            </DialogDescription>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col">
                <label className="font-bold">Category</label>
                <p>{product.category}</p>
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Stock</label>
                <p>{product.stock}</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <Button className="ml-4" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
