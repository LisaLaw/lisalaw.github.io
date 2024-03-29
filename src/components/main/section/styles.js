import styled from "styled-components";
import { colors } from "../../../constants/constants";

export const StyledSection = styled.div`
  width: 90%;
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.open
      ? `1px 1px 3px ${colors.shadows.sectionShadow.focused}`
      : `none`};
  border: ${(props) =>
    props.open ? "none" : `0.5px solid ${colors.grayColor.light}`};
  padding: 20px;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.p`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  color: ${colors.grayColor.dark};
  transition: 0.3s;
`;

export const Title = styled.h3`
  color: ${colors.themeColor};
`;

export const BulletPoint = styled.p`
  color: ${colors.grayColor.dark};
`;

export const Emphasis = styled.span`
  color: ${colors.themeColor};
`;
