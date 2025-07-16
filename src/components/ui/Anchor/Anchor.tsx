import { AnchorType } from "@/types";
import Link from "next/link";
import React from "react";

const Anchor = ({ className, label = "Get Started", href }: AnchorType) => {
  return (
    <div className="flex">
      <Link
        href={href}
        className={`text-center block text-white text-xl font-medium font-inter bg-accent-100 leading-[1.2] py-[18px] px-11 rounded-4xl max-tab-lg:py-3 max-tab-lg:px-5 max-tab-lg:text-base ${
          className || ""
        }`}
      >
        {label}
      </Link>
    </div>
  );
};

export default Anchor;
