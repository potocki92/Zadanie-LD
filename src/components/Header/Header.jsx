import { Nav } from "../Nav/Nav";
import { HeaderWrapper, StyledHeader } from "./Header.styled";
import Logo from "/logo.svg";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <img src={Logo} alt="Cupra logo" />
        <Nav />
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
