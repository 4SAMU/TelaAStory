import { useWindowScrollPositions } from "@/Helpers/GetScrollPosition";
import {
  ButtonsContainer,
  IconBtnWrap,
  NavButtons,
  NavButtonsContained,
  NavLogo,
  NavbarContainer,
} from "./NavStyles";
import { GetScreenBreakPoints } from "@/Helpers/MediaQueries";
import { ScreenBreakPoints } from "@/Helpers/Types";
import { useEffect, useState } from "react";
import { useNavigateTo } from "../TodayStori";
import { IconButton } from "@mui/material";

//icons
import EditIcon from "@mui/icons-material/EditNote";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CustomDrawer from "./CustomNavDrawer";

export const NavRoutes = [
  { path: "/", label: "Home" },
  { path: "/#About", label: "About" },
  { path: "/#Docs", label: "Docs \u2304" },
  { path: "/Help", label: "Help" },
  { path: "/Start writing", label: "Start Writing" },
];

const Navbar = () => {
  const screenBreakPoints: ScreenBreakPoints = GetScreenBreakPoints();
  const { scrollY } = useWindowScrollPositions();
  const [showNavbar, setShowNavbar] = useState(false);
  const navigateTo = useNavigateTo();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isNextHub, isIpad, isCustomBreakPoint } = GetScreenBreakPoints();

  // menu icon styles
  const iconStyles = {
    color: "#FFF",
    fontSize: isNextHub ? "50px" : isIpad ? "40px" : "40px",
  };
  // handleMenuToggle function to toggle the menu drawer
  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

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
          {NavRoutes.slice(0, 4).map((buttonData, index) => (
            <NavButtons
              key={index} // Add a unique key for each button
              variant="text"
              onClick={() => navigateTo(buttonData.path)}
            >
              {buttonData.label}
            </NavButtons>
          ))}
          <NavButtonsContained
            variant="contained"
            onClick={() => navigateTo("/#")}
          >
            Start Writing &nbsp;
            <EditIcon />
          </NavButtonsContained>
        </ButtonsContainer>

        {!isCustomBreakPoint && (
          <>
            <IconBtnWrap>
              <IconButton onClick={handleMenuToggle}>
                {menuOpen ? (
                  <>
                    <MenuOpenIcon sx={iconStyles} />
                  </>
                ) : (
                  <>
                    <MenuIcon sx={iconStyles} />
                  </>
                )}
              </IconButton>
            </IconBtnWrap>

            {menuOpen && (
              <CustomDrawer
                toggleDrawer={handleMenuToggle}
                isOpen={menuOpen}
                close={handleMenuToggle}
              />
            )}
          </>
        )}
      </NavbarContainer>
    </>
  );
};

export default Navbar;
