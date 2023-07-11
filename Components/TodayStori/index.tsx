import {
  Author,
  FeaturedBlog,
  FeaturedContent,
  PulseCard,
  TodayStoriContainer,
} from "./Tstyles";

const TodayStori = () => {
  return (
    <TodayStoriContainer>
      <FeaturedBlog>
        <FeaturedContent>
          <div className="featured">FEATURED</div>
          <h1>Cheap Airline Tickets Great Ways To Save</h1>
          <p>
            In this digital generation where information can be easily obtained
            within seconds, business cards ...
          </p>
          <Author>
            <div className="user"></div>
            <h2>Viola</h2>
            <h3>Verified writer</h3>
            <h4>02 May 2022</h4>
          </Author>
        </FeaturedContent>
      </FeaturedBlog>
      {/* <PulseCard /> */}
    </TodayStoriContainer>
  );
};

export default TodayStori;
