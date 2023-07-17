import {
  Aurthor,
  AurthorAndRCards_container,
  BlogContainer,
  BlogContent,
  Content,
  RelatedArticles,
  RelatedCard,
  ShareContainer,
} from "@/Components/Blogg/Styles";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar";

//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Blog = () => {
  return (
    <>
      <Navbar />
      <BlogContainer>
        <BlogContent>
          <Content>
            <h1>
              How I Eliminated Procrastination From My Life (Using Neuroscience)
            </h1>
            <p>
              Procrastination is a big problem for many of us. We say we’ll work
              on our goals, hit the gym, or learn some new skills, only to end
              up watching Netflix instead. I used to be a chronic procrastinator
              too. I’d set big goals and make ambitious plans, but not much was
              getting done on a day-to-day basis. Most people think that
              procrastination is due to laziness, no motivation, or lack of
              self-discipline. But as it turns out, procrastination finds its
              roots in neurobiology. It’s the result of a constant battle in our
              brain between the limbic system and the prefrontal cortex. The
              prefrontal cortex is the logical and analytical part of the brain
              responsible for future planning, self-control, and
              decision-making. As Dr. Joseph Ferrari, a leading expert in the
              field of procrastination research, wrote in Still Procrastinating:
              The easier a task or project is, the less the limbic system will
              protest against it. That’s why task-chunking is highly effective.
              Divide a big, overwhelming task or project into multiple
              bite-sized tasks so that it becomes easier to tackle. For example,
              whenever I’m writing a new article, I chunk it into multiple
              sub-tasks: Create blog outline Write part 1 initial draft Write
              part 2 initial draft Add scientific studies Write headline Format
              article Proofread & edit article Procrastination is a big problem
              for many of us. We say we’ll work on our goals, hit the gym, or
              learn some new skills, only to end up watching Netflix instead. I
              used to be a chronic procrastinator too. I’d set big goals and
              make ambitious plans, but not much was getting done on a
              day-to-day basis. Most people think that procrastination is due to
              laziness, no motivation, or lack of self-discipline. But as it
              turns out, procrastination finds its roots in neurobiology. It’s
              the result of a constant battle in our brain between the limbic
              system and the prefrontal cortex. The prefrontal cortex is the
              logical and analytical part of the brain responsible for future
              planning, self-control, and decision-making. As Dr. Joseph
              Ferrari, a leading expert in the field of procrastination
              research, wrote in Still Procrastinating: The easier a task or
              project is, the less the limbic system will protest against it.
              That’s why task-chunking is highly effective. Divide a big,
              overwhelming task or project into multiple bite-sized tasks so
              that it becomes easier to tackle. For example, whenever I’m
              writing a new article, I chunk it into multiple sub-tasks: Create
              blog outline Write part 1 initial draft Write part 2 initial draft
              Add scientific studies Write headline Format article Proofread &
              edit article Procrastination is a big problem for many of us. We
              say we’ll work on our goals, hit the gym, or learn some new
              skills, only to end up watching Netflix instead. I used to be a
              chronic procrastinator too. I’d set big goals and make ambitious
              plans, but not much was getting done on a day-to-day basis. Most
              people think that procrastination is due to laziness, no
              motivation, or lack of self-discipline. But as it turns out,
              procrastination finds its roots in neurobiology. It’s the result
              of a constant battle in our brain between the limbic system and
              the prefrontal cortex. The prefrontal cortex is the logical and
              analytical part of the brain responsible for future planning,
              self-control, and decision-making. As Dr. Joseph Ferrari, a
              leading expert in the field of procrastination research, wrote in
              Still Procrastinating: The easier a task or project is, the less
              the limbic system will protest against it. That’s why
              task-chunking is highly effective. Divide a big, overwhelming task
              or project into multiple bite-sized tasks so that it becomes
              easier to tackle. For example, whenever I’m writing a new article,
              I chunk it into multiple sub-tasks: Create blog outline Write part
              1 initial draft Write part 2 initial draft Add scientific studies
              Write headline Format article Proofread & edit article
              Procrastination is a big problem for many of us. We say we’ll work
              on our goals, hit the gym, or learn some new skills, only to end
              up watching Netflix instead. I used to be a chronic procrastinator
              too. I’d set big goals and make ambitious plans, but not much was
              getting done on a day-to-day basis. Most people think that
              procrastination is due to laziness, no motivation, or lack of
              self-discipline. But as it turns out, procrastination finds its
              roots in neurobiology. It’s the result of a constant battle in our
              brain between the limbic system and the prefrontal cortex. The
              prefrontal cortex is the logical and analytical part of the brain
              responsible for future planning, self-control, and
              decision-making. As Dr. Joseph Ferrari, a leading expert in the
              field of procrastination research, wrote in Still Procrastinating:
              The easier a task or project is, the less the limbic system will
              protest against it. That’s why task-chunking is highly effective.
              Divide a big, overwhelming task or project into multiple
              bite-sized tasks so that it becomes easier to tackle. For example,
              whenever I’m writing a new article, I chunk it into multiple
              sub-tasks: Create blog outline Write part 1 initial draft Write
              part 2 initial draft Add scientific studies Write headline Format
              article Proofread & edit article.
            </p>
          </Content>
          <ShareContainer>
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
          <Aurthor>
            <h1>Aurthored By:</h1>
            <div className="follow">Follow</div>
          </Aurthor>
          <RelatedArticles>
            <h1>Related Articles</h1>
            <RelatedCard></RelatedCard>
            <RelatedCard></RelatedCard>
            <RelatedCard></RelatedCard>
          </RelatedArticles>
        </AurthorAndRCards_container>
      </BlogContainer>
      <Footer />
    </>
  );
};

export default Blog;
