import { ButtonType } from "@/types";
import React from "react";

const Button = ({ className, label = "Get Started", onClick, to }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className={`text-center text-white text-xl font-medium font-inter leading-[1.2] bg-accent-100 py-[18px] px-11 rounded-4xl ${
        className || ""
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
