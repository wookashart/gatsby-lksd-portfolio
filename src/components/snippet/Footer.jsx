import React from 'react';
import styled from 'styled-components';
import FooterSocialMedia from './footer/FooterSocialMedia';
import { FormattedMessage } from 'react-intl';

class FooterComponent extends React.Component {
    getYear = () => {
        const date = new Date;
        const year = date.getFullYear();

        return year;
    }
    
    render() {
        return (
            <Footer>
                <FooterSocialMedia />
                <div>
                    <span>@{this.getYear()}</span>
                    <FormattedMessage id="footerDisclaimer" />
                </div>
            </Footer>
        );
    }
}

export default FooterComponent;

const Footer = styled.footer`
    margin-top: 50px;

    &::before {
        content: '';
        display: block;
        margin-bottom: 20px;
        height: 1px;
        width: 100%;
        background-color: var(--gray);
    }

    div {
        margin: 20px;
        text-align: center;
    }

    span {
        font-size: 1.4rem;
        padding: 0 5px;
    }
`;
