import HalfCardImg from "./../../../img/HalfCard.png";

export const OurMissionSection = () => {
    return (
      <div className="pt-[98px] snap-start w-full h-screen bg-background">
        <h1 className="h-1/4 md:1/3 font-bold flex justify-center items-center text-center text-xl md:text-4xl">
          Conectamos <br></br> aspiraciones <br></br> financieras.
        </h1>
        <div className="h-3/4 md:2/3 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center sm:p-2 md:p-6 sm: w-5/6 md:w-4/6 h-full sm:pl-0 md:pl-28">
              <div className="p-6 bg-white shadow-sm rounded-md first:pt-0 [&>p]:pt-4 [&>p]:md:pt-7 [&>p]:w-full md:text-lg sm:text-xs">
                  <p><b>Unimos</b> a aquellos que buscan realizar sus sueños con aquellos que desean hacer su dinero crecer.</p>
                  <p><span className="text-accent font-bold">FondFlex</span> crea un puente directo entre prestatarios, ahorrando en intereses, e inversores, generando rendimientos sólidos.</p>
                  <p>Entendemos que cada sueño merece ser realizado.</p>
                  <p>Nuestra plataforma de Prestamos Colaborativos te ofrece una manera innovadora de acceder a financiamiento, respaldada por la comunidad y diseñada para tu éxito financiero.</p>
              </div>
          </div>
          <div className="h-1/2 md:h-full md:w-1/2 justify-end items-center hidden md:flex">
            <img
              src={HalfCardImg}
              alt="MainCards"
              className="object-contain h-80"
            />
          </div>
        </div>
      </div>
    );
  };
  