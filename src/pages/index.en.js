import React from 'react';
import Home from '../components/Home';
import Layout from '../layouts/en';

export default props => (
    <Layout location={props.location}>
        <Home />
    </Layout>
);
