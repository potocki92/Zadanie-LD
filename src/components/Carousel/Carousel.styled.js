import styled from "styled-components";

export const StyledCarousel = styled.section`
  background-color: #f5f5f5;
  padding: 104px 0;
  overflow: hidden;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1066px;
  height: 635px;
  max-height: 767px;
  margin: auto auto;
  display: flex;
  align-items: center;
  position: relative;

  > .carousel {
    position: absolute;
    min-width: 1066px;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all 1s;
  }
`;

export const CaruselButton = styled.button`
  z-index: 10;
  cursor: pointer;
  position: absolute;
  width: 50px;
  height: 50px;
  ${({ left }) => (left ? "left: 0;" : "right: 0;")}
`;
