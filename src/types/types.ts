export type TFormData = {
  _id?: string;
  category: string;
  title: string;
  price: number;
  quantity: number;
  description: string;
  rating: number;
  image: string;
  stock: number;
};

export type TCartItem = {
  _id: string;
  title: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
  stock: number;
};

export type TProduct = {
  _id: string;
  title: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
  stock: number;
  description?: string;
  rating?: number;
};
