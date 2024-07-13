import React from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { useCreateOrderMutation } from "@/redux/api/api"; // Adjust the path as per your project structure
import toast from "react-hot-toast";
import { useAppDispatch } from "@/redux/hooks";
import { clearCart } from "@/redux/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

interface Props {
  cartItems: Array<{
    _id: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
    stock: number;
    category: string;
  }>;
}

const CheckoutForm: React.FC<Props> = ({ cartItems }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [mutate, { isLoading }] = useCreateOrderMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;

    const orderData = {
      customerDetails: { name, phone, address },
      products: cartItems.map((item) => ({
        productId: item._id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        totalPrice: item.price * item.quantity,
        category: item.category,
        description: "",
        image: item.image,
        stock: item.stock,
      })),
      orderTotal: cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    };

    try {
      await mutate(orderData);
      toast.success("Order placed successfully");
      navigate("/");
      dispatch(clearCart());
    } catch (error: any) {
      console.error("Failed to place order:", error);
      toast.error("Failed to place order");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg h-[400px]">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Checkout</h2>
      <div className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label htmlFor="name" className="text-sm font-semibold">
            Name
          </label>
          <Input
            id="name"
            type="text"
            name="name"
            className="form-input col-span-2 md:col-span-1"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="phone" className="text-sm font-semibold">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            className="form-input col-span-2 md:col-span-1"
            placeholder="Enter your phone number"
            required
          />

          <label htmlFor="address" className="text-sm font-semibold">
            Address
          </label>
          <Textarea
            id="address"
            name="address"
            className="form-textarea col-span-2"
            placeholder="Enter your address"
            required
          />

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Placing order..." : "Place order"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
