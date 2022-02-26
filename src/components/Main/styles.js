import styled from "styled-components";
import logo from "../../constants/logos/logo_big.svg";

const StyledMain = styled.div`
  width: 90%;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "about-section . ."
    ". background projects-section"
    ". skills-section .";
  border: 1px dashed gray;

  & .background {
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
    grid-area: background;
    border: 1px dashed blue;
  }
`;

export { StyledMain };
