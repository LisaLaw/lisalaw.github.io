import styled from "styled-components";
import { colors } from "../../../../constants/constants";

const StyledContentGrid = styled.div`
  display: ${({ visible }) => (visible ? `grid` : `none`)};
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 8px;
  word-wrap: break-word;
  margin-top: 5px;
`;

const StyledListItem = styled.div`
  color: ${colors.grayColor.medium};
`;

export { StyledContentGrid, StyledListItem };
