import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link
                    to="/"
                    className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
                >
                    ToDoThingz
                </Link>
                <div className="space-x-6">
                    <Link
                        to="/"
                        className="text-gray-700 hover:text-blue-500 transition-colors duration-300 font-medium"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-gray-700 hover:text-blue-500 transition-colors duration-300 font-medium"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-700 hover:text-blue-500 transition-colors duration-300 font-medium"
                    >
                        Contact
                    </Link>
                    <Link
                        to="/login"
                        className="text-white bg-blue-500 hover:bg-indigo-600 transition-all duration-300 px-4 py-2 rounded-lg shadow-sm font-medium"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
