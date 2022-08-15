import styled from "styled-components";
import { colors } from "../../constants/constants";

const StyledFooter = styled.p`
  display: flex;
  border-top: 1px solid ${colors.grayColor.medium};
  align-self: center;
  padding: 10px;
  margin: 2%;
  font-size: 14px;
  color: ${colors.grayColor.dark};
`;

export { StyledFooter };
