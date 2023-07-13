import { useEffect, useState } from "react";
import { LinksContainer, SocialLinks } from "./styles";

const Links = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);
  return (
    <>
      <LinksContainer>
        <SocialLinks>
          <div className="CopyRight" title="by SAMUTECHSTUDIO">
            Copyright © {currentYear}. Crafted with love.
          </div>
        </SocialLinks>
      </LinksContainer>
    </>
  );
};

export default Links;
