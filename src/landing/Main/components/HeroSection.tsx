import MainCardsImg from "./../../../img/MainCardsHeroSection.png";

export const HeroSection = () => {
    return (
      // Container
      <div className="pt-[98px] snap-start w-full h-screen overflow-hidden bg-background flex flex-col md:flex-row">
        <div className="w-full h-1/2 md:h-full md:w-1/2 flex flex-col justify-center items-center">
          {/* */}
          <div className="w-3/4 flex flex-col gap-8">
            <h1 className="text-3xl md:text-5xl font-bold text-left text-accent">
              Créditos e inversiones a tasas justas
            </h1>
            <p className="font-medium text-accent text-left text-xl md:text-3xl">
              Tu Futuro Financiero, Tu Decision.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button className="bg-accent text-white px-3 py-2 rounded-full text-sm font-medium w-1/2">
                Regístrate
              </button>
              <button className="bg-white text-accent px-3 py-2 rounded-full text-sm font-medium w-1/2">
                Ingresar
              </button>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="w-full h-1/2 md:h-full md:w-1/2 flex flex-col justify-center items-center">
          <img
            src={MainCardsImg}
            alt="MainCards"
            className="object-contain w-3/4 h-3/4"
          />
        </div>
      </div>
    );
  };