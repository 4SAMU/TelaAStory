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
import { useNavigateTo } from "../TodayStori";

//
// import EditIcon from "@mui/icons-material/Edit";
import EditIcon from "@mui/icons-material/EditNote";

const Navbar = () => {
  const screenBreakPoints: ScreenBreakPoints = GetScreenBreakPoints();
  const { scrollY } = useWindowScrollPositions();
  const [showNavbar, setShowNavbar] = useState(false);
  const navigateTo = useNavigateTo();

  useEffect(() => {
    const handleScroll = () => {
      const diff = window.scrollY - scrollY;
      if (diff >= 20) {
        setShowNavbar(true);
      } else if (diff <= -20) {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <>
      <NavbarContainer {...screenBreakPoints} showNavbar={showNavbar}>
        <NavLogo
          src={"/Logo.png"}
          alt="TellAStory"
          onClick={() => navigateTo("/")}
        />
        <ButtonsContainer>
          <NavButtons variant="text" onClick={() => navigateTo("/")}>
            Home
          </NavButtons>
          <NavButtons variant="text" onClick={() => navigateTo("/#")}>
            About
          </NavButtons>
          <NavButtons variant="text" onClick={() => navigateTo("/#")}>
            Docs &#8964;
          </NavButtons>
          <NavButtons variant="text" onClick={() => navigateTo("/#")}>
            Help
          </NavButtons>
          <NavButtonsContained
            variant="contained"
            onClick={() => navigateTo("/#")}
          >
            Start Writing &nbsp;
            <EditIcon />
          </NavButtonsContained>
        </ButtonsContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
