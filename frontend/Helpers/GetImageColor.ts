import { useState, useEffect } from "react";

const useImageDominantColor = (imageURL: any) => {
  const [dominantColor, setDominantColor] = useState<
    [number, number, number] | null
  >(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageURL;

    img.onload = function () {
      // Load ColorThief from CDN
      const colorThiefScript = document.createElement("script");
      colorThiefScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.3.0/color-thief.umd.js";
      colorThiefScript.async = true;
      colorThiefScript.onload = function () {
        // ColorThief will be available on the window object after the script is loaded
        const colorThief = new ColorThief();
        const color = colorThief.getColor(img);
        setDominantColor(color);
      };
      document.body.appendChild(colorThiefScript);
    };
  }, [imageURL]);

  return dominantColor;
};

export default useImageDominantColor;
