import React from 'react';
import styled from 'styled-components';
import media from '../../../styles/media';
import { FormattedMessage } from 'react-intl';

// icons
import { Phone } from 'styled-icons/feather/Phone';
import { Mail } from 'styled-icons/feather/Mail';

export default ({ info }) => (
    <Info>
        {info.map((el, index) =>
            <li key={index}>
                <a href={el.type === 'mail' ? `mailto:${el.contact}` : `tel:${el.contact}`} rel="nofollow">
                    {el.type === 'mail' ? <Mail /> : <Phone />}
                    <FormattedMessage id={el.text} />
                </a>
            </li>    
        )}
    </Info>
);

const Info = styled.ul`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    ${media.tablet} {
        flex-flow: row wrap;
    }

    ${media.desktop} {
        flex-flow: row nowrap;
    }

    li {
        margin: 5px;
        display: flex;

        ${media.tablet} {
            margin: 15px;

            &::after {
                content: '';
                display: block;
                width: 2px;
                height: 50px;
                background-color: var(--gray);
                margin-left: 30px;
            }

            &:last-of-type {
                &::after {
                    display: none;
                }
            }
        }

        a {
            display: flex;
            align-items: center;
            transition: 150ms color linear;
            
            span {
                margin-left: 20px;
                font-size: 1.6rem;
            }

            svg {
                width: 30px;
            }

            &:hover {
                color: var(--orange)
            }
        }
    }
`;
