import { useState } from "react";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import Logo from "../../../src/assets/logo.webp";
import Container from "./Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <Container>
        <div className="container mx-auto px-4 flex justify-between items-center py-4 md:py-8">
          <div className="flex items-center">
            <img src={Logo} alt="Pronia" className="h-8 w-auto mr-4" />
          </div>
          <div className="hidden md:flex space-x-6 text-gray-600">
            <a
              href="#home"
              className="hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
            >
              HOME
            </a>
            <a
              href="#shop"
              className="hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
            >
              SHOP
            </a>
            <a
              href="#blog"
              className="hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
            >
              BLOG
            </a>
            <a
              href="#about"
              className="hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
            >
              ABOUT US
            </a>
            <a
              href="#pages"
              className="hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
            >
              PAGES
            </a>
            <a
              href="#contact"
              className="hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
            >
              CONTACT US
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-6 h-6 cursor-pointer hover:text-green-600 hidden md:block" />
            <User className="w-6 h-6 cursor-pointer hover:text-green-600 hidden md:block" />
            <Heart className="w-6 h-6 cursor-pointer hover:text-green-600 hidden md:block" />
            <div className="relative hidden md:block">
              <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-green-600" />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                3
              </span>
            </div>
            <button
              className={`md:hidden transition-transform duration-300 transform ${
                isMenuOpen ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-300 transform hover:rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-300 transform hover:rotate-90" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden px-4 pb-4 space-y-4 text-gray-600 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          style={{
            transition: "height 0.5s ease-in-out, opacity 0.5s ease-in-out",
            maxHeight: isMenuOpen ? "1000px" : "0",
            opacity: isMenuOpen ? "1" : "0",
            overflow: "hidden",
          }}
        >
          <a
            href="#home"
            className="block text-center hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
          >
            HOME
          </a>
          <a
            href="#shop"
            className="block text-center hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
          >
            SHOP
          </a>
          <a
            href="#blog"
            className="block text-center hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
          >
            BLOG
          </a>
          <a
            href="#about"
            className="block text-center hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
          >
            ABOUT US
          </a>
          <a
            href="#pages"
            className="block text-center hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
          >
            PAGES
          </a>
          <a
            href="#contact"
            className="block text-center hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
          >
            CONTACT US
          </a>
          <div className="flex justify-around space-y-4 items-center">
            <Search className="w-6 h-6 mt-4 cursor-pointer hover:text-green-600" />
            <User className="w-6 h-6 cursor-pointer hover:text-green-600" />
            <Heart className="w-6 h-6 cursor-pointer hover:text-green-600" />
            <div className="relative">
              <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-green-600" />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
