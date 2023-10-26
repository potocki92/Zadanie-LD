import { Contact } from "../Contact/Contact";
import { Menu } from "../Menu/Menu";
import { StyledNav } from "./Nav.styled";

export const Nav = () => {
  return (
    <StyledNav>
      <Menu/>
      <Contact />
    </StyledNav>
  );
};
