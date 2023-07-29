import {
  Aurthor,
  AurthorAndRCards_container,
  BlogContainer,
  BlogContent,
  Content,
  ShareContainer,
  BlogImage,
  LineBetween,
} from "@/Components/Blogg/Styles";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { LineUnder } from "@/Components/Aurthor/Aurthor";
import { GetScreenBreakPoints } from "@/Helpers/MediaQueries";
import AurthorCard from "@/Components/Blogg/AurthorCard";
import RelatedCardComponent from "@/Components/Blogg/RelatedArticles";

//sanity imports
import { client } from "@/Helpers/SanityClient";
import BlockContent from "@sanity/block-content-to-react";
import { PostData } from "@/Helpers/Types";
import { getReadingTime } from "@/Helpers/TimeRead";
import { getDateFormat } from "@/Helpers/DateFormat";

const Blog = () => {
  const { isPhone } = GetScreenBreakPoints();
  const router = useRouter();
  const { blogg } = router.query;
  const [postData, setPostData] = useState<PostData | null>(null);
  const PROJECTID = process.env.NEXT_PUBLIC_PROJECTID;
  const PUBLIC_DATASET = process.env.NEXT_PUBLIC_DATASET;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await client.fetch(
          `*[_type == "post" && slug.current == $blogg][0]{
            _id,
            title,
            body,
            slug,
            "author": author->{name, "image": image.asset->url, slug},
            "categories": categories[]->title,
            "mainImage": mainImage.asset->url,
            publishedAt
          }`,
          { blogg }
        );

        const [categoryTitles] = post?.categories;

        const relatedArticlesData = await client.fetch(
          `*[_type == "post" 
            && slug.current != $blogg 
            && $categoryTitles in categories[]->title
          ][0...3]{
            _id,
            title,
            body,
            slug,
            "categories": categories[]->title,
            "mainImage": mainImage.asset->url,
          }`,
          { blogg, categoryTitles }
        );

        setPostData({ ...post, relatedArticlesData });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (blogg) {
      fetchPost();
    }
  }, [blogg]);

  if (!postData) {
    return null;
  }

  return (
    <>
      <Navbar />
      <BlogContainer>
        <BlogContent>
          <Content>
            <h1>{postData?.title}</h1>
            <LineBetween>
              {/* {postData.relatedArticlesData&&("")} */}
              {isPhone && <AurthorCard aurthorData={postData.author} />}

              <div className="TimeReadContainer">
                <div className="MinsRead">
                  {getReadingTime(postData.body)} Min Read
                </div>
                <div className="MinsRead">.</div>
                <div className="MinsRead">
                  {getDateFormat(postData.publishedAt)}
                </div>
              </div>
            </LineBetween>
            <BlogImage src={postData?.mainImage} alt={postData?.mainImage} />

            <p>
              <BlockContent
                blocks={postData?.body}
                projectId={`${PROJECTID}`}
                dataset={`${PUBLIC_DATASET}`}
              />
            </p>
            <LineUnder>
              {isPhone && (
                <RelatedCardComponent
                  relatedArticlesData={postData?.relatedArticlesData}
                />
              )}
            </LineUnder>
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
            <>
              <Aurthor>
                <AurthorCard aurthorData={postData.author} />
              </Aurthor>

              <RelatedCardComponent
                relatedArticlesData={postData?.relatedArticlesData}
              />
            </>
          )}
        </AurthorAndRCards_container>
      </BlogContainer>
      <Footer />
    </>
  );
};

export default Blog;
