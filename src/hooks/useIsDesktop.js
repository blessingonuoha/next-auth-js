import { useEffect, useState } from "react";

const useIsDesktop = (desktopSize = 767) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > desktopSize);
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // call the function initially to set the state accordingly

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isDesktop;
};

export default useIsDesktop;
