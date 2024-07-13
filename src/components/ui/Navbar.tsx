import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import Logo from "../../../src/assets/logo.png";
import Container from "./Container";
import { Sidebar } from "./CartSidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <Container>
        <div className="container mx-auto px-4 flex justify-between items-center py-4 md:py-8">
          <div className="flex items-center">
            <Link to={"/"}>
              <img src={Logo} alt="Plantina" className="h-12 w-auto mr-4" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-6 text-gray-600">
            <Link
              to={"/"}
              className="hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
            >
              HOME
            </Link>
            <Link
              to={"/shop"}
              className="hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
            >
              PRODUCTS
            </Link>
            <Link
              to={"/management"}
              className="hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
            >
              MANAGEMENT
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Sidebar />
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
          <Link
            to={"/"}
            className="hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
          >
            HOME
          </Link>
          <Link
            to={"/shop"}
            className="hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
          >
            PRODUCTS
          </Link>
          <Link
            to={"/management"}
            className="hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
          >
            MANAGEMENT
          </Link>
          <div className="flex justify-around space-y-4 items-center">
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
