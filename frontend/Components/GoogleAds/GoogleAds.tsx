// components/GoogleAds.tsx
import React, { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: {
      push: (command: Function) => void;
    }[];
  }
}

const GoogleAds = () => {
  useEffect(() => {
    // Load Google AdSense script asynchronously
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    // Initialize ads
    (window.adsbygoogle = window.adsbygoogle || []).push({
      push: function (_command: Function): void {
        throw new Error("Function not implemented.");
      },
    });
  }, []);

  return (
    <div className="ad-container">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9052139849973525"
        data-ad-slot="YOUR_AD_SLOT_ID"
        data-ad-format="auto"
      ></ins>
    </div>
  );
};

export default GoogleAds;
