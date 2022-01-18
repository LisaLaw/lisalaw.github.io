import React, { useState } from "react";
import logo_right from "../../../../constants/logos/logo_right.svg";
import logo_down from "../../../../constants/logos/logo_down.svg";
import propTypes from "prop-types";
import {
  SkillsBulletPoint,
  Icon,
  SkillsTitle,
  SkillsList,
  SkillsItem,
} from "./styles";

export const Skill = ({ title, items }) => {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible((prevState) => !prevState);
  };

  const icon = visible ? logo_down : logo_right;

  return (
    <SkillsBulletPoint onClick={onClick}>
      <Icon src={icon} />
      <SkillsTitle visible={visible}>{title}</SkillsTitle>
      <SkillsList visible={visible}>
        {items.length &&
          items.map((item) => {
            return <SkillsItem>{item}</SkillsItem>;
          })}
      </SkillsList>
    </SkillsBulletPoint>
  );
};

Skill.propTypes = {
  title: propTypes.string,
  items: propTypes.arrayOf(propTypes.string),
};
