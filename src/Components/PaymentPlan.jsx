// PaymentPlan.jsx
import React, { useMemo } from "react";

export default function PaymentPlan({
  journeyInfo,
  multiplyByTravelers = false,
  onBookNow, // <== added
}) {
  const days = Number(journeyInfo?.days ?? 0) || 0;
  const travelers = Number(journeyInfo?.travelers ?? 1) || 1;

  const { hotelTotal, flightTotal, taxTotal, grandTotal } = useMemo(() => {
    const hotel = days * 1000;
    const base = hotel + 5000 + 2000;
    const total = multiplyByTravelers ? base * travelers : base;
    return { hotelTotal: hotel, flightTotal: 5000, taxTotal: 2000, grandTotal: total };
  }, [days, travelers, multiplyByTravelers]);

  const { inst1, inst2, inst3 } = useMemo(() => {
    const i1 = Math.round(grandTotal * 0.4);
    const i2 = Math.round(grandTotal * 0.4);
    const i3 = grandTotal - i1 - i2;
    return { inst1: i1, inst2: i2, inst3: i3 };
  }, [grandTotal]);

  const inr = (n) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);

  const paxLabel = multiplyByTravelers
    ? `For ${travelers} Pax`
    : `For Trip (${days} Day${days === 1 ? "" : "s"})`;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12 bg-white">
      <section>
        <h2 className="text-lg sm:text-xl font-bold mb-4">
          Payment <span className="text-purple-700">Plan</span>
        </h2>

        <div className="space-y-3 mb-6">
          <ArrowStatRow
            label="Total Amount"
            value={`${inr(grandTotal)} ${paxLabel}`}
          />
          <ArrowStatRow label="TCS" value="Not Collected" />
        </div>

        <InstallmentTable inst1={inst1} inst2={inst2} inst3={inst3} inr={inr} />
      </section>

      <VisaDetailsCard />

      <div className="pt-10 text-center">
        <h3 className="text-xl font-bold tracking-wider text-purple-700 mb-4">
          PLAN.PACK.GO!
        </h3>
        <button
          type="button"
          onClick={onBookNow}
          className="px-10 py-3 rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-800 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

function ArrowStatRow({ label, value }) {
  return (
    <div className="relative w-full flex items-stretch rounded-xl border border-purple-300 overflow-hidden bg-white shadow-sm">
      <div className="relative bg-purple-50 px-4 py-3 flex items-center border-r border-purple-300">
        <span className="text-purple-700 text-sm font-semibold whitespace-nowrap">
          {label}
        </span>
        <span
          className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[12px] border-l-purple-300"
        />
        <span
          className="absolute right-[-11px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[11px] border-y-transparent border-l-[11px] border-l-purple-50"
        />
      </div>
      <div className="flex-1 px-4 py-3 text-gray-800 text-sm sm:text-base font-medium">
        {value}
      </div>
    </div>
  );
}

function InstallmentTable({ inst1, inst2, inst3, inr }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-purple-300 shadow bg-white">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-purple-700 text-white text-left text-sm">
            <th className="px-4 py-3 font-semibold w-1/3">Installment</th>
            <th className="px-4 py-3 font-semibold w-1/3">Amount</th>
            <th className="px-4 py-3 font-semibold">Due Date</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800">
          <tr className="border-b border-purple-100">
            <td className="px-4 py-3 font-semibold">Installment 1</td>
            <td className="px-4 py-3">{inr(inst1)}</td>
            <td className="px-4 py-3">Initial Payment</td>
          </tr>
          <tr className="border-b border-purple-100">
            <td className="px-4 py-3 font-semibold">Installment 2</td>
            <td className="px-4 py-3">{inr(inst2)}</td>
            <td className="px-4 py-3">Post Visa Approval</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold">Installment 3</td>
            <td className="px-4 py-3">{inr(inst3)}</td>
            <td className="px-4 py-3">20 Days Before Departure</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function VisaDetailsCard() {
  return (
    <section className="pt-12">
      <h2 className="text-lg sm:text-xl font-bold mb-4">
        Visa <span className="text-purple-700">Details</span>
      </h2>
      <div className="w-full max-w-md mx-auto rounded-2xl border border-purple-300 shadow bg-white overflow-hidden">
        <table className="w-full text-left border-collapse">
          <tbody className="text-sm text-gray-800">
            <tr className="border-b border-purple-100">
              <th className="px-4 py-3 font-semibold text-gray-700 w-1/3">
                Visa Type :
              </th>
              <td className="px-4 py-3">Tourist</td>
            </tr>
            <tr className="border-b border-purple-100">
              <th className="px-4 py-3 font-semibold text-gray-700">
                Validity:
              </th>
              <td className="px-4 py-3">30 Days</td>
            </tr>
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-700">
                Processing Date :
              </th>
              <td className="px-4 py-3">14/06/2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
