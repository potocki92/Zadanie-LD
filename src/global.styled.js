import { createGlobalStyle, styled } from "styled-components";
import { modernNormalize } from "styled-modern-normalize";

export const ModernNormalize = createGlobalStyle`
${modernNormalize}
    body {
        font-family: 'Cupra', sans-serif;
    }
    li, ul {
        list-style: none;
        
        margin: 0;
        padding: 0;
    }
`;

export const Container = styled.div`
  padding: 0 274px;
`;
