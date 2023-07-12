import { useState } from "react";
import {
  CurvedRectangle,
  BigContainer,
  SubContainer,
  GetOurStory,
  StyledTextField,
  GetStartedBtn,
} from "./styles";

const GetOurStories = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <BigContainer>
        <CurvedRectangle />
        <SubContainer>
          <GetOurStory>
            <h1>Get our stories delivered From us to your inbox weekly.</h1>
            <div className="inputContainer">
              <StyledTextField
                id="outlined-basic"
                label="Your Email"
                variant="outlined"
              />
              <GetStartedBtn variant="contained">Get Started</GetStartedBtn>
            </div>
          </GetOurStory>
        </SubContainer>
      </BigContainer>
    </>
  );
};

export default GetOurStories;
