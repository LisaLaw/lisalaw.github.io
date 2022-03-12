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
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "arrow1 arrow1 . . . ."
      "arrow2 arrow2 background . arrow3 arrow3"
      "arrow4 arrow4 . . arrow5 arrow5";
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
