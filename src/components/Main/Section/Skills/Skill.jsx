import React, { useEffect, useState } from "react";
import logo_right from "../../../../constants/logos/logo_right.svg";
import logo_down from "../../../../constants/logos/logo_down.svg";
import propTypes from "prop-types";
import { Icon, ListItem, BulletPointList, BulletPoint, Title } from "./styles";

export const Skill = ({ title, items }) => {
  /* check window width
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (width > 767) {
    // do desktop stuff
  } */

  /* slider functionality
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(items)) {
      newIndex = React.Children.count(items) - 1;
    }
    setActiveIndex(newIndex);
  };
  end slider functionality */

  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible((prevState) => !prevState);
  };

  const icon = visible ? logo_down : logo_right;

  return (
    <BulletPoint onClick={onClick}>
      <Icon src={icon} />
      <Title visible={visible}>{title}</Title>
      <BulletPointList visible={visible}>
        {items.length &&
          items.map((item) => {
            return <ListItem>{item}</ListItem>;
          })}
      </BulletPointList>
    </BulletPoint>
  );
};

Skill.propTypes = {
  title: propTypes.string,
  items: propTypes.arrayOf(propTypes.string),
};
