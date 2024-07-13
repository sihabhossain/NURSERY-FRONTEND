import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateProductMutation } from "@/redux/api/api";
import toast from "react-hot-toast";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type CustomError = {
  data: {
    message: string;
  };
};

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === "object" && error != null && "data" in error;
}

function isCustomErrorData(
  errorData: unknown
): errorData is CustomError["data"] {
  return (
    typeof errorData === "object" && errorData != null && "message" in errorData
  );
}

export function AddProductModal() {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    price: "",
    quantity: "",
    description: "",
    rating: "",
    image: "",
    stock: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const [addProduct, { error, isSuccess, isError }] =
    useCreateProductMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product added successfully");
      setIsOpen(false);
      setFormData({
        category: "",
        title: "",
        price: "",
        quantity: "",
        description: "",
        rating: "",
        image: "",
        stock: "",
      });
    }

    if (isError) {
      if (isFetchBaseQueryError(error) && isCustomErrorData(error.data)) {
        toast.error(error.data.message);
      } else {
        toast.error("An error occurred");
      }
    }
  }, [isSuccess, isError, error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addProduct(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogDescription>
            Enter product details below and click save to add the product.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                id="category"
                name="category"
                type="text"
                className="col-span-3"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                name="title"
                type="text"
                className="col-span-3"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                name="price"
                type="number"
                className="col-span-3"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Quantity
              </Label>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                className="col-span-3"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                name="description"
                type="text"
                className="col-span-3"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating" className="text-right">
                Rating
              </Label>
              <Input
                id="rating"
                name="rating"
                type="number"
                className="col-span-3"
                value={formData.rating}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image URL
              </Label>
              <Input
                id="image"
                name="image"
                type="text"
                className="col-span-3"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="stock" className="text-right">
                Stock
              </Label>
              <Input
                id="stock"
                name="stock"
                type="number"
                className="col-span-3"
                value={formData.stock}
                onChange={handleChange}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Product</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
