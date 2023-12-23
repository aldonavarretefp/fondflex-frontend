import React from "react";

interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
}

export const StepIndicator:React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-between w-full items-center my-4">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <React.Fragment key={index}>
          {/* Circle for each step */}
          <div
            className={`flex justify-center items-center border-2 w-8 h-8 rounded-full 
                        ${index < currentStep ? 'bg-accent border-accent' : 'bg-white border-gray-300'}`
            }
          >
            <span className={`text-sm font-semibold ${index < currentStep ? 'text-white' : 'text-gray-500'}`}>
              {index + 1}
            </span>
          </div>

          {/* Line between steps */}
          {index < totalSteps - 1 && (
            <div
              className={`flex-auto border-t-2 
                          ${index < currentStep - 1 ? 'bg-accent border-accent' : 'border-gray-300'}`
              }
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};


  