import {
  AurthorButton,
  AurthorPage,
  AurthorsStories,
  AurthorsStoriesWrap,
  CardImage,
  CategoryTagWrap,
  HeaderImage,
  HeadingComponent,
  LineUnder,
  WrapperPage,
} from "@/Components/Aurthor/Aurthor";
import Footer from "@/Components/Footer/Footer";
import useImageDominantColor from "@/Helpers/GetImageColor";
import { useRouter } from "next/router";
import Navbar from "@/Components/Navbar";

//icon
import MessageIcon from "@mui/icons-material/Message";

const TheAurthor = () => {
  const router = useRouter();
  console.log("The Aurthor::", router.query.index);

  const dominantColor = useImageDominantColor("/HomeImage.jpg");

  function pageNavigate(path: string) {
    router.push(path);
  }

  // Sample data for stories
  const aurthorsStoriesData = [
    {
      date: "Apr 5, 2022",
      title:
        "Blockchain is not only crappy technology but a bad vision for the future",
      overview:
        "Blockchain is not only crappy technology but a bad vision for the future. Its failure to achieve adoption to date is because systems built on trust, norms, and institutions inherently function better than the type of no-need-for-trusted-parties systems blockchain envisions. That’s permanent: no matter how much blockchain improves it is still headed in the wrong direction.",
      category: "Blockchain",
      timeRead: "11 min read",
      imageSrc:
        "https://miro.medium.com/v2/resize:fill:112:112/1*QATCo0QEJYiDzVAkvy_dDA.png",
    },
    {
      date: "Apr 5, 2022",
      title:
        "Blockchain is not only crappy technology but a bad vision for the future",
      overview:
        "Blockchain is not only crappy technology but a bad vision for the future. Its failure to achieve adoption to date is because systems built on trust, norms, and institutions inherently function better than the type of no-need-for-trusted-parties systems blockchain envisions. That’s permanent: no matter how much blockchain improves it is still headed in the wrong direction.",
      category: "Blockchain",
      timeRead: "11 min read",
      imageSrc:
        "https://miro.medium.com/v2/resize:fill:112:112/1*QATCo0QEJYiDzVAkvy_dDA.png",
    },
    {
      date: "Apr 5, 2022",
      title:
        "Blockchain is not only crappy technology but a bad vision for the future",
      overview:
        "Blockchain is not only crappy technology but a bad vision for the future. Its failure to achieve adoption to date is because systems built on trust, norms, and institutions inherently function better than the type of no-need-for-trusted-parties systems blockchain envisions. That’s permanent: no matter how much blockchain improves it is still headed in the wrong direction.",
      category: "Blockchain",
      timeRead: "11 min read",
      imageSrc:
        "https://miro.medium.com/v2/resize:fill:112:112/1*QATCo0QEJYiDzVAkvy_dDA.png",
    },
  ];

  return (
    <>
      <Navbar />
      <WrapperPage>
        <AurthorPage>
          <HeadingComponent dominantColor={dominantColor}>
            <HeaderImage src="/HomeImage.jpg" alt="" />
          </HeadingComponent>
          <h1>{router.query.index}</h1>
          <div className="followers">20K Followers</div>
          <LineUnder>
            <AurthorButton variant="text">Follow</AurthorButton>
            {/* <AurthorButton variant="text" sx={{ padding: "0 !important" }}>
              <MessageIcon />
            </AurthorButton> */}
          </LineUnder>

          {/* Aurthors stories */}
          {aurthorsStoriesData.map((post, index) => (
            <AurthorsStoriesWrap
              key={index}
              onClick={() => pageNavigate(`/Telastori/${post.category}`)}
            >
              <AurthorsStories>
                <div className="date">{post.date}</div>
                <div className="title">{post.title}</div>
                <div className="overview">{post.overview}</div>
                <CategoryTagWrap>
                  <div className="categoryTag">{post.category}</div>
                  <div className="TimeRead">{post.timeRead}</div>
                </CategoryTagWrap>
              </AurthorsStories>
              <CardImage src={post.imageSrc} alt="" />
            </AurthorsStoriesWrap>
          ))}
        </AurthorPage>
      </WrapperPage>
      <Footer />
    </>
  );
};

export default TheAurthor;
