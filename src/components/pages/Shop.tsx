import { Checkbox } from "../ui/checkbox";
import Container from "../ui/Container";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import Products from "../ui/Products";
import { Pagination } from "../ui/pagination";

const Shop = () => {
  const categories = [
    "Succulents",
    "Ferns",
    "Cacti",
    "Flowering Plants",
    "Herbs",
    "Trees",
  ];

  const colors = [
    { id: "color-red", name: "Red" },
    { id: "color-blue", name: "Blue" },
    { id: "color-green", name: "Green" },
    { id: "color-yellow", name: "Yellow" },
    { id: "color-purple", name: "Purple" },
  ];

  return (
    <Container>
      <div className="lg:flex my-20   min-h-screen justify-between items-start space-y-4 lg:space-y-0 lg:space-x-4 h-full">
        {/* Category and filters */}
        <div className="flex flex-col text-gray-500 lg:w-1/4 p-4">
          <div className="relative bg-[#F6F7FB] rounded-lg p-5 mb-7">
            <Input
              className="outline-none ring-0 w-full pr-20"
              placeholder="Search.."
            />
            <Search className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-300" />
          </div>
          <div className="bg-[#F6F7FB] rounded-lg w-full h-screen p-4">
            <h2 className="text-xl font-bold mb-4 text-center">Categories </h2>
            {/* Categories filter */}
            <ul className="mb-4">
              {categories.map((category, index) => (
                <li key={index} className="mb-2 border-b py-2">
                  <Checkbox id={`category-${index}`} className="mr-2" />
                  <label
                    htmlFor={`category-${index}`}
                    className="cursor-pointer"
                  >
                    {category}
                  </label>
                </li>
              ))}
            </ul>

            {/* Color filter */}
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-4 text-center">Colors</h2>
              <ul className="mb-4">
                {colors.map((color, index) => (
                  <li key={index} className="mb-2 border-b py-2">
                    <Checkbox id={`color-${index}`} className="mr-2" />
                    <label
                      htmlFor={`color-${index}`}
                      className="cursor-pointer"
                    >
                      {color.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Products and pagination */}
        <div className=" w-full lg:w-3/4 p-4 h-full">
          <Products />

          <Pagination />
        </div>
      </div>
    </Container>
  );
};

export default Shop;
