import { Image } from "../Image/Image";
import {
  SectionButton,
  SectionSpan,
  SectionText,
  SectionWrapper,
  StyledSection,
} from "./Section.styled";

export const Section = ({data}) => {
  return (
    <StyledSection>
      <SectionWrapper>
      {data.map((item, key) => {
        const shouldRenderButton = item.button.shouldRenderButton
        return (
          <>
          <div key={key} style={item.style}>
            <SectionSpan fontSize={item.span.fontSize || ""}>{item.span.sectionSpan}</SectionSpan>
            <SectionText>{item.text.sectionText}</SectionText>
            {
              shouldRenderButton ?
            <SectionButton padding={item.button.padding} height={item.button.height}>{item.button.text}</SectionButton> : <></>
            }
          </div>
            <Image image={item.image} alt={key} />
          </>
        );
      })}
      </SectionWrapper>
    </StyledSection>
  );
};
