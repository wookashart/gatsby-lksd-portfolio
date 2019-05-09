import React from 'react';
import styled from 'styled-components';
import media from '../../../styles/media';
import { FormattedMessage } from 'react-intl';

export default ({ skills }) => (
    <SkillsContent>
        {skills.map((skill, index) =>
            <li key={index}>
                <h4><FormattedMessage id={skill.title} /></h4>
                <p><FormattedMessage id={skill.description} /></p>
            </li>
        )}
    </SkillsContent>
);

const SkillsContent = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    padding: 50px 0;

    ${media.tablet} {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
    }

    ${media.desktop} {
        grid-template-columns: 1fr 1fr 1fr;
    }

    li {
        h4 {
            color: var(--orange);
            margin: 0;
        }

        p {
            color: var(--white);
            margin: 0;
            
            span {
                font-size: 1.4rem;
            }
        }
    }
`;
