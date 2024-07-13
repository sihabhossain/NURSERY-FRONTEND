import React, { useState, useEffect } from "react";
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
import { TFormData } from "@/types/types";
import { Badge } from "./badge";
import { useUpdateProductMutation, useGetProductsQuery } from "@/redux/api/api";
import toast from "react-hot-toast";

interface UpdateProductModalProps {
  productId: string;
}

const defaultFormData: TFormData = {
  category: "",
  title: "",
  price: 0,
  quantity: 0,
  description: "",
  rating: 0,
  image: "",
  stock: 0,
};

export function UpdateProductModal({ productId }: UpdateProductModalProps) {
  const { data: initialProductData, isSuccess } =
    useGetProductsQuery(productId);
  const [formData, setFormData] = useState<TFormData>(defaultFormData);
  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isSuccess && initialProductData) {
      const {
        category,
        title,
        price,
        quantity,
        description,
        rating,
        image,
        stock,
      } = initialProductData;
      setFormData({
        category,
        title,
        price,
        quantity,
        description,
        rating,
        image,
        stock,
      });
    }
  }, [isSuccess, initialProductData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "quantity" || name === "rating"
          ? parseFloat(value)
          : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateProduct({ _id: productId, data: formData });
      toast.success("Product updated");
      setIsOpen(false);
    } catch (error) {
      toast.error("Error updating product");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Badge>Update</Badge>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>
            Enter product details below and click save to update the product.
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
                value={formData.category}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="col-span-3"
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
                value={formData.price}
                onChange={handleChange}
                className="col-span-3"
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
                value={formData.quantity}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="col-span-3"
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
                value={formData.rating}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image URL
              </Label>
              <Input
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="col-span-3"
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
                value={formData.stock}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update Product"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
