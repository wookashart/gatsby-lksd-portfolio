import React from 'react';
import styled from 'styled-components';
import { MaxWidthBox } from '../global/MaxWidthBox';
import Header from '../global/H2Underline';
import MySkills from './skills/SkillsContent';

export default () => (
    <Skills data-section="nav4">
        <MaxWidthBox>
            <Header id="skillsTitle" />
            <MySkills skills={[
                { title: '', description: '' },
                { title: '', description: '' }
            ]} />
        </MaxWidthBox>
    </Skills>
);

const Skills = styled.section`
    padding-top: 50px;
`;
