import { StyledLi } from "../../global.styled";
import { ContactButton, ContactList } from "./Contact.styled";

export const Contact = () => {
  return <ContactList>
    <StyledLi fontWeight="500" fontSize="14px" lineHeight="24px" letterSpacing="0.06em">
      <a>
        +48 58 506 65 65
      </a>
    </StyledLi>
    <StyledLi>
      <ContactButton>
        Zapytaj o ofertę
      </ContactButton>
    </StyledLi>
    <StyledLi>
      <ContactButton>
        Umów jazdę próbną
      </ContactButton>
    </StyledLi>
  </ContactList>;
};
