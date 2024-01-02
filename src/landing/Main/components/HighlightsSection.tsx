import React from 'react'


const HighlightsSection: React.FC = () => {
  return (
    <div className="pt-[98px]  snap-start w-full h-screen bg-background flex justify-center items-center">
      <div className="flex flex-col [&>h1]:text-4xl [&>h1]:font-bold gap-14 p-10">
        <h1>Inversiones desde <span className="text-accent">$200 MXN</span></h1>
        <h1>Créditos hasta de <span className="text-accent">$375,000 MXN</span></h1>
        <h1>Tasas de interés desde el <span className="text-accent">8.9%</span></h1>
        <p className="text-center">No hay filas, todo a unos cuantos <b>clicks.</b></p>
      </div>
    </div>
  );
};

export default HighlightsSection;
