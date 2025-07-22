import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-blue-100 text-gray-700 py-6 mt-0.1 shadow-inner">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} ToDoThingz. All rights reserved.</p>

                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-500 transition">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://youtube.com/@4msz" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition">
                        <FaYoutube size={20} />
                    </a>
                    <a href="https://Discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition">
                        <FaDiscord size={20} />
                    </a>
                    <a href="https://X.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition">
                        <FaTwitter size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
