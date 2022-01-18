import styled from "styled-components";
import { screenSize, colors } from "../../../../constants/constants";

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const SkillsBulletPoint = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 2px 0;
  margin-bottom: 10px;
`;

const Icon = styled.img`
  margin: 2px 5px 2px 2px;

  :hover {
    cursor: pointer;
  }
`;

const SkillsTitle = styled.div`
  color: ${colors.grayColor.dark};

  @media (min-width: ${screenSize.mobile}) {
    color: ${colors.grayColor.medium};

    :hover {
      color: ${colors.grayColor.dark};
      cursor: pointer;
    }
  }
`;

const SkillsList = styled.div`
  display: ${({ visible }) => (visible ? `flex` : `none`)};
  margin-left: 20px;
  flex-wrap: wrap;
  width: 100%;
`;

const SkillsItem = styled.div`
  width: 100%;
  margin: 3px;
`;

export {
  SkillsWrapper,
  SkillsBulletPoint,
  Icon,
  SkillsTitle,
  SkillsList,
  SkillsItem,
};
