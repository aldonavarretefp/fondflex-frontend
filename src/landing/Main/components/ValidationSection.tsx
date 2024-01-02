import React from "react";
import HalfCardImg from "./../../../img/HalfCard.png";
import ValidationSectionHandImg from "./../../../img/ValidationSectionHand.png";
import SmallCardImg from "./../../../img/SmallCard.png";

const ValidationSection = () => {
  return (
    <div className="pt-[98px]  snap-start w-full h-screen bg-background flex justify-center items-center">
      <div className="bg-white flex flex-col w-4/6 md:w-1/2 gap-10 p-6 pt-0 rounded-2xl shadow-lg">
        <div className="flex justify-center items-center w-full">
          <img
            src={SmallCardImg}
            alt="Small card"
            className="object-contain h-20 rotate-10 left-0 -top-8"
          />
          <img
            src={ValidationSectionHandImg}
            alt="Hand"
            className="object-contain h-20 -rotate-10 right-0 -top-8"
          />
        </div>
        <div><h1 className="sm:text-xl md:text-4xl font-bold">Seguridad y transparencia para tu <span className="text-accent italic">tranquilidad.</span></h1></div>
        <div><p className="sm:text-lg md:text-2xl">FondFlex es una fintech regulada y supervisada por la CNBV, y la Condusef. Conforma con los reglamentos de la ley fintech.</p></div>
        <div className="flex justify-center items-center">
            <img
                src={HalfCardImg}
                alt="Half card"
                className="object-contain h-36"
            />
          </div>
      </div>
    </div>
  );
};

export default ValidationSection;
