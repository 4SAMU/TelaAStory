import {
  AurthorButton,
  AurthorPage,
  AurthorsStories,
  AurthorsStoriesWrap,
  CardImage,
  CategoryTagWrap,
  HeadingComponent,
  LineUnder,
  WrapperPage,
} from "@/Components/Aurthor/Aurthor";
import Footer from "@/Components/Footer/Footer";
import useImageDominantColor from "@/Helpers/GetImageColor";
import { useRouter } from "next/router";
import Navbar from "@/Components/Navbar";

const TheAurthor = () => {
  const router = useRouter();
  console.log("The Aurthor::", router.query.index);

  const imageUrl =
    "https://i.pinimg.com/236x/cc/a5/7b/cca57b5a109ae40416e40c9e7451676d.jpg";

  const dominantColor = useImageDominantColor(imageUrl);

  console.log("Dominant color:", dominantColor);
  return (
    <>
      <Navbar />
      <WrapperPage>
        <AurthorPage>
          <HeadingComponent dominantColor={dominantColor}></HeadingComponent>
          <h1>{router.query.index}</h1>
          <LineUnder>
            <AurthorButton variant="text">Home</AurthorButton>
            <AurthorButton variant="text">About</AurthorButton>
          </LineUnder>

          {/* Aurthors stories */}
          <AurthorsStoriesWrap>
            <AurthorsStories>
              <div className="date">Apr 5, 2022</div>
              <div className="title">
                Blockchain is not only crappy technology but a bad vision for
                the future
              </div>
              <div className="overview">
                Blockchain is not only crappy technology but a bad vision for
                the future. Its failure to achieve adoption to date is because
                systems built on trust, norms, and institutions inherently
                function better than the type of no-need-for-trusted-parties
                systems blockchain envisions. That’s permanent: no matter how
                much blockchain improves it is still headed in the wrong
                direction.
              </div>
              <CategoryTagWrap>
                <div className="categoryTag">Blockchain</div>
                <div className="TimeRead">11 min read</div>
              </CategoryTagWrap>
            </AurthorsStories>
            <CardImage
              src="https://miro.medium.com/v2/resize:fill:112:112/1*QATCo0QEJYiDzVAkvy_dDA.png"
              alt=""
            />
          </AurthorsStoriesWrap>
          <AurthorsStoriesWrap>
            <AurthorsStories>
              <div className="date">Apr 5, 2022</div>
              <div className="title">
                Blockchain is not only crappy technology but a bad vision for
                the future
              </div>
              <div className="overview">
                Blockchain is not only crappy technology but a bad vision for
                the future. Its failure to achieve adoption to date is because
                systems built on trust, norms, and institutions inherently
                function better than the type of no-need-for-trusted-parties
                systems blockchain envisions. That’s permanent: no matter how
                much blockchain improves it is still headed in the wrong
                direction.
              </div>
              <CategoryTagWrap>
                <div className="categoryTag">Blockchain</div>
                <div className="TimeRead">11 min read</div>
              </CategoryTagWrap>
            </AurthorsStories>
            <CardImage
              src="https://miro.medium.com/v2/resize:fill:112:112/1*QATCo0QEJYiDzVAkvy_dDA.png"
              alt=""
            />
          </AurthorsStoriesWrap>
          <AurthorsStoriesWrap>
            <AurthorsStories>
              <div className="date">Apr 5, 2022</div>
              <div className="title">
                Blockchain is not only crappy technology but a bad vision for
                the future
              </div>
              <div className="overview">
                Blockchain is not only crappy technology but a bad vision for
                the future. Its failure to achieve adoption to date is because
                systems built on trust, norms, and institutions inherently
                function better than the type of no-need-for-trusted-parties
                systems blockchain envisions. That’s permanent: no matter how
                much blockchain improves it is still headed in the wrong
                direction.
              </div>
              <CategoryTagWrap>
                <div className="categoryTag">Blockchain</div>
                <div className="TimeRead">11 min read</div>
              </CategoryTagWrap>
            </AurthorsStories>
            <CardImage
              src="https://miro.medium.com/v2/resize:fill:112:112/1*QATCo0QEJYiDzVAkvy_dDA.png"
              alt=""
            />
          </AurthorsStoriesWrap>
        </AurthorPage>
      </WrapperPage>
      <Footer />
    </>
  );
};

export default TheAurthor;
