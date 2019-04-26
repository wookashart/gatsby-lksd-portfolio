import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import '../../styles/variables.css';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Raleway:400,400i,600,700,900&subset=latin-ext');

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
        font-size: 5rem;
    }

    h3,
    h3 span {
        font-weight: 600;
        font-size: 2.8rem;
    }

    p {
        font-weight: 400;
        font-size: 1.8rem;
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

export default ({ children }) => (
    <Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>LKSD</title>
            {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1546712715865" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1546712715865" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1546712715865" />
            <link rel="manifest" href="/site.webmanifest?v=1546712715865" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg?v=1546712715865" color="#242742" />
            <link rel="shortcut icon" href="/favicon.ico?v=1546712715865" />
            <meta name="msapplication-TileColor" content="#242742" />
            <meta name="msapplication-TileImage" content="/mstile-144x144.png?v=1546712715865" />
            <meta name="msapplication-config" content="/browserconfig.xml?v=1546712715865" />
            <meta name="theme-color" content="#242742" /> */}
        </Helmet>
        <GlobalStyle />
        {children}
    </Fragment>
);
