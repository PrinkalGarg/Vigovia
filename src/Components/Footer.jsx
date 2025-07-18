// src/Components/Footer.jsx
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FBF4FF] text-sm text-[#321E5D]">
      {/* Upper Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-6 border-b border-gray-300">
        <div>
          <h4 className="font-semibold mb-2">Our offerings</h4>
          <ul>
            <li>Holidays</li>
            <li>Visa</li>
            <li>Forex</li>
            <li>Hotels</li>
            <li>Flights</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Popular destinations</h4>
          <ul>
            <li>Dubai</li>
            <li>Bali</li>
            <li>Thailand</li>
            <li>Singapore</li>
            <li>Malaysia</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Vigovia Specials</h4>
          <ul>
            <li>Featured Experience</li>
            <li>Group Tours</li>
            <li>Backpackers Club</li>
            <li>Offline Events</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Vigovia Blog</li>
            <li>Partner Portal</li>
            <li>Accreditations</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">More</h4>
          <ul>
            <li>Investor Relations</li>
            <li>Forex</li>
            <li>FAQs</li>
            <li>Domestic Holidays</li>
          </ul>
        </div>
      </div>

      {/* Contact and Help Row */}
      <div className="max-w-7xl mx-auto px-6 py-4  flex flex-col md:flex-row justify-center items-start md:items-center text-sm">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <button className="bg-[#321E5D] text-white px-3 py-1 rounded-full text-xs font-semibold">
            Need help? Call us
          </button>
          <span className="font-semibold">+91-98xxx64641</span>
          <div>
            <div className="font-semibold">Email</div>
            <div>contact@vigovia.com</div>
          </div>
          <div>
            <div className="font-semibold">Address</div>
            <div className="max-w-xs">
              HD-109 Cinnabar Hills, Links Business Park, Bangalore<br />
              North, Bangalore, Karnataka, India - 560071
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#321E5D] text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <img src="/logo.png" alt="Vigovia Logo" className="h-6" />
            <span>© 2025 Vigovia Travel Technologies (P) Ltd. All rights reserved.</span>
          </div>
          <div className="flex gap-4 text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-center gap-6 text-xs text-gray-200 border-t border-gray-500 pt-2">
          <span>Privacy policy</span>
          <span>Legal notice</span>
          <span>Accessibility</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
