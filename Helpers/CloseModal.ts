import { useEffect, useRef, useState } from "react";

const useOutsideClick = (onClose: any) => {
  const [isClient, setIsClient] = useState(false);
  const modalContainerRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalContainerRef.current &&
        !(modalContainerRef.current as HTMLDivElement).contains(
          event.target as Node
        )
      ) {
        onClose();
      }
    };

    if (isClient) {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }
  }, [isClient, onClose]);

  return modalContainerRef;
};

export default useOutsideClick;
