import { useWindowScrollPositions } from "@/Helpers/GetScrollPosition";
import {
  ButtonsContainer,
  NavButtons,
  NavButtonsContained,
  NavLogo,
  NavbarContainer,
} from "./NavStyles";
import { GetScreenBreakPoints } from "@/Helpers/MediaQueries";
import { ScreenBreakPoints } from "@/Helpers/Types";
import { useEffect, useState } from "react";

const Navbar = () => {
  const screenBreakPoints: ScreenBreakPoints = GetScreenBreakPoints();
  const { scrollY } = useWindowScrollPositions();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const diff = window.scrollY - scrollY;
      if (diff >= 1) {
        setShowNavbar(true);
      } else if (diff <= -1) {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <>
      <NavbarContainer {...screenBreakPoints} showNavbar={showNavbar}>
        <NavLogo src={"/Logo.png"} alt="TellAStory" />
        <ButtonsContainer>
          <NavButtons variant="text">Home</NavButtons>
          <NavButtons variant="text">About</NavButtons>
          <NavButtons variant="text">Docs &#8964;</NavButtons>
          <NavButtons variant="text">Help</NavButtons>
          <NavButtonsContained variant="contained">
            Start Writing
          </NavButtonsContained>
        </ButtonsContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
