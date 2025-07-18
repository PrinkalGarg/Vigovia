import React, { useMemo } from "react";

/**
 * ActivitySummaryTable
 *
 * Props:
 *  journeyInfo: {
 *    toCity: string,
 *    // other fields ignored here
 *  }
 *  activities: Array<{
 *    Morning: string[];
 *    Afternoon: string[];
 *    Evening: string[];
 *  }>
 *  cityOverride?: string                // use instead of journeyInfo.toCity
 *  slotTypeMap?: Record<string,string>  // e.g. {Morning:"Nature/Sightseeing",Afternoon:"Excursion",Evening:"Leisure"}
 *  slotTimeMap?: Record<string,string>  // e.g. {Morning:"1-2 Hours",Afternoon:"2-3 Hours",Evening:"3-4 Hours"}
 *  defaultTime?: string                 // fallback for rows, default "2-3 Hours"
 *  showFooter?: boolean                 // default true
 */
export default function ActivitySummaryTable({
  journeyInfo,
  activities,
  cityOverride,
  slotTypeMap,
  slotTimeMap,
  defaultTime = "2-3 Hours",
  showFooter = true,
}) {
  const city = cityOverride || journeyInfo?.toCity || "-";

  // Flatten StepTwo structure -> table rows
  const rows = useMemo(() => {
    if (!Array.isArray(activities)) return [];
    const flat = [];
    activities.forEach((daySlots, dayIdx) => {
      ["Morning", "Afternoon", "Evening"].forEach((slot) => {
        const list = daySlots?.[slot] || [];
        list.forEach((act, i) => {
          if (!act || !act.trim()) return;
          flat.push({
            city,
            activity: act.trim(),
            type: slotTypeMap?.[slot] ?? slot, // map or fallback to slot
            time: slotTimeMap?.[slot] ?? defaultTime,
            day: dayIdx + 1, // not shown, but available
            slot,
          });
        });
      });
    });
    return flat;
  }, [activities, city, slotTypeMap, slotTimeMap, defaultTime]);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10 bg-white">
      {/* Activity Table Heading */}
      <section>
        <h2 className="text-lg sm:text-xl font-bold mb-4">
          Activity <span className="text-purple-700">Table</span>
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-purple-300 shadow">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-purple-700 text-white text-left text-sm">
                <th className="px-4 py-3 font-semibold">City</th>
                <th className="px-4 py-3 font-semibold">Activity</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Time Required</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {rows.length ? (
                rows.map((r, idx) => (
                  <tr
                    key={idx}
                    className="even:bg-purple-50/50 border-b last:border-b-0 border-purple-100"
                  >
                    <td className="px-4 py-2 whitespace-nowrap">{r.city}</td>
                    <td className="px-4 py-2">{r.activity}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{r.type}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{r.time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-6 text-center text-gray-500 italic"
                  >
                    No activities found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Terms & Conditions Link */}
      <section className="text-sm">
        <h3 className="font-semibold">
          Terms and <span className="text-purple-700">Conditions</span>
        </h3>
        <a
          href="#terms"
          className="mt-1 inline-block text-purple-700 underline hover:text-purple-800 text-sm"
        >
          View all terms and conditions
        </a>
      </section>

    </div>
  );
}
