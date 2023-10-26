import {
  SectionSpan,
  SectionText,
  SectionWrapper,
  StyledSection,
} from "./Section.styled";
import cupra from "/image/section/cupra_formentor.png";
import cupra2 from "/image/section/cupra_formentor_1.png";

export const Section = () => {
  return (
    <StyledSection>
      <SectionWrapper>
        <div style={{ color: "white", maxWidth: "553px" }}>
          <SectionSpan>WYPRÓBUJ</SectionSpan>
          <SectionText>
            Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj samochody,
            które są wyjątkowym połączeniem technologii, mocy, elegancji i
            komfortu.
          </SectionText>
        </div>
          <img src={cupra} />
        <div style={{ color: "white" }}>
          <SectionSpan fontSize="40px">TYLKO DLA ODWAŻNYCH</SectionSpan>
          <SectionText>
            Model CUPRA, który idealnie wpisuje się w DNA marki. Unikalny SUV
            coupé, wyjątkowy, odważny i innowacyjny – zapewni Ci to, co
            najlepsze w marce CUPRA.
          </SectionText>
        </div>
          <img src={cupra2} />
      </SectionWrapper>
    </StyledSection>
  );
};
