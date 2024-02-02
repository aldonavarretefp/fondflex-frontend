import React, { useEffect, useState } from "react";

import FondFlexLogo from "../../img/FondflexLogo50x50.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faCalendar,
  faChartLine,
  faChevronLeft,
  faChevronRight,
  faCirclePlus,
  faCreditCard,
  faList,
  faMoneyBillTransfer,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FondFlexCard } from "../../components";

type SidebarLink = {
  name: string;
  path: string;
  icon: IconDefinition;
};

const sidebarLinks: Array<SidebarLink> = [
  {
    name: "Invertir",
    path: "/dashboard",
    icon: faChartLine,
  },
  {
    name: "Créditos",
    path: "/dashboard/creditos",
    icon: faCreditCard,
  },
  {
    name: "Mis movimientos",
    path: "/dashboard/movimientos",
    icon: faList,
  },
  {
    name: "Calendario",
    path: "/dashboard/calendario",
    icon: faCalendar,
  },
  {
    name: "Agregar fondos",
    path: "/dashboard/fondear",
    icon: faCirclePlus,
  },
  {
    name: "Retirar",
    path: "/dashboard/retirar",
    icon: faMoneyBillTransfer,
  },
];

const Sidebar = () => {

  const [isSideBarExpanded, setIsSideBarExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    console.log(isSideBarExpanded);
  }, [isSideBarExpanded])

  return (
    <div className={`flex flex-col justify-between ${isSideBarExpanded ? "w-45" : "w-20"} relative`}>
      <div className="p-6">
        <div className="flex items-center justify-start h-16 w-full text-2xl font-bold mb-5">
          <img
            src={FondFlexLogo}
            alt="Fondflex Logo"
            className="w-[30px] h-[30px]"
          ></img>
          &nbsp; <span className={`${isSideBarExpanded ? "block" : "hidden"}`} >fondflex</span>
        </div>
        <div className="w-7 h-7 bg-accent rounded-full absolute top-11 -right-3 flex justify-center items-center cursor-pointer" onClick={()=>setIsSideBarExpanded(!isSideBarExpanded)}>
          <FontAwesomeIcon icon={isSideBarExpanded ? faChevronRight : faChevronLeft} size="xs" inverse/>
        </div>
        {sidebarLinks.map((link, index) => (
          <div
            key={index}
            className={`${selectedItem === index ? "bg-accent/50" : "hover:bg-gray-300"} mt-4 cursor-pointer flex flex-row items-center h-12 w-full ${isSideBarExpanded ? "px-4 justify-start" : "justify-center"} rounded transition-colors duration-100`}
            onClick={() => setSelectedItem(index)}
          >
              <FontAwesomeIcon icon={link.icon} className={`${isSideBarExpanded ? "pr-2" : ""}`} size="1x" />
            <span className={`text-sm font-light ${isSideBarExpanded ? "block" : "hidden"}`}>{link.name}</span>
          </div>
        ))}
      </div>
      <div className="p-2 pb-5">
        <FondFlexCard />
      </div>
      
    </div>
  );
};

export default Sidebar;
