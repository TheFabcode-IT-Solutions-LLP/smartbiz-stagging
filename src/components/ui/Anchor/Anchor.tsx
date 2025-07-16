import { AnchorType } from "@/types";
import Link from "next/link";
import React from "react";

const Anchor = ({ className, label = "Get Started", href }: AnchorType) => {
  return (
    <Link
      href={href}
      className={`text-center text-white text-xl font-medium font-inter bg-accent-100 leading-[1.2] py-[18px] px-11 rounded-4xl ${
        className || ""
      }`}
    >
      {label}
    </Link>
  );
};

export default Anchor;
