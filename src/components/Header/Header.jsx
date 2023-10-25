import { Nav } from "../Nav/Nav";
import { StyledHeader } from "./Header.styled";
import Logo from "/logo.svg";

const Header = () => {
  return (
    <StyledHeader as="header">
        <img src={Logo} alt="Cupra logo" />
      <Nav />
    </StyledHeader>
  );
};

export default Header;
