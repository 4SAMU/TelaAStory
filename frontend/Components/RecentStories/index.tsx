import { useEffect, useState } from "react";
import {
  Author,
  CardContainer,
  Cards,
  HeaderBox,
  RecentContainer,
  ShowMore,
  ViewAll,
  ViewAllBtn,
} from "./RecentStyles";
import { useNavigateTo } from "../TodayStori";

import BlockContent from "@sanity/block-content-to-react";
import { client } from "@/Helpers/SanityClient";
import { PostData } from "@/Helpers/Types";
import { getDateFormat } from "@/Helpers/DateFormat";

const RecentStories = () => {
  const [showAll, setShowAll] = useState(false);
  const [numCardsToShow, setNumCardsToShow] = useState(3);
  const [blogPosts, setBlogPosts] = useState<PostData[]>([]);
  const PROJECTID = process.env.NEXT_PUBLIC_PROJECTID;
  const PUBLIC_DATASET = process.env.NEXT_PUBLIC_DATASET;

  const navigateTo = useNavigateTo();

  const handleViewAll = () => {
    setShowAll(true);
    setNumCardsToShow(numCardsToShow + 3);
  };

  useEffect(() => {
    async function fetchPosts() {
      const response = await client.fetch(`
      *[_type == "post"]{
        _id,
        title,
        body,
        "slug": slug.current,
        "author": author->{name, "image": image.asset->url, slug, bio},
        "categories": categories[]->title,
        "mainImage": mainImage.asset->url,
        publishedAt
      }
      `);
      setBlogPosts(response);
      console.log("response", response);
    }

    fetchPosts();
  }, []);

  if (blogPosts.length === 0 || !blogPosts) {
    return null;
  }

  return (
    <RecentContainer>
      <div className="wrapper">
        <HeaderBox>
          <h1>{showAll ? "All Articles" : "Recent Articles"}</h1>
          <h2>
            {showAll
              ? "We share common trends, strategies, ideas, opinions, short & long stories from the team behind the company."
              : "Here's what we've been up to recently."}
          </h2>
          {!showAll && (
            <ViewAllBtn>
              <ViewAll variant="text" onClick={handleViewAll}>
                View all &#8594;
              </ViewAll>
            </ViewAllBtn>
          )}
        </HeaderBox>
        <CardContainer>
          {blogPosts.slice(0, numCardsToShow).map((card, index) => (
            <Cards
              key={index}
              imageUrl={card.mainImage}
              onClick={() => navigateTo(`Telastori/${card.slug}`)}
            >
              <div className="OvarlayColor" />
              <div className="CardDataWrapper">
                <div className="CardName">{card.title}</div>
                <div className="CardDescrip">
                  <BlockContent
                    blocks={card?.body}
                    projectId={`${PROJECTID}`}
                    dataset={`${PUBLIC_DATASET}`}
                  />
                </div>
                <Author imageUrl={card?.author.name}>
                  <div className="Avatar"></div>
                  <div className="AuthorName">{card?.author.image}</div>
                  {/* {card.isVerified && (
                    <div className="isVerified">Verified Writer</div>
                  )} */}
                  <div className="time">{getDateFormat(card.publishedAt)}</div>
                </Author>
              </div>
            </Cards>
          ))}
        </CardContainer>
      </div>
      <ShowMore>
        {showAll && numCardsToShow < blogPosts.length && (
          <ViewAll
            variant="text"
            onClick={() => setNumCardsToShow(numCardsToShow + 3)}
          >
            Show More Articles
          </ViewAll>
        )}
      </ShowMore>
    </RecentContainer>
  );
};

export default RecentStories;
