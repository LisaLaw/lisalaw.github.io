import styled from "styled-components";
import { screenSize } from "../../constants/constants";
import logo from "../../constants/logos/logo_big.svg";

const StyledMain = styled.div`
  width: 95%;
  align-self: center;
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSize.mobile}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "about-section . ."
      ". background projects-section"
      ". skills-section .";
    margin-left: 20px;

    & .background {
      background-image: url(${logo});
      background-repeat: no-repeat;
      background-position: center;
      grid-area: background;
    }
  }
`;

export { StyledMain };
