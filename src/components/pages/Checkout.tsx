import { useLocation } from "react-router-dom";
import CheckoutForm from "../ui/CheckoutForm";
import { TProduct } from "@/types/types";

const CheckoutPage = () => {
  const location = useLocation();
  const { cartItems } = location.state;

  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4">
        {/* Cart Items */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          {cartItems.map((item: TProduct, index: number) => (
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
            </div>
          ))}
        </div>

        {/* Checkout Form */}
        <div className="bg-white p-6 rounded-lg  shadow-md">
          <CheckoutForm cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
