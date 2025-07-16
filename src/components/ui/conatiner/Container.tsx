import React, { ReactNode } from "react";

const Container = ({ className, children }: { className?: string, children: ReactNode }) => {
  return (
    <div
      className={`max-w-[1760px] mx-auto px-[30px] max-tab-lg:px-4 ${className || ""}`}
    >
        {children}
    </div>
  );
};

export default Container;
