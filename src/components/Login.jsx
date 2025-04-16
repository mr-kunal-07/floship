import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg px-8 py-10 w-full max-w-md">
                {/* Logo Section */}
                <div className="text-center mb-6">
                    <img src="/logo.png" alt="Floship Logo" className="mx-auto h-16" />
                    <h2 className="text-2xl font-bold text-gray-800 mt-2">Welcome to Floship</h2>
                </div>

                {/* Login Form */}
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex justify-between items-center mb-6">
                        <label className="flex items-center text-gray-600">
                            <input type="checkbox" className="mr-2" />
                            Remember me
                        </label>
                        <Link to="/login" className="text-orange-500 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-900 text-white py-3 rounded-md font-bold hover:opacity-90 transition"
                    >
                        Login
                    </button>
                </form>

                {/* Register Link */}
                <p className="text-center text-gray-600 mt-4">
                    Don't have an account?{" "}
                    <Link to="/login" className="text-orange-500 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
