import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

export default ({ id }) => (
    <Header>
        <FormattedMessage id={id} />
    </Header>
);

const Header = styled.h2`
    h2 {
        margin-bottom: 10px;
    }

    &::after {
        content: '';
        height: 2px;
        width: 80px;
        display: block;
        background-color: var(--orange);
        margin-bottom: 20px;
    }
`;
