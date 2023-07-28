import { useRouter } from "next/router";
import { RelatedArticles, RelatedCard } from "./Styles";
import BlockContent from "@sanity/block-content-to-react";

const RelatedCardComponent = (props: any) => {
  const { relatedArticlesData } = props;
  const router = useRouter();

  const PROJECTID = process.env.NEXT_PUBLIC_PROJECTID;
  const PUBLIC_DATASET = process.env.NEXT_PUBLIC_DATASET;

  if (relatedArticlesData.length === 0) {
    return null;
  }

  return (
    <RelatedArticles>
      <h1>Related Articles</h1>
      {relatedArticlesData?.map((article: any, index: any) => (
        <RelatedCard
          key={index}
          imageUrl={article.mainImage}
          onClick={() => router.push(`/Telastori/${article.slug.current}`)}
        >
          <div className="OvarlayColor">
            <div className="cardContent">
              <div className="title">{article.title}</div>
              <div className="overview">
                <BlockContent
                  blocks={article?.body}
                  projectId={`${PROJECTID}`}
                  dataset={`${PUBLIC_DATASET}`}
                />
              </div>
            </div>
          </div>
        </RelatedCard>
      ))}
    </RelatedArticles>
  );
};

export default RelatedCardComponent;
