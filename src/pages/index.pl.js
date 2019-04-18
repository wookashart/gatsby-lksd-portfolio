import React from 'react';
import Home from '../components/Home';
import Layout from '../layouts/pl';

export default props => (
    <Layout location={props.location}>
        <Home />
    </Layout>
);
