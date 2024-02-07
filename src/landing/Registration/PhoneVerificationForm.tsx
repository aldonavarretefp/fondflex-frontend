import axios from "axios";
import React from "react";


interface PhoneVerificationFormProps {
  nextStep: () => void;
}

const PhoneVerificationForm:React.FC<PhoneVerificationFormProps> = ({ nextStep }) => {
  const reSendOTP = () => {
    console.log("Reenviando OTP");

  };
  const verifyOTP = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080" + "/api/v1/otp/verify", {
        phone: "+393762109325",
        otp: "123456",
      });
      console.log(response);
      nextStep();
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <div className="w-full h-full flex justify-center items-center">
      <form onSubmit={verifyOTP} className="flex flex-col bg-white w-1/2 p-8 justify-center items-center rounded shadow-md gap-6">
          <h1 className="text-2xl font-bold">Verificación de Teléfono</h1>
          <p>
            Hemos enviado un código de verificación a tu número de teléfono.
            <b>&nbsp;Por favor ingrésalo a continuación.</b>
          </p>
          <input
            className="border-gray-300 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300"
            type="text"
            placeholder="Código de verificación"
            id="otp"
          ></input>
          <p className="text-sm text-gray-400 w-full justify-start">
            ¿No recibiste el código?{" "}
            <button className="text-accent cursor-pointer" onClick={reSendOTP} disabled={true}>
              Reenviar
            </button>
          </p>
          <button type="submit" className="bg-accent text-white rounded-md p-2 text-sm font-bold w-full">
            Verificar
          </button>
      </form>
    </div>
  );
};

export default PhoneVerificationForm;
