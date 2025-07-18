import { useState } from "react";

const DEFAULT_FORM = {
  fromCity: "",
  toCity: "",
  startDate: "",
  travelers: 1,
  days: 1,
};

export default function StepOne({ initialData = {}, onNext }) {
  const [form, setForm] = useState({ ...DEFAULT_FORM, ...initialData });
  const [errors, setErrors] = useState({});

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const validate = () => {
    const e = {};

    if (!form.fromCity.trim()) e.fromCity = "Required.";
    if (!form.toCity.trim()) e.toCity = "Required.";

    // date validation: must be valid ISO date string (yyyy-mm-dd)
    if (!form.startDate) {
      e.startDate = "Required.";
    } else if (isNaN(Date.parse(form.startDate))) {
      e.startDate = "Invalid date.";
    }

    const trav = Number(form.travelers);
    if (!trav || trav < 1) e.travelers = "At least 1 traveler.";
    if (!Number.isInteger(trav)) e.travelers = "Whole number only.";

    const d = Number(form.days);
    if (!d || d < 1) e.days = "At least 1 day.";
    if (!Number.isInteger(d)) e.days = "Whole number only.";
    if (d > 60) e.days = "Please limit to 60 days (adjust as needed).";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // normalize numeric fields
    const cleaned = {
      ...form,
      travelers: Number(form.travelers),
      days: Number(form.days),
    };
    onNext?.(cleaned);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        Plan Your Journey – Details
      </h2>

      {/* From City */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          From City
        </label>
        <input
          type="text"
          value={form.fromCity}
          onChange={(e) => update("fromCity", e.target.value)}
          placeholder="e.g., New Delhi"
          className={`w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring ${
            errors.fromCity ? "border-red-500 ring-red-200" : "border-gray-300 ring-blue-200"
          }`}
        />
        {errors.fromCity && (
          <p className="mt-1 text-xs text-red-600">{errors.fromCity}</p>
        )}
      </div>

      {/* To City */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          To City
        </label>
        <input
          type="text"
          value={form.toCity}
          onChange={(e) => update("toCity", e.target.value)}
          placeholder="e.g., Goa"
          className={`w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring ${
            errors.toCity ? "border-red-500 ring-red-200" : "border-gray-300 ring-blue-200"
          }`}
        />
        {errors.toCity && (
          <p className="mt-1 text-xs text-red-600">{errors.toCity}</p>
        )}
      </div>

      {/* Start Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Start Date
        </label>
        <input
          type="date"
          value={form.startDate}
          onChange={(e) => update("startDate", e.target.value)}
          className={`w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring ${
            errors.startDate ? "border-red-500 ring-red-200" : "border-gray-300 ring-blue-200"
          }`}
        />
        {errors.startDate && (
          <p className="mt-1 text-xs text-red-600">{errors.startDate}</p>
        )}
      </div>

      {/* Travelers */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Total Travelers
        </label>
        <input
          type="number"
          min={1}
          step={1}
          value={form.travelers}
          onChange={(e) => update("travelers", e.target.value)}
          className={`w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring ${
            errors.travelers ? "border-red-500 ring-red-200" : "border-gray-300 ring-blue-200"
          }`}
        />
        {errors.travelers && (
          <p className="mt-1 text-xs text-red-600">{errors.travelers}</p>
        )}
      </div>

      {/* Days */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Total Days
        </label>
        <input
          type="number"
          min={1}
          max={60}
          step={1}
          value={form.days}
          onChange={(e) => update("days", e.target.value)}
          className={`w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring ${
            errors.days ? "border-red-500 ring-red-200" : "border-gray-300 ring-blue-200"
          }`}
        />
        {errors.days && (
          <p className="mt-1 text-xs text-red-600">{errors.days}</p>
        )}
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full inline-flex justify-center items-center px-4 py-2 rounded bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
        >
          Next: Add Activities
        </button>
      </div>
    </form>
  );
}
