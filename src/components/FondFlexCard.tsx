import React from "react";
import FondflexLogo from "../img/FondflexLogoBW.png";

interface FondflexCardProps {};

export const FondFlexCard: React.FC<FondflexCardProps> = ({}) => {
     return (
     <div className="w-[180px] h-[110px] bg-accent rounded-lg text-white">
          <div className='bg-gradient-to-r bg-contain from-accent/70 to-white/30 w-full h-full rounded-lg flex flex-col justify-center items-center p-4'>
          <div className="w-full flex justify-between items-center">
               <span className="text-xs">Balance</span>
               <span className="text-xs">...</span>
          </div>
          <div className="w-full">
               <span className="font-thin text-xs">Usuario fondflex</span>
          </div>
          <div className="w-full h-full flex justify-between items-center">
               <span className="text-xs font-bold">$6,420.00</span>
               <img src={FondflexLogo} alt="Fondflex Logo" className="w-[20px] h-[20px]" />
          </div>
          </div>
     </div>
     );
};
