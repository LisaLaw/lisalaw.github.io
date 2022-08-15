import styled from "styled-components";
import { screenSize } from "../../constants/constants";

const StyledMain = styled.div`
  width: 90%;
  align-self: center;
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSize.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 80vh;
    grid-template-areas:
      ". ."
      ".";
    margin-left: 20px;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
  }
`;

export { StyledMain };
