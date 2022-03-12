import styled from "styled-components";
import { screenSize, colors } from "../../constants/constants";
import logo from "../../constants/logos/logo_big.svg";

const StyledMain = styled.div`
  width: 95%;
  align-self: center;
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSize.mobile}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 30px minmax(180px, 1fr) minmax(180px, 1fr) minmax(
        180px,
        1fr
      );
    grid-template-areas:
      ". . . ."
      "about-section . frontend-section ."
      "backend-section background background skills-section"
      ". presentations-section . .";
    margin-left: 20px;
    grid-column-gap: 8px;
    grid-row-gap: 8px;

    & .background {
      background-image: url(${logo});
      background-repeat: no-repeat;
      background-position: center;
      grid-area: background;
    }
  }
`;

export { StyledMain };
