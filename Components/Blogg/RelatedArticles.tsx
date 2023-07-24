import { RelatedArticles, RelatedCard } from "./Styles";

const RelatedCardComponent = () => {
  const relatedArticlesData = [
    {
      imageUrl:
        "https://cdn.sanity.io/images/taki18de/production/a9ad4cdd0220f5c42764ba74a4598caef008328a-850x474.webp",
      title:
        "Swap a €30k Budget for Just 5 Days Worth of Dev Time: Relaunching Fresco Cooks.",
      overview:
        "Fresco Cooks is a B2B SaaS brand that powers seamless cooking experiences for the world's leading appliance brands and home cooks. They originally came to Mawla in 2022 because they needed a new marketing site as part of their rebrand to reflect the company's growth.s",
    },
    {
      imageUrl: "https://miro.medium.com/v2/resize:fit:720/0*dXTEWRECBHcbLgTZ",
      title: "23 passive income DApps that make money in your sleep [2023]",
      overview:
        "Passive income is income that is generated with minimal effort or time. This type of income is typically generated through investments or other forms of passive income-generating activities such as renting out the property, creating digital products (e.g. online courses), and so on. Passive income is important to have multiple streams…",
    },
    {
      imageUrl: "https://miro.medium.com/v2/resize:fit:720/0*xLIQQ3iLqGqz8LFz",
      title:
        "How I Eliminated Procrastination From My Life (Using Neuroscience)",
      overview:
        "Procrastination is a big problem for many of us. We say we'll work on our goals, hit the gym, or learn some new skills, only to end up watching Netflix instead. I used to be a chronic procrastinator too. I'd set big goals and make ambitious plans, but not much was getting done on a day-to-day basis.",
    },
  ];

  return (
    <RelatedArticles>
      <h1>Related Articles</h1>
      {relatedArticlesData.map((article, index) => (
        <RelatedCard key={index} imageUrl={article.imageUrl}>
          <div className="OvarlayColor">
            <div className="cardContent">
              <div className="title">{article.title}</div>
              <div className="overview">{article.overview}</div>
            </div>
          </div>
        </RelatedCard>
      ))}
    </RelatedArticles>
  );
};

export default RelatedCardComponent;
