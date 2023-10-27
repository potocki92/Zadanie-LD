import styled from "styled-components";

export const StyledImage = styled.img`
width: 100%;
@media (min-width: 1200px) {
    width: ${(props) => props.width || '100%'};
}
`