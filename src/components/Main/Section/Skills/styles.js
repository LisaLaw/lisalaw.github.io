import styled from "styled-components";
import { screenSize, colors } from "../../../../constants/constants";

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const SkillsBulletPoint = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 0;
  margin-bottom: 10px;
`;

const Icon = styled.img`
  margin: 2px 5px 2px 2px;

  @media (min-width: ${screenSize.mobile}) {
  }
`;

const SkillsTitle = styled.div`
  color: ${colors.grayColor.medium};

  :hover {
    color: ${colors.grayColor.dark};
    cursor: pointer;
  }
`;

export { SkillsWrapper, SkillsBulletPoint, Icon, SkillsTitle };
