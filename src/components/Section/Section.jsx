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
        <div style={{ width: "553px", height: "152px", color: "white" }}>
          <SectionSpan>WYPRÓBUJ</SectionSpan>
          <SectionText>
            Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj samochody,
            które są wyjątkowym połączeniem technologii, mocy, elegancji i
            komfortu.
          </SectionText>
        </div>
        <div style={{ width: "787px", height: "574px" }}>
          <img src={cupra} />
        </div>
        <div style={{ width: "553px", height: "152px", color: "white" }}>
          <SectionSpan fontSize="40px">TYLKO DLA ODWAŻNYCH</SectionSpan>
          <SectionText>
            Model CUPRA, który idealnie wpisuje się w DNA marki. Unikalny SUV
            coupé, wyjątkowy, odważny i innowacyjny – zapewni Ci to, co
            najlepsze w marce CUPRA.
          </SectionText>
        </div>
        <div style={{ width: "553px", height: "737px" }}>
          <img src={cupra2} />
        </div>
      </SectionWrapper>
    </StyledSection>
  );
};
