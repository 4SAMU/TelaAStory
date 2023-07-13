import { Box, styled } from "@mui/material";

export const LinksContainer = styled(Box)({
  width: "100vw",
  height: "auto",
});

export const SocialLinks = styled(Box)({
  width: "100vw",
  minHeight: "200px",
  background: "#0D2436",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

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
