import { createGlobalStyle, styled } from "styled-components";
import { modernNormalize } from "styled-modern-normalize";

export const ModernNormalize = createGlobalStyle`
${modernNormalize}
    body {
        background-color: #1B1B1B
    }
    li, ul {
        list-style: none;
        
        margin: 0;
        padding: 0;
    }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 20px;
  @media (min-width: 1430px) {
    width: 1372px;
    margin: 0 auto;
  }
`;

export const StyledLi = styled.li`
  a,
  span,
  button {
    font-weight: ${(props) => props.fontWeight || "normal"};
    font-size: ${(props) => props.fontSize || "16px"};
    line-height: ${(props) => props.lineHeight || "48px"};
    letter-spacing: ${(props) => props.letterSpacing || "normal"};
  }
`;
