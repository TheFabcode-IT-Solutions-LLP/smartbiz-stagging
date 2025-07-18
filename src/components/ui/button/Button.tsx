
import { ButtonType } from "@/types";
import React from "react";

const Button = ({ className, label = "Get Started", onClick, type }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`text-center cursor-pointer block text-white text-xl font-medium font-inter bg-accent-100 leading-[1.2] py-[18px] px-11 rounded-[100px] max-tab-lg:py-3 max-tab-lg:px-5 max-tab-lg:text-base  ${
        className || ""
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
