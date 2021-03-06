import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import '../../styles/variables.css';
import media from '../../styles/media';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Raleway';
        font-display: auto;
        src: url('https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700,900&subset=latin-ext');
    }

    html, body {
        margin: 0;
        padding: 0;
        font-size: 10px;
    }

    * {
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }

    h1,
    h1 span {
        font-weight: 700;
        font-size: 3rem;

        ${media.tablet} {
            font-size: 3.8rem;
        }
        ${media.desktop} {
            font-size: 5rem;
        }
    }

    h2,
    h2, span {
        font-weight: 700;
        font-size: 2.4rem;
        letter-spacing: 1.5px;

        ${media.tablet} {
            font-size: 3rem;
        }
        ${media.desktop} {
            font-size: 3.4rem;
        }
    }

    h3,
    h3 span {
        font-weight: 600;
        font-size: 2rem;

        ${media.tablet} {
            font-size: 2.2rem;
        }
        ${media.desktop} {
            font-size: 2.8rem;
        }
    }

    h4,
    h4 span {
        font-weight: 600;
        font-size: 1.8rem;

        ${media.tablet} {
            font-size: 2rem;
        }
        ${media.desktop} {
            font-size: 2.2rem;
        }
    }

    h5,
    h5 span {
        font-weight: 600;
        font-size: 1.6rem;
        margin: 5px 0;

        ${media.tablet} {
            font-size: 1.8rem;
        }
        ${media.desktop} {
            font-size: 2rem;
        }
    }

    p,
    p span {
        font-weight: 400;
        font-size: 1.4rem;

        ${media.tablet} {
            font-size: 1.6rem;
        }
    }

    a {
        text-decoration: none;
        color: var(--black);
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    #___gatsby {
        > div {
            overflow: hidden;
        }
    }
`;

export default ({ children, lang }) => (
    <Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Łukasz Krawczyk Portfolio</title>
            <meta name="description" content="Łukasz Krawczyk Portfolio" />
            
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1546712715865" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1546712715865" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1546712715865" />
            <link rel="manifest" href="/site.webmanifest?v=1546712715865" />
            <link rel="shortcut icon" href="/favicon.ico?v=1546712715865" />
            <meta name="msapplication-TileColor" content="#353543" />
            <meta name="msapplication-TileImage" content="/mstile-144x144.png?v=1546712715865" />
            <meta name="msapplication-config" content="/browserconfig.xml?v=1546712715865" />
            <meta name="theme-color" content="#353543" />

            <html lang={lang} />
        </Helmet>
        <GlobalStyle />
        {children}
    </Fragment>
);
