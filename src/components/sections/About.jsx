import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { MaxWidthBox } from '../global/MaxWidthBox';
import { Hr } from '../global/Hr';
import Header from '../global/H2Underline';
import Information from './about/AboutInformations';
import media from '../../styles/media';

import image from '../../images/about-me-image.jpg';

export default () => (
    <AboutMe data-section="nav2">
        <MaxWidthBox>
            <AboutMeContent>
                <div>
                    <Header id="aboutTitle" />
                    <p>
                        <FormattedMessage id="aboutDescription" />
                    </p>
                    <Information arr={[
                        { title: 'aboutInfoTitle1', subtitle: 'aboutInfoSubtitle1' },
                        { title: 'aboutInfoTitle2', subtitle: 'aboutInfoSubtitle2' },
                        { title: 'aboutInfoTitle3', subtitle: 'aboutInfoSubtitle3' },
                        { title: 'aboutInfoTitle4', subtitle: 'aboutInfoSubtitle4' },
                        { title: 'aboutInfoTitle5', subtitle: 'aboutInfoSubtitle5', url: 'https://lksd.pl' }
                    ]} />
                </div>
                <div className="about-me__image">
                    <img src={image} alt="About me image" />
                </div>
            </AboutMeContent>
            <Hr />
        </MaxWidthBox>
    </AboutMe>
);

const AboutMe = styled.section`
    margin-top: 20px;

    ${media.desktop} {
        margin-top: 50px;
    }
`;

const AboutMeContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 30px;

    ${media.desktop} {
        grid-template-columns: 1fr 1fr;
    }

    .about-me__image {
        display: none;
        justify-content: center;
        align-items: center;

        ${media.desktop} {
            display: flex;
            padding-top: 35px;
        }

        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
`;
