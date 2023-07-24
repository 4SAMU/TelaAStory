import {
  DrawerContainerProps,
  ScreenBreakPoints,
  mediaQueryProps,
} from "@/Helpers/Types";
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
  background: "linear-gradient(167deg, #119AB8 0%, #0d2436 100%)",
  backdropFilter: "blur(10px)",
  zIndex: 20,
  animationDuration: "0.5s",
  animationTimingFunction: "ease-in-out",
  animationFillMode: "both",
  animationName: props.showNavbar ? slideDown : slideTop,
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

// custom drawer
const slideRight = keyframes({
  from: {
    right: "-300px",
  },
  to: {
    right: 0,
  },
});

const slideLeft = keyframes({
  "0%": {
    right: 0,
  },
  "100%": {
    right: -300,
  },
});

export const DrawerContainer = styled(Box)<DrawerContainerProps>`
  position: fixed;
  top: 94px;
  width: 100vw;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-name: ${(props) => (props.isOpen ? slideRight : slideLeft)};
`;

export const MiniDrawer = styled(Box)<mediaQueryProps>(({ ismd, issm }) => ({
  position: "absolute",
  right: ismd ? 10 : issm ? 10 : "2%",
  width: ismd ? "280px" : issm ? "280px" : "95%",
  height: "auto",
  background: "linear-gradient(167deg, #119AB8 0%, #0d2436 100%)",
  borderRadius: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: "20px",
}));

export const IconBtnWrap = styled(Box)({
  position: "absolute",
  right: "5%",
});

export const DrawerButton = styled(Button)`
  width: 100%;
  height: 52px;
  border-radius: none;
  font-family: Manrope !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 18px !important;
  line-height: 25px !important;
  color: #fff !important;
  text-transform: capitalize !important;
`;
