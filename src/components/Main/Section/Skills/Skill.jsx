import React, { useEffect } from "react";
import propTypes from "prop-types";
import { Icon, BulletPoint, Title } from "./styles";
import { BPContent } from "../BulletPoint/BPContent";

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

  return <p>Configuring...</p>;
};

Skill.propTypes = {
  title: propTypes.string,
  items: propTypes.arrayOf(propTypes.string),
};
