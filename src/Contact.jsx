import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="bg-blue-50 min-h-screen flex justify-center px-6">
            <div className="max-w-2xl w-full text-center mt-19" data-aos="fade-up">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact
                    <span className="text-blue-500"> Us</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Ada pertanyaan, saran, atau kendala? Jangan ragu untuk menghubungi kami melalui kontak di bawah ini.
                    Kami akan dengan senang hati membantu.
                </p>

                <div className="text-left space-y-4 text-gray-700">
                    <div className="flex items-center space-x-3">
                        <FaEnvelope className="text-blue-500" />
                        <span>maotgaring@email.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaPhone className="text-blue-500" />
                        <span>+62 857 9871 0010</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaInstagram className="text-pink-500" />
                        <a href="https://instagram.com/akmal_1107" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            amsz
                        </a>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaFacebookF className="text-blue-600" />
                        <a href="https://facebook.comx" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            amsz
                        </a>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaGithub className="text-black" />
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            amsz
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Contact;
