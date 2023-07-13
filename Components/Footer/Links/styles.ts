import { Box, styled } from "@mui/material";

export const LinksContainer = styled(Box)({
  width: "100vw",
  height: "auto",
  background: "#0D2436",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& .divider": {
    width: "100%",
    height: "1px",
    background: "#5A7184",
  },
});

export const SocialLinks = styled(Box)({
  width: "100vw",
  minHeight: "200px",
  background: "#0D2436",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",

  "& .CopyRight": {
    // position: "absolute",
    marginBottom: "20px",
    color: "#5A7184",
    textAlign: "center",
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  },
});
