import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import Logo from "../../../src/assets/logo.png";
import Container from "./Container";
import { Sidebar } from "./CartSidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-white shadow-md  w-full z-10">
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
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-4 pb-4 space-y-4 text-gray-600">
            <Link
              to={"/"}
              className="block hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to={"/shop"}
              className="block hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              PRODUCTS
            </Link>
            <Link
              to={"/management"}
              className="block hover:text-green-600 hover:underline hover:underline-offset-4 hover:decoration-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              MANAGEMENT
            </Link>
            <div className="flex justify-around items-center">
              <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-green-600" />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
