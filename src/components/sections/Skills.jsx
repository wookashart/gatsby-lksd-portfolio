import React from 'react';
import styled from 'styled-components';
import { MaxWidthBox } from '../global/MaxWidthBox';
import Header from '../global/H2Underline';
import MySkills from './skills/SkillsContent';

import background from '../../images/skills-background.jpg';

export default () => (
    <Skills data-section="nav4">
        <MaxWidthBox>
            <Header id="skillsTitle" color="white" />
            <MySkills skills={[
                { title: 'skill1Title', description: 'skill1Description' },
                { title: 'skill2Title', description: 'skill2Description' },
                { title: 'skill3Title', description: 'skill3Description' },
                { title: 'skill4Title', description: 'skill4Description' },
                { title: 'skill5Title', description: 'skill5Description' },
                { title: 'skill6Title', description: 'skill6Description' },
                { title: 'skill7Title', description: 'skill7Description' },
                { title: 'skill8Title', description: 'skill8Description' },
                { title: 'skill9Title', description: 'skill9Description' }
            ]} />
        </MaxWidthBox>
    </Skills>
);

const Skills = styled.section`
    padding: 50px 0;
    margin: 50px 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${background});
`;
