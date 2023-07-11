import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const BigContainer = styled(Box)({
  width: "100vw",
  //   minHeight: "602px !important",
  height: "auto",
  //   background: "#0D2436",
});

export const FooterWave = styled(Box)({
  position: "relative",
  width: "100vw",
  height: "175px",
  background: "url('/FooterWave.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 175px",
});

export const SubContainer = styled(Box)({
  width: "100vw",
  minHeight: "200px !important",
  height: "auto",
  background: "#0D2436",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const GetOurStory = styled(Box)({
  width: "80vw",
  height: "300px",
  display: "flex",
  flexDirection: "column",

  "& h1": {
    color: "#FFF",
    fontFamily: "Gotham",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "48px",
    letterSpacing: "0.2px",
    marginBottom: "60px",
    display: "flex",
    flexDirection: "column",
    width: "621px",
  },
  "& .inputContainer": {
    display: "flex",
    // flexDirection: "column",
    gap: "8px",
  },
});

export const StyledTextField = styled(TextField)({
  width: "300px",
  "& .MuiOutlinedInput-root": {
    background: "#fff",
    color: "#fff",

    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #fff",
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#fff",
  },
});

export const GetStartedBtn = styled(Button)({
  width: "166px",
  height: "56px",
});
