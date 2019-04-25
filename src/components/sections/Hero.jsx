import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import background from '../../images/alejandro-escamilla-1-unsplash.jpg';

export default () => (
    <Hero data-section="nav1">
        <HeroBackground />
        <HeroContent>
            <h1>
                <FormattedMessage id="heroTitle" />
            </h1>
            <h3>
                <FormattedMessage id="heroSubtitle" />
            </h3>
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
`;
