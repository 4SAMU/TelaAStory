import { Box, keyframes, styled } from "@mui/material";

interface CookiesProps {
  isOpen: Boolean;
}

const slideLeft = keyframes({
  "0%": {
    left: -300,
  },
  "100%": {
    left: "1%",
  },
});

export const CookiesContainer = styled(Box)<CookiesProps>((props) => ({
  position: "fixed",
  width: "300px",
  height: "70px",
  borderRadius: "6px",
  bottom: "1%",
  zIndex: 11,
  boxShadow: "0px 10px 35px 1px rgba(0, 0, 0, 0.3)",
  background: "#FFF",
  animationDuration: "0.25s",
  animationTimingFunction: "ease-in-out",
  animationFillMode: "forwards",
  animationName: props.isOpen ? slideLeft : "",

  "& .Close": {
    position: "absolute",
    right: "10px",
    top: "10px",
    fontFamily: "Gotham",
    fontSize: "12px",
    cursor: "pointer",
  },
  "& h1": {
    fontFamily: "Gotham",
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: "300",
    padding: "11px",
  },
}));
