import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true      
        });
    }, []);

    return (
        <div className="bg-blue-50 min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl w-full text-center mt-19" data-aos="fade-up">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Organize Your Life with <span className="text-blue-500">ToDoThingz</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Stay productive, track your tasks, and never forget your goals. Simple, fast, and effective task manager for your daily life.
                </p>
                <Link
                    to="/login"
                    className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition duration-300"
                >
                    Get Started
                </Link>

                <div className="mt-10 flex justify-center" data-aos="zoom-in">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3159/3159066.png"
                        alt="todo illustration"
                        className="w-60 h-auto opacity-90"
                    />
                </div>
                <p className="text-lg text-gray-600 mt-20 mb-15" data-aos="fade-right">
                    lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
            </div>
        </div>
    );
}

export default Home;
