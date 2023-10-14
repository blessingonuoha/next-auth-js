import { Calculator } from "lucide-react";

import React from "react";

const CalculatorComponent = () => {
  const sticky = () => {
    window.document.body.classList.add("stickyEl");
  };
  return (
    <div className="stickyEl relative border rounded-lg w-[100%] h-[100px]">
      <Calculator
        size={45}
        className="sticky top-0 z-10 p-2 backdrop-blur-sm dark:bg-transparent left-[50%]"
      />
    </div>
  );
};

export default CalculatorComponent;
