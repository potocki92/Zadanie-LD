import styled from "styled-components";
import { Container } from "../../global.styled";

export const StyledSection = styled.section`
  padding: 104px 0;
`;

export const SectionWrapper = styled(Container)`
  display: grid;
  grid-template-rows: 200px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  overflow: hidden;
  margin: 0;

  > :nth-child(1) {
    grid-row-start: 1;
    margin: 0 30px;
  }
  > :nth-child(2) {
    grid-row-start: 2;
    margin: 30px 0;
  }
  > :nth-child(3) {
    grid-row-start: 3;
    margin: 0 30px;
  }
  > :nth-child(4) {
    grid-row-start: 4;
    margin: 30px 0;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat( auto-fit, minmax(250px, 1fr) );
    grid-column-gap: 32px;
    margin: 0 auto;
    > :nth-child(1) {
      grid-area: 1 / 1 / 2 / 2;
      margin: 0;
    }
    > :nth-child(2) {
      grid-area: 2 / 1 / 5 / 2; 
      margin: 0;
    }
    > :nth-child(3) {
      grid-area: 5/1/6/2;
      margin: 0;
      margin-top: 213px;
    }
    > :nth-child(4) {
      grid-area: 2 / 2 / 7 / 3; 
      margin-top: 60px;
      justify-self: end;
    }
  }
`;

export const SectionSpan = styled.span`
  font-size: ${(props) => props.fontSize || "60px"};
  font-weight: 300;
  @media (min-width: 1430px) {
    margin-left: 0
  }
`;

export const SectionText = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #ffffff80;
  @media (min-width: 1430px) {
    margin-left: 0
  }
`;

export const SectionButton = styled.button`
padding: ${(props) => props.padding || ""};
height: ${(props) => props.height || ""};
margin-left: 20px;
@media (min-width: 1430px) {
  margin-left: 0
}
`