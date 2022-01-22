import styled from "styled-components";
import { screenSize, colors } from "../../../../constants/constants";

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const BulletPoint = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 15px 0;
`;

const Icon = styled.img`
  margin-right: 15px;
`;

const Title = styled.div`
  width: 80%;
  text-align: left;
  color: colors.grayColor.medium;
`;

const BulletPointList = styled.div`
  display: ${({ visible }) => (visible ? `grid` : `none`)};
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 8px;
  width: 100%;
  word-wrap: break-word;
  margin-top: 5px;
`;

const ListItem = styled.div`
  color: ${colors.grayColor.medium};
`;

export { SkillsWrapper, BulletPoint, Icon, Title, BulletPointList, ListItem };
