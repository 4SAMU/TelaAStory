import { ImageProps } from "@/Helpers/Types";
import { styled, Box, Button } from "@mui/material";

export const WrapperPage = styled(Box)({
  position: "relative",
  width: "100%",
  height: "auto",
  display: "flex",
  margin: "100px 0",
  // background: "green",
});
export const AurthorPage = styled(Box)({
  //   marginTop: "100px",
  width: "50%",
  height: "auto",
  // background: "red",
  display: "flex",
  flexDirection: "column",
  margin: "auto",

  "& h1": {
    marginTop: "50px",
    fontSize: "42px",
    fontWeight: "600",
    fontFamily: "Gotham",
    lineHeight: "54px",
    color: "#000000",
  },
});

interface BackgroundColorProps {
  dominantColor: any;
}
export const HeadingComponent = styled(Box)<BackgroundColorProps>(
  ({ dominantColor }) => ({
    height: "150px",
    width: "100%",
    background: `rgb(${dominantColor?.[0]}, ${dominantColor?.[1]}, ${dominantColor?.[2]})`,
  })
);
export const LineUnder = styled(Box)({
  width: "100%",
  height: "auto",
  borderBottom: "1px solid rgb(242, 242, 242)",
  display: "flex",
  flexDirection: "row",
  gap: "50px",
  marginTop: "50px",
});

export const AurthorButton = styled(Button)({
  background: "none",
  color: "#000000",
  paddingLeft: "0 !important",

  ":before": {
    content: '""',
    position: "absolute",
    left: "0",
    bottom: "0",
    background: "#000000",
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
});

export const AurthorsStoriesWrap = styled(Box)({
  display: "flex",
  flexDirection: "row",
  width: "750px",
  justifyContent: "space-between",
  alignItems: "center",
});

export const AurthorsStories = styled(Box)({
  width: "520px",
  height: "auto",
  borderBottom: "1px solid rgb(242, 242, 242)",
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
    "-webkit-line-clamp": "2",
    "-webkit-box-orient": "vertical",
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
    "-webkit-line-clamp": "2",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
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
});
