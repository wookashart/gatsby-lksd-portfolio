import React from 'react';
import styled from 'styled-components';
import { MaxWidthBox } from '../global/MaxWidthBox';
import Header from '../global/H2Underline';
import ExperienceLine from './experience/ExperienceLine';
import media from '../../styles/media';

export default () => (
    <Experience data-section="nav3">
        <MaxWidthBox>
            <Header id="experienceTitle" />
            <ExperienceLine xp={[
                [{
                    title: 'experienceWork1',
                    position: 'experienceWork1position',
                    date: 'experienceWork1date',
                    description: 'experienceWork1description'
                },
                {
                    title: 'experienceWork2',
                    position: 'experienceWork2position',
                    date: 'experienceWork2date',
                    description: 'experienceWork2description'
                }],
                [{
                    title: 'experienceWork3',
                    position: 'experienceWork3position',
                    date: 'experienceWork3date',
                    description: 'experienceWork3description'
                }]
            ]} />
        </MaxWidthBox>
    </Experience>
);

const Experience = styled.section`
    padding-bottom: 20px;

    ${media.desktop} {
        padding-bottom: 50px;
    }
`;
