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
            <LineBetween>
              <div className="MinsRead">3 Mins Read</div>
              <div className="MinsRead">.</div>
              <div className="MinsRead">Apr 5, 2022</div>
            </LineBetween>
            <BlogImage
              src="https://miro.medium.com/v2/resize:fit:720/0*xLIQQ3iLqGqz8LFz"
              alt="no found"
            />

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
            <h1>Aurthor</h1>
            <AurthorCardImg imageUrl="/HomeImage.jpg">
              <div className="Avatar" />
              <div>
                <AuthorName variant="text">James Mburu</AuthorName>
                <div className="follow">Follow</div>
              </div>
            </AurthorCardImg>
          </Aurthor>
          <RelatedArticles>
            <h1>Related Articles</h1>
            <RelatedCard imageUrl="https://cdn.sanity.io/images/taki18de/production/a9ad4cdd0220f5c42764ba74a4598caef008328a-850x474.webp">
              <div className="OvarlayColor">
                <div className="cardContent">
                  <div className="title">
                    Swap a €30k Budget for Just 5 Days Worth of Dev Time:
                    Relaunching Fresco Cooks.
                  </div>
                  <div className="overview">
                    Fresco Cooks is a B2B SaaS brand that powers seamless
                    cooking experiences for the world's leading appliance brands
                    and home cooks. They originally came to Mawla in 2022
                    because they needed a new marketing site as part of their
                    rebrand to reflect the company’s growth.s
                  </div>
                </div>
              </div>
            </RelatedCard>
            <RelatedCard imageUrl="https://miro.medium.com/v2/resize:fit:720/0*dXTEWRECBHcbLgTZ">
              <div className="OvarlayColor">
                <div className="cardContent">
                  <div className="title">
                    23 passive income DApps that make money in your sleep [2023]
                  </div>
                  <div className="overview">
                    Passive income is income that is generated with minimal
                    effort or time. This type of income is typically generated
                    through investments or other forms of passive
                    income-generating activities such as renting out the
                    property, creating digital products (e.g. online courses),
                    and so on. Passive income is important to have multiple
                    streams…
                  </div>
                </div>
              </div>
            </RelatedCard>
            <RelatedCard imageUrl="https://miro.medium.com/v2/resize:fit:720/0*xLIQQ3iLqGqz8LFz">
              <div className="OvarlayColor">
                <div className="cardContent">
                  <div className="title">
                    How I Eliminated Procrastination From My Life (Using
                    Neuroscience)
                  </div>
                  <div className="overview">
                    Procrastination is a big problem for many of us. We say
                    we’ll work on our goals, hit the gym, or learn some new
                    skills, only to end up watching Netflix instead. I used to
                    be a chronic procrastinator too. I’d set big goals and make
                    ambitious plans, but not much was getting done on a
                    day-to-day basis.
                  </div>
                </div>
              </div>
            </RelatedCard>
          </RelatedArticles>
        </AurthorAndRCards_container>
      </BlogContainer>
      <Footer />
    </>
  );
};

export default Blog;
