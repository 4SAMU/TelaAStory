import { ScreenBreakPoints } from "@/Helpers/Types";
import { Box, Button, keyframes, styled } from "@mui/material";

interface ShowNavbarProps extends ScreenBreakPoints {
  showNavbar: Boolean;
}

const slideDown = keyframes({
  "0%": {
    top: "0%",
  },
  "100%": {
    top: -300,
  },
});

const slideTop = keyframes({
  "0%": {
    top: -300,
  },
  "100%": {
    top: "0%",
  },
});

export const NavbarContainer = styled(Box)<ShowNavbarProps>((props) => ({
  position: "fixed",
  height: "100px",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  background: "rgb(13, 36, 54)",
  backdropFilter: "blur(10px)",
  zIndex: 20,
  animationDuration: "0.5s",
  animationTimingFunction: "ease-in-out",
  animationFillMode: "both",
  animationName: props.showNavbar ? slideDown : slideTop,

  // ...(props.showNavbar === false && {
  //   animationName: slideDown,
  // }),

  //responsiveness
  // ...(props.isPhone && {
  //   background: "#FFFAFA",
  // }),
  // ...(props.isIpad && {
  //   background: "green",
  // }),
  // ...(props.isNextHub && {
  //   background: "violet",
  // }),
  // ...(props.isLaptop && {
  //   background: "red",
  // }),
  // ...(props.isDesktop && {
  //   background: "blue",
  // }),
  // "@media only screen and (max-width: 300px) ": {
  //   background: "purple",
  // },
}));

export const NavLogo = styled("img")({
  marginLeft: "10%",
  height: "55px",
  cursor: "pointer",
  "@media screen and (max-width: 1535px)": {
    marginLeft: "5%",
  },
});

export const ButtonsContainer = styled(Box)({
  position: "absolute",
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  right: "20%",
  justifyContent: "space-between",
  gap: "70px",
  "@media screen and (max-width: 1535px)": {
    right: "5%",
    gap: "30px",
  },
  "@media screen and (max-width: 899px)": {
    display: "none",
  },
});

export const NavButtons = styled(Button)({
  color: "#FFF",
  textAlign: "center",
  fontFamily: "Open Sans",
  fontSize: "16px",
  fontStyle: "normal",
  lineHeight: "normal",
  textTransform: "capitalize",
  "@media screen and (max-width: 899px)": {
    // fontWeight: "400px",
  },
});

export const NavButtonsContained = styled(Button)({
  color: "#FFF",
  textAlign: "center",
  fontFamily: "Open Sans",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
  textTransform: "capitalize",
  background: "none",
  border: "1px solid #FFF",
  padding: "10px 35px 10px 35px",
  "&:hover": {
    border: "none",
    background: "#119AB8",
  },
});
