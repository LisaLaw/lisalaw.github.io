import React, { useState } from "react";
import logo_right from "../../../constants/logos/logo_right.svg";
import logo_down from "../../../constants/logos/logo_down.svg";
import { Section } from "../Section/section";
import { StyledArrowCard, TopLine, Title } from "./styles";
import { Icon } from "../Section/BulletPoint/styles";

export const ArrowCard = ({ item }) => {
  const { label, priority } = item;

  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible((prevState) => !prevState);
  };

  const icon = visible ? logo_down : logo_right;
  const lowerCaseTitle = label.toLowerCase();
  console.log(lowerCaseTitle);

  return (
    <StyledArrowCard
      onClick={onClick}
      title={label}
      priority={priority}
      className={`${lowerCaseTitle}-section`}
      visible={visible}
    >
      <TopLine>
        <Icon src={icon} />
        <Title visible={visible} priority={priority}>
          {lowerCaseTitle}
        </Title>
      </TopLine>
      <Section title={lowerCaseTitle} visible={visible} />
    </StyledArrowCard>
  );
};
