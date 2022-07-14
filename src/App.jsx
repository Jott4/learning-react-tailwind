import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import bob01 from "./assets/bob-tree-01.png";
import bob02 from "./assets/bob-tree-02.png";
import bob03 from "./assets/bob-tree-03.png";
import Objectives from "./Objectives";

function App() {
  const [step, setStep] = useState(0);
  const endIntro = () => {
    localStorage.setItem("intro", true);
  };

  return (
    <div className="w-full flex flex-col justify-between items-start px-6 py-2">
      {step == 0 ? (
        <div className="py-2">
          <p className="px-4 self-start">
            Seja bem-vindo ao "De Boas", onde você aprende meditação para ficar
            sempre de boas
          </p>
          <img src={bob01} className="absolute right-8 top-16 self-center" />
        </div>
      ) : step == 1 ? (
        <div className="py-2">
          <p className="px-4 self-start">
            É divertido e ajudamos você a ficar motivado com recompensas pelo
            seu empenho em ficar "De Boas"
          </p>
          <img src={bob02} className="absolute top-28 self-center" />
        </div>
      ) : step == 2 ? (
        <div className="py-2">
          <p className="px-4 self-start">
            Você pode acompanhar sua evolução em ficar "De boas" com as nossas
            estatísticas inteligentes.
          </p>
          <img src={bob03} className="absolute top-28 self-center" />
        </div>
      ) : (
        <Objectives />
      )}
      {step <= 2 && (
        <>
          <div className="h-64"></div>
          <button
            onClick={() => setStep(step + 1)}
            className="w-full p-2 rounded-full bg-green-300 hover:bg-green-400 self-end transition-all text-gray-800"
          >
            Proximo
          </button>
        </>
      )}
    </div>
  );
}

export default App;
