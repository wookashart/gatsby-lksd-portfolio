import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import triangle from '../../../images/claud-triangle.svg';
import media from '../../../styles/media';

const CloudComponent =  ({ xp, side }) => {
    const [ref, inView] = useInView({
        rootMargin: '-100px',
        triggerOnce: true
    });

    return (
        <Cloud side={side} ref={ref} className={inView ? 'is-visible' : ''}>
            <CloudHeader>
                <h4>
                    <FormattedMessage id={xp.title} />
                </h4>
                <p>
                    <FormattedMessage id={xp.position} />
                </p>
            </CloudHeader>
            <CloudeText color="primary">
                <FormattedMessage id={xp.date} />
            </CloudeText>
            <CloudeText color="white">
                <FormattedMessage id={xp.description} />
            </CloudeText>
        </Cloud>
    );
};

const Cloud = styled.div`
    background-color: var(--purple);
    margin-top: 20px;
    width: 100%;
    min-height: 150px;
    height: auto;
    border-radius: 15px;
    padding: 15px 20px;
    box-shadow: ${props => props.side === 'top' ? 'var(--shadow-base)' : 'var(--shadow-left)'};

    ${media.desktop} {
        width: calc(50% - 140px);
        margin-top: 0;
        position: absolute;
        top: ${props => props.side === 'top' ? '0' : 'auto'};
        bottom: ${props => props.side === 'bottom' ? '0' : 'auto'};
        left: ${props => props.side === 'top' ? '60%' : 'auto'};
        right: ${props => props.side === 'top' ? 'auto' : '60%'};
        transform-origin: ${props => props.side === 'top' ? '-15%' : '115%'};
        transform: scaleX(0);
        opacity: 0;
        transition: 300ms all var(--timing-elastic);

        &::before {
            content: '';
            position: absolute;
            width: 60px;
            height: 60px;
            top: ${props => props.side === 'top' ? '15px' : 'auto'};
            bottom: ${props => props.side === 'bottom' ? '15px' : 'auto'};
            left: ${props => props.side === 'top' ? '-60px' : 'auto'};
            right: ${props => props.side === 'top' ? 'auto' : '-60px'};
            transform: ${props => props.side === 'top' ? 'rotate(0deg)' : 'rotate(180deg)'};
            background-image: url(${triangle});
        }
    }

    &.is-visible {
        transform: scaleX(1);
        opacity: 1;
    }
`;

const CloudHeader = styled.div`
    display: flex;
    flex-flow: column;
    margin-bottom: 10px;

    h4,
    p {
        margin: 0;

        span {
            color: var(--white);
        }
    }

    h4 span {
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 700;
    }

    p span {
        font-size: 1.6rem;
    }
`;

const CloudeText = styled.p`
    margin: 5px 0;

    span {
        color: ${props => `var(--${props.color})`};
        font-size: 1.6rem;
    }
`;

export default CloudComponent;
