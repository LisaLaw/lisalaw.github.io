import React, { useState } from "react";
import logo_right from "../../../../constants/logos/logo_right.svg";
import logo_down from "../../../../constants/logos/logo_down.svg";
import { BulletPoint, Icon, Title } from "./styles";
import { BPContent } from "./BPContent";

const BP = ({ data }) => {
  const { title, content } = data;
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible((prevState) => !prevState);
  };
  const icon = visible ? logo_down : logo_right;

  return (
    <BulletPoint onClick={onClick}>
      <Icon src={icon} />
      <Title>{title}</Title>
      <BPContent data={content} visible={visible} />
    </BulletPoint>
  );
};

export { BP };
