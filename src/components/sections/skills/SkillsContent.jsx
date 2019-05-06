import React from 'react';
import styled from 'styled-components';
import media from '../../../styles/media';
// import { FormattedMessage } from 'react-intl';

export default ({ skills }) => (
    <SkillsContent>
        {skills.map((skill, index) =>
            <li key={index}>
                
            </li>
        )}
    </SkillsContent>
);

const SkillsContent = styled.ul`
    display: grid;
    grid-template-columns: 1fr;

    ${media.tablet} {
        grid-template-columns: 1fr 1fr;
    }

    ${media.desktop} {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;
