import React, { useState } from "react";
import { useForm } from "../../hooks";

import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'


interface BasicInfoFormProps {
    nextStep: Function;
    setFormState: Function;
    formState: any;
}

const initialFormData: Record<string, string> = {
    // initial form data structure
    email: "",
    firstName: "",
    middleName: "",
    fatherLastName: "",
    motherLastName: "",
};

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({nextStep,  setFormState, formState}) => {
  
  const { formState:formaActual, email, firstName, middleName, fatherLastName, motherLastName, onInputChange } = useForm(initialFormData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState((prevState:any) => ({
      ...prevState, // Preserve existing global state
      ...formaActual, // Update with local state
      phone: phoneNumber.phone // Ensure phone number is included
    }));
    console.log(formState);
    nextStep();
  };

  const handlePhoneChange = (value: string, data: any) => {
    setPhoneNumber({ phone: value });
  }

  const [phoneNumber, setPhoneNumber] = useState({ phone: "" });
  return (
    <div className="bg-white md:w-[calc(50vw)] sm:w-1/2 rounded-md shadow">
      <form
        className="flex flex-col justify-center items-center p-6 gap-3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-full">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="border-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-accent leading-tight focus:outline-none focus:shadow-outline transition-all duration-300" 
            type="email"
            onChange={ onInputChange }
            value={ email }
            name="email"
          />
        </div>
        <div className="flex flex-row w-full gap-6">
          <div className="w-1/2">
            <label className="text-sm " htmlFor="firstName">
              Primer Nombre
            </label>
            <input
              className="border-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300"
              type="text"
              onChange={ onInputChange }
              value={ firstName }
              name="firstName"
            />
          </div>
          <div className="w-1/2">
            <label className="text-sm " htmlFor="middleName">
              Segundo Nombre
            </label>
            <input
              className="border-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300"
              type="text"
              placeholder="Opcional"
              onChange={ onInputChange }
              value={ middleName }
              name="middleName"
            />
          </div>
        </div>
        <div className="flex flex-row w-full gap-6">
          <div className="w-1/2">
            <label className="text-sm " htmlFor="fatherLastName">
              Apellido Paterno
            </label>
            <input
              className="border-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700   leading-tight focus:outline-none focus:shadow-outline transition-all duration-300"
              type="text"
              name="fatherLastName"
              onChange={ onInputChange }
              value={ fatherLastName }
            />
          </div>
          <div className="w-1/2">
            <label className="text-sm " htmlFor="motherLastName">
              Apellido Materno
            </label>
            <input
              className="border-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300"
              id="motherLastName"
              type="text"
              name="motherLastName"
              onChange={ onInputChange }
              value={ motherLastName }
            />
          </div>
        </div>

        <PhoneInput
          country={'mx'}
          value={phoneNumber.phone}
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true,
          }}
          placeholder="+52 (55) 4156-7890"
          countryCodeEditable={false}
          onlyCountries={['mx']}
          inputStyle={{
            width: "100%",
            borderRadius: "0.25rem",
            border: "1px solid #d1d5db",
            fontSize: "1rem",
            height: "2.5rem",
          }}
          masks={{mx: '(..) ....-....'}}
          enableAreaCodeStretch
          onChange={handlePhoneChange}
        />
        <button
          className="w-full bg-accent rounded-md text-white p-2 mt-4 text-sm font-bold"
          type="submit"
        >
          Continuar
        </button>
      </form>
    </div>
  );
};

export default BasicInfoForm;
