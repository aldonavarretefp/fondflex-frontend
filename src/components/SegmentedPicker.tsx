import React, { useState } from "react";

interface SegmentedPickerProps {
  options: string[];
}

const SegmentedPicker: React.FC<SegmentedPickerProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="inline-flex rounded-md shadow-sm bg-white" role="group">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setSelectedOption(option)}
          className={`py-2 px-4 text-sm font-medium rounded-md transition-colors duration-300
                      ${
                        option === selectedOption
                          ? "bg-accent text-white"
                          : " text-gray-700"
                      }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SegmentedPicker;
