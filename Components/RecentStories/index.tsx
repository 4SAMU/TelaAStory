import React, { useState } from "react";
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

const cardData = [
  {
    imageUrl:
      "https://i.pinimg.com/236x/03/2b/b4/032bb4387d0796e02d7e23ac92adea99.jpg",
    cardName: "Future of Work",
    cardDescrip: "Majority of people will work in jobs that don’t exist today.",
    authorImageUrl:
      "https://i.pinimg.com/236x/67/c3/d6/67c3d63e215e034e01d45c8256d720d3.jpg",
    authorName: "Jamoh Mburu",
    isVerified: true,
    time: "2 May 2022",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/03/2b/b4/032bb4387d0796e02d7e23ac92adea99.jpg",
    cardName: "Future of Work",
    cardDescrip: "Majority of people will work in jobs that don’t exist today.",
    authorImageUrl:
      "https://i.pinimg.com/236x/67/c3/d6/67c3d63e215e034e01d45c8256d720d3.jpg",
    authorName: "Jamoh Mburu",
    isVerified: true,
    time: "2 May 2022",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/03/2b/b4/032bb4387d0796e02d7e23ac92adea99.jpg",
    cardName: "Future of Work",
    cardDescrip: "Majority of people will work in jobs that don’t exist today.",
    authorImageUrl:
      "https://i.pinimg.com/236x/67/c3/d6/67c3d63e215e034e01d45c8256d720d3.jpg",
    authorName: "Jamoh Mburu",
    isVerified: true,
    time: "2 May 2022",
  },

  {
    imageUrl:
      "https://i.pinimg.com/236x/03/2b/b4/032bb4387d0796e02d7e23ac92adea99.jpg",
    cardName: "Future of Work",
    cardDescrip: "Majority of people will work in jobs that don’t exist today.",
    authorImageUrl:
      "https://i.pinimg.com/236x/67/c3/d6/67c3d63e215e034e01d45c8256d720d3.jpg",
    authorName: "Jamoh Mburu",
    isVerified: true,
    time: "2 May 2022",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/03/2b/b4/032bb4387d0796e02d7e23ac92adea99.jpg",
    cardName: "Future of Work",
    cardDescrip: "Majority of people will work in jobs that don’t exist today.",
    authorImageUrl:
      "https://i.pinimg.com/236x/67/c3/d6/67c3d63e215e034e01d45c8256d720d3.jpg",
    authorName: "Jamoh Mburu",
    isVerified: true,
    time: "2 May 2022",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/03/2b/b4/032bb4387d0796e02d7e23ac92adea99.jpg",
    cardName: "Future of Work",
    cardDescrip: "Majority of people will work in jobs that don’t exist today.",
    authorImageUrl:
      "https://i.pinimg.com/236x/67/c3/d6/67c3d63e215e034e01d45c8256d720d3.jpg",
    authorName: "Jamoh Mburu",
    isVerified: true,
    time: "2 May 2022",
  },
  {
    imageUrl:
      "https://i.pinimg.com/236x/03/2b/b4/032bb4387d0796e02d7e23ac92adea99.jpg",
    cardName: "Future of Work",
    cardDescrip: "Majority of people will work in jobs that don’t exist today.",
    authorImageUrl:
      "https://i.pinimg.com/236x/67/c3/d6/67c3d63e215e034e01d45c8256d720d3.jpg",
    authorName: "Jamoh Mburu",
    isVerified: true,
    time: "2 May 2022",
  },
  // Add more card data objects here
];

const RecentStories = () => {
  const [showAll, setShowAll] = useState(false);
  const [numCardsToShow, setNumCardsToShow] = useState(3);
  const navigateTo = useNavigateTo();

  const handleViewAll = () => {
    setShowAll(true);
    setNumCardsToShow(numCardsToShow + 3);
  };
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
          {cardData.slice(0, numCardsToShow).map((card, index) => (
            <Cards
              key={index}
              imageUrl={card.imageUrl}
              onClick={() => navigateTo("Telastori/todays' story")}
            >
              <div className="OvarlayColor" />
              <div className="CardDataWrapper">
                <div className="CardName">{card.cardName}</div>
                <div className="CardDescrip">{card.cardDescrip}</div>
                <Author imageUrl={card.authorImageUrl}>
                  <div className="Avatar"></div>
                  <div className="AuthorName">{card.authorName}</div>
                  {card.isVerified && (
                    <div className="isVerified">Verified Writer</div>
                  )}
                  <div className="time">{card.time}</div>
                </Author>
              </div>
            </Cards>
          ))}
        </CardContainer>
      </div>
      <ShowMore>
        {showAll && numCardsToShow < cardData.length && (
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
