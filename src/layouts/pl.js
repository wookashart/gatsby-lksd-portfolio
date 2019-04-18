import React from 'react';
import Layout from './index';
import { addLocaleData } from 'react-intl';
import messages from '../data/messages/pl';
import pl from 'react-intl/locale-data/pl';

addLocaleData(pl);

export default props => (
    <Layout
        {...props}
        i18nMessages={messages}
    />
);
