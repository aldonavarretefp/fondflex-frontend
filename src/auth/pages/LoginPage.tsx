import React from "react";

import { GoogleLogin } from "@react-oauth/google";
import SegmentedPicker from "../../components/SegmentedPicker";
import PhoneInput from "../../components/PhoneInput";
import RegisterPage from "./RegisterPage";
import { StepIndicator } from "../../components/StepIndicator";
import { Navbar } from "../../components/Navbar";
import { on } from 'events';
import { useAuthStore } from "../../hooks/useAuthStore";
import { useForm } from "../../hooks";

interface ILoginFormData {
  email: string;
  password: string;
}

const LoginPage = () => {

  const { startLogin } = useAuthStore();
  const { email, password } = useForm<ILoginFormData>({
    email: "",
    password: "",
  });

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
    console.log("login");
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
    <div className="h-screen w-screen">
      <Navbar />
      <div className="pt-[98px] flex flex-col sm:flex-row justify-evenly items-center bg-background rounded px-12 mb-4 h-full">
        {/* Left form*/}
        <div className="flex flex-col md:w-1/2 justify-evenly items-center rounded pt-6 pb-8 bg-white shadow-lg">
          <h1 className="text-lg font-bold">Iniciar Sesión</h1>
          <form className='w-full p-6' onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Correo Electrónico
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300"
                id="password"
                type="password"
                placeholder="*********"
              />
              <a
                className="inline-block align-baseline font-bold text-sm text-accent"
                href="#"
              >
                ¿Olvidaste la contraseña?
              </a>
            </div>

              <button
                className="bg-accent text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mr-2 mb-2 font-medium"
                type="submit"
              >
                Iniciar Sesión
              </button>

            <hr className="my-5"></hr>
            {/* O iniciar sesión con google */}
            <button
              type="button"
              className="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              onClick={() => {
                window.location.href = getGoogleAuthUrl();
              }
              }
            >
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Iniciar sesión con Google
            </button>
          </form>
        </div>
        {/* Right form*/}
        {/* <div className="flex flex-col justify-evenly items-center bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4 gap-y-20">
          <h1 className="text-lg font-bold text-accent">Registrarse</h1>
          <SegmentedPicker options={["Busco un préstamo", "Quiero invertir"]} />
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
        </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
