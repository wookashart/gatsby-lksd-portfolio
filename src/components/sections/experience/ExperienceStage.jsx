import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Dot } from './ExperienceDot';
import Cloud from './ExperienceCloud';

export default ({ data }) => (
    <div>
        <Stage>
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
    </div>
);

const Stage = styled.div`
    position: relative;
    width: 100%;
    height: 340px;
    margin: auto;
`;

const Line = styled.div`
    height: 240px;
    width: 2px;
    margin: 10px auto;
    background-color: var(--purple);
`;
