import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Link from '../../global/ButtonBaseLink';

export default ({ title, description, img, url, customColor }) => (
    <Detail backgroundImage={img} customColor={customColor}>
        <div className="work__detail__img" />
        <div className="work__detail__text">
            <h4><FormattedMessage id={title} /></h4>
            <p><FormattedMessage id ={description} /></p>
            <Link url={url} target="_blank" id="visitPage" />
        </div>
    </Detail>
);

const Detail = styled.li`
    border: 2px solid ${props => props.customColor ? props.customColor : 'var(--purple)'};
    background-color: ${props => props.customColor ? props.customColor : 'var(--purple)'};
    box-shadow: var(--shadow-base);
    position: relative;
    padding-bottom: 70px;

    .work__detail {
        &__img {
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url(${props => props.backgroundImage});
            background-repeat: no-repeat;
            background-position: top;
            background-size: cover;
        }

        &__text {
            padding: 15px;

            h4 span,
            p span {
                color: var(--white);
            }

            h4 {
                margin: 0;
            }

            p span {
                font-size: 1.4rem;
            }

            a {
                position: absolute;
                bottom: 5px;
                left: 15px;
            }
        }
    }
`;
