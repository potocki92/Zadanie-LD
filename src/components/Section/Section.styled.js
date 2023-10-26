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

  :nth-child(1) {
    grid-row-start: 1;
  }
  :nth-child(2) {
    grid-row-start: 2;
  }
  :nth-child(3) {
    grid-row-start: 3;
  }
  :nth-child(4) {
    grid-row-start: 4;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, 1fr);
    :nth-child(1) {
      grid-area: 1/1/4/4;
    }
    :nth-child(2) {
      grid-area: 2/1/6/1;
    }
    :nth-child(3) {
      grid-area: 7/1/7/1;
    }
    :nth-child(4) {
      grid-area: 2/2/8/2;
      margin-top: 128px;
      justify-self: end;
    }

    > :nth-child(2) {
      margin-top: 68px;
    }
  }
`;

export const SectionSpan = styled.span`
  font-size: ${(props) => props.fontSize || "60px"};
  font-weight: 300;
`;

export const SectionText = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #ffffff80;
`;
