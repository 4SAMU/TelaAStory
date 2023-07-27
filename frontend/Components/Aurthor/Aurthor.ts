import { BackgroundColorProps } from "@/Helpers/Types";
import { styled, Box, Button } from "@mui/material";

export const WrapperPage = styled(Box)({
  position: "relative",
  width: "100%",
  height: "auto",
  // display: "flex",
  margin: "100px 0",
  minHeight: "calc(100vh - 550px)",
});
export const AurthorPage = styled(Box)({
  //   marginTop: "100px",
  width: "50%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  margin: "auto",

  "& h1": {
    marginTop: "20px",
    fontSize: "42px",
    fontWeight: "600",
    fontFamily: "Gotham",
    lineHeight: "54px",
    color: "#000000",
  },
  "& .followers": {
    fontSize: "18px",
    fontWeight: "300",
    fontFamily: "Gotham",
    lineHeight: "normal",
    color: "#000000",
  },
  "@media screen and (max-width: 1535px)": {
    width: "80%",
  },
  "@media screen and (max-width: 899px)": {
    width: "95%",
    "& h1": {
      fontSize: "26px",
    },
    "& .followers": {
      fontSize: "16px",
    },
  },
});

export const HeadingComponent = styled(Box)<BackgroundColorProps>(
  ({ dominantColor }) => ({
    height: "150px",
    width: "100%",
    background: dominantColor
      ? `rgba(${dominantColor?.[0]}, ${dominantColor?.[1]}, ${dominantColor?.[2]}, 0.8)`
      : "rgb(242, 242, 242)",
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s, 0.3s ease-in-out",
  })
);

export const HeaderImage = styled("img")({
  width: "150px",
  height: "100%",
  borderRadius: "50%",
});

export const LineUnder = styled(Box)({
  width: "100%",
  height: "auto",
  borderBottom: "1px solid rgb(242, 242, 242)",
  display: "flex",
  flexDirection: "row",
  gap: "15px",
});

export const AurthorButton = styled(Button)({
  background: "rgb(21, 109, 18)",
  color: "#FFF",
  textTransform: "capitalize",
  fontSize: "18px",
  fontWeight: "400",
  fontFamily: "Gotham",
  lineHeight: "normal",
  borderRadius: "10px",
  margin: "20px 0",

  ":before": {
    content: '""',
    position: "absolute",
    left: "0",
    bottom: "0",
    background: "rgb(21, 109, 18)",
    transition: "transform 0.3s ease-in-out",
    width: "100%",
    height: "1px",
    transform: "scale(0)",
    transformOrigin: "bottom right",
  },
  "&:hover:before": {
    transform: "scale(1)",
    transformOrigin: "bottom left",
  },
  "&:hover": {
    color: "rgb(21, 109, 18)",
  },
});

export const AurthorsStoriesWrap = styled(Box)({
  display: "flex",
  flexDirection: "row",
  width: "750px",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid rgb(242, 242, 242)",

  // "@media screen and (max-width: 1535px)": {
  //   width: "85%",
  // },
  "@media screen and (max-width: 1199px)": {
    gap: "15px",
  },
  "@media screen and (max-width: 899px)": {
    width: "100%",
    justifyContent: "center",
  },
});

export const AurthorsStories = styled(Box)({
  width: "520px",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  marginTop: "50px",
  cursor: "pointer",
  " .date": {
    color: "rgb(107, 107, 107)",
    lineHeight: "20px",
    fontWeight: 400,
  },
  "& .title": {
    fontSize: "20px",
    fontFamily: "Gotham",
    fontWeight: "700",
    lineHeight: "24px",
    color: "#000000",
    display: "-webkit-box",
    // WebkitLineClamp: "2",
    // WebkitBoxOrient: "vertical",
    overflow: "hidden",
    margin: "8px 0 0 0",
  },
  "& .overview": {
    fontSize: "16px",
    fontFamily: "sans-serif",
    fontWeight: "400",
    lineHeight: "24px",
    letterSpacing: "0.3px",
    margin: "8px 0 0 0",
    color: "#000000",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  "@media screen and (max-width: 1199px)": {
    marginTop: "25px",
    "& .title": {
      fontSize: "18px",
      lineHeight: "23px",
    },
  },
  "@media screen and (max-width: 899px)": {
    "& .title": {
      fontSize: "16px",
      lineHeight: "20px",
      margin: "5px 0 0 0",
    },
    "& .overview": {
      fontSize: "15px",
      lineHeight: "normal",
      margin: "5px 0 0 0",
    },
  },
});

export const CategoryTagWrap = styled(Box)({
  //   background: "red",
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  gap: "20px",
  margin: "15px 0",

  "& .categoryTag": {
    borderRadius: "20px",
    padding: "5px 15px",
    color: "#000000",
    background: "rgb(242, 242, 242)",
    width: "fit-content",
    fontWeight: "400",
    fontSize: "14px",
  },
  "& .TimeRead": {
    color: "rgb(107, 107, 107)",
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "19.5px",
  },
});

export const CardImage = styled("img")({
  height: "120px",
  width: "120px",
  marginTop: "20px",
  "@media screen and (max-width: 899px)": {
    height: "100px",
    width: "100px",
    marginTop: "10px",
  },
});

