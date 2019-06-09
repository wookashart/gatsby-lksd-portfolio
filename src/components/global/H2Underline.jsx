import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

export default ({ id, color }) => (
    <Header color={color}>
        <FormattedMessage id={id} />
    </Header>
);

const Header = styled.h2`
    margin-bottom: 10px;

    span {
        color: ${props => props.color ? `var(--${props.color})` : false};
    }

    &::after {
        content: '';
        height: 2px;
        width: 80px;
        display: block;
        background-color: var(--primary);
        margin-bottom: 20px;
    }
`;
