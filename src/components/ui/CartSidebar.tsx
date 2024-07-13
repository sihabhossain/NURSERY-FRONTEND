import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAppSelector } from "@/redux/hooks";
import { ShoppingCart } from "lucide-react";
import { removeFromCart } from "@/redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "./button";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartItems.length > 0) {
        const message =
          "You have items in your cart. Are you sure you want to leave?";
        event.returnValue = message; // For most browsers
        return message; // For some older browsers
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <div className="relative" onClick={() => setIsOpen(true)}>
          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-green-600" />
          <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-4 mb-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover"
              />
              <div className="flex-1 ml-4">
                <p>{item.title}</p>
                <p className="text-gray-500">
                  {item.quantity} x ${item.price.toFixed(2)}
                </p>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => dispatch(removeFromCart(item._id))}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center py-4 border-t">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <SheetFooter>
          <div className="flex flex-col w-full">
            <Link
              to={"/checkout"}
              state={{ cartItems }}
              onClick={handleCheckout}
            >
              <Button>Checkout</Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
