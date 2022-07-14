import React from "react";

export default function Objectives() {
  const objectives = [
    {
      title: "Ficar sussa",
      description: "Relaxar, reduzir a ansiedade e o stress",
    },

    {
      title: "Olha a foca!",
      description: "aumentar o foco",
    },
    {
      title: "Dormir de boas",
      description: "Dormir melhor",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col justify-between items-start py-2 mt-6">
      <div className="h-10 border-b border-gray-300 flex items-center justify-between w-full text-xl fixed top-0 left-0 bg-white px-4">
        <div>{"🔙"}</div>
        <div className="font-bold">OBJETIVOS</div>
        <div>{"📈"}</div>
      </div>
      <div class="py-2 w-full flex flex-col">
        {objectives.map(({ title, description }) => (
          <div className="bg-gray-200 shadow-xl rounded-2xl h-32 w-full my-2 flex items-center justify-between px-4 gap-x-2">
            <div className="bg-red-200 w-16 h-16"></div>
            <div className="flex flex-col items-start justify-start text-start">
              <p className="text-lg font-semibold   ">{title}</p>
              <p className="text-sm">{description}</p>
            </div>
            <div className="text-3xl font-extrabold">{">"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
