import React, { useState } from "react";
import { StepIndicator } from "../../components/StepIndicator";
import TermsAndConditions from "./TermsAndConditions";
import PhoneVerificationForm from "./PhoneVerificationForm";
import RegistrationCarousel from "./RegistrationCarousel";

const RegistrationFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    console.log(currentStep);
  };
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className="h-screen w-screen bg-background flex flex-col justify-center items-center gap-12">
      <div className="w-80">
        <StepIndicator currentStep={currentStep} totalSteps={4} />
      </div>
      <RegistrationCarousel currentStep={currentStep} nextStep={nextStep}  />
    </div>
  );
};

export default RegistrationFlow;
