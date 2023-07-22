import { ImageProps } from "@/Helpers/Types";
import { Box, Button, styled } from "@mui/material";

export const BlogContainer = styled(Box)({
  height: "auto",
  width: "100vw",
  background: "#FFF",
  display: "flex",
  flexDirection: "row",
  minHeight: "calc(100vh - 550px)",
});

export const BlogContent = styled(Box)({
  height: "auto",
  minHeight: "80vh",
  width: "80%",
  marginTop: "100px",
  display: "flex",
  flexDirection: "row",
  // background: "red",
  "@media screen and (max-width: 1535px)": {
    width: "75%",
  },
  "@media screen and (max-width: 599px)": {
    width: "100%",
  },
});

export const LineBetween = styled(Box)({
  minHeight: "40px",
  width: "100%",
  background: "none",
  marginTop: "20px",
  borderTop: "1px solid rgb(242, 242, 242)",
  borderBottom: "1px solid rgb(242, 242, 242)",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: "30px",
  "& .MinsRead": {
    color: "rgb(107, 107, 107)",
    fontFamily: "Roboto",
    fontWeight: 200,
  },

  "& .TimeReadContainer": {
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    marginTop: "5px",
  },
  "@media screen and (max-width: 599px)": {
    flexDirection: "column",
    alignItems: "initial",
    gap: "5px",
  },
});

export const Content = styled(Box)({
  minHeight: "80vh",
  width: "70%",
  //   background: "yellow",
  margin: "auto auto 50px auto",

  "& h1": {
    fontSize: "36px",
    fontFamily: "Gotham",
    paddingTop: "25px",
  },

  "& p": {
    fontSize: "18px",
    fontFamily: "Roboto",
    marginTop: "20px",
    lineHeight: "30px",
    fontWeight: 300,
  },
  "@media screen and (max-width: 1535px)": {
    width: "80%",

    "& h1": {
      fontSize: "33px",
    },

    "& p": {
      fontSize: "17px",
    },
  },
  "@media screen and (max-width: 599px)": {
    // marginLeft: "3%",
    width: "calc(90% - 50px)",
    "& h1": {
      fontSize: "24px",
      overflowWrap: "break-word",
    },
  },
});
export const ShareContainer = styled(Box)({
  position: "relative",
  width: "45px",
  right: "10%",
  top: "30px",
  display: "flex",
  flexDirection: "column",
  gap: 5,

  "& .icon": {
    fontSize: "30px !important",
    color: "#000000",
    width: "100%",
    height: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "5px 0px 20px rgba(0, 0, 0, 0.3)",
    transition: "all 0.25s ease-in-out",
    borderRadius: "3px",
  },
  "& :hover": {
    background: "#000000",
  },
  "& :hover.icon": {
    color: "#FFFFFF",
  },
  "@media screen and (max-width: 1535px)": {
    right: "2%",
  },
  "@media screen and (max-width: 599px)": {
    right: "3%",
  },
});

export const AurthorAndRCards_container = styled(Box)({
  position: "absolute",
  right: "0",
  width: "20%",
  marginTop: "120px",
  "@media screen and (max-width: 1535px)": {
    width: "24%",
  },
  "@media screen and (max-width: 599px)": {
    // background: "red",
  },
});

export const RelatedArticles = styled(Box)({
  height: "auto",
  minHeight: "20vh !important",
  width: "100%",

  "& h1": {
    fontSize: "26px",
    fontFamily: "Gotham",
    paddingTop: "25px",
    marginLeft: "15px",
  },
});

import { useState, useEffect } from "react";
export const RelatedCard = styled(Box)<ImageProps>(({ imageUrl }) => {
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const [imageLoadingError, setImageLoadingError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // Add the crossOrigin attribute
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx: any = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      const imageData = ctx.getImageData(0, 0, img.width, img.height).data;
      let totalBrightness = 0;

      for (let i = 0; i < imageData.length; i += 4) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];

        // Calculate brightness using the luminance formula
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        totalBrightness += brightness;
      }

      const averageBrightness = totalBrightness / (img.width * img.height);
      setIsDarkBackground(averageBrightness < 128);
    };
    img.onerror = () => {
      // Error loading the image
      setImageLoadingError(true);
    };
  }, [imageUrl]);

  return {
    position: "relative",
    height: "220px",
    width: "96%",
    marginLeft: "2%",
    marginTop: "15px",
    marginBottom: "15px",
    boxShadow: "5px 0px 20px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    background: imageUrl ? `url(${imageUrl})` : "rgb(242, 242, 242)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    borderRadius: "4px",
    "& .OvarlayColor": {
      position: "absolute",
      bottom: "0",
      minHeight: "30%",
      height: "auto",
      width: "100%",
      background: isDarkBackground
        ? "rgba(255, 255, 255, 0.6)"
        : "rgba(0, 0, 0, 0.4)",
      backdropFilter: "blur(3px)",
    },
    "& .cardContent": {
      padding: "10px",
    },
    "& .title": {
      fontSize: "14px",
      fontFamily: "Gotham",
      fontWeight: "600",
      lineHeight: "18px",
      color: !isDarkBackground ? "#FFFFFF" : "#000000",
      display: "-webkit-box",
      "-webkit-line-clamp": "2",
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
    },
    "& .overview": {
      fontSize: "12px",
      fontFamily: "sans-serif",
      fontWeight: "400",
      lineHeight: "14px",
      letterSpacing: "0.3px",
      margin: "8px 0 0 0",
      color: !isDarkBackground ? "#FFFFFF" : "#000000",
      display: "-webkit-box",
      "-webkit-line-clamp": "2",
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
    },
  };
});

export const Aurthor = styled(Box)({
  position: "relative",
  width: "96%",
  marginLeft: "2%",
  marginTop: "10px",
  marginBottom: "50px",
  // boxShadow: "5px 0px 20px rgba(0, 0, 0, 0.3)",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease-in-out",

  "& h1": {
    fontSize: "20px",
    marginTop: "5%",
  },
});

export const BlogImage = styled("img")({
  marginTop: "20px",
  height: "auto",
  width: "auto",
  maxHeight: "600px",
  maxWidth: "100%",
});

export const AurthorCardImg = styled(Box)<ImageProps>(({ imageUrl }) => ({
  position: "relative",
  fontFamily: "Open Sans",
  lineHeight: "normal",
  width: "100%",
  marginTop: "10px",
  display: "flex",
  gap: "10px",
  flexDirection: "column",

  "& .Avatar": {
    height: "80px",
    width: "80px",
    borderRadius: "50%",
    background: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  "& .follow": {
    color: "blue",
    cursor: "pointer",
    paddingLeft: "5px",
  },
  "& :hover.follow": {
    color: "red",
  },

  "@media screen and (max-width: 599px)": {
    alignItems: "center",
    flexDirection: "row",
  },
}));

export const AuthorName = styled(Button)({
  color: "#000",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "600",
  textTransform: "capitalize",
  padding: "5px !important",
  "&:hover": {
    background: "none",
  },

  "&:before": {
    content: '""',
    position: "absolute",
    bottom: "4px",
    width: "100%",
    height: "1px",
    left: "0",
    background: "#000000",
    transformOrigin: "bottom right",
    transition: "transform 0.3s ease-in-out",
    transform: "scaleX(0)",
  },
  "&:hover:before": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  },
});
