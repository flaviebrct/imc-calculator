import React from "react";

export default function Input({id, labelText, placeholder, onChange}) {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-1 text-sm" htmlFor={id}>{labelText}</label>
      <input onChange={onChange} className="h-10 rounded shadow-lg py-2 px-3" id={id} type="number" placeholder={placeholder}/>
    </div>
  );
}
