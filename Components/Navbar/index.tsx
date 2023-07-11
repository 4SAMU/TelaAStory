import { useWindowScrollPositions } from "@/Helpers/GetScrollPosition";
import { NavLogo, NavbarContainer } from "./NavStyles";
import { GetScreenBreakPoints } from "@/Helpers/MediaQueries";
import { ScreenBreakPoints } from "@/Helpers/Types";
import { useEffect, useState } from "react";

const Navbar = () => {
  const screenBreakPoints: ScreenBreakPoints = GetScreenBreakPoints();
  const { scrollY } = useWindowScrollPositions();
  const [showNavbar, setShowNavbar] = useState(true);

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
      {showNavbar && (
        <NavbarContainer {...screenBreakPoints}>
          <NavLogo src={"/Logo.png"} alt="TellAStory" />
        </NavbarContainer>
      )}
    </>
  );
};

export default Navbar;
