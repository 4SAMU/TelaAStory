import { ScreenBreakPoints } from "@/Helpers/Types";
import { Box } from "@mui/material";
import { styled } from "styled-components";

export const NavbarContainer = styled(Box)<ScreenBreakPoints>((props) => ({
  position: "fixed",
  height: "100px",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  background: "rgba(255, 255, 255, 0.5)",
  zIndex: 20,

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
});
