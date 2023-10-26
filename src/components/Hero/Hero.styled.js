import styled from "styled-components";
import background from "/image/cupra_bg.png";
import backgroundRetina from "/image/cupra_bg@2x.png";

export const StyledHero = styled.section`
  min-height: 884px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: auto;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${backgroundRetina});
  }
`;
