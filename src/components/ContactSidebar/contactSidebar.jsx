import React from "react";
import email from "../../constants/logos/email.png";
import telephone from "../../constants/logos/telephone.svg";
import {
  StyledContactSidebar,
  StyledContactLink,
  Icon,
  Separator,
} from "./styles";

export const ContactSidebar = () => {
  return (
    <StyledContactSidebar>
      <StyledContactLink href="mailto:lisacatlaw@gmail.com" alt="Write to me">
        <Icon src={email} />
      </StyledContactLink>
      <Separator />
      <StyledContactLink href="tel:639-624-915" alt="Call me">
        <Icon src={telephone} />
      </StyledContactLink>
    </StyledContactSidebar>
  );
};
