import {
  Aurthor,
  AurthorAndRCards_container,
  BlogContainer,
  BlogContent,
  Content,
  RelatedArticles,
  RelatedCard,
  ShareContainer,
  BlogImage,
  AurthorCardImg,
  AuthorName,
  LineBetween,
} from "@/Components/Blogg/Styles";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar";

//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useRouter } from "next/router";
import { LineUnder } from "@/Components/Aurthor/Aurthor";
import { GetScreenBreakPoints } from "@/Helpers/MediaQueries";
import AurthorCard from "@/Components/Blogg/AurthorCard";
import RelatedCardComponent from "@/Components/Blogg/RelatedArticles";

const Blog = () => {
  const router = useRouter();
  const { isPhone } = GetScreenBreakPoints();
  return (
    <>
      <Navbar />
      <BlogContainer>
        <BlogContent>
          <Content>
            <h1>
              How I Eliminated Procrastination From My Life (Using Neuroscience)
            </h1>
            <LineBetween>
              {isPhone && <AurthorCard />}

              <div className="TimeReadContainer">
                <div className="MinsRead">3 Mins Read</div>
                <div className="MinsRead">.</div>
                <div className="MinsRead">Apr 5, 2022</div>
              </div>
            </LineBetween>
            <BlogImage
              src="https://miro.medium.com/v2/resize:fit:720/0*xLIQQ3iLqGqz8LFz"
              alt="img not found"
            />

            <p>
              Procrastination is a big problem for many of us. We say we&#39;ll
              work on our goals, hit the gym, or learn some new skills, only to
              end up watching Netflix instead. I used to be a chronic
              procrastinator too. I&#39;d set big goals and make ambitious
              plans, but not much was getting done on a day-to-day basis. Most
              people think that procrastination is due to laziness, no
              motivation, or lack of self-discipline. But as it turns out,
              procrastination finds its roots in neurobiology. It&#39;s the
              result of a constant battle in our brain between the limbic system
              and the prefrontal cortex. The prefrontal cortex is the logical
              and analytical part of the brain responsible for future planning,
              self-control, and decision-making. As Dr. Joseph Ferrari, a
              leading expert in the field of procrastination research, wrote in
              Still Procrastinating: The easier a task or project is, the less
              the limbic system will protest against it. That&#39;s why
              task-chunking is highly effective. Divide a big, overwhelming task
              or project into multiple bite-sized tasks so that it becomes
              easier to tackle. For example, whenever I&#39;m writing a new
              article, I chunk it into multiple sub-tasks: Create blog outline
              Write part 1 initial draft Write part 2 initial draft Add
              scientific studies Write headline Format article Proofread & edit
              article Procrastination is a big problem for many of us. We say
              we&#39;ll work on our goals, hit the gym, or learn some new
              skills, only to end up watching Netflix instead. I used to be a
              chronic procrastinator too. I&#39;d set big goals and make
              ambitious plans, but not much was getting done on a day-to-day
              basis. Most people think that procrastination is due to laziness,
              no motivation, or lack of self-discipline. But as it turns out,
              procrastination finds its roots in neurobiology. It&#39;s the
              result of a constant battle in our brain between the limbic system
              and the prefrontal cortex. The prefrontal cortex is the logical
              and analytical part of the brain responsible for future planning,
              self-control, and decision-making. As Dr. Joseph Ferrari, a
              leading expert in the field of procrastination research, wrote in
              Still Procrastinating: The easier a task or project is, the less
              the limbic system will protest against it. That&#39;s why
              task-chunking is highly effective. Divide a big, overwhelming task
              or project into multiple bite-sized tasks so that it becomes
              easier to tackle. For example, whenever I&#39;m writing a new
              article, I chunk it into multiple sub-tasks: Create blog outline
              Write part 1 initial draft Write part 2 initial draft Add
              scientific studies Write headline Format article Proofread & edit
              article Procrastination is a big problem for many of us. We say
              we&#39;ll work on our goals, hit the gym, or learn some new
              skills, only to end up watching Netflix instead. I used to be a
              chronic procrastinator too. I&#39;d set big goals and make
              ambitious plans, but not much was getting done on a day-to-day
              basis. Most people think that procrastination is due to laziness,
              no motivation, or lack of self-discipline. But as it turns out,
              procrastination finds its roots in neurobiology. It&#39;s the
              result of a constant battle in our brain between the limbic system
              and the prefrontal cortex. The prefrontal cortex is the logical
              and analytical part of the brain responsible for future planning,
              self-control, and decision-making. As Dr. Joseph Ferrari, a
              leading expert in the field of procrastination research, wrote in
              Still Procrastinating: The easier a task or project is, the less
              the limbic system will protest against it. That&#39;s why
              task-chunking is highly effective. Divide a big, overwhelming task
              or project into multiple bite-sized tasks so that it becomes
              easier to tackle. For example, whenever I&#39;m writing a new
              article, I chunk it into multiple sub-tasks: Create blog outline
              Write part 1 initial draft Write part 2 initial draft Add
              scientific studies Write headline Format article Proofread & edit
              article Procrastination is a big problem for many of us. We say
              we&#39;ll work on our goals, hit the gym, or learn some new
              skills, only to end up watching Netflix instead. I used to be a
              chronic procrastinator too. I&#39;d set big goals and make
              ambitious plans, but not much was getting done on a day-to-day
              basis. Most people think that procrastination is due to laziness,
              no motivation, or lack of self-discipline. But as it turns out,
              procrastination finds its roots in neurobiology. It&#39;s the
              result of a constant battle in our brain between the limbic system
              and the prefrontal cortex. The prefrontal cortex is the logical
              and analytical part of the brain responsible for future planning,
              self-control, and decision-making. As Dr. Joseph Ferrari, a
              leading expert in the field of procrastination research, wrote in
              Still Procrastinating: The easier a task or project is, the less
              the limbic system will protest against it. That&#39;s why
              task-chunking is highly effective. Divide a big, overwhelming task
              or project into multiple bite-sized tasks so that it becomes
              easier to tackle. For example, whenever I&#39;m writing a new
              article, I chunk it into multiple sub-tasks: Create blog outline
              Write part 1 initial draft Write part 2 initial draft Add
              scientific studies Write headline Format article Proofread & edit
              article.
            </p>
            <LineUnder>{isPhone && <RelatedCardComponent />}</LineUnder>
          </Content>
          <ShareContainer title="share">
            <div className="icon">
              <FacebookIcon />
            </div>
            <div className="icon">
              <WhatsAppIcon />
            </div>
            <div className="icon">
              <InstagramIcon />
            </div>
            <div className="icon">
              <TwitterIcon />
            </div>
          </ShareContainer>
        </BlogContent>
        <AurthorAndRCards_container>
          {!isPhone && (
            <Aurthor>
              <h1>Aurthor</h1>
              <AurthorCard />
            </Aurthor>
          )}
          {!isPhone && <RelatedCardComponent />}
        </AurthorAndRCards_container>
      </BlogContainer>
      <Footer />
    </>
  );
};

export default Blog;
