# ✈️ Vigovia – Travel Itinerary Planner  

**Vigovia** is a modern travel itinerary planner built using **React.js** and **Tailwind CSS**. It allows users to create personalized travel plans, view flight & hotel details, manage daily activities, calculate payment plans, and export the complete journey summary as a **PDF using react-to-print**.

---

## ✅ Features
- Step-by-step journey planning
- Add activities for each day (Morning, Afternoon, Evening)
- Auto-generated itinerary with attractive UI
- Flight & hotel summary
- Dynamic payment calculation
- Export itinerary as **PDF** with footer on each page
- Responsive design with Tailwind CSS

---

## 🛠 Tech Stack
- **React.js (Vite)**
- **Tailwind CSS**
- **react-to-print** (for PDF generation)
- JavaScript (ES6+)

---

## 📂 Project Structure
src/
├── Components/
│ ├── ActivitySummaryTable.jsx
│ ├── FinalSummary.jsx
│ ├── FlightHotelSummary.jsx
│ ├── Footer.jsx
│ ├── ImportantNotesAndScope.jsx
│ ├── ItineraryFromFinalReport.jsx
│ ├── JourneyFooterHardcoded.jsx
│ ├── JourneyHeaderSection.jsx
│ ├── Navbar.jsx
│ ├── PaymentPlan.jsx
│ ├── StepOne.jsx
│ └── StepTwo.jsx
├── pages/
│ ├── Homepage.jsx
│ ├── Login.jsx
│ ├── Orders.jsx
│ ├── PlanJourney.jsx
│ ├── Profile.jsx
│ └── Signup.jsx
├── App.jsx
├── index.css
├── main.jsx
└── print.css
## ⚙️ Installation
```bash
# Clone the repository
git clone https://github.com/your-username/vigovia.git

# Navigate to project folder
cd FrontendVigovia

# Install dependencies
npm install

# Start the development server
npm run dev

Open https://vigovia.netlify.app/ in your browser.

Go to Plan Journey page and:

Enter departure, destination, date, travelers, and days.

Add multiple activities for each day.

View the Final Summary:

Itinerary, flight & hotel details, payment summary.

Click Book Now → Print / Save as PDF (via react-to-print).

PDF Export
Implemented using react-to-print.

Custom print styles are in print.css.

Each page includes footer and optimized layout for A4.

Future Enhancements
API integration for real bookings

Authentication system

Email sharing for itineraries

Improved PDF design with header/footer on all pages


