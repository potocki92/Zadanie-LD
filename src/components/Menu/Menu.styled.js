import styled from "styled-components";

export const MenuList = styled.ul`
  color: #242221;
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 697px) {
    display: none;
  }
`;
