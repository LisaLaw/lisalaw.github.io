import styled from "styled-components";
import { screenSize } from "../../constants/constants";

const StyledMain = styled.div`
  width: 90%;
  height: 80vH;
  align-self: center;
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenSize.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "a a"
      "a";
    margin-left: 20px;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
  }
`;

export { StyledMain };
