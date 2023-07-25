import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const BigContainer = styled(Box)({
  width: "100vw",
  //   minHeight: "602px !important",
  height: "auto",
  // display:"flex",
});

export const CurvedRectangle = styled(Box)({
  position: "relative",
  width: "100vw",
  height: "70px",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "35px",
    backgroundColor: "#FFF",
    clipPath: "ellipse(50% 100% at 50% 0%)",
  },
});

export const SubContainer = styled(Box)({
  width: "100vw",
  minHeight: "200px !important",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const GetOurStory = styled(Box)({
  width: "80vw",
  display: "flex",
  flexDirection: "column",

  "& h1": {
    color: "#FFF",
    fontFamily: "Gotham",
    fontSize: "25px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "37.5px",
    letterSpacing: "0.2px",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    width: "621px",
  },
  "& .inputContainer": {
    display: "flex",
    gap: "8px",
  },
  "@media screen and (max-width: 1535px)": {
    "& h1": {
      width: "fit-content",
    },
  },
  "@media screen and (max-width: 1199px)": {
    "& h1": {
      fontSize: "24px",
    },
  },
  "@media screen and (max-width: 899px)": {
    width: "90vw",
    "& h1": {
      fontSize: "23px",
    },
  },
  "@media screen and (max-width: 599px)": {
    "& h1": {
      fontSize: "18px",
    },
  },
  "@media screen and (max-width: 420px)": {
    marginBottom: "10px",
    "& .inputContainer": {
      gap: "8px",
      flexDirection: "column",
    },
  },
});

export const StyledInput = styled("input")({
  width: "300px",
  outline: "none",
  padding: "0 15px",
  borderRadius: "4px",
  border: "none",
  fontSize: "16px",
  fontFamily: "Roboto",

  "@media screen and (max-width: 420px)": {
    height: "45px",
    width: "95%",
  },
});

export const GetStartedBtn = styled(Button)({
  width: "166px",
  height: "56px",
  background: "#119AB8",
  ":hover": {
    background: "rgba(17, 154, 184, 0.8)",
  },
  "@media screen and (max-width: 420px)": {
    height: "45px",
    width: "95%",
  },
});
