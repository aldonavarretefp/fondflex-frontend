import React from "react";
import HandsCash2 from "./../../../img/HandsCash2.png";
import FondflexLogo from "./../../../img/FondflexLogo50x50.png";

const InterestsComparisonSection = () => {
  return (
    <div className="pt-[98px] snap-start bg-background h-screen w-full">
      <div className="h-1/2 flex flex-col justify-center items-center w-full">
        <h2 className="text-xl md:text-4xl font-bold">No lo pienses más</h2>
        <img src={HandsCash2} className="w-60 object-contain" alt="Dinero" />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center h-1/2 py-6 px-20">
        <div className="flex flex-col justify-center items-center">
          <div className="flex md:text-left flex-col">
            <div className="flex items-center gap-5">
              <img src={FondflexLogo} alt="Fondflex logo" />
              <span className="text-lg font-bold">Fondflex</span>
            </div>
            <p className="md:text-2xl text-accent font-bold uppercase">Desde el</p>
            <p className="md:text-8xl text-accent font-bold uppercase">8.9%*</p>
            <p className="md:text-2xl text-accent font-bold uppercase">
              De tasa anual
            </p>
          </div>
        </div>
        <div className="flex md:text-right flex-col text-gray-500">
            <span className="text-lg font-bold uppercase">La industria tradicional</span>
            <p className="md:text-8xl font-bold uppercase">63%*</p>
            <p className="md:text-2xl font-bold uppercase">
              De tasa anual
            </p>
          </div>
      </div>
    </div>
  );
};

export default InterestsComparisonSection;
