const JourneyHeaderSection = ({ userName, journeyInfo, logoSrc }) => {
  return (
    <div className="flex flex-col items-center mb-6">
      {/* Logo */}
      <img src={logoSrc} alt="Logo" className="w-32 mb-4" />

      {/* Gradient Header */}
      <div
        data-pdf-flat-bg
        className="w-full max-w-3xl text-center rounded-[32px] px-6 py-8 sm:px-10 sm:py-10 text-white
                   bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 shadow-lg mb-6"
      >
        <p className="text-lg sm:text-xl font-medium mb-1">Hi, {userName}!</p>
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
          {journeyInfo.destination} Itinerary
        </h1>
        <p className="mt-1 text-sm sm:text-base opacity-90">
          {journeyInfo.days} Days {journeyInfo.days - 1} Nights
        </p>
        <div className="mt-4 opacity-95 flex items-center justify-center gap-3 text-xl">
          <span title="Flight">✈️</span>
          <span title="Hotel">🏨</span>
          <span title="Transfer">🚌</span>
          <span title="Car">🚗</span>
          <span title="Docs">📑</span>
        </div>
      </div>

      {/* Journey Details Row */}
      <div className="flex justify-between gap-4 border border-gray-300 rounded-lg p-4 w-full max-w-3xl text-sm">
        <div>
          <strong>Departure From</strong>
          <p>{journeyInfo.departure}</p>
        </div>
        <div>
          <strong>Departure</strong>
          <p>{journeyInfo.date}</p>
        </div>
        <div>
          <strong>Arrival</strong>
          <p>{journeyInfo.arrival || "15/06/2025"}</p>
        </div>
        <div>
          <strong>Destination</strong>
          <p>{journeyInfo.destination}</p>
        </div>
        <div>
          <strong>No. Of Travellers</strong>
          <p>{journeyInfo.travelers}</p>
        </div>
      </div>
    </div>
  );
};

export default JourneyHeaderSection;
