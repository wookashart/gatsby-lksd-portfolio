import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

export default ({ id }) => (
    <Button>
        <FormattedMessage id={id} />
    </Button>
);

const Button = styled.button`
    margin: 20px 0;
    color: var(--white);
    background-color: var(--orange);
    border: none;
    font-size: 1.6rem;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover {
        /* TODO */
    }
`;
