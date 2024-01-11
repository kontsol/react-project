import React, {useState} from "react";
const Button = ({title, hidden, block, bg_color, text_color, onClick}) => {
  return (
    <button
      // "bg-[#fafafa]"
      className={`w-auto items-center rounded-3xl shadow-lg shadow-white-300 ${bg_color} bg-[#e66e19] ${
        text_color ? "text-[#e66e19]" : "text-white"
      }
      text-white font-medium md:text-[12px] lg:text-[16px] py-2.5 px-6  lg:py-3 lg:px-8 hover:opacity-70 mt-7 lg:mt-6 xl:mt-7 ${hidden} ${block} translate-y-[-40%]`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
