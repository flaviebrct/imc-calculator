import React from "react";

export default function Button({ onClick }) {
  return (
    <div className="bg-yellow-500 w-fit pt-1 pb-1 pl-4 pr-4 rounded shadow-md hover:shadow-inner">
      <button onClick={onClick} className="font-bold text-stone-800 ">
        Calculer l'IMC
      </button>
    </div>
  );
}
