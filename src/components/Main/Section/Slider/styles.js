import styled from "styled-components";

const StyledSlider = styled.div`
  display: ${({ visible }) => visible && "flex"}; /* update default value*/
`;

export { StyledSlider };
