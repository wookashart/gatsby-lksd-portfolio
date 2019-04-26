import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import ButtonBase from '../global/ButtonBase';

import background from '../../images/alejandro-escamilla-1-unsplash.jpg';

export default () => (
    <Hero data-section="nav1">
        <HeroBackground />
        <HeroContent>
            <h1>
                <FormattedMessage id="heroTitle" />
            </h1>
            <p>
                <FormattedMessage id="heroSubtitle" />
            </p>
            <ButtonBase id="heroButton" />
        </HeroContent>
    </Hero>
);

const Hero = styled.section`
    position: relative;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: grayscale(1) blur(2px);
`;

const HeroContent = styled.div`
    text-align: center;
    position: relative;
    z-index: 1;

    h1 {
        &::before,
        &::after {
            content: '';
            display: block;
            height: 2px;
            width: 100%;
            background-color: var(--orange);
            margin: 10px auto;
        }
    }

    h1,
    p {
        margin: 0;
        color: var(--white);
    }

    p {
        margin-bottom: 15px;
    }
`;
