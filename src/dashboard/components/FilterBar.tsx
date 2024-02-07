import React, { useState } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBusinessTime,
  faCar,
  faEllipsis,
  faGraduationCap,
  faHeart,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./FilterBar.css";

const termDurationsInMonths: String[] = ["6", "12", "18", "24", "30", "36"];

const projectCategories: String[] = ["A", "B", "C"];

type FundDestination = {
  name: string;
  icon: IconDefinition;
};

const fundDestinations: FundDestination[] = [
  {
    name: "empresarial",
    icon: faBusinessTime,
  },
  {
    name: "personal",
    icon: faUser,
  },
  {
    name: "inmobiliario",
    icon: faHome,
  },
  {
    name: "educativo",
    icon: faGraduationCap,
  },
  {
    name: "salud",
    icon: faHeart,
  },
  {
    name: "vehículo",
    icon: faCar,
  },
  {
    name: "otro",
    icon: faEllipsis,
  },
];

export const FilterBar = () => {
  const [selectedTerm, setSelectedTerm] = useState({});
  const [selectedCategoryFilters, setSelectedCategoryFilters] = useState({});
  const [selectedDestination, setSelectedDestination] = useState({});
  const [showPreviousInvestments, setShowPreviousInvestments] = useState(false);

  const eraseFilters = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedTerm(-1);
    setSelectedDestination(-1);
    setSelectedCategoryFilters({});
  };

  const handleSubmitFilter = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    console.log("Filter data");
    console.log(selectedCategoryFilters);
    console.log(selectedTerm);
    console.log(selectedDestination);
  };

  const handleAppendOrRemoveFilter = (element: string | number, filtersObject: any) => {
    console.log(filtersObject, element);
    if (filtersObject.hasOwnProperty(element)) {
      let newFilters = { ...filtersObject };
      delete newFilters[element];
      setSelectedCategoryFilters(newFilters);
    } else {
      setSelectedCategoryFilters({ ...filtersObject, [element as string]: true });
    }
  }

  return (
    <div className="pl-7 pt-10 h-full bg-background">
      <div className="bg-white shadow-xl flex flex-col justify-start items-center w-64 p-5 rounded-md">
        <h1 className="text-lg font-bold">Filtrar solicitudes</h1>
        {/* ------ */}
        <div className="w-full h-[2px] bg-gray-100 mt-2"></div>
        <form className="flex w-full flex-col justify-center items-left gap-3" onSubmit={handleSubmitFilter}>
          {/* Calificación */}
          <h2 className="text-sm text-left mt-5">Calificación</h2>
          <div className="flex w-full justify-between px-3">
            {projectCategories.map((category, index) => (
              <div
                className={`${
                  selectedCategoryFilters.hasOwnProperty(category as string)
                    ? "text-accent bg-white"
                    : "text-gray-500 bg-gray-200"
                } flex justify-center items-center shadow-md rounded-full w-[50px] h-[30px] filterBtnHoverAnimation`}
                onClick={() => handleAppendOrRemoveFilter(category as string, selectedCategoryFilters)}
              >
                {category}
              </div>
            ))}
          </div>
          {/* Plazo */}
          <h2 className="text-sm text-left">Plazo</h2>
          <div className="grid grid-cols-3 place-items-center w-full -mt-2">
            {termDurationsInMonths.map((termDuration, index) => (
              <div
                className={`flex justify-center items-center ${
                  selectedTerm.hasOwnProperty(termDuration as string)
                    ? "text-accent bg-white"
                    : "text-gray-500 bg-gray-200"
                } shadow-md rounded-full mt-2 w-[50px] h-[30px] filterBtnHoverAnimation`}
                onClick={() => handleAppendOrRemoveFilter(index, selectedTerm)}
              >
                {termDuration.toString()}
              </div>
            ))}
          </div>
          {/* Destino */}
          <h2 className="text-sm text-left">Destino</h2>
          <div className="flex flex-wrap w-full justify-between px-3 -mt-2">
            {fundDestinations.map((destination, index) => (
              <div
                className={`${
                  selectedDestination === index
                    ? "text-accent bg-white"
                    : "text-gray-500 bg-gray-200"
                } flex justify-center items-center shadow-md rounded-full mt-2 w-[50px] h-[30px] filterBtnHoverAnimation`}
                onClick={() => handleAppendOrRemoveFilter(destination.name, selectedDestination)}
              >
                <FontAwesomeIcon
                  icon={destination.icon}
                  size="1x"
                  style={{
                    color:
                      selectedDestination.hasOwnProperty(destination.name) ? "#FF5F00" : "#9CA3AF",
                  }}
                />
              </div>
            ))}
          </div>
          {/* ------ */}
          <div className="w-full h-[2px] bg-gray-100 mt-2"></div>

          {/* Checkboxes */}
          <div className="w-full flex justify-start items-start gap-3">
            <input
              id="c1"
              checked={showPreviousInvestments}
              onChange={() => {setShowPreviousInvestments(!showPreviousInvestments)}}
              type="checkbox"
              className="appearance-none rounded-full h-[15px] w-[15px] cursor-pointer bg-red-100 border-red-300 text-red-600 focus:ring-accent outline-none  checked:bg-accent transition duration-300 mt-1 focus:ring-0 focus:ring-offset-0"
            />
            <p className="text-[10px] text-gray-500 font-light">Mostrar solicitudes en las que ya he invertido anteriormente.</p>
          </div>
          
          {/* Cancel or Apply Filters Buttons */}
            <div className="flex flex-col w-full justify-between items-center mt-6 gap-2">
                <button onClick={eraseFilters} className="w-full p-3 text-xs bg-gray-200 text-gray-500 rounded-md hover:bg-gray-300 transition duration-200">Borrar filtros</button>
                <button type="submit" className="w-full p-3 text-xs bg-accent text-white rounded-md hover:bg-accent/90 transition duration-200">Aplicar filtros</button>
            </div>
        </form>
      </div>
    </div>
  );
};


  
