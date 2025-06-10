import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#161616] text-white py-10 px-6">
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <h3 className="text-lg font-bold mb-2">ShopNex Online Ltd</h3>
                    <p className="text-sm mb-1">Canada - 438 800 2658</p>
                    <p className="text-sm underline cursor-pointer">Contact Us</p>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-3">NAVIGATE</h3>
                    <ul className="space-y-1 text-sm text-gray-400">
                        <li><a className="hover:text-white" href="#">Home</a></li>
                        <li><a className="hover:text-white" href="#">About Us</a></li>
                        <li><a className="hover:text-white" href="#">Contact Us</a></li>
                        <li><a className="hover:text-white" href="#">Customer Service</a></li>
                        <li><a className="hover:text-white" href="#">Delivery Information</a></li>
                        <li><a className="hover:text-white" href="#">FAQs</a></li>
                        <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
                        <li><a className="hover:text-white" href="#">Customer Reviews</a></li>
                        <li><a className="hover:text-white" href="#">Terms & Conditions</a></li>
                        <li><a className="hover:text-white" href="#">Blog</a></li>
                    </ul>
                </div>

                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h3 className="text-lg font-bold mb-3">Follow Us on Social Media</h3>
                        <div className="flex gap-4 text-2xl text-gray-400">
                            <FaFacebookF className="hover:text-white cursor-pointer" />
                            <FaInstagram className="hover:text-white cursor-pointer" />
                            <FaLinkedinIn className="hover:text-white cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-4 text-left text-sm text-gray-300">
                © 2025 ShopNex Online – All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
