import React from "react";

export default function JourneyFooterHardcoded() {
  return (
    <footer className="w-full border-t border-gray-300 pt-6 mt-12 text-gray-700 text-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-start gap-6 sm:gap-4 md:gap-8">
          <div className="text-left leading-snug">
            <p className="font-semibold text-gray-900">Vigovia Tech Pvt. Ltd</p>
            <p>Registered Office: Hd-109 Cinnabar Hills,</p>
            <p>Links Business Park, Karnataka, India.</p>
          </div>
          <div className="text-left sm:text-center leading-snug">
            <p>
              <span className="font-semibold text-gray-900">Phone:</span>{" "}
              +91-99X9999999
            </p>
            <p>
              <span className="font-semibold text-gray-900">Email ID:</span>{" "}
              Contact@Vigovia.Com
            </p>
          </div>
          <div className="flex sm:justify-end justify-start items-start">
            <img
              src="/logo.png"
              alt="Vigovia Logo"
              className="h-10 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
