import { useRouter } from "next/router";
import {
  Author,
  FeaturedBlog,
  FeaturedContent,
  PulseCard,
  TodayStoriContainer,
} from "./Tstyles";

import { useCallback } from "react";

export const useNavigateTo = () => {
  const router = useRouter();

  const navigateTo = useCallback(
    (path: any) => {
      router.push(path);
    },
    [router]
  );

  return navigateTo;
};

const TodayStori = () => {
  const navigateTo = useNavigateTo();
  return (
    <>
      <TodayStoriContainer>
        <FeaturedBlog onClick={() => navigateTo("Telastori/todays' story")}>
          <FeaturedContent>
            <div className="featured">FEATURED</div>
            <h1>Cheap Airline Tickets Great Ways To Save</h1>
            <p>
              In this digital generation where information can be easily
              obtained within seconds, business cards ...
            </p>
            <Author>
              <div className="user"></div>
              <h2>Viola</h2>
              <h3>Verified writer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;02 May 2022</h3>
              {/* <h4>02 May 2022</h4> */}
            </Author>
          </FeaturedContent>
        </FeaturedBlog>
        {/* <PulseCard /> */}
      </TodayStoriContainer>
    </>
  );
};

export default TodayStori;
