import { ImageProps } from "@/Helpers/Types";
import { Box, Button } from "@mui/material";
import { styled } from "styled-components";

export const RecentContainer = styled(Box)({
  position: "relative",
  width: "100vw",
  height: "auto",
  minHeight: "740px !important",
  // background: "red",
  display: "flex",
  flexDirection: "column",

  "& div.wrapper": {
    position: "relative",
    width: "1140px",
    height: "calc(100% - 96px)",
    // background: "green",
    margin: "96px auto auto auto",
  },
});

export const HeaderBox = styled(Box)({
  position: "relative",
  // background: "yellow",
  height: "96px",
  width: "100%",
  transition: "all 0.3s, 0.3s ease-in-out",

  "& h1": {
    position: "absolute",
    color: "#183B56",
    fontSize: "36px",
    fontFamily: "Gotham",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "48px",
    letterSpacing: "0.2px",
    top: "0",
    left: "0",
  },
  "& h2": {
    position: "absolute",
    color: "#5A7184",
    fontSize: "18px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    bottom: "0",
    left: "0",
  },
});

export const ViewAllBtn = styled(Box)({
  position: "absolute",
  bottom: "0 ",
  right: "0",
  transition: "all 0.3s, 0.3s ease-in-out",
});

export const ViewAll = styled(Button)({
  border: "1px #1565D8 solid !important",
  // "&:hover": { backgroundColor: "#1565D8 !important", color: "#FFF !important" },
  color: "#1565D8 !important",
  fontSize: "16px !important",
  fontFamily: "Gotham !important",
  fontStyle: "normal !important",
  fontWeight: "400 !important",
  lineHeight: "normal !important",
  width: "fit-content !important",
  height: " 48px !important",
  transition: "all 0.3s, 0.3s ease-in-out",
});

export const CardContainer = styled(Box)({
  height: "auto",
  width: "100%",
  marginTop: "48px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "30px",
  maxHeight: "1050px !important",
  overflowY: "scroll",
  overflowX: "hidden",
  transition: "all 0.3s, 0.3s ease-in-out",
});

export const Cards = styled(Box)<ImageProps>(({ imageUrl }) => ({
  position: "relative",
  height: "500px",
  width: "360px",
  margin: "auto",
  borderRadius: "16px",
  display: "flex",
  justifyContent: "center",
  background: `url(${imageUrl})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  cursor: "pointer",
  transition: "all 0.3s, 0.3s ease-in-out",

  "& .OvarlayColor": {
    height: "inherit",
    width: "inherit",
    borderRadius: "inherit",
    background:
      "linear-gradient(180deg, rgba(24, 59, 86, 0.00) 0%, #152532 100%)",
  },

  "& .CardDataWrapper": {
    position: "absolute",
    bottom: "1px",
    height: "250px",
    width: "80%",
    background: "transparent",
  },
  "& .CardName": {
    color: "#FFF",
    fontSize: "28px",
    fontFamily: "Gotham",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "36px",
    letterSpacing: "0.2px",
  },
  "& .CardDescrip": {
    color: "#FFF",
    fontSize: "20px",
    fontFamily: " Open Sans",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "30px",
    marginTop: "25px",
  },
}));

// export const CardImage = styled("img")({
//   height: "100%",
//   width: "100%",
//   borderRadius: "inherit",
// });

export const Author = styled(Box)<ImageProps>(({ imageUrl }) => ({
  position: "absolute",
  height: "45px",
  fontFamily: "Open Sans",
  lineHeight: "normal",
  width: "100%",
  marginTop: "25px",

  "& .Avatar": {
    position: "absolute",
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    background: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  },
  "& .AuthorName": {
    position: "absolute",
    color: "#FFF",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    margin: "0 0 0 45px",
  },

  "& .isVerified": {
    position: "absolute",
    color: "#FFF",
    fontSize: "14px",
    fontStyle: "italic",
    fontWeight: "400",
    margin: "20px 0 10px 45px",
    paddingLeft: "17px",
  },
  "& .isVerified::before": {
    content: '" "',
    position: "absolute",
    left: "0",
    top: "0",
    background: `url('Verified.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    height: "16px",
    width: "16px",
  },
  "& .time": {
    position: "absolute",
    color: "#FFF",
    fontSize: "14px",
    fontStyle: "italic",
    fontWeight: "400",
    right: "0",
    margin: "10px 0 0 0",
  },
}));

export const ShowMore = styled(Box)({
  position: "relative",
  width: "100vw",
  margin: "30px 0 30px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
