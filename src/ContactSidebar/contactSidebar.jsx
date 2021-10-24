import React from 'react';
import email from '../logos/email.svg';
import telephone from '../logos/telephone.svg';
import { StyledContactSidebar, StyledContactLink, Icon } from './styles';

export const ContactSidebar = () => {
    return <StyledContactSidebar>
        <StyledContactLink href='mailto:lisacatlaw@gmail.com'>
            <Icon src={email} />
        </StyledContactLink>
        <StyledContactLink href='tel:639-624-915'>
            <Icon src={telephone} />
        </StyledContactLink>
    </StyledContactSidebar>
};
