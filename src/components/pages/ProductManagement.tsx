import { useGetProductsQuery } from "@/redux/api/api";
import { AddProductModal } from "../ui/AddProductModal";
import Container from "../ui/Container";
import { UpdateProductModal } from "../ui/UpdateProductModal";
import { TProduct } from "@/types/types";
import { AlertForDelete } from "../ui/AlertForDelete";

const ProductManagement = () => {
  const { data, isSuccess } = useGetProductsQuery(undefined);

  const products = data?.data;

  return (
    <Container>
      <div className="min-h-[70vh] mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Product Management</h1>

        <div className="my-4">
          <AddProductModal />
        </div>

        {isSuccess && (
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                  <th className="py-2 px-6 text-left">Category</th>
                  <th className="py-2 px-6 text-left">Title</th>
                  <th className="py-2 px-6 text-left">Price</th>
                  <th className="py-2 px-6 text-left">Stock</th>
                  <th className="py-2 px-6 text-left">Description</th>
                  <th className="py-2 px-6 text-left">Rating</th>
                  <th className="py-2 px-6 text-left">Image</th>
                  <th className="py-2 px-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {products &&
                  products.map((product: TProduct) => (
                    <tr
                      key={product._id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {product.category}
                      </td>
                      <td className="py-3 px-6 text-left">{product.title}</td>
                      <td className="py-3 px-6 text-left">{product.price}</td>
                      <td className="py-3 px-6 text-left">{product.stock}</td>
                      <td className="py-3 px-6 text-left">
                        {product.description}
                      </td>
                      <td className="py-3 px-6 text-left">{product.rating}</td>
                      <td className="py-3 px-6 text-left">
                        <img className="w-10 h-10" src={product.image} alt="" />
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex space-x-4 cursor-pointer">
                          <div>
                            <UpdateProductModal productId={product._id} />
                          </div>
                          <AlertForDelete productId={product._id} />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ProductManagement;
