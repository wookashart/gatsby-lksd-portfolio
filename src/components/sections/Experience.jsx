import React from 'react';
import styled from 'styled-components';
import { MaxWidthBox } from '../global/MaxWidthBox';
import { Hr } from '../global/Hr';
import Header from '../global/H2Underline';
import ExperienceLine from './experience/ExperienceLine';

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
                }]
            ]} />
            <Hr />
        </MaxWidthBox>
    </Experience>
);

const Experience = styled.section``;
