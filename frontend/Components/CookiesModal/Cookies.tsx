import { useEffect, useState } from "react";
import { CookiesContainer } from "./Styles";

const Cookies = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isCookieAccepted = localStorage.getItem("cookieAccepted");
    if (isCookieAccepted) {
      setIsOpen(false); // Close the modal if cookie is already accepted
    } else {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("cookieAccepted", "true");
  };

  return (
    <>
      {isOpen && (
        <CookiesContainer isOpen={isOpen}>
          <div className="Close" onClick={handleClose}>
            X
          </div>
          <h1>This Site Uses Cookies to store Your settings !</h1>
        </CookiesContainer>
      )}
    </>
  );
};

export default Cookies;
