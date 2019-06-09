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
                {el.type === 'mail' ? <Mail /> : <Phone />}
                <div>
                    <FormattedMessage id={el.title} />
                    <a href={el.type === 'mail' ? `mailto:${el.contact}` : `tel:${el.contact}`} rel="nofollow">
                        <FormattedMessage id={el.text} />
                    </a>
                </div>
            </li>    
        )}
    </Info>
);

const Info = styled.ul`
    display: flex;
    flex-flow: column;
    flex: 1;

    ${media.tablet} {
        padding-left: 35px;
    }

    svg {
        width: 50px;
    }

    li {
        display: flex;
        align-items: center;
        margin: 5px;
        width: 100%;

        ${media.tablet} {
            margin: 15px;
        }

        > div span {
            display: block;
            margin-left: 20px;
            margin-bottom: 5px;
            font-size: 1.6rem;
        }

        a {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            transition: 150ms color linear;
            
            span {
                margin-left: 20px;
                font-size: 1.4rem;
            }

            &:hover {
                color: var(--primary)
            }
        }
    }
`;
