import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";

export function Sidebar() {
  const cartItems = [
    {
      name: "American Marigold",
      price: 23.45,
      quantity: 1,
      image:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative">
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
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <div className="flex-1 ml-4">
                <p>{item.name}</p>
                <p className="text-gray-500">
                  {item.quantity} x ${item.price.toFixed(2)}
                </p>
              </div>
              <button className="text-red-500 hover:text-red-700">×</button>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center py-4 border-t">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <SheetFooter>
          <div className="flex flex-col w-full">
            <Button>Checkout</Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
