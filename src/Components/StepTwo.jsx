import { useState } from "react";

const TIME_SLOTS = ["Morning", "Afternoon", "Evening"];

export default function StepTwo({ totalDays, onBack, onFinish }) {
  const initialState = Array.from({ length: totalDays }, () => ({
    Morning: [""],
    Afternoon: [""],
    Evening: [""],
  }));

  const [activities, setActivities] = useState(initialState);

  const handleChange = (dayIndex, slot, index, value) => {
    const updated = [...activities];
    updated[dayIndex][slot][index] = value;
    setActivities(updated);
  };

  const addActivity = (dayIndex, slot) => {
    const updated = [...activities];
    updated[dayIndex][slot].push("");
    setActivities(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFinish(activities);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white shadow rounded space-y-8"
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        Add Activities for Each Day
      </h2>

      {activities.map((day, dayIndex) => (
        <div key={dayIndex} className="border rounded-lg p-4 bg-gray-50">
          <h3 className="text-lg font-bold text-blue-600 mb-4">
            Day {dayIndex + 1}
          </h3>
          {TIME_SLOTS.map((slot) => (
            <div key={slot} className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">{slot}</h4>
              {day[slot].map((activity, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Enter ${slot} activity`}
                  value={activity}
                  onChange={(e) =>
                    handleChange(dayIndex, slot, index, e.target.value)
                  }
                  className="w-full mb-2 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              ))}
              <button
                type="button"
                onClick={() => addActivity(dayIndex, slot)}
                className="text-sm text-blue-600 hover:underline"
              >
                + Add another {slot} activity
              </button>
            </div>
          ))}
        </div>
      ))}

      <div className="flex justify-between items-center pt-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex justify-center px-4 py-2 rounded bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition"
        >
          Back
        </button>
        <button
          type="submit"
          className="inline-flex justify-center px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Finish
        </button>
      </div>
    </form>
  );
}
