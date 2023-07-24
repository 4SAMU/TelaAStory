import { Box, styled } from "@mui/material";

export const LinksContainer = styled(Box)({
  width: "100vw",
  height: "auto",
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
  minHeight: "80px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",

  "& .CopyRight": {
    marginBottom: "20px",
    color: "#5A7184",
    textAlign: "center",
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  },
  "@media screen and (max-width: 360px)": {
    "& .CopyRight": {
      fontSize: "14px",
      fontWeight: "300",
    },
  },
});
