import React, { useMemo } from "react";

function formatDisplayDate(isoDate) {
  if (!isoDate) return "";
  const d = new Date(isoDate);
  if (isNaN(d)) return isoDate;
  const day = d.getDate();
  const month = d.toLocaleString("default", { month: "long" });
  const suf =
    day >= 11 && day <= 13
      ? "th"
      : ({ 1: "st", 2: "nd", 3: "rd" }[day % 10] || "th");
  return `${day}${suf} ${month}`;
}

function SlotTimelineColumn({ activities }) {
  const slots = ["Morning", "Afternoon", "Evening"];
  return (
    <div className="space-y-6">
      {slots.map((slot, i) => {
        const list = activities?.[slot] || [];
        const has = list.some((x) => x && x.trim());
        return (
          <div
            key={slot}
            className="grid grid-cols-[auto_16px_1fr] items-start gap-2"
          >
            <h5 className="font-semibold text-gray-700 text-sm leading-snug pr-2 text-right">
              {slot}
            </h5>
            <div className="relative flex justify-center">
              <div
                className={[
                  "absolute left-1/2 -translate-x-1/2 w-px bg-indigo-300",
                  i === 0
                    ? "top-3 bottom-0"
                    : i === slots.length - 1
                    ? "top-0 bottom-3"
                    : "inset-y-0",
                ].join(" ")}
              />
              <span className="relative z-10 mt-1 h-3 w-3 rounded-full bg-indigo-600 border-2 border-white shadow" />
            </div>
            <div className="leading-snug">
              {has ? (
                <ul className="list-disc ml-5 text-sm text-gray-600 space-y-0.5">
                  {list.map((a, idx) =>
                    a && a.trim() ? <li key={idx}>{a}</li> : null
                  )}
                </ul>
              ) : (
                <p className="text-xs text-gray-400 italic">No activities.</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ItineraryDayRow({ dayNumber, date, subText, imageUrl, activities }) {
  return (
    <div className="w-full flex items-start gap-4 py-8 border-b last:border-b-0">
      <div className="w-14 flex-shrink-0 flex items-center justify-center">
        <div className="rotate-[-90deg] origin-center px-4 py-1 mt-14 rounded-full bg-indigo-700 text-white text-xl font-bold whitespace-nowrap">
          Day {dayNumber}
        </div>
      </div>
      <div className="flex-1 grid grid-cols-[auto_1fr] gap-6 items-start">
        <div className="flex flex-col items-center text-center">
          <img
            src={imageUrl}
            alt={`Day ${dayNumber}`}
            className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mb-2"
          />
          {date && (
            <p className="text-sm font-semibold text-gray-800 leading-tight">
              {formatDisplayDate(date)}
            </p>
          )}
          {subText && (
            <p className="text-[11px] text-gray-500 mt-1 leading-tight max-w-[8rem]">
              {subText}
            </p>
          )}
        </div>
        <SlotTimelineColumn activities={activities} />
      </div>
    </div>
  );
}

export default function ItineraryFromFinalReport({ journeyInfo, activities }) {
  const imageUrl = "beach.jpeg";
  const daysData = useMemo(() => {
    if (!journeyInfo || !Array.isArray(activities)) return [];
    const { toCity, startDate } = journeyInfo;
    const start = startDate ? new Date(startDate) : null;
    const goodStart = start && !isNaN(start);

    return activities.map((slotData, i) => {
      let isoDate = "";
      if (goodStart) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        isoDate = d.toISOString().split("T")[0];
      }
      return {
        dayNumber: i + 1,
        date: isoDate,
        subText:
          i === 0
            ? `Arrival in ${toCity} & City Exploration`
            : `Day ${i + 1} in ${toCity}`,
        imageUrl: imageUrl,
        activities: slotData,
      };
    });
  }, [journeyInfo, activities]);

  if (!daysData.length) {
    return <div className="text-center text-gray-500 py-8">No itinerary data.</div>;
  }

  return (
    <div className="w-full bg-white rounded-xl shadow p-4 sm:p-8">
      {daysData.map((d) => (
        <ItineraryDayRow
          key={d.dayNumber}
          dayNumber={d.dayNumber}
          date={d.date}
          subText={d.subText}
          imageUrl={d.imageUrl}
          activities={d.activities}
        />
      ))}
    </div>
  );
}
