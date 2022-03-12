import styled from "styled-components";
import { screenSize, colors } from "../../../constants/constants";

const StyledSection = styled.div`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  margin-top: 4px;
`;

const StyledContent = styled.div`
  margin: 0px;
`;

const StyledContentLine = styled.p`
  margin: 0px;
  font-size: 18px;
  line-height: 1.5;
`;

export { StyledSection, StyledContent, StyledContentLine };
