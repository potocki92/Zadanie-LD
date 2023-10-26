import { StyledLi } from "../../global.styled";
import { MenuList } from "./Menu.styled";

export const Menu = () => {
  return (
    <MenuList>
      <StyledLi lineHeight="26px" fontWeight="300">
        <span>Samochody</span>
      </StyledLi>
      <StyledLi lineHeight="26px" fontWeight="300">
        <span>Jazda próbna</span>
      </StyledLi>
      <StyledLi lineHeight="26px" fontWeight="300">
        <span>Oferta</span>
      </StyledLi>
      <StyledLi lineHeight="26px" fontWeight="300">
        <span>Salony Cupra</span>
      </StyledLi>
    </MenuList>
  );
};
