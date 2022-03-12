import styled from "styled-components";
import { colors } from "../../../constants/constants";
// import logo from "../../constants/logos/logo_big.svg";

const StyledArrowCard = styled.div`
  border-radius: 4px;
  padding: 15px;
  background-color: white;
  font-size: 18px;
  box-shadow: 1.5px 3px 3px ${colors.shadows.sectionShadow.unfocused};

  :hover {
    box-shadow: 2.5px 5px 5px ${colors.shadows.sectionShadow.focused};
    border: 1px solid ${colors.grayColor.extraLight};
  }

  /* keep page from jumping on hover*/
  border: 1px solid transparent;
`;

export { StyledArrowCard };
