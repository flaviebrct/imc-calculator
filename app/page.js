"use client";

import { useState } from "react";

import { BMIData } from "./data/bmi";

import Input from "./components/Input";
import Result from "./components/Result";
import Button from "./components/Button";

export default function Home() {
  const [bmi, setBmi] = useState("0");
  const [resultText, setResultText] = useState("En attente du resultat...");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("stone");

  const handleChange = (event) => {
    if (event.target.id === "size") {
      setSize(parseInt(event.target.value));
    } else if (event.target.id === "weight") {
      setWeight(parseInt(event.target.value));
    }
  };

  const handleClick = () => {
    if (!size || !weight || size <= 0 || weight <= 0) {
      handleError();
      return;
    } else {
      const sizeMeter = size / 100;
      const result = weight / (sizeMeter * sizeMeter);
      setBmi(result.toFixed(1));
      showResult(result.toFixed(1));
    }
  };

  const handleError = () => {
    setBmi("Oups");
    setResultText("Veuillez remplir des valeurs réalistes.");
  };

  const showResult = (bmi) => {
    const rank = BMIData.find((data) => {
      if (bmi >= data.range[0] && bmi < data.range[1]) {
        return data;
      } else if (typeof data.range === "number" && bmi >= data.range) {
        return data;
      }
    });
    console.log(rank);
    setResultText(`Résultat : ${rank.name}`);
    setColor(rank.color);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-sky to-purplesky flex justify-center pt-10">
      <main className="w-128 h-80 bg-stone-100 rounded border border-stone-400 shadow-md flex flex-col justify-evenly items-center">
        <h1 className="text-3xl p-4 text-stone-800">
          Calcul <span className="font-bold">d'IMC</span>
        </h1>
        <div className="flex justify-center gap-3 pl-8 pr-8 mb-4">
          <Input
            id={"size"}
            labelText={"Votre taille en centimètres"}
            placeholder={"165"}
            onChange={handleChange}
          />
          <Input
            id={"weight"}
            labelText={"Votre poid en kg"}
            placeholder={"60"}
            onChange={handleChange}
          />
        </div>
        <Button onClick={handleClick} />
        <Result data={bmi} resultText={resultText} color={color} />
      </main>
    </div>
  );
}
