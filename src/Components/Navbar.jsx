import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setMenuOpen(false);
    navigate("/login");
  };

  const navLinkStyle = {
    color: "#FBF4FF",
  };

  return (
    <nav className="shadow-md" style={{ backgroundColor: "#321E5D" }}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Vigovia Logo" className="h-10" />
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" style={navLinkStyle} className="font-medium hover:underline">
            Home
          </Link>
          <Link to="/my-profile" style={navLinkStyle} className="font-medium hover:underline">
            My Profile
          </Link>
          <Link to="/plan-journey" style={navLinkStyle} className="font-medium hover:underline">
            Plan My Journey
          </Link>
          <Link to="/order-history" style={navLinkStyle} className="font-medium hover:underline">
            Order History
          </Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md font-medium transition"
              style={{
                backgroundColor: "#541C9C",
                color: "white",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#936FE0")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#541C9C")}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded-md font-medium transition"
              style={{
                backgroundColor: "#541C9C",
                color: "white",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#936FE0")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#541C9C")}
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-[#680099]">
          <Link to="/" className="block text-white" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/my-profile" className="block text-white" onClick={() => setMenuOpen(false)}>
            My Profile
          </Link>
          <Link to="/plan-journey" className="block text-white" onClick={() => setMenuOpen(false)}>
            Plan My Journey
          </Link>
          <Link to="/order-history" className="block text-white" onClick={() => setMenuOpen(false)}>
            Order History
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full py-2 text-white rounded-md"
              style={{ backgroundColor: "#541C9C" }}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block text-center py-2 text-white rounded-md"
              style={{ backgroundColor: "#541C9C" }}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
