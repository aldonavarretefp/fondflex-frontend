import React from "react";

import { GoogleLogin } from "@react-oauth/google";
import SegmentedPicker from "../../components/SegmentedPicker";
import PhoneInput from "../../components/PhoneInput";
import RegisterPage from "./RegisterPage";
import { StepIndicator } from "../../components/StepIndicator";

const LoginPage = () => {
  const getGoogleAuthUrl = () => {
    const rootUrl: string = "https://accounts.google.com/o/oauth2/v2/auth";
    // Define options object
    const options = {
      redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI as string,
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID as string,
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ].join(" "),
    };

    console.log({ options });
    // Convert options object to query string
    const optionsQuery = new URLSearchParams(options).toString();
    // Create and return url
    console.log({ optionsQuery });

    return `${rootUrl}?${optionsQuery}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };

  const onLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
  };

  const onRegisterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };


  const loginEmail: string = "";
  const loginPassword: string = "";
  const signUpName: string = "";
  const signUpEmail: string = "";
  const signUpPassword: string = "";

  const signUpConfirmPassword: string = "";

  return (
    <div className="w-screen h-screen flex sm:flex-row flex-col justify-center items-center bg-background">
      
      <div className="flex flex-col sm:flex-row justify-evenly items-center bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4">
        {/* Left form*/}
        <div className="flex flex-col justify-evenly items-center rounded px-12 pt-6 pb-8 mb-4">
        <StepIndicator currentStep={2} totalSteps={3} />
          <h1 className="text-lg font-bold text-accent">Iniciar Sesión</h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Correo Electrónico
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Contraseña
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="*********"
              />
              <p className="text-red text-xs italic">
                Por favor introduzca la contraseña.
              </p>
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-between">
              <button
                className="bg-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Iniciar Sesión  
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ml-4"
                href="#"
              >
                ¿Olvidaste la contraseña?
              </a>
            </div>
            {/* O iniciar sesión con google */}
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ml-4" href={getGoogleAuthUrl()}>
              O iniciar sesión con Google
            </a>

            
          </form>

        </div>
        {/* Right form*/}
        <div className="flex flex-col justify-evenly items-center bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4 gap-y-20">
        <h1 className="text-lg font-bold text-accent">Registrarse</h1>
        <SegmentedPicker options={['Busco un préstamo', 'Quiero invertir']} />
        {/* all the children transistion tailwindcss modifier*/}
        <form className="w-80">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Correo Electrónico
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nombre(s)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="ej. Juan / Juan Carlos"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Apellido Paterno
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="ej. Hernández"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Apellido Materno
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="ej. Pérez"
            />
          </div>
          <PhoneInput />
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border transition-colors focus:border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*********"
            />
            <p className="text-red text-xs italic">
              Por favor introduzca la contraseña.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col items-center justify-between">
            <button
              className="bg-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Registrarse
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              ¿Olvidaste la contraseña?
            </a>
          </div>
        </form>
      </div>
      </div>

      
    </div>
  );
};

export default LoginPage;
