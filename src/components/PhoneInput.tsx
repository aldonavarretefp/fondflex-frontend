import React, { useState } from 'react';

interface PhoneInputState {
  phoneNumber: string;
}

const PhoneInput: React.FC = () => {
  const [state, setState] = useState<PhoneInputState>({ phoneNumber: '' });

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, phoneNumber: event.target.value });
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-l-md">
        <img 
          src="path_to_mexican_flag" // Replace with the path to the Mexican flag image
          alt="Mexican Flag"
          className="w-5 h-5"
        />
        <span className="ml-2 text-gray-700">+52</span>
      </div>
      <input
        type="tel"
        className="flex-1 py-2 px-4 bg-white border border-gray-300 rounded-r-md"
        placeholder="ej. 5512345678"
        value={state.phoneNumber}
        onChange={handlePhoneNumberChange}
      />
    </div>
  );
};

export default PhoneInput;
