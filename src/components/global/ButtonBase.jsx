import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import media from '../../styles/media';

export default ({ id, type }) => (
    <Button type={type}>
        <FormattedMessage id={id} />
    </Button>
);

const Button = styled.button`
    margin: 20px 0;
    color: var(--white);
    background-color: var(--orange);
    border: none;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;

    span {
        font-size: 1.4rem;

        ${media.tablet} {
            font-size: 1.6rem;
        }
    }

    &:focus {
        outline: none;
    }

    &:hover {
        /* TODO */
    }
`;
