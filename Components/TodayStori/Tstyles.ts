import { Box } from "@mui/material";
import { styled } from "styled-components";

export const TodayStoriContainer = styled(Box)({
  position: "relative",
  width: "100vw",
  height: "190px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // background: "red",
});

export const FeaturedBlog = styled(Box)({
  position: "absolute",
  width: "1140px",
  minHeight: "380px",
  bottom: "0px",
  zIndex: 10,
  borderRadius: "16px",
  // border: "1px solid #E5EAF4",
  background: "#FFF",
  boxShadow: "0px 10px 35px 1px rgba(0, 0, 0, 0.3)",
  backgroundImage:
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8D3YfgiXGHX5o1Xcs_atmCdi-cxuvEGHwgg&usqp=CAU')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left center",
  backgroundSize: "50% 100%",
  cursor: "pointer",

  "@media screen and (max-width: 1199px)": {
    width: "95%",
  },
});

export const FeaturedContent = styled(Box)({
  // position: "absolute",
  width: "50% ",
  marginLeft: "50%",
  height: "100%",
  borderRadius: "0 16px 16px 0", //top-left top-right bottom-right bottom-left

  fontFamily: "Open Sans",
  fontStyle: "normal",
  lineHeight: "normal",

  "& div.featured": {
    color: "#1565D8",
    fontSize: "14px",
    fontWeight: "400",
    width: "102px",
    height: "32px",
    background: "#c0c9db",
    margin: "37px 0 0 32px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& h1": {
    color: "#183B56",
    fontSize: "36px",
    fontFamily: "Gotham",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    letterSpacing: "0.2px",
    marginLeft: "32px",
    width: "80%",
  },
  "& p": {
    color: "#5A7184",
    fontSize: "18px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "32px",
    margin: "20px 0 0 32px",
    width: "80%",
  },
});

export const Author = styled(Box)({
  // position: "absolute",
  margin: "40px 0 0 32px",
  height: "45px",
  fontFamily: "Open Sans",
  width: "80%",

  "& div.user": {
    position: "absolute",
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    background: "gray",
  },
  "& h2": {
    position: "absolute",
    color: "#183B56",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    margin: "0 0 0 45px",
  },

  "& h3": {
    position: "absolute",
    color: "#5A7184",
    fontSize: "14px",
    fontStyle: "italic",
    fontWeight: "400",
    lineHeight: "normal",
    margin: "20px 0 10px 45px",
  },
  "& h4": {
    // position: "absolute",
    color: "#5A7184",
    fontSize: "14px",
    fontStyle: "italic",
    fontWeight: "400",
    lineHeight: "normal",
    margin: "30px 0 0 150px",
  },
});

export const PulseCard = styled(Box)`
  position: absolute;
  width: 1140px;
  height: 380px;
  bottom: 0px;
  z-index: 10;
  border-radius: 16px;
  background: linear-gradient(-45deg, #f0f0f0 0%, #e8e8e8 50%, #f0f0f0 100%);
  animation: pulseAnimation 2s infinite;

  @keyframes pulseAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
