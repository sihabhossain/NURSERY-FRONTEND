import { ChangeEvent, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import Container from "../ui/Container";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import Products from "../ui/Products";

const Shop = () => {
  const categories = [
    "flower",
    "succulent",
    "Cacti",
    "Flowering Plants",
    "Herbs",
    "Trees",
    "indoor plant",
    "bamboo",
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryToggle = (category: string) => {
    const isSelected = selectedCategories.includes(category);
    if (!isSelected) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  const handleMinPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setMinPrice(isNaN(value) ? undefined : value);
  };

  const handleMaxPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setMaxPrice(isNaN(value) ? undefined : value);
  };

  return (
    <Container>
      <div className="lg:flex my-20 min-h-screen justify-between items-start space-y-4 lg:space-y-0 lg:space-x-4 h-full">
        {/* Category and filters */}
        <div className="flex flex-col text-gray-500 lg:w-1/4 p-4">
          <div className="relative bg-[#F6F7FB] rounded-lg p-5 mb-7">
            <Input
              className="outline-none ring-0 w-full pr-20"
              placeholder="Search.."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <Search className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-300" />
          </div>
          <div className="bg-[#F6F7FB] rounded-lg w-full p-4">
            <h2 className="text-xl font-bold mb-4 text-center">Categories </h2>
            {/* Categories filter */}
            <ul className="mb-4">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="mb-2 border-b py-2 cursor-pointer"
                  onClick={() => handleCategoryToggle(category)}
                >
                  <Checkbox
                    id={`category-${index}`}
                    className="mr-2"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
                  />
                  <label
                    htmlFor={`category-${index}`}
                    className="cursor-pointer"
                  >
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F6F7FB] rounded-lg w-full p-4 mt-4">
            <h2 className="text-xl font-bold mb-4 text-center">Price Range </h2>
            {/* Price range filter */}
            <div className="flex items-center justify-between">
              <Input
                type="number"
                className="outline-none ring-0 w-1/2 pr-2"
                placeholder="Min Price"
                value={minPrice || ""}
                onChange={handleMinPriceChange}
              />
              <span className="mx-2">-</span>
              <Input
                type="number"
                className="outline-none ring-0 w-1/2 pl-2"
                placeholder="Max Price"
                value={maxPrice || ""}
                onChange={handleMaxPriceChange}
              />
            </div>
          </div>
        </div>

        {/* Products and pagination */}
        <div className="w-full lg:w-3/4 p-4 h-full">
          <Products
            searchQuery={searchQuery}
            selectedCategories={selectedCategories}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </div>
      </div>
    </Container>
  );
};

export default Shop;
