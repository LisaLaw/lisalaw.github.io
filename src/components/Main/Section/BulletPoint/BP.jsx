import React, { useState } from "react";
import logo_right from "../../../../constants/logos/logo_right.svg";
import logo_down from "../../../../constants/logos/logo_down.svg";
import { BulletPoint, Icon, Title } from "../Skills/styles";
import { BPContent } from "./BPContent";

const BP = ({ data }) => {
  const { title } = data;
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible((prevState) => !prevState);
  };

  const icon = visible ? logo_down : logo_right;

  console.log("BP data is ", data);

  return (
    <BulletPoint onClick={onClick}>
      <Icon src={icon} />
      <Title visible={visible}>{title}</Title>
      <BPContent data={data} visible={visible} />
    </BulletPoint>
  );
};

export { BP };
