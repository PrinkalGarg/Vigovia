import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === "test@vigovia.com" && formData.password === "123456") {
      localStorage.setItem("token", "demo_token");
      navigate("/plan-journey");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#FBF4FF" }}>
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="Vigovia" className="h-14 mb-2" />
          <h2 className="text-2xl font-bold" style={{ color: "#321E5D" }}>Welcome Back</h2>
          <p className="text-sm" style={{ color: "#680099" }}>Log in to plan your next journey</p>
        </div>

        {error && (
          <div className="mb-4 bg-red-100 text-red-600 p-2 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: "#321E5D" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "#FBF4FF",
                color: "#321E5D",
                borderColor: "#936FE0",
                outlineColor: "#936FE0"
              }}
              placeholder="you@vigovia.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: "#321E5D" }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "#FBF4FF",
                color: "#321E5D",
                borderColor: "#936FE0",
                outlineColor: "#936FE0"
              }}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg font-semibold transition text-white"
            style={{ backgroundColor: "#541C9C" }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#680099"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#541C9C"}
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm" style={{ color: "#680099" }}>
          Don't have an account?
          <a href="/signup" className="font-medium ml-1" style={{ color: "#541C9C" }}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
