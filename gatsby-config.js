const languages = require('./src/data/languages');

module.exports = {
    siteMetadata: {
        title: 'LKSD',
        languages
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-i18n',
            options: {
                langKeyForNull: 'any',
                langKeyDefault: languages.defaultLangKey,
                useLangKeyLayout: true,
                prefixDefault: false
            }
        },
        {
            resolve: 'gatsby-plugin-htaccess',
            options: {
                https: true,
                www: false
            }
        }
    ],
    pathPrefix: '/gatsby-lksd-portfolio'
};
