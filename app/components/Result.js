import React from "react";

export default function Result({ data, resultText, color }) {
  let classValueColor;

  if (color === "midnightblue") {
    classValueColor = "text-blue-800";
  } else if (color === "green") {
    classValueColor = "text-green-500";
  } else if (color === "lightcoral") {
    classValueColor = "text-rose-400";
  } else if (color === "orange") {
    classValueColor = "text-orange-500";
  } else if (color === "crimson") {
    classValueColor = "text-red-600";
  } else if (color === "purple") {
    classValueColor = "text-purple-500";
  }

  return (
    <div className="flex flex-col items-center">
      <p className={`${classValueColor} font-extrabold text-3xl`}>{data}</p>
      <p className={`${classValueColor} font-bold text-lg`}>{resultText}</p>
    </div>
  );
}
