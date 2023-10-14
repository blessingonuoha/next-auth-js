"use client";

import { useEffect, useState } from "react";

const useIsMobile = (mobileScreen = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileScreen);
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // call the function initially to set the state accordingly

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
