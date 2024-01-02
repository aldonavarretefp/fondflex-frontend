import React, { useState } from "react";

const QuestionsSection: React.FC = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  return (
    <div className="pt-[98px] snap-end w-full h-screen bg-background flex justify-center items-center">
      <div className="w-2/3 flex flex-col bg-white justify-center gap-9 text-center p-6 py-10 rounded-md">
        <h1 className="sm:text-xl md:text-4xl">¿Tienes más preguntas?</h1>
        <div className="divide-y divide-black text-start flex flex-col gap-4 text-xs md:text-base">
          <div></div>
          <div
            className="flex justify-between flex-col cursor-pointer"
            onClick={() => setShowFirst(!showFirst)}
          >
            <div className="flex justify-between">
              <h3 className="font-bold">
                ¿Cuales son los requisitos para abrir una cuenta FondFlex?
              </h3>
              <i
                className="cursor-pointer"
                onClick={() => setShowFirst(!showFirst)}
              >
                +
              </i>
            </div>
            <p
              className={`transition-all duration-150 ${
                showFirst ? "block" : "hidden"
              } text-xs md:text-base text-gray-900 text-justify`}
            >
              Proident tempor velit non dolor aute consectetur aute. Fugiat
              laborum deserunt sit culpa et aliqua est do anim veniam aliqua
              sint velit occaecat. Aliquip voluptate adipisicing do nostrud
              laborum sit laborum voluptate aute ut et. Minim anim Lorem
              consectetur quis velit magna labore laboris reprehenderit cillum
              culpa dolore est cillum. Anim nulla proident nostrud Lorem aliqua
              pariatur ut.
            </p>
          </div>
          <div
            className="flex justify-between flex-col cursor-pointer"
            onClick={() => setShowSecond(!showSecond)}
          >
            <div className="flex justify-between">
              <h3 className="font-bold">
                ¿Cuánto tarda mi solicitud en ser aprobada?
              </h3>
              <i
                className="cursor-pointer"
                onClick={() => setShowSecond(!showSecond)}
              >
                +
              </i>
            </div>
            <p
              className={`transition-all duration-150 ${
                showSecond ? "block" : "hidden"
              } text-xs md:text-base text-gray-900 text-justify`}
            >
              Proident tempor velit non dolor aute consectetur aute. Fugiat
              laborum deserunt sit culpa et aliqua est do anim veniam aliqua
              sint velit occaecat. Aliquip voluptate adipisicing do nostrud
              laborum sit laborum voluptate aute ut et. Minim anim Lorem
              consectetur quis velit magna labore laboris reprehenderit cillum
              culpa dolore est cillum. Anim nulla proident nostrud Lorem aliqua
              pariatur ut.
            </p>
          </div>
          <div
            className="flex justify-between flex-col cursor-pointer"
            onClick={() => setShowThird(!showThird)}
          >
            <div className="flex justify-between">
              <h3 className="font-bold">
                ¿Cuales son los plazos en los cuales puedo invertir mi dinero?
              </h3>
              <i
                className="cursor-pointer"
                onClick={() => setShowThird(!showThird)}
              >
                +
              </i>
            </div>
            <p
              className={`transition-all duration-150 ${
                showThird ? "block" : "hidden"
              } text-xs md:text-base text-gray-900 text-justify`}
            >
              Proident tempor velit non dolor aute consectetur aute. Fugiat
              laborum deserunt sit culpa et aliqua est do anim veniam aliqua
              sint velit occaecat. Aliquip voluptate adipisicing do nostrud
              laborum sit laborum voluptate aute ut et. Minim anim Lorem
              consectetur quis velit magna labore laboris reprehenderit cillum
              culpa dolore est cillum. Anim nulla proident nostrud Lorem aliqua
              pariatur ut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsSection;
