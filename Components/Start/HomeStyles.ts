import { Box } from "@mui/material";
import { styled } from "styled-components";

export const HomeContainer = styled(Box)({
  position: "relative",
  width: "100vw",
  top: "0",
  height: "973px",
  // display: "flex",
  background: "url('/HomeImage.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 973px",
  "@media screen and (max-width: 599px)": {
    // background: "red",
    height: "650px",
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
