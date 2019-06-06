import React, { Component } from 'react';
import styled from 'styled-components';
import Cookie from 'js-cookie';
import { MaxWidthBox } from '../global/MaxWidthBox';
import { FormattedMessage } from 'react-intl';
import ButtonBase from '../../components/global/ButtonBase';
import media from '../../styles/media';

const CookieBanner = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    background-color: var(--purple);
    box-shadow: var(--shadow-base);
    z-index: 100;
    padding-bottom: 10px;
    padding-top: 10px;
    transform: translateX(110%);
    opacity: 0;
    transition: 300ms all var(--timing-elastic);

    ${media.desktop} {
        bottom: 30px;
        right: 30px;
        width: 50%;
    }

    &.not-accepted {
        transform: translateX(0);
        opacity: 1;
    }

    span {
        color: white;
        font-size: 1.2rem;
    }
`;

const AcceptButton = styled.div`
    text-align: right;
`;

class CookieBannerComponent extends Component {
    state = {
        accepted: true
    }

    componentDidMount() {
        setTimeout(this.checkIfAccepted, 300);
    }

    checkIfAccepted = () => {
        const accepted = Cookie.get('lksd-cookies') ? Cookie.get('lksd-cookies') : false;
        this.setState({ accepted });
    }

    acceptCookie = () => {
        Cookie.set('lksd-cookies', true, { expires: 365 });
        this.setState({ accepted: true });
    }

    render() {
        return (
            <CookieBanner className={!this.state.accepted ? 'not-accepted' : ''}>
                <MaxWidthBox>
                    <p>
                        <FormattedMessage id="cookieBannerText" />
                    </p>
                    <AcceptButton>
                        <ButtonBase id="cookieBannerButton" action={this.acceptCookie} />
                    </AcceptButton>
                </MaxWidthBox>
            </CookieBanner>
        );
    }
}

export default CookieBannerComponent;
