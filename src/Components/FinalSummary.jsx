import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import JourneyHeaderSection from "./JourneyHeaderSection";
import ItineraryFromFinalReport from "./ItineraryFromFinalReport";
import FlightHotelSummary from "./FlightHotelSummary";
import ImportantNotesAndScope from "./ImportantNotesAndScope";
import ActivitySummaryTable from "./ActivitySummaryTable";
import PaymentPlan from "./PaymentPlan";
import JourneyFooterHardcoded from "./JourneyFooterHardcoded";

const flightsSample = [
  { date: "Thu 10 Jan'24", airline: "Fly Air India", fromCode: "DEL", toCode: "SIN" },
  { date: "Fri 19 Jan'24", airline: "Fly Air India", fromCode: "SIN", toCode: "DEL" }
];

const hotelsSample = [
  {
    city: "Singapore",
    checkIn: "24/02/2024",
    checkOut: "26/02/2024",
    nights: 2,
    name: "Super Townhouse Oak Vashi Formerly Blue Diamond"
  },
  {
    city: "Singapore",
    checkIn: "26/02/2024",
    checkOut: "28/02/2024",
    nights: 2,
    name: "Super Townhouse Oak Vashi Formerly Blue Diamond"
  }
];

export default function FinalSummary({ journeyInfo, activities, onRestart }) {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Journey Summary",
    pageStyle: `
      @page {
        size: A4;
        margin: 15mm 10mm 20mm 10mm; 
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          font-size: 12px !important;
          line-height: 1.25;
        }
        h1 { font-size: 20px !important; }
        h2 { font-size: 16px !important; }
        h3 { font-size: 14px !important; }
        h4, h5, h6 { font-size: 12px !important; }
        .no-print { display: none !important; }

        /* ↓ reduced bottom padding so content sits closer to footer */
        .print-content { padding-bottom: 28mm !important; }

        .print-footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 6mm 10mm;            /* ↓ was 10mm */
          background: #ffffff;
          border-top: 1px solid #d1d5db;
          font-size: 10px;
          color: #374151;
        }
        .print-footer__inner {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          max-width: 180mm;
          margin: 0 auto;
        }
        .print-footer__block { max-width: 33%; }
        .print-footer__title { font-weight: 700; margin-bottom: 2px; }
        .print-footer__logo { height: 16px; }
      }
    `,
    contentRef: componentRef
  });

  return (
    <div>
      <div
        ref={componentRef}
        className="print-content bg-white shadow rounded p-6 space-y-10 max-w-6xl mx-auto"
      >
        <JourneyHeaderSection
          userName="Rahul"
          journeyInfo={journeyInfo}
          logoSrc="/logo.png"
        />

        <h2 className="text-2xl font-semibold text-center text-green-600">
          Journey Summary
        </h2>

        <ItineraryFromFinalReport
          journeyInfo={journeyInfo}
          activities={activities}
        />

        <FlightHotelSummary flights={flightsSample} hotels={hotelsSample} />

        <ImportantNotesAndScope />

        <ActivitySummaryTable
          journeyInfo={journeyInfo}
          activities={activities}
          slotTypeMap={{
            Morning: "Nature/Sightseeing",
            Afternoon: "Activities",
            Evening: "Leisure",
          }}
          slotTimeMap={{
            Morning: "1-2 Hours",
            Afternoon: "2-3 Hours",
            Evening: "2-3 Hours",
          }}
        />

        <PaymentPlan
          journeyInfo={journeyInfo}
          multiplyByTravelers={true}
        />

        <PrintFooter />
      </div>
      <div className="text-center mt-8 space-x-4 no-print">
        <button
          onClick={onRestart}
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          Plan Another Journey
        </button>
        <button
          onClick={handlePrint}
          className="px-6 py-3 bg-purple-700 text-white rounded-full hover:bg-purple-800"
        >
          Book Now & Print / Save PDF
        </button>
      </div>

      <div className="no-print mt-10">
        <JourneyFooterHardcoded />
      </div>
    </div>
  );
}

function PrintFooter() {
  return (
    <div className="print-footer">
      <div className="print-footer__inner">
        <div className="print-footer__block text-left leading-snug">
          <div className="print-footer__title">Vigovia Tech Pvt. Ltd</div>
          <div>Registered Office: Hd-109 Cinnabar Hills,</div>
          <div>Links Business Park, Karnataka, India.</div>
        </div>
        <div className="print-footer__block text-left">
          <div><strong>Phone:</strong> +91-99X9999999</div>
          <div><strong>Email ID:</strong> Contact@Vigovia.Com</div>
        </div>
        <div className="print-footer__block text-right">
          <img
            src="/logo.png"
            alt="Vigovia Logo"
            className="print-footer__logo"
          />
        </div>
      </div>
    </div>
  );
}
