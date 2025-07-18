import { useState } from "react";
import StepTwo from "../Components/StepTwo";
import StepOne from "../Components/StepOne";
import FinalSummary from "../Components/FinalSummary";
export default function PlanJourney() {
  const [step, setStep] = useState(1);
  const [journeyInfo, setJourneyInfo] = useState(null);
  const [activities, setActivities] = useState([]);

  const handleStepOneNext = (data) => {
    setJourneyInfo(data);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleFinish = (activityData) => {
    setActivities(activityData);
    setStep(3);
  };

  const restartJourney = () => {
    setJourneyInfo(null);
    setActivities([]);
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      {step === 1 && (
        <StepOne initialData={journeyInfo || {}} onNext={handleStepOneNext} />
      )}
      {step === 2 && (
        <StepTwo
          totalDays={journeyInfo.days}
          onBack={handleBack}
          onFinish={handleFinish}
        />
      )}
      {step === 3 && (
        <FinalSummary
          journeyInfo={journeyInfo}
          activities={activities}
          onRestart={restartJourney}
        />
      )}
    </div>
  );
}
