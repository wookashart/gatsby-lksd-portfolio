import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Cookie from 'js-cookie';
import { FormattedMessage } from 'react-intl';

const Selector = styled.div`
    ul {
        display: flex;
        justify-content: flex-start;
        list-style: none;
        padding: 0;
        margin: 0;
    }
`;

const LangLink = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    color: black;

    &[aria-current="page"] {
        color: red;
    }
`;

class LanguageLink extends Component {
    onClickCapture = () => {
        this.props.onClickCapture(this.props.lang.langKey);
    }

    render() {
        const { lang } = this.props;

        return (
            <li selected={lang.selected} key={lang.langKey}>
                <LangLink to={lang.link} onClickCapture={this.onClickCapture}>
                    <FormattedMessage id={lang.langKey} />
                </LangLink>
            </li>
        );
    }
}

export default class LanguageSelector extends Component {
    selectLanguage = langKey => {
        Cookie.set('plp-lang', langKey, { expires: 365 });
    }

    render() {
        return (
            <Selector>
                <ul>
                    {this.props.langs.map(lang => (
                        <LanguageLink lang={lang} key={lang.langKey} onClickCapture={this.selectLanguage} />
                    ))}
                </ul>
            </Selector>
        );
    }
}
