import Cookies from "./CookiesModal/Cookies";
import Footer from "./Footer/Footer";
import RecentStories from "./RecentStories";
import Start from "./Start";
import TodayStori from "./TodayStori";

const TellAstory = () => {
  return (
    <>
      <Start />
      <TodayStori />
      <RecentStories />
      <Footer />
      <Cookies/>
    </>
  );
};

export default TellAstory;
