import { AddProductModal } from "../ui/AddProductModal";
import { Badge } from "../ui/badge";
import Container from "../ui/Container";
import { UpdateProductModal } from "../ui/UpdateProductModal";

const ProductManagement = () => {
  const products = [
    {
      category: "Plants",
      title: "Aloe Vera",
      price: "$10.00",
      quantity: 5,
      description: "A succulent plant species of the genus Aloe.",
      rating: 4.5,
      image:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg",
    },
    {
      category: "Tools",
      title: "Garden Shovel",
      price: "$15.00",
      quantity: 10,
      description: "A small hand shovel for gardening.",
      rating: 4.0,
      image:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg",
    },
    {
      category: "Fertilizers",
      title: "Organic Fertilizer",
      price: "$20.00",
      quantity: 20,
      description: "Natural fertilizer for all kinds of plants.",
      rating: 4.8,
      image:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg",
    },
  ];

  return (
    <Container>
      <div className="min-h-[70vh] mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Product Management</h1>

        <div className="my-4">
          <AddProductModal />
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                <th className="py-2 px-6 text-left">Category</th>
                <th className="py-2 px-6 text-left">Title</th>
                <th className="py-2 px-6 text-left">Price</th>
                <th className="py-2 px-6 text-left">Quantity</th>
                <th className="py-2 px-6 text-left">Description</th>
                <th className="py-2 px-6 text-left">Rating</th>
                <th className="py-2 px-6 text-left">Image</th>
                <th className="py-2 px-6 text-left">Actions</th>{" "}
                {/* New column for actions */}
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {products.map((product, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {product.category}
                  </td>
                  <td className="py-3 px-6 text-left">{product.title}</td>
                  <td className="py-3 px-6 text-left">{product.price}</td>
                  <td className="py-3 px-6 text-left">{product.quantity}</td>
                  <td className="py-3 px-6 text-left">{product.description}</td>
                  <td className="py-3 px-6 text-left">{product.rating}</td>
                  <td className="py-3 px-6 text-left">
                    <img className="w-10 h-10" src={product.image} alt="" />
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex space-x-4 cursor-pointer">
                      <div>
                        <UpdateProductModal />
                      </div>
                      <Badge>Delete</Badge>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default ProductManagement;
