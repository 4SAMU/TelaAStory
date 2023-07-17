import { Box, styled } from "@mui/material";

export const BlogContainer = styled(Box)({
  height: "auto",
  minHeight: "80vh",
  width: "100vw",
  background: "#FFF",
  display: "flex",
  flexDirection: "row",
});

export const BlogContent = styled(Box)({
  height: "auto",
  minHeight: "80vh",
  width: "80%",
  //   background: "red",
  marginTop: "100px",
  display: "flex",
  flexDirection: "row",
});

export const Content = styled(Box)({
  minHeight: "80vh",
  width: "70%",
  //   background: "yellow",
  margin: "auto",

  "& h1": {
    fontSize: "36px",
    fontFamily: "Gotham",
    paddingTop: "25px",
  },

  "& p": {
    fontSize: "18px",
    fontFamily: "Gotham",
    marginTop: "20px",
    lineHeight: "30px",

    // letterSpacing: "0.01px",
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
});

export const AurthorAndRCards_container = styled(Box)({
  position: "absolute",
  right: "0",
  width: "20%",
  marginTop: "120px",
});

export const RelatedArticles = styled(Box)({
  height: "auto",
  minHeight: "20vh !important",
  width: "100%",
  //   background: "green",
  //   display: "flex",
  //   justifyContent: "center",

  "& h1": {
    fontSize: "26px",
    fontFamily: "Gotham",
    paddingTop: "25px",
    marginLeft: "15px",
  },
});

export const RelatedCard = styled(Box)({
  height: "200px",
  width: "96%",
  marginLeft: "2%",
  background: "white",
  marginTop: "10px",
  marginBottom: "10px",
  boxShadow: "5px 0px 20px rgba(0, 0, 0, 0.3)",
  cursor: "pointer",
});

export const Aurthor = styled(Box)({
  position: "relative",
  height: "200px",
  width: "96%",
  marginLeft: "2%",
  //   background: "green",
  marginTop: "10px",
  marginBottom: "50px",
  boxShadow: "5px 0px 20px rgba(0, 0, 0, 0.3)",
  display: "flex",
  transition: "all 0.3s ease-in-out",

  "& h1": {
    fontSize: "20px",
    marginLeft: "2%",
    marginTop: "2%",
  },
  "& .follow": {
    position: "absolute",
    bottom: "10px",
    marginLeft: "2%",
    color: "blue",
    cursor: "pointer",
  },
  "& :hover.follow": {
    color: "red",
  },
});
