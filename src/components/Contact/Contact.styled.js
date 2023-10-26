import styled from "styled-components";

export const ContactList = styled.ul`
    display: flex;
    align-items: center;
    gap: 24px;

    & li:first-child {
        margin-right: 24px;
      }
      @media (max-width: 1250px) {
        display: none; 
      }
`

export const ContactButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    padding: 0 24px;
    height: 48px;
    border-radius: 0px;
    border: 1px solid #000000
`

