import React from 'react';
import styled from 'styled-components';
import Detail from './WorkDetail';
import media from '../../../styles/media';

export default ({ list }) => (
    <List>
        {list.map((work, index) =>
            <Detail
                key={index}
                title={work.title}
                description={work.description}
                img={work.img}
                url={work.url}
                customColor={work.customColor}
            />
        )}
    </List>
);

const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin-top: 50px;

    ${media.tablet} {
        grid-template-columns: 1fr 1fr;
    }

    ${media.desktop} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;
