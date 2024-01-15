import React from "react";

const SimulatorSection = () => {
  return (
    <div className="pt-[98px] snap-start w-full h-screen bg-background flex justify-center items-center md:flex-row flex-col overflow-scroll">
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-6 md:p-28 gap-3">
        <h1 className="text-lg md:text-5xl font-bold md:mb-6">
          Simulador de créditos FondFlex
        </h1>
        <div className="flex flex-col gap-2 md:gap-5 text-justify text-xs md:text-normal">
          <p>
            En FondFlex, los sueños toman forma y las oportunidades cobran vida.
            Explora un espectro de tasas que se despliegan desde un atractivo
            12% hasta un dinámico 34% anual. Y eso no es todo: hemos diseñado un
            camino financiero transparente para ti.{" "}
          </p>
          <p>
            Con solo un 6% de comisión de apertura, te damos acceso a una gama
            de posibilidades. Además, agrega a esta mezcla una comisión mensual
            fija, amoldada al monto aprobado*. Aquí, cada cifra es un trampolín
            hacia tus metas, y cada elección es un paso hacia el éxito.
          </p>
          <p className="font-bold text-xs text-gray-600">
            *La comisión mensual fija variará en función del monto aprobado para
            el préstamo.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-3">
        <h1 className="text-lg font-bold mb-6 hidden md:block">Tu ahorro posible en Fondflex</h1>
        <h1 className="text-xl font-bold mb-2">Tasas de interés</h1>
        <div className="w-full md:p-6">
          <table className="table-fixed w-full [&>*]:text-xs">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2"></th>
                <th className="px-4 py-2 text-accent border-accent border-t-2 border-l-2 border-r-2">Mejor tasa Fondflex</th>
                <th className="border px-4 py-2">Tasa promedio Fondflex</th>
                <th className="border px-4 py-2">Tasa promedio </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold border px-4 py-2">Tasa de interés anual</td>
                <td className="border-accent text-accent border-r-2 border-l-2 px-4 py-2">12.9%</td>
                <td className="border px-4 py-2">6%</td>
                <td className="border px-4 py-2">0.5%</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="font-bold border px-4 py-2 ">Pago mensual</td>
                <td className="px-4 py-2 border-accent border-r-2 border-l-2 border-b-2 text-accent">18%</td>
                <td className="border px-4 py-2">6%</td>
                <td className="border px-4 py-2">0.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SimulatorSection;
