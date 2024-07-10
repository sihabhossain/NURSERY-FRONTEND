import { Facebook, Twitter, Sun } from "lucide-react";
import Logo from "../../assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-green-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4 col-span-1">
            <img src={Logo} alt="Pronia Logo" className=" mb-4" />
            <p className="text-gray-700 text-center md:text-left mb-4 md:mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-gray-700 h-6 w-6" />
              <Twitter className="text-gray-700 h-6 w-6" />
              <Sun className="text-gray-700 h-6 w-6" />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start col-span-1">
            <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
            <ul className="text-gray-700 space-y-1">
              <li>About Pronia</li>
              <li>How to shop</li>
              <li>FAQ</li>
              <li>Contact us</li>
              <li>Log in</li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start col-span-1">
            <h3 className="text-lg font-semibold mb-2">My Account</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Sign In</li>
              <li>View Cart</li>
              <li>My Wishlist</li>
              <li>Track My Order</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start col-span-1">
            <h3 className="text-lg font-semibold mb-2">Our Service</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Payment Methods</li>
              <li>Money Guarantee!</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start col-span-1">
            <h3 className="text-lg font-semibold mb-2">
              Got Question? Call Us
            </h3>
            <p className="text-2xl font-bold text-gray-800 mb-2">123 456 789</p>
            <p className="text-gray-700">Your Address Goes Here</p>
            <div className="flex space-x-4 mt-4">
              <img
                src="https://htmldemo.net/pronia/pronia/assets/images/payment/1.png"
                alt="Visa"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 mt-10 border-t border-gray-300">
        <p className="text-gray-700">
          © 2024 Plantina Made With <span className="text-red-500">❤️</span> By
          SIHAB HOSSAIN
        </p>
      </div>
    </footer>
  );
};

export default Footer;
