import styled from "styled-components";
import logo from "../../constants/logos/logo_big.svg";

const StyledMain = styled.div`
  width: 90%;
  height: 90%;
  align-self: center;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export { StyledMain };
