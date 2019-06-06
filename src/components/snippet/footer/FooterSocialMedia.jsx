import React from 'react';
import styled from 'styled-components';

// icons
import { Linkedin } from 'styled-icons/feather/Linkedin';
import { Facebook } from 'styled-icons/feather/Facebook';
import { Github } from 'styled-icons/feather/Github';

export default () => (
    <SocialMediaList>
        <li><a href="https://www.linkedin.com/in/%C5%82ukasz-krawczyk-247379111/" target="_blank"><Linkedin /></a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100001301830530" target="_blank"><Facebook /></a></li>
        <li><a href="https://github.com/wookashart" target="_blank"><Github /></a></li>
    </SocialMediaList>
);

const SocialMediaList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;

    li {
        margin: 10px;
        display: flex;

        &::after {
            content: '';
            display: block;
            height: 40px;
            width: 1px;
            background-color: var(--gray);
            margin-left: 20px;
        }

        &:last-of-type {
            &::after {
                content: none;
            }
        }

        svg {
            width: 40px;
            transition: 150ms color linear;
        }

        &:hover {
            svg {
                color: var(--orange);
            }
        }
    }
`;
