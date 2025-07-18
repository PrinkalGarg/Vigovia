import React from "react";

const formatFlightRoute = (f) =>
  `${f.airline} From ${f.fromCode ? `Delhi (${f.fromCode})` : ""} To ${
    f.toCode ? `Singapore (${f.toCode})` : ""
  }`.replace("  ", " ").trim();

function FlightRow({ flight }) {
  return (
    <div className="w-full flex items-stretch rounded-xl border border-purple-300 overflow-hidden bg-white shadow-sm">
      <div className="bg-purple-50 px-4 py-3 flex items-center border-r border-purple-300">
        <span className="text-purple-700 text-sm font-semibold whitespace-nowrap">
          {flight.date || "-"}
        </span>
      </div>
      <div className="flex-1 px-4 py-3 text-gray-800 text-sm sm:text-base font-medium">
        {flight.airline ? (
          <>
            <span className="font-bold text-purple-700">{flight.airline}</span>{" "}
            From {flight.fromCode ? `Delhi (${flight.fromCode})` : "—"} To{" "}
            {flight.toCode ? `Singapore (${flight.toCode})` : "—"}.
          </>
        ) : (
          <>{formatFlightRoute(flight)}.</>
        )}
      </div>
    </div>
  );
}

function FlightSummarySection({ flights = [], note }) {
  return (
    <section className="w-full mb-10">
      <h2 className="text-lg sm:text-xl font-bold mb-4">
        Flight <span className="text-purple-700">Summary</span>
      </h2>
      <div className="space-y-3">
        {flights.length ? (
          flights.map((f, i) => <FlightRow key={i} flight={f} />)
        ) : (
          <p className="text-sm text-gray-500 italic">No flights.</p>
        )}
      </div>
      {note ? (
        <p className="mt-3 text-xs text-gray-500 italic">{note}</p>
      ) : (
        <p className="mt-3 text-xs text-gray-500 italic">
          Note: All flights include meals, basic seat choice (excluding XL),
          and 20kg/25kg checked baggage (subject to airline policy).
        </p>
      )}
    </section>
  );
}

function HotelRow({ row }) {
  return (
    <tr className="even:bg-purple-50/50">
      <td className="px-3 py-2 text-sm text-gray-800">{row.city}</td>
      <td className="px-3 py-2 text-sm text-gray-800">{row.checkIn}</td>
      <td className="px-3 py-2 text-sm text-gray-800">{row.checkOut}</td>
      <td className="px-3 py-2 text-sm text-gray-800 text-center">
        {row.nights}
      </td>
      <td className="px-3 py-2 text-sm text-gray-800">{row.name}</td>
    </tr>
  );
}

function HotelBookingsSection({ hotels = [], notes }) {
  const defaultNotes = [
    "All hotels are tentative and can be replaced with similar.",
    "Breakfast included for all hotel stays.",
    "All hotels will be 4★ and above category.",
    "A maximum occupancy of 2 people/room is allowed in most hotels.",
  ];

  const noteList = notes && notes.length ? notes : defaultNotes;

  return (
    <section className="w-full mb-10">
      <h2 className="text-lg sm:text-xl font-bold mb-4">
        Hotel <span className="text-purple-700">Bookings</span>
      </h2>
      <div className="overflow-x-auto rounded-2xl border border-purple-300 shadow-sm bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-purple-700 text-white text-sm">
              <th className="px-3 py-2 font-semibold">City</th>
              <th className="px-3 py-2 font-semibold">Check In</th>
              <th className="px-3 py-2 font-semibold">Check Out</th>
              <th className="px-3 py-2 font-semibold text-center">Nights</th>
              <th className="px-3 py-2 font-semibold">Hotel Name</th>
            </tr>
          </thead>
          <tbody>
            {hotels.length ? (
              hotels.map((h, i) => <HotelRow key={i} row={h} />)
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="px-3 py-4 text-center text-sm text-gray-500 italic"
                >
                  No hotel bookings.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ol className="mt-4 list-decimal ml-5 text-xs text-gray-600 space-y-1">
        {noteList.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ol>
    </section>
  );
}

export default function FlightHotelSummary({
  flights = [],
  hotels = [],
  flightNote,
  hotelNotes,
  className = "",
}) {
  return (
    <div className={`w-full ${className}`}>
      <FlightSummarySection flights={flights} note={flightNote} />
      <HotelBookingsSection hotels={hotels} notes={hotelNotes} />
    </div>
  );
}
