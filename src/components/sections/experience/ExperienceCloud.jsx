import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

export default ({ xp, side }) => (
    <Cloud side={side}>
        <CloudHeader>
            <h4>
                <FormattedMessage id={xp.title} />
            </h4>
            <p>
                <FormattedMessage id={xp.position} />
            </p>
        </CloudHeader>
        <CloudeText color="orange">
            <FormattedMessage id={xp.date} />
        </CloudeText>
        <CloudeText color="white">
            <FormattedMessage id={xp.description} />
        </CloudeText>
    </Cloud>
);

const Cloud = styled.div`
    background-color: var(--purple);
    width: 400px;
    min-height: 150px;
    height: auto;
    border-radius: 15px;
    padding: 15px 20px;
    position: absolute;
    top: ${props => props.side === 'top' ? '0' : 'auto'};
    bottom: ${props => props.side === 'bottom' ? '0' : 'auto'};
    left: ${props => props.side === 'top' ? '60%' : 'auto'};
    right: ${props => props.side === 'top' ? 'auto' : '60%'};

    
`;

const CloudHeader = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;

    h4,
    p {
        margin: 5px 0;

        span {
            color: var(--white);
        }
    }
`;

const CloudeText = styled.p`
    margin: 5px 0;

    span {
        color: ${props => `var(--${props.color})`};
        font-size: 1.6rem;
    }
`;
