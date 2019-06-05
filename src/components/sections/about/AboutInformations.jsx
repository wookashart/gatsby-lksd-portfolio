import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import media from '../../../styles/media';

export default ({ arr }) => (
    <Info>
        <ul>
            {arr.map((el, index) =>
                <li key={index}>
                    <span className="about-me__information--title">
                        <FormattedMessage id={el.title} />
                    </span>
                    {el.url && el.url !== '' ? (
                        <a href={el.url} rel="nofollow">
                            <span className="about-me__information--subtitle">
                                <FormattedMessage id={el.subtitle} />
                            </span>
                        </a>
                    ) : (
                        <span className="about-me__information--subtitle">
                            <FormattedMessage id={el.subtitle} />
                        </span>
                    )}
                </li>    
            )}
        </ul>
    </Info>    
);

const Info = styled.div`
    li {
        display: flex;
        flex-flow: column;
        margin: 10px 0;

        ${media.tablet} {
            flex-flow: row;
        }
    }

    span { 
        font-size: 1.6rem;

        ${media.tablet} {
            font-size: 1.8rem;
        }
    }

    .about-me__information {
        &--title {
            display: inline-block;
            width: 300px;

            span {
                font-weight: 600;
            }
        }

        &--subtitle {
            flex: 1;

            span {
                font-weight: 400;
            }
        }
    }
`;
