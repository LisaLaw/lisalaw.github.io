import styled from "styled-components";

const BulletPoint = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 15px 0;
`;

const Icon = styled.img`
  margin-right: 15px;

  :hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  width: 80%;
  text-align: left;
  color: colors.grayColor.medium;
  :hover {
    cursor: pointer;
  }
`;

export { BulletPoint, Icon, Title };
