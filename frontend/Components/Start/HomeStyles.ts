import { Box } from "@mui/material";
import { styled } from "styled-components";

export const HomeContainer = styled(Box)({
  position: "relative",
  width: "100vw",
  top: "100px",
  height: "973px",
  // display: "flex",
  background: "url('/HomeImage.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  "@media screen and (max-width: 599px)": {
    background: "url('/MobileHome.png')",
    height: "500px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
});

export const Wave = styled(Box)({
  position: "absolute",
  width: "100vw",
  height: "175px",
  bottom: "0px",
  background: "url('/Wave.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 175px",
});
