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
import { client } from "@/Helpers/SanityClient";
import { useEffect, useState } from "react";
import { AuthorData, PostData } from "@/Helpers/Types";
import BlockContent from "@sanity/block-content-to-react";
import { getDateFormat } from "@/Helpers/DateFormat";
import { getReadingTime } from "@/Helpers/TimeRead";

const TheAurthor = () => {
  const router = useRouter();
  const { aurthor } = router.query;

  const PROJECTID = process.env.NEXT_PUBLIC_PROJECTID;
  const PUBLIC_DATASET = process.env.NEXT_PUBLIC_DATASET;

  const [thisAurthor, setThisAurthor] = useState<AuthorData | null>(null);
  const [authorPosts, setAuthorPosts] = useState<PostData[]>([]);

  // const dominantColor = useImageDominantColor("/HomeImage.jpg");

  function pageNavigate(path: string) {
    router.push(path);
  }

  useEffect(() => {
    async function fetchAuthor() {
      const [authorData, postsByAuthor] = await Promise.all([
        client.fetch(
          `*[_type == 'author' && slug.current == '${aurthor}'][0] {
            _id,
          name,
          "image":image.asset->url,
          bio
        }`,
          { aurthor }
        ),
        client.fetch(
          `*[_type == 'post' && author->slug.current == '${aurthor}']{
            _id,
            title,
            body,
            "slug": slug.current,
            "author": author->{name, "image": image.asset->url, slug, bio},
            "categories": categories[]->title,
            "mainImage": mainImage.asset->url,
            publishedAt
        }`,
          { aurthor }
        ),
      ]);
      setThisAurthor(authorData);
      setAuthorPosts(postsByAuthor);
    }
    fetchAuthor();
  }, [aurthor]);

  return (
    <>
      <Navbar />
      <WrapperPage>
        <AurthorPage>
          <HeadingComponent
            dominantColor={useImageDominantColor(`${thisAurthor?.image}`)}
          >
            <HeaderImage src={thisAurthor?.image} alt={thisAurthor?.image} />
          </HeadingComponent>
          <h1>{thisAurthor?.name}</h1>
          <div className="followers">20K Followers</div>
          <LineUnder>
            <AurthorButton variant="text">Follow</AurthorButton>
            {/* <AurthorButton variant="text" sx={{ padding: "0 !important" }}>
              <MessageIcon />
            </AurthorButton> */}
          </LineUnder>

          {/* Aurthors stories */}
          {authorPosts?.map((post: any, index: any) => (
            <AurthorsStoriesWrap
              key={index}
              onClick={() => pageNavigate(`/Telastori/${post.slug}`)}
            >
              <AurthorsStories>
                <div className="date">{getDateFormat(post.publishedAt)}</div>
                <div className="title">{post.title}</div>
                <div className="overview">
                  <BlockContent
                    blocks={post?.body}
                    projectId={`${PROJECTID}`}
                    dataset={`${PUBLIC_DATASET}`}
                  />
                </div>
                <CategoryTagWrap>
                  <div className="categoryTag">{post.categories}</div>
                  <div className="TimeRead">
                    {getReadingTime(post.body)} Min Read
                  </div>
                </CategoryTagWrap>
              </AurthorsStories>
              <CardImage src={post.mainImage} alt={post.mainImage} />
            </AurthorsStoriesWrap>
          ))}
        </AurthorPage>
      </WrapperPage>
      <Footer />
    </>
  );
};

export default TheAurthor;
