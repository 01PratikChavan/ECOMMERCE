import React from "react";


const Input = ({ type, placeholder, label, id, onChange, value }) => {
  let divClassName = "flex flex-col gap-2 ";
  let labelClassName = "text-gray-600   dark:text-gray-100 text-md";
  let inputClassName =
    "p-2 bg-gray-10  md:w-[24vw] md:text-md dark:text-black md:text-semibold border border-slate-950 bordre-gray-400 dark:border-slate-100 rounded-md		";
    
  return (
    <div className={divClassName}>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>

      <input
        type={type}
        className={inputClassName}
        placeholder={placeholder}
        required
        id={id}
        name={id}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
