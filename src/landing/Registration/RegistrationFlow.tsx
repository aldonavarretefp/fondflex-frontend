import React from "react";
import { StepIndicator } from "../../components/StepIndicator";

const RegistrationFlow = () => {
  return (
    <div className="h-screen w-screen bg-background flex flex-col justify-center items-center gap-12">
      <div className="w-80">
        <StepIndicator currentStep={2} totalSteps={4} />
      </div>
      <div className="bg-white md:w-[calc(50vw)] sm:w-1/2 rounded-md shadow">
        <form className="flex flex-col justify-center items-center p-6 gap-3">
          <div className="flex flex-col w-full">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <input
              className="border-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-accent leading-tight focus:outline-none focus:shadow-outline transition-all duration-300"
              id="email"
              type="email"
            />
          </div>
          <div className="flex flex-row w-full gap-6">
            <div className="w-1/2">
              <label className="text-sm " htmlFor="firstName">
                Primer Nombre
              </label>
              <input
                className="border-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300"
                id="firstName"
                type="text"
              />
            </div>
            <div className="w-1/2">
              <label className="text-sm " htmlFor="middleName">
                Segundo Nombre
              </label>
              <input
                className="border-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300"
                id="middleName"
                type="text"
                placeholder="Opcional"
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
                id="fatherLastName"
                type="text"
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
              />
            </div>
          </div>
          <button className="w-full bg-accent rounded-md text-white p-2 mt-4 text-sm font-bold">
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFlow;
