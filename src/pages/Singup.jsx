import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔐 TODO: Replace with actual API call
    if (formData.fullName && formData.email && formData.password.length >= 6) {
      localStorage.setItem("token", "fakeTokenForDemo"); // Store dummy token
      navigate("/plan-journey");
    } else {
      setError("All fields are required and password must be at least 6 characters.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF4FF] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* Logo & Heading */}
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="Vigovia" className="h-14 mb-2" />
          <h2 className="text-2xl font-bold text-[#321E5D]">Create Your Account</h2>
          <p className="text-sm text-gray-500">Sign up to start planning your journey</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 bg-red-100 text-red-600 p-2 rounded-md text-sm">
            {error}
          </div>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#321E5D] mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#936FE0] focus:outline-none"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#321E5D] mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#936FE0] focus:outline-none"
              placeholder="you@vigovia.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#321E5D] mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#936FE0] focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#541C9C] hover:bg-[#680099] text-white py-2 rounded-lg font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?
          <a href="/login" className="text-[#541C9C] font-medium ml-1 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
