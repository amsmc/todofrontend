import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="bg-blue-50 min-h-screen flex items-center justify-center px-6">
            <div className="max-w-3xl w-full text-center mt-19" data-aos="fade-up">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    About <span className="text-blue-500">ToDoThingz</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    ToDoThingz adalah aplikasi manajemen tugas harian yang dirancang untuk membantu kamu tetap fokus, produktif, dan terorganisir setiap hari. 
                    Dengan tampilan sederhana namun kuat, kamu bisa mencatat, mengelola, dan menyelesaikan berbagai aktivitas harian dengan lebih efektif.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-10 text-left">
                    <div data-aos="fade-right">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">🎯 Tujuan Kami</h3>
                        <p className="text-gray-700">
                            Kami ingin mempermudah hidup kamu dengan alat sederhana untuk mencatat dan menuntaskan pekerjaan tanpa ribet.
                        </p>
                    </div>

                    <div data-aos="fade-left">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">🚀 Fitur Unggulan</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            <li>Tambah, edit, hapus tugas</li>
                            <li>Reminder & prioritas</li>
                            <li>UI bersih & ringan</li>
                            <li>100% gratis dan mudah digunakan</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10" data-aos="zoom-in">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4553/4553687.png"
                        alt="About illustration"
                        className="w-48 mx-auto opacity-90"
                    />
                </div>
                {/* Lanjutan dari sebelumnya */}
                <div className="grid md:grid-cols-2 gap-8 text-left mt-15 ">
                    <div data-aos="fade-right">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">🛠 Teknologi yang Digunakan</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            <li>React + React Router</li>
                            <li>Tailwind CSS untuk UI modern</li>
                            <li>AOS untuk animasi scroll</li>
                            <li>React Icons untuk ikon sosial media</li>
                        </ul>
                    </div>

                    <div data-aos="fade-left">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">🤝 Dukungan & Kontribusi</h3>
                        <p className="text-gray-700">
                            Proyek ini terbuka untuk siapa saja yang ingin belajar, berbagi, atau mengembangkan fitur baru. 
                            Kamu bisa ikut kontribusi lewat GitHub atau sekadar memberi masukan.
                        </p>
                        <a
                            href="https://github.com" // Ganti dengan link repo kamu
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-blue-500 hover:underline"
                        >
                            Kunjungi GitHub kami →
                        </a>
                    </div>
                </div>

                <div className="mt-16 mb-20" data-aos="fade-up">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">👥 Tim Pengembang</h3>
                    <p className="text-gray-700">
                        ToDoThingz dikembangkan oleh tim kecil yang peduli dengan produktivitas dan pengalaman pengguna. Kami percaya bahwa manajemen waktu adalah kunci keberhasilan.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default About;
