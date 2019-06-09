import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import media from '../../styles/media';

export default ({ id, target, url }) => (
    <Button href={url} target={target}>
        <FormattedMessage id={id} />
    </Button>
);

const Button = styled.a`
    position: relative;
    margin: 20px 0;
    color: var(--white);
    background-color: var(--primary);
    border: none;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    transition: 300ms transform var(--timing-elastic);

    span {
        position: relative;
        z-index: 1;
        font-size: 1.4rem;
        letter-spacing: 1px;

        ${media.tablet} {
            font-size: 1.6rem;
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--black);
        opacity: 0;
        transition: 300ms opacity ease;
    }

    &:focus {
        outline: none;
    }

    &:hover {
        transform: scale(1.1);

        &::before {
            opacity: 0.2;
        }
    }
`;
