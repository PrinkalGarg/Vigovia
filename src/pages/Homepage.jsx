import React from "react";

const Homepage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section (uses <img> instead of CSS background for reliable rendering) */}
      <section className="relative h-[70vh] overflow-hidden">
  <img
    src="/bg.jpg"  // Make sure this is in /public folder
    alt="New Zealand Landscape"
    className="absolute inset-0 w-full h-full object-cover"
  />
  {/* Gradient Overlay for Green Blend */}
  <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-700/50 to-transparent" />
  
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
      All About <span className="text-green-300">New Zealand</span>
    </h1>
    <p className="text-lg md:text-2xl font-bold max-w-3xl mx-auto drop-shadow-md">
      Discover New Zealand: A Land Of Majestic Landscapes, Thrilling Adventures, And Unforgettable Experiences
    </p>
  </div>
</section>


      {/* About Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          About <span className="text-purple-600">New Zealand</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="/beach.jpeg" alt="New Zealand" className="rounded-2xl shadow-lg" />
          <div>
            <h3 className="text-xl font-bold mb-4">Your Gateway to New Zealand Adventures</h3>
            <p className="text-gray-600 mb-6">
              Welcome to New Zealand, a paradise of majestic mountains, pristine beaches, and vibrant culture.
              Explore, indulge, and let New Zealand leave you awestruck.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg shadow">
                <h4 className="font-semibold">Food and Wine Tours</h4>
                <p className="text-sm text-gray-600">Embark on a culinary journey...</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg shadow">
                <h4 className="font-semibold">Adventure Activities</h4>
                <p className="text-sm text-gray-600">Feel the thrill in the adventure capital...</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg shadow">
                <h4 className="font-semibold">Nature Escapades</h4>
                <p className="text-sm text-gray-600">Discover nature at its finest...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            All <span className="text-purple-600">Tours</span>
          </h2>
          <table className="w-full border-collapse text-left shadow-lg">
            <thead>
              <tr className="bg-purple-800 text-white">
                <th className="p-4">Tour Name</th>
                <th className="p-4">Duration</th>
                <th className="p-4">Rates</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(6)].map((_, i) => (
                <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-purple-50"}`}>
                  <td className="p-4">Tour ABC</td>
                  <td className="p-4">7 Days 8 Nights</td>
                  <td className="p-4">₹50,000</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">
          Top <span className="text-purple-600">Activities And Attractions</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            "Wine Tasting",
            "Wildlife Safari",
            "Bungee Jumping",
            "Coromandel",
            "Tongariro",
            "Wanaka",
            "Aoraki",
            "Lake Tekapo",
            "Rotorua",
            "Waitomo",
          ].map((activity, i) => (
            <div key={i} className="text-center">
              <img src="/beach.jpeg" alt={activity} className="rounded-xl shadow-lg mb-2" />
              <p className="text-gray-700 font-medium">{activity}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Info */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Special <span className="text-purple-600">Seasonal Info</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["Spring", "Summer", "Autumn", "Winter"].map((season, i) => (
              <div key={i} className="bg-white shadow-lg rounded-xl p-6">
                <img
                  src="/beach.jpeg"
                  alt={season}
                  className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold">{season}</h3>
                <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">
          Blogs Related To <span className="text-purple-600">New Zealand</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src="/beach.jpeg" alt="Blog" className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Journeys of Discovery Uncovering Hidden Treasures</h3>
                <p className="text-gray-600 text-sm mb-4">"Aliquam eros justo, posuere..."</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">View</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <img src="/beach.jpeg" alt="FAQ Icon" className="w-12 h-12 mx-auto mb-4 object-cover rounded" />
                <h4 className="font-semibold mb-2">How do I check order delivery status?</h4>
                <p className="text-gray-600 text-sm">Please tap on "My Orders" section under main menu...</p>
              </div>
            ))}
          </div>
          <button className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-lg">Explore Tours</button>
        </div>
      </section>

      {/* Explore More */}
      <section className="py-16 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Explore <span className="text-purple-600">More</span>
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {['Malaysia', 'SriLanka', 'Paris', 'Barcelona', 'Rome'].map((place, i) => (
            <div key={i}>
              <img
                src="/beach.jpeg"
                alt={place}
                className="rounded-full w-32 h-32 object-cover mb-2 shadow-lg"
              />
              <p className="font-semibold">{place}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
