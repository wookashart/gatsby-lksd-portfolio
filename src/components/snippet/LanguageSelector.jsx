import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Cookie from 'js-cookie';
import { FormattedMessage } from 'react-intl';

const Selector = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 10;

    ul {
        display: flex;
        justify-content: flex-start;
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            position: relative;

            &:nth-of-type(1) {
                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 1px;
                    height: 100%;
                    background-color: var(--white);
                    opacity: 0.8;
                }
            }
        }
    }
`;

const LangLink = styled(Link)`
    text-decoration: none;
    color: var(--white);
    opacity: 0.8;

    span {
        font-size: 1.5rem;
        text-transform: uppercase;
        padding: 10px;
    }

    &[aria-current="page"] {
        color: var(--primary);
        opacity: 1;
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
        Cookie.set('lksd-lang', langKey, { expires: 365 });
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
