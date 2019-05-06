import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Dot } from './ExperienceDot';
import Cloud from './ExperienceCloud';
import media from '../../../styles/media';

export default ({ data }) => (
    <Stage fullHeight={data.length > 1}>
        <Fragment>
            <Dot />
            <Cloud xp={data[0]} side="top" />
        </Fragment>
        {data.length > 1 ? (
            <Fragment>
                <Line />
                <Dot />
                <Cloud xp={data[1]} side="bottom" />
            </Fragment>
        ) : false}
    </Stage>
);

const Stage = styled.div`
    position: relative;
    width: 100%;
    margin: auto;
    margin-top: 0;

    ${media.desktop} {
        margin-top: 100px;
        height: ${props => props.fullHeight ? '340px' : '200px'};

        &::before {
            content: '';
            position: absolute;
            top: -90px;
            left: 0;
            right: 0;
            width: 2px;
            height: 80px;
            margin: auto;
            background-color: var(--purple);
        }

        &:nth-of-type(1) {
            margin-top: 0;

            &::before {
                content: none;
            }
        }
    }
`;

const Line = styled.div`
    display: none;
    height: 240px;
    width: 2px;
    margin: 10px auto;
    background-color: var(--purple);

    ${media.desktop} {
        display: block;
    }
`;
