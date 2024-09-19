import Image from "next/image";

import Input from "./components/Input";
import Button from "./components/Button";
import Result from "./components/Result";

export default function Home() {
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
          />
          <Input
            id={"weight"}
            labelText={"Votre poid en kg"}
            placeholder={"60"}
          />
        </div>
        <Button />
        <Result />
      </main>
    </div>
  );
}
