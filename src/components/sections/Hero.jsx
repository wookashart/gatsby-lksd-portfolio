import React from 'react';
import styled from 'styled-components';
import scrollToElement from 'scroll-to-element';
import { FormattedMessage } from 'react-intl';
import ButtonBase from '../global/ButtonBase';

import background from '../../images/hero-background.jpg';

class HeroComponent extends React.Component {
    scroll = () => {
        scrollToElement(`[data-section="nav2"]`, {
            offset: 0,
            ease: 'out-expo',
            duration: 1000
        });
    }

    render() {
        return (
            <Hero data-section="nav1">
                <HeroContent>
                    <h1>
                        <FormattedMessage id="heroTitle" />
                    </h1>
                    <p>
                        <FormattedMessage id="heroSubtitle" />
                    </p>
                    <ButtonBase id="heroButton" action={this.scroll} />
                </HeroContent>
            </Hero>
        );
    }
}

export default HeroComponent;

const Hero = styled.section`
    position: relative;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
            background-color: var(--primary);
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
