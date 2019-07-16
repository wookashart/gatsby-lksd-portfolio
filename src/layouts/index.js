import React from 'react';
import { StaticQuery, graphql, navigate } from 'gatsby';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import inBrowserLanguage from 'in-browser-language';
import Cookie from 'js-cookie';
import GlobalLayout from '../components/global/Global';
import LanguageSelector from '../components/snippet/LanguageSelector';
import CookieBanner from '../components/snippet/CookieBanner';

export default ({ children, location, i18nMessages }) => (
    <StaticQuery
        query={graphql`
            query LayoutQuery {
                site {
                    siteMetadata {
                        languages {
                            defaultLangKey
                            langs
                        }
                    }
                }
            }
        `}
        render={data => {
            const url = location.pathname;
            const { langs, defaultLangKey } = data.site.siteMetadata.languages;
            const langKey = getCurrentLangKey(langs, defaultLangKey, url);
            const homeLink = `/${langKey}`.replace(`/${defaultLangKey}`, '/');
            const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map(item => ({
                ...item,
                link: item.link.replace(`/${defaultLangKey}/`, '/').replace('//', '/')
            }));

            if (typeof window !== 'undefined') {
                const browserLang = inBrowserLanguage.pick(langs, defaultLangKey);
                const cookieLang = Cookie.get('lksd-lang');
                const userLanguage = cookieLang || browserLang;

                if (userLanguage !== langKey) {
                    navigate(langsMenu.find(url => url.langKey === userLanguage).link);
                }
            }

            return (
                <IntlProvider
                    locale={langKey}
                    messages={i18nMessages}>
                    <GlobalLayout lang={langKey}>
                        <LanguageSelector langs={langsMenu} />
                        {children}
                        <CookieBanner />
                    </GlobalLayout>
                </IntlProvider>
            );
        }}
    />
);
