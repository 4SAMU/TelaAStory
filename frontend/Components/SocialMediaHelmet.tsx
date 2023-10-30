import React from "react";
import { Helmet } from "react-helmet";

const SocialMediaHelmet = (props: any) => {
  const { title, description, imageUrl, url } = props;
  return (
    <Helmet>
      {/* OG tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta name="google-adsense-account" content="ca-pub-9052139849973525"></meta>

      {/* Twitter Card tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SocialMediaHelmet;
