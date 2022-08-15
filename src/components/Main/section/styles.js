import styled from "styled-components";
import { colors } from "../../../constants/constants";

export const StyledSection = styled.div`
  width: 90%;
  border-radius: 10px;
  border: 1px solid ${colors.shadows.sectionShadow};
`;

export const Content = styled.p`
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

export const Title = styled.h3`
  color: ${colors.themeColor};

  &:hover {
    cursor: pointer;
  }
`;
