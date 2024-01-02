import { Navbar } from "../../../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Main from "../Main";
import SimulateCredits from "../../SimularCreditos/SimulateCredits";

const Principal = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/simular-creditos" element={<SimulateCredits />} />
      </Routes>
    </div>
  );
};

export default Principal;
