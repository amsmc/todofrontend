import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Kirim ke backend login API di sini
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="min-h-screen flex justify-center items-center px-6 bg-blue-50">
            <div className="bg-white shadow-md px-5 py-10 rounded-lg w-[30rem]">
                <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
                <form className="mt-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-black mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-black mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
                        >
                            Login
                        </button>
                    </div>
                    <a href='/contact' className='text-blue-400 hover:underline'>don't have an account?</a>
                </form>
            </div>
        </div>
    );
}

export default Login;
