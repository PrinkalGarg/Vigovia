import React from "react";

export default function ImportantNotesAndScope() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10 bg-white">
      {/* Important Notes */}
      <section>
        <h2 className="text-lg sm:text-xl font-bold mb-4">
          Important <span className="text-purple-700">Notes</span>
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-purple-300 shadow">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-purple-700 text-white text-left text-sm">
                <th className="px-4 py-3 font-semibold w-1/3">Point</th>
                <th className="px-4 py-3 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              <tr className="border-b border-purple-100">
                <td className="px-4 py-3 font-semibold">Airline Standard Policy</td>
                <td className="px-4 py-3">
                  In Case Of Visa Rejection, Visa Fees Or Any Other Non
                  Cancelable Component Cannot Be Reimbursed At Any Cost.
                </td>
              </tr>
              <tr className="border-b border-purple-100">
                <td className="px-4 py-3 font-semibold">Flight/Hotel Cancellation</td>
                <td className="px-4 py-3">
                  In Case Of Visa Rejection, Visa Fees Or Any Other Non
                  Cancelable Component Cannot Be Reimbursed At Any Cost.
                </td>
              </tr>
              <tr className="border-b border-purple-100">
                <td className="px-4 py-3 font-semibold">Trip Insurance</td>
                <td className="px-4 py-3">
                  In Case Of Visa Rejection, Visa Fees Or Any Other Non
                  Cancelable Component Cannot Be Reimbursed At Any Cost.
                </td>
              </tr>
              <tr className="border-b border-purple-100">
                <td className="px-4 py-3 font-semibold">Hotel Check-In & Check Out</td>
                <td className="px-4 py-3">
                  In Case Of Visa Rejection, Visa Fees Or Any Other Non
                  Cancelable Component Cannot Be Reimbursed At Any Cost.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">Visa Rejection</td>
                <td className="px-4 py-3">
                  In Case Of Visa Rejection, Visa Fees Or Any Other Non
                  Cancelable Component Cannot Be Reimbursed At Any Cost.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Scope of Service */}
      <section>
        <h2 className="text-lg sm:text-xl font-bold mb-4">
          Scope Of <span className="text-purple-700">Service</span>
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-purple-300 shadow">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-purple-700 text-white text-left text-sm">
                <th className="px-4 py-3 font-semibold w-1/3">Service</th>
                <th className="px-4 py-3 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              <tr className="border-b border-purple-100">
                <td className="px-4 py-3 font-semibold">
                  Flight Tickets and Hotel Vouchers
                </td>
                <td className="px-4 py-3">Delivered 3 Days Post Full Payment</td>
              </tr>
              <tr className="border-b border-purple-100">
                <td className="px-4 py-3 font-semibold">Web Check-in</td>
                <td className="px-4 py-3">
                  Boarding Pass Delivery via Email/WhatsApp
                </td>
              </tr>
              <tr className="border-b border-purple-100">
                <td className="px-4 py-3 font-semibold">Support</td>
                <td className="px-4 py-3">
                  Chat Support – Response Time: 4 Hours
                </td>
              </tr>
              <tr className="border-b border-purple-100">
                <td className="px-4 py-3 font-semibold">Cancellation Support</td>
                <td className="px-4 py-3">Provided</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">Trip Support</td>
                <td className="px-4 py-3">Response Time: 5 Minutes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
