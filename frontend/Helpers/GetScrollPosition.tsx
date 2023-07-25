import { useEffect, useState } from "react";

export function useWindowScrollPositions() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function updatePosition() {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return { scrollX, scrollY };
}
