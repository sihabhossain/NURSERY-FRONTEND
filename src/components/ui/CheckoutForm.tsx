import React from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";

interface Props {
  cartItems: Array<{
    _id: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
    // Add more fields as needed
  }>;
}

const CheckoutForm: React.FC<Props> = ({ cartItems }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
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
            className="form-input col-span-2 md:col-span-1"
            placeholder="Enter your phone number"
            required
          />

          <label htmlFor="address" className="text-sm font-semibold">
            Address
          </label>
          <Textarea
            id="address"
            className="form-textarea col-span-2"
            placeholder="Enter your address"
            required
          />

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-50"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
